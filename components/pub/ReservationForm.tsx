"use client";

import { useState } from "react";
import { createTableReservation } from "@/lib/supabase/actions";
import { toast } from "sonner";
import {
  Users,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

interface ReservationFormProps {
  onClose?: () => void;
}

export default function ReservationForm({
  onClose,
}: ReservationFormProps = {}) {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState("18:00");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any | null>(null);

  const availableSlots = [
    "12:00",
    "13:00",
    "14:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName || !guestEmail || !guestPhone) {
      toast.error("Please complete all contact credentials.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createTableReservation({
        partySize,
        date,
        timeSlot,
        guestName,
        guestEmail,
        guestPhone,
        specialRequests,
      });

      if (result.success) {
        setConfirmedBooking({
          reservationId: result.reservationId,
          partySize,
          date,
          timeSlot,
          guestName,
          guestEmail,
          guestPhone,
        });
        toast.success(result.message || "Table confirmed!");
      } else {
        toast.error(result.message || "Reservation failed.");
      }
    } catch (err: any) {
      toast.error(err?.message || "Error creating reservation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (confirmedBooking) {
    return (
      <div className="bg-surface-container-lowest p-space-lg sm:p-space-xl hairline-border animate-in fade-in duration-300">
        <div className="flex items-center gap-3 mb-space-md text-green-700">
          <CheckCircle2 className="w-8 h-8" />
          <div>
            <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block">
              [Status: Confirmed]
            </span>
            <h3 className="font-headline-lg text-2xl text-primary font-semibold">
              Reservation Confirmed
            </h3>
          </div>
        </div>

        <div className="bg-surface-container-low p-space-md mb-space-lg hairline-border space-y-2">
          <div className="flex justify-between font-body-md">
            <span className="text-secondary font-meta-bracket">
              [Reference Code]
            </span>
            <span className="font-mono font-bold text-primary">
              {confirmedBooking.reservationId}
            </span>
          </div>
          <div className="flex justify-between font-body-md">
            <span className="text-secondary font-meta-bracket">
              [Guest Name]
            </span>
            <span className="font-medium text-primary">
              {confirmedBooking.guestName}
            </span>
          </div>
          <div className="flex justify-between font-body-md">
            <span className="text-secondary font-meta-bracket">
              [Party Size]
            </span>
            <span className="text-primary">
              {confirmedBooking.partySize} Guests
            </span>
          </div>
          <div className="flex justify-between font-body-md">
            <span className="text-secondary font-meta-bracket">
              [Date &amp; Time]
            </span>
            <span className="font-medium text-primary">
              {confirmedBooking.date} at {confirmedBooking.timeSlot}
            </span>
          </div>
          <div className="flex justify-between font-body-md">
            <span className="text-secondary font-meta-bracket">[Location]</span>
            <span className="text-primary">
              Riley&apos;s Pub &amp; Grill, Lusaka
            </span>
          </div>
        </div>

        <p className="font-body-sm text-secondary mb-space-md">
          A confirmation dispatch has been logged. Our host will hold your table
          for up to 15 minutes past your reserved time.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setConfirmedBooking(null)}
            className="bg-primary text-on-primary px-8 py-3 font-action-label text-action-label uppercase tracking-widest hover:bg-secondary transition-colors"
          >
            Book Another Table
          </button>
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="bg-surface-container-low text-primary px-8 py-3 font-action-label text-action-label uppercase tracking-widest hover:bg-surface-variant transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-surface-container-lowest p-space-md sm:p-space-lg hairline-border"
    >
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-secondary hover:text-primary font-meta-bracket text-xs uppercase p-1"
          aria-label="Close dialog"
        >
          [Close ✕]
        </button>
      )}
      <div className="mb-space-lg">
        <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-1">
          [Host Protocol • Table Requisition]
        </span>
        <h3 className="font-headline-lg text-2xl sm:text-3xl text-primary font-medium">
          Make a Reservation
        </h3>
        <p className="font-body-sm text-secondary mt-1">
          To help us allocate the optimal dining table or patio booth, please
          specify your party requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">
        {/* Party Size */}
        <div>
          <label className="flex items-center gap-1.5 font-action-label text-action-label uppercase tracking-wider text-primary mb-2">
            <Users className="w-4 h-4 text-secondary" />
            <span>Party Size</span>
          </label>
          <div className="flex flex-wrap gap-1">
            {[1, 2, 4, 6, 8, 10, 12].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setPartySize(num)}
                className={`w-10 h-10 font-action-label text-xs uppercase transition-colors ${
                  partySize === num
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-primary hover:bg-surface-container-high"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="flex items-center gap-1.5 font-action-label text-action-label uppercase tracking-wider text-primary mb-2">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Reservation Date</span>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
            required
          />
        </div>

        {/* Time Slot */}
        <div>
          <label className="flex items-center gap-1.5 font-action-label text-action-label uppercase tracking-wider text-primary mb-2">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Preferred Time</span>
          </label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
          >
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Guest Contact Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg pt-space-md hairline-t">
        <div>
          <label className="flex items-center gap-1.5 font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
            <User className="w-3.5 h-3.5 text-secondary" />
            <span>Full Name</span>
          </label>
          <input
            type="text"
            placeholder="e.g. David Okuku"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
            required
          />
        </div>

        <div>
          <label className="flex items-center gap-1.5 font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
            <Mail className="w-3.5 h-3.5 text-secondary" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            placeholder="guest@domain.com"
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
            className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
            required
          />
        </div>

        <div>
          <label className="flex items-center gap-1.5 font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
            <Phone className="w-3.5 h-3.5 text-secondary" />
            <span>Phone Number</span>
          </label>
          <input
            type="tel"
            placeholder="+260 571434300"
            value={guestPhone}
            onChange={(e) => setGuestPhone(e.target.value)}
            className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
            required
          />
        </div>
      </div>

      {/* Special Requests */}
      <div className="mb-space-lg">
        <label className="flex items-center gap-1.5 font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
          <MessageSquare className="w-3.5 h-3.5 text-secondary" />
          <span>Dietary Restrictions or Special Occasion Notes (Optional)</span>
        </label>
        <textarea
          rows={2}
          placeholder="e.g. Anniversary dinner, outdoor garden booth preference, high chair needed..."
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-on-primary py-4 font-action-label text-action-label uppercase tracking-widest hover:bg-secondary transition-colors disabled:opacity-50"
      >
        {isSubmitting
          ? "Confirming Availability..."
          : "Confirm Table Reservation"}
      </button>
    </form>
  );
}
