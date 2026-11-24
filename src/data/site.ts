// Real client channels only (veon/client.json → company.contacts, socials with status "confirmed").
export const PHONE_DISPLAY = "+38 (067) 408 16 55";
export const PHONE_HREF = "tel:+380674081655";
export const EMAIL = "info@pipllyceum.com";
export const EMAIL_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent("Екскурсія / пробний день")}`;
export const ADDRESS = "м. Львів, вул. Наукова, 5а";
export const SOON = "Розділ у розробці";

export const NAV: { href: string; label: string }[] = [
  { href: "#programs", label: "Програми" },
  { href: "#day", label: "Повний день" },
  { href: "#price", label: "Вартість" },
  { href: "#admission", label: "Вступ" },
  { href: "#about", label: "Про ліцей" },
  { href: "#contacts", label: "Контакти" },
];

export const EDUCATION: string[] = [
  "Дитячий садок GlobalKids",
  "Нульовий клас",
  "Початкова школа",
  "Ліцей PIPL",
  "IB Programme",
  "Гуртки та курси",
  "Застосунок для батьків",
];

export const SOCIALS: { href: string; label: string }[] = [
  { href: "https://www.instagram.com/pipl.lyceum/", label: "Instagram PIPL Lyceum" },
  { href: "https://www.instagram.com/ib.lviv/", label: "Instagram IB Programme" },
  { href: "https://www.youtube.com/channel/UCks2uJ8BX0z3F8g4IsjLG_g", label: "YouTube" },
  { href: "https://t.me/+8JLD4lPg0stkZTBi", label: "Новини в Telegram" },
];

// Grade scale: answers per grade (facts: client.json C-006, C-013, products_services; veon/research/pages/vstup.txt, pro-pipl.txt).
export type Grade = { key: string; label: string; answer: string };
const primary = "Початкова школа PIPL, повний день 08:30–19:00. Вступ — індивідуальна зустріч із психологинею, без тестів.";
const lyceum = "Ліцей PIPL, українська програма: STEM, Business, Cybersecurity, Arts, Cambridge, підготовка до НМТ.";
export const GRADES: Grade[] = Array.from({ length: 12 }, (_, g) => {
  let answer: string;
  if (g === 0) answer = `Нульовий клас — ${primary}`;
  else if (g <= 3) answer = `${g} клас — ${primary}`;
  else if (g === 4) answer = `4 клас — Початкова школа PIPL, повний день 08:30–19:00. Вступ — тестування з української, англійської та математики і зустріч із психологинею.`;
  else if (g <= 9) answer = `${g} клас — ${lyceum}`;
  else answer = `${g} клас — два шляхи: ${lyceum.replace(/\.$/, "")}, або IB Diploma Programme англійською.`;
  return { key: String(g), label: String(g), answer };
});
export const IB_ANSWER = "IB Diploma Programme — 10–11 класи, навчання англійською, міжнародно визнаний диплом для вступу за кордон.";
export const DEFAULT_ANSWER = "Оберіть клас дитини: 0–4 — Початкова школа, 5–11 — Ліцей PIPL, у 10–11 класах — також IB Diploma Programme.";
