const fs = require("fs");
const path = require("path");

async function downloadAll() {
  const dir = path.join(__dirname, "..", "public", "images");
  const urls = [
    "https://static.wixstatic.com/media/c837a6_6d6a4a6e78be4377a635e248c9574311~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_ab7a0e38c4a449b89fe5bd7ee599dc3b~mv2.jpg",
    "https://static.wixstatic.com/media/nsplsh_230648039e054270a2f9a6a210f770b9~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_981a87acb2ba436bb184c82777b33eba~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_b687f5c8efec49ad990b9d52e3b1b0bb~mv2.jpeg",
    "https://static.wixstatic.com/media/c837a6_429b4b8c37344b289ab4fd24cf8225a5~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_561a61567a424365b4d63ba95743086b~mv2.jpg",
  ];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const res = await fetch(url);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      const filename = `hero-candidate-${i + 1}.jpg`;
      fs.writeFileSync(path.join(dir, filename), buffer);
      console.log(`Saved ${filename} (${buffer.length} bytes) from ${url}`);
    }
  }
}

downloadAll().catch(console.error);
