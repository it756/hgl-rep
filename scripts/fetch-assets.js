const fs = require("fs");
const path = require("path");

async function extract() {
  const res = await fetch("https://dvdokuku.wixsite.com/rileys");
  const text = await res.text();
  const mediaMatches = [
    ...text.matchAll(
      /https:\/\/static\.wixstatic\.com\/media\/([a-zA-Z0-9_~.]+)/g,
    ),
  ].map((m) => m[0]);
  console.log("Found media URLs:", [...new Set(mediaMatches)]);

  // Let's create public/images
  const dir = path.join(__dirname, "..", "public", "images");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Find the logo (3.png / 6e95c8...)
  const logoUrl =
    "https://static.wixstatic.com/media/6e95c8_ceef0a0981af4d109492c8261240df62~mv2.png/v1/fill/w_624,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3.png";
  const logoRes = await fetch(logoUrl);
  if (logoRes.ok) {
    fs.writeFileSync(
      path.join(dir, "rileys-3d-logo.png"),
      Buffer.from(await logoRes.arrayBuffer()),
    );
    console.log("Saved rileys-3d-logo.png");
  }

  // Let's find all background image candidates
  for (const url of new Set(mediaMatches)) {
    console.log("Candidate:", url);
  }
}

extract().catch(console.error);
