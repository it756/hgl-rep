-- Supabase Schema for Riley's Pub & Grill and Curated Monograph Store
-- Run this in your Supabase SQL Editor

-- 1. Table: Reservations
create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  party_size int not null check (party_size > 0),
  reservation_date date not null,
  time_slot text not null,
  guest_name text not null,
  guest_email text not null,
  guest_phone text not null,
  special_requests text,
  status text not null default 'confirmed' check (status in ('pending', 'confirmed', 'seated', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for date queries
create index if not exists idx_reservations_date on public.reservations (reservation_date, time_slot);

-- 2. Table: Orders
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  order_type text not null check (order_type in ('dine-in', 'takeout', 'delivery', 'merch_shipping')),
  shipping_address jsonb,
  total_amount numeric(10,2) not null,
  currency text not null default 'EUR',
  status text not null default 'pending' check (status in ('pending', 'processing', 'completed', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Table: Order Items
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete cascade not null,
  product_id text not null,
  product_title text not null,
  size text,
  quantity int not null check (quantity > 0),
  unit_price numeric(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Table: Contact Inquiries
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.reservations enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.contact_inquiries enable row level security;

-- RLS Policies
-- Allow anyone to create reservations, orders, inquiries
create policy "Allow public insert to reservations" on public.reservations
  for insert with check (true);

create policy "Allow public select own reservations by id" on public.reservations
  for select using (true);

create policy "Allow public insert to orders" on public.orders
  for insert with check (true);

create policy "Allow public select orders" on public.orders
  for select using (true);

create policy "Allow public insert to order_items" on public.order_items
  for insert with check (true);

create policy "Allow public select order_items" on public.order_items
  for select using (true);

create policy "Allow public insert to contact_inquiries" on public.contact_inquiries
  for insert with check (true);
