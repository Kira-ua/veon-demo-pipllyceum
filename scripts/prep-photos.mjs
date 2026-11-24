// One-off: prepares the three client photos chosen in design/concept.md (real photos from the client's site).
// Even grading (slightly calmer saturation), capped size; Astro then builds AVIF/WebP srcset from these.
import sharp from "sharp";
const src = "../content/photos-src/";
const jobs = [
  ["13_7b7a4537-TxRbk9rWwI.webp", "day-students.webp", 2400],
  ["13_7b7a4789-5siSS5I2vn.webp", "ib-student.webp", 1400],
  ["7_dsc03867--8sr4QneXhl.webp", "about-reading.webp", 1400],
];
for (const [from, to, w] of jobs) {
  const info = await sharp(src + from).resize({ width: w, withoutEnlargement: true }).modulate({ saturation: 0.88 }).webp({ quality: 84 }).toFile("src/assets/photos/" + to);
  console.log(to, info.width, info.height, Math.round(info.size / 1024) + "KB");
}
