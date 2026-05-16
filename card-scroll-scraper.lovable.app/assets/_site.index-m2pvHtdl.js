import { j as e } from "./index-D2KIWI07.js";
import { a as n } from "./SiteLayout-BemxWIIb.js";
import { component as t } from "./_site.features-BH92teYD.js";
import { component as r } from "./_site.how-it-works-B2e4zoUg.js";
import { component as s } from "./_site.pricing--uJjNlo-.js";
import { component as o } from "./_site.faq-EC_Au_-A.js";
import { component as i } from "./_site.contact-NSdg--Q3.js";

function c() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("section", {
        id: "home",
        className: "relative overflow-hidden bg-gradient-hero",
        children: e.jsxs("div", {
          className: "relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center",
          children: [
            e.jsx("div", {
              className:
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-white/80 text-xs font-semibold text-foreground/80 shadow-soft",
              children: "🧭 Единый лендинг: все разделы на одной странице",
            }),
            e.jsxs("h1", {
              className: "mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight",
              children: [
                "Ya Maps Parser",
                e.jsx("br", {}),
                e.jsx("span", { className: "text-gradient-brand", children: "весь контент в одном месте" }),
              ],
            }),
            e.jsx("p", {
              className: "mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto",
              children:
                "Прокручивайте страницу: возможности, как работает, тарифы, FAQ и контакты теперь идут единым лендингом.",
            }),
            e.jsxs("div", {
              className: "mt-10 flex flex-wrap items-center justify-center gap-4",
              children: [
                e.jsx("a", {
                  href: n,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-brand text-white text-base font-semibold shadow-glow hover:scale-[1.03] transition",
                  children: "🚀 Попробовать бесплатно",
                }),
                e.jsx("a", {
                  href: "/#pricing",
                  className:
                    "inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white border border-border text-base font-semibold hover:bg-muted transition",
                  children: "💎 К тарифам",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx("section", { id: "features", children: e.jsx(t, {}) }),
      e.jsx("section", { id: "how-it-works", children: e.jsx(r, {}) }),
      e.jsx("section", { id: "pricing", children: e.jsx(s, {}) }),
      e.jsx("section", { id: "faq", children: e.jsx(o, {}) }),
      e.jsx("section", { id: "contact", children: e.jsx(i, {}) }),
    ],
  });
}

export { c as component };
