import { j as e, O as o } from "./index-D2KIWI07.js";

const a = "https://chromewebstore.google.com/detail/ya-maps-parser-%E2%80%94-%D0%BF%D0%B0%D1%80%D1%81%D0%B5%D1%80-%D0%BA/aacfjdlinogfkihpmhaagoejofgbnlgd";

const n = [
  { href: "/#home", label: "Главная" },
  { href: "/#features", label: "Возможности" },
  { href: "/#how-it-works", label: "Как работает" },
  { href: "/#pricing", label: "Тарифы" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Контакты" },
];

function S() {
  return e.jsxs("div", {
    className: "min-h-screen flex flex-col bg-background",
    children: [
      e.jsx("header", {
        className: "sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60",
        children: e.jsxs("div", {
          className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
          children: [
            e.jsxs("a", {
              href: "/#home",
              className: "flex items-center gap-2 font-display font-bold text-lg",
              children: [
                e.jsx("span", {
                  className: "w-9 h-9 rounded-xl bg-gradient-brand grid place-items-center text-white shadow-soft",
                  children: "🗺️",
                }),
                e.jsx("span", { children: "Ya Maps Parser" }),
              ],
            }),
            e.jsx("nav", {
              className: "hidden md:flex items-center gap-1",
              children: n.map((t) =>
                e.jsx(
                  "a",
                  {
                    href: t.href,
                    className:
                      "px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition",
                    children: t.label,
                  },
                  t.href,
                ),
              ),
            }),
            e.jsx("a", {
              href: a,
              target: "_blank",
              rel: "noreferrer",
              className:
                "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-brand text-white text-sm font-semibold shadow-soft hover:shadow-glow transition",
              children: "🚀 Попробовать бесплатно",
            }),
          ],
        }),
      }),
      e.jsx("main", { className: "flex-1", children: e.jsx(o, {}) }),
      e.jsxs("footer", {
        className: "border-t border-border/60 bg-muted/30",
        children: [
          e.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 font-display font-bold",
                    children: [
                      e.jsx("span", {
                        className: "w-8 h-8 rounded-lg bg-gradient-brand grid place-items-center text-white",
                        children: "🗺️",
                      }),
                      "Ya Maps Parser",
                    ],
                  }),
                  e.jsx("p", {
                    className: "mt-3 text-sm text-muted-foreground max-w-xs",
                    children: "Парсер организаций с Яндекс Карт в XLSX. Быстро, удобно, без капчи. ⚡",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "text-sm",
                children: [
                  e.jsx("div", { className: "font-semibold mb-3", children: "Навигация" }),
                  e.jsx("ul", {
                    className: "space-y-2 text-muted-foreground",
                    children: n.map((t) =>
                      e.jsx(
                        "li",
                        {
                          children: e.jsx("a", {
                            href: t.href,
                            className: "hover:text-foreground",
                            children: t.label,
                          }),
                        },
                        t.href,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "text-sm",
                children: [
                  e.jsx("div", { className: "font-semibold mb-3", children: "Связь" }),
                  e.jsx("a", {
                    href: a,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "block text-muted-foreground hover:text-foreground",
                    children: "🧩 Chrome Web Store",
                  }),
                  e.jsx("a", {
                    href: "/#contact",
                    className: "block text-muted-foreground hover:text-foreground mt-2",
                    children: "💌 Поддержка",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "border-t border-border/60 py-6 text-center text-xs text-muted-foreground",
            children: ["© ", new Date().getFullYear(), " Ya Maps Parser. Все права защищены."],
          }),
        ],
      }),
    ],
  });
}

export { S, a };
