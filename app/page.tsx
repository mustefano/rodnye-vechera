"use client";

import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { label: "Каталог", href: "#catalog" },
  { label: "О раскраске", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Доставка", href: "#delivery" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const heroBenefits = [
  "17 авторских иллюстраций",
  "формат А4",
  "подходит новичкам",
  "музыкальный плейлист",
];

const reasons = [
  {
    title: "Уютный вечер",
    text: "Раскраска помогает отвлечься от телефона, дел и постоянного шума.",
    icon: "lamp",
  },
  {
    title: "Для любого уровня сложности",
    text: "Каждый участок пронумерован - просто выбирайте цвет и закрашивайте.",
    icon: "pencil",
  },
  {
    title: "Ностальгия в деталях",
    text: "Сцены вдохновлены атмосферой семейного тепла, добрых историй, улыбок и споров.",
    icon: "home",
  },
  {
    title: "От чёрно-белого листа до личного шедевра",
    text: "Вы создаёте свой шедевр шаг за шагом.",
    icon: "frame",
  },
];

const insideItems = [
  "17 авторских сцен",
  "пронумерованные зоны для раскрашивания",
  "палитра с подсказками",
  "плотная бумага 160 г/м²",
  "формат А4",
  "музыкальный плейлист",
  "аккуратная упаковка",
  "советы для разукрашивания",
];

const products = [
  {
    name: "Выпуск #1 - Дом, где ждут",
    price: "2200 ₽",
    oldPrice: "2490 ₽",
    badge: "Хит",
    tone: "home",
    description:
      "Самый тёплый выпуск о доме, где собираются близкие, шумит кухня и всегда найдётся место за столом.",
    button: "Купить с доставкой",
  },
  {
    name: "Выпуск #2 - Дачные разговоры",
    price: "1900 ₽",
    oldPrice: "2490 ₽",
    badge: "Для настроения",
    tone: "garden",
    description:
      "Летние вечера, двор, веранда, смешные разговоры и ощущение каникул у родных.",
    button: "Купить с доставкой",
  },
  {
    name: "Выпуск #3 - Вечер на кухне",
    price: "2200 ₽",
    oldPrice: "2490 ₽",
    badge: "Скоро",
    tone: "kitchen",
    description:
      "Кухня, чай, домашние разговоры, старый сервант, скатерть и уют, который невозможно забыть.",
    button: "Оставить заявку",
  },
];

const productList = [
  "17 иллюстраций",
  "формат А4",
  "плотная бумага",
  "палитра с номерами",
  "музыкальный плейлист",
];

const galleryItems = [
  "уютная кухня",
  "деревенский двор",
  "чай на столе",
  "дачный вечер",
  "домашнее окно",
  "раскраска и карандаши",
];

const orderSteps = [
  "Выберите выпуск",
  "Оставьте контакты",
  "Подтвердите заказ",
  "Получите доставку",
];

const deliveryCards = [
  {
    title: "Доставка",
    text: "Отправляем заказы через СДЭК. Стоимость и срок доставки рассчитываются индивидуально.",
  },
  {
    title: "Оплата",
    text: "Оплата банковской картой после подтверждения заказа.",
  },
  {
    title: "Упаковка",
    text: "Каждый выпуск аккуратно упаковывается, чтобы раскраска приехала в хорошем состоянии.",
  },
];

const reviews = [
  "Очень тёплая атмосфера. Раскрашивала вечером с чаем - будто реально вернулась в детство.",
  "Понравилось, что всё понятно по номерам. Не нужно уметь рисовать, просто отдыхаешь.",
  "Купила в подарок маме. Ей очень зашла тема домашнего уюта и семейных сцен.",
];

const faqItems = [
  {
    question: "Что такое раскраска по номерам?",
    answer:
      "Это иллюстрация, разделённая на участки с номерами. Каждому номеру соответствует свой цвет.",
  },
  {
    question: "Подойдёт ли новичкам?",
    answer:
      "Да. Не нужно уметь рисовать - достаточно следовать номерам и постепенно закрашивать участки.",
  },
  {
    question: "Фломастеры входят в комплект?",
    answer:
      "Нет, фломастеры и карандаши не входят в комплект. Вы можете использовать свои любимые материалы.",
  },
  {
    question: "Какой формат у раскраски?",
    answer: "Формат А4. В каждом выпуске 17 авторских иллюстраций.",
  },
  {
    question: "Можно ли подарить раскраску?",
    answer:
      "Да, это хороший подарок для тех, кто любит уют, творчество и спокойные вечера.",
  },
  {
    question: "Это связано с каким-то сериалом?",
    answer:
      "Нет. Это самостоятельный авторский проект о семейном уюте, деревенской атмосфере и тёплых воспоминаниях.",
  },
];

const contactItems = [
  ["Telegram", "@rodnye_vechera"],
  ["Email", "hello@rodnye-vechera.ru"],
  ["Телефон", "+7 900 000-00-00"],
  ["Город", "Москва"],
];

function WarmIcon({ type }: { type: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-7 w-7 fill-none stroke-current stroke-[2.2]"
    >
      {type === "lamp" && (
        <>
          <path d="M18 21h12l4 13H14l4-13Z" />
          <path d="M24 34v8M18 42h12M24 8v7M13 12l5 5M35 12l-5 5" />
        </>
      )}
      {type === "pencil" && (
        <>
          <path d="m12 35 3 3 19-19-3-3L12 35Z" />
          <path d="m31 16 3-3 4 4-3 3M12 35l-2 7 8-2" />
        </>
      )}
      {type === "home" && (
        <>
          <path d="M8 24 24 10l16 14" />
          <path d="M13 22v17h22V22M20 39V27h8v12" />
        </>
      )}
      {type === "frame" && (
        <>
          <path d="M10 11h28v26H10z" />
          <path d="m16 31 7-8 6 6 3-4 5 6M18 17h.1" />
        </>
      )}
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-burgundy">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cocoa/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function BrandMark() {
  return (
    <a href="#top" className="group flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-burgundy text-cream shadow-[0_16px_36px_rgba(116,37,47,0.22)] transition-transform group-hover:-translate-y-0.5">
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          className="h-6 w-6 fill-none stroke-current stroke-2"
        >
          <path d="M8 21 20 10l12 11" />
          <path d="M12 20v12h16V20M17 32v-8h6v8" />
          <path d="M27 12v7" />
        </svg>
      </span>
      <span>
        <span className="block text-lg font-semibold leading-tight text-cocoa">
          Ностальгия красками
        </span>
        <span className="hidden text-xs leading-tight text-cocoa/60 sm:block">
          авторская раскраска по номерам, которая всегда будет рядом
        </span>
      </span>
    </a>
  );
}


function HeroCover() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[470px]">
      <div className="absolute inset-0 rounded-[2.2rem] bg-[linear-gradient(145deg,#fff9ed,#f0d2aa_58%,#8f3f44)] shadow-[0_30px_80px_rgba(91,52,35,0.2)]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-3 shadow-[0_30px_80px_rgba(91,52,35,0.22)] backdrop-blur">
        <div className="absolute inset-0 paper-noise opacity-25" />
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <Image
            src="/nostalgia-cover.jpg"
            alt="Обложка выпуска №1 Ностальгия красками"
            width={924}
            height={1329}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ProductArtwork({ variant = "hero" }: { variant?: string }) {
  const isSmall = variant === "small";

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(145deg,#fff9ed,#f0d2aa_55%,#8f3f44)] shadow-[0_30px_80px_rgba(91,52,35,0.22)] ${
        isSmall ? "aspect-[4/3] p-4" : "aspect-[4/5] p-5"
      }`}
    >
      <div className="absolute inset-0 paper-noise opacity-50" />
      <div
        className={`absolute rounded-full bg-lamp font-bold uppercase tracking-[0.18em] text-burgundy shadow-lg ${
          isSmall ? "right-4 top-4 px-3 py-1.5 text-[0.62rem]" : "right-6 top-6 px-4 py-2 text-xs"
        }`}
      >
        Авторский выпуск
      </div>
      <div
        className={`relative flex h-full flex-col justify-between rounded-[1.5rem] border border-caramel/25 bg-cream/85 shadow-inner ${
          isSmall ? "p-4" : "p-5"
        }`}
      >
        <div>
          <div className="mb-4 h-2 w-20 rounded-full bg-burgundy/80" />
          <p
            className={`max-w-48 font-semibold leading-tight text-cocoa ${
              isSmall ? "text-2xl" : "text-3xl"
            }`}
          >
            Родные вечера
          </p>
          <p className={`${isSmall ? "mt-1 text-xs" : "mt-2 text-sm"} text-cocoa/60`}>
            выпуск с семейными сценами
          </p>
        </div>
        <div
          className={`relative mx-auto w-full max-w-72 rounded-3xl bg-[linear-gradient(180deg,#f8e6c9,#f3c784)] shadow-[inset_0_0_0_1px_rgba(99,63,40,0.13)] ${
            isSmall ? "mt-3 h-28" : "mb-2 mt-5 h-48"
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 280 190"
            className="absolute inset-0 h-full w-full p-5 text-cocoa/80"
          >
            <path
              d="M36 111 140 38l104 73"
              className="fill-none stroke-current stroke-[5] stroke-linecap-round"
            />
            <path
              d="M61 102v57h158v-57"
              className="fill-[#fff7e8] stroke-current stroke-[4]"
            />
            <path d="M119 159v-39h42v39" className="fill-[#d79a5e] stroke-current stroke-[3]" />
            <path d="M83 122h24v20H83zM174 122h24v20h-24z" className="fill-[#f8ce75] stroke-current stroke-[3]" />
            <path d="M52 166h178" className="fill-none stroke-current stroke-[4] stroke-linecap-round" />
            <path d="M218 83c16 5 24 15 22 30" className="fill-none stroke-[#5d7b54] stroke-[4] stroke-linecap-round" />
          </svg>
          <div
            className={`absolute left-5 rounded-b-3xl rounded-t-lg border-2 border-cocoa/60 bg-white/45 ${
              isSmall ? "-bottom-3 h-10 w-14" : "-bottom-4 h-14 w-20"
            }`}
          >
            <div className="absolute -right-5 top-4 h-7 w-7 rounded-full border-2 border-cocoa/60" />
            <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-cocoa/40" />
          </div>
          <div
            className={`absolute bottom-3 right-5 rotate-12 rounded-full bg-burgundy shadow-lg ${
              isSmall ? "h-16 w-4" : "h-24 w-5"
            }`}
          />
          <div
            className={`absolute bottom-3 right-12 -rotate-6 rounded-full bg-sage shadow-lg ${
              isSmall ? "h-14 w-4" : "h-20 w-5"
            }`}
          />
        </div>
        <div
          className={`grid grid-cols-3 gap-2 text-center font-semibold text-cocoa/70 ${
            isSmall ? "mt-3 text-[0.65rem]" : "text-xs"
          }`}
        >
          <span className="rounded-full bg-white/70 px-2 py-2">А4</span>
          <span className="rounded-full bg-white/70 px-2 py-2">17 сцен</span>
          <span className="rounded-full bg-white/70 px-2 py-2">подарок</span>
        </div>
      </div>
    </div>
  );
}

function LineArt({ colored = false }: { colored?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-caramel/20 ${
        colored
          ? "bg-[linear-gradient(135deg,#ffe7b5,#d99b63_48%,#6f8a5f)]"
          : "bg-[#fffaf0]"
      } p-5 shadow-[0_22px_55px_rgba(91,52,35,0.14)]`}
    >
      <div className="absolute inset-0 paper-noise opacity-60" />
      <svg
        aria-hidden="true"
        viewBox="0 0 360 250"
        className={`relative h-full min-h-64 w-full ${
          colored ? "text-cocoa/65" : "text-cocoa/80"
        }`}
      >
        <path d="M35 188h290" className="fill-none stroke-current stroke-[4]" />
        <path
          d="M74 188V87h212v101"
          className={`${colored ? "fill-[#f8d59a]" : "fill-none"} stroke-current stroke-[4]`}
        />
        <path
          d="M99 111h44v37H99zM211 111h44v37h-44z"
          className={`${colored ? "fill-[#ffd977]" : "fill-none"} stroke-current stroke-[3]`}
        />
        <path
          d="M153 188v-57h55v57"
          className={`${colored ? "fill-[#9b4d42]" : "fill-none"} stroke-current stroke-[3]`}
        />
        <path
          d="M64 87 180 32l116 55"
          className={`${colored ? "fill-[#7b382e]" : "fill-none"} stroke-current stroke-[4]`}
        />
        <path d="M59 207c38-16 69-16 99 0s67 18 120-4" className="fill-none stroke-current stroke-[3]" />
        <path
          d="M284 156c22-3 35 8 35 25M69 155c-19 2-29 12-31 29"
          className={`fill-none ${colored ? "stroke-[#55734e]" : "stroke-current"} stroke-[4]`}
        />
      </svg>
    </div>
  );
}

function PreviewArtwork({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.65rem] border border-white/75 bg-cream shadow-[0_22px_55px_rgba(79,86,58,0.13)]">
      <div className="absolute inset-0 paper-noise opacity-18" />
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.45rem] bg-white/80">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 46vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function GalleryArtwork({ label, index }: { label: string; index: number }) {
  const themes = [
    "from-[#fff6df] via-[#e6b878] to-[#7d3f3e]",
    "from-[#f7efd8] via-[#c9b06f] to-[#5d7b54]",
    "from-[#fff3d6] via-[#f0c46d] to-[#9d5d37]",
    "from-[#f7e4c2] via-[#d99b63] to-[#6f8a5f]",
    "from-[#fff8e8] via-[#f0c46d] to-[#74252f]",
    "from-[#fffaf0] via-[#ddb889] to-[#824a31]",
  ];

  return (
    <div className="group relative min-h-64 overflow-hidden rounded-[1.7rem] border border-white/70 bg-white p-3 shadow-[0_24px_60px_rgba(91,52,35,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(91,52,35,0.18)]">
      <div className={`relative h-full overflow-hidden rounded-[1.35rem] bg-gradient-to-br ${themes[index]}`}>
        <div className="absolute inset-0 paper-noise opacity-50" />
        <svg
          aria-hidden="true"
          viewBox="0 0 300 220"
          className="absolute inset-0 h-full w-full p-7 text-cocoa/55 transition duration-300 group-hover:scale-[1.03]"
        >
          <path d="M31 170h236" className="fill-none stroke-current stroke-[4]" />
          <path d="M64 170V82h156v88" className="fill-[#fff8eb]/70 stroke-current stroke-[4]" />
          <path d="M51 85 142 35l91 50" className="fill-none stroke-current stroke-[5]" />
          <path d="M91 106h35v28H91zM160 106h35v28h-35z" className="fill-[#f8d476]/70 stroke-current stroke-[3]" />
          <path d="M217 151c23-4 37 7 36 24M65 150c-17 1-27 9-29 25" className="fill-none stroke-current stroke-[4]" />
          <path d="M116 188c38-14 70-13 102 0" className="fill-none stroke-current stroke-[3]" />
        </svg>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-cream/80 px-4 py-3 text-sm font-semibold text-cocoa shadow-lg backdrop-blur">
          <span>{label}</span>
          <span className="h-2 w-2 rounded-full bg-burgundy" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [compare, setCompare] = useState(54);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-milk text-cocoa">
      <div className="fixed inset-0 -z-10 paper-noise opacity-70" />

      <div className="bg-cocoa px-4 py-2 text-center text-sm font-medium text-cream">
        Старт продаж уже в августе: музыкальный плейлист в каждом выпуске и бережная упаковка
      </div>

      <header className="sticky top-0 z-50 border-b border-caramel/15 bg-milk/78 shadow-[0_14px_40px_rgba(91,52,35,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-7 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-cocoa/70 transition hover:text-burgundy"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#request"
              className="rounded-full bg-burgundy px-6 py-3 text-sm font-bold text-cream shadow-[0_16px_30px_rgba(116,37,47,0.2)] transition hover:-translate-y-0.5 hover:bg-[#5f1d27]"
            >
              Заказать
            </a>
          </div>
          <button
            type="button"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-caramel/30 bg-white/70 text-cocoa shadow-sm lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-caramel/15 bg-milk/95 px-4 py-4 shadow-xl backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-cocoa transition hover:bg-cream"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#request"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-burgundy px-5 py-3 text-center font-bold text-cream"
              >
                Заказать
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="absolute left-0 top-0 -z-10 h-[46rem] w-[46rem] rounded-full bg-lamp/35 blur-3xl" />
        <div className="absolute right-0 top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-sage/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="reveal">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-caramel/25 bg-white/60 px-4 py-2 text-sm font-semibold text-cocoa shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-lamp shadow-[0_0_18px_rgba(246,196,86,0.9)]" />
              Авторские раскраски по номерам для спокойных вечеров
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-cocoa sm:text-6xl lg:text-7xl">
              Раскрась тёплые воспоминания
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-cocoa/72 sm:text-xl">
              Авторская раскраска по номерам про мгновения, когда за окном моросит
              дождь, когда одолевает тревога или, наоборот, когда на сердце так легко
              и хорошо, что хочется продлить это мгновение.
            </p>
            <p className="mt-5 max-w-2xl rounded-[1.5rem] border border-caramel/20 bg-cream/70 p-5 text-base font-medium leading-7 text-cocoa shadow-sm">
              Это не просто раскраска. Это спокойный вечер, чашка чая и
              ощущение, будто ты снова дома.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#catalog"
                className="rounded-full bg-burgundy px-8 py-4 text-center text-base font-bold text-cream shadow-[0_18px_38px_rgba(116,37,47,0.25)] transition hover:-translate-y-0.5 hover:bg-[#5f1d27]"
              >
                Выбрать выпуск
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-caramel/35 bg-white/70 px-8 py-4 text-center text-base font-bold text-cocoa shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-burgundy/40 hover:text-burgundy"
              >
                Посмотреть галерею
              </a>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              {heroBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-caramel/15 bg-white/55 px-4 py-3 text-sm font-semibold text-cocoa/78 shadow-sm backdrop-blur"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lamp/70 text-burgundy">
                    ✓
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative mx-auto w-full max-w-lg lg:max-w-none">
            <HeroCover />
          </div>
        </div>
      </section>

      <section id="about" className="section-band px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Когда хочется замедлиться и просто побыть дома"
            description="В каждой иллюстрации знакомая атмосфера: родной дом, любимые фразы, смешные бытовые моменты и тёплые семейные вечера."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="reveal rounded-[1.75rem] border border-white/70 bg-white/68 p-6 shadow-[0_22px_60px_rgba(91,52,35,0.09)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(91,52,35,0.14)]"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-lamp/45 text-burgundy">
                  <WarmIcon type={reason.icon} />
                </div>
                <h3 className="text-xl font-semibold text-cocoa">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/67">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal">
            <div className="relative rounded-[2rem] border border-white/80 bg-white/50 p-5 shadow-[0_30px_80px_rgba(91,52,35,0.12)]">
              <div className="grid gap-5">
                <PreviewArtwork
                  src="/painted-preview.png"
                  alt="Цветной пример готовой раскраски"
                />
                <PreviewArtwork
                  src="/outline-preview.png"
                  alt="Чёрно-белая страница раскраски по номерам"
                />
              </div>
              <div className="absolute -bottom-5 left-8 rounded-full bg-burgundy px-5 py-3 text-sm font-bold text-cream shadow-xl">
                раскрытая раскраска
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-burgundy">
              комплект
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-cocoa lg:text-5xl">
              Внутри каждого выпуска
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {insideItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-caramel/15 bg-cream/70 px-4 py-3 text-sm font-semibold text-cocoa/78"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage/18 text-sage">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-burgundy/12 bg-burgundy/5 p-4 text-sm leading-7 text-cocoa/68">
              Фломастеры и карандаши не входят в комплект, чтобы вы могли
              выбрать любимые материалы сами.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Из чёрно-белой страницы - в тёплую историю"
            description="С каждым цветом обычный контур превращается в маленькое воспоминание."
          />
          <div className="reveal mx-auto max-w-5xl rounded-[2rem] border border-white/75 bg-white/70 p-5 shadow-[0_30px_80px_rgba(91,52,35,0.12)]">
            <div className="relative overflow-hidden rounded-[1.55rem] border border-caramel/15 bg-[#f7f3ea] aspect-[16/10] shadow-[0_22px_55px_rgba(91,52,35,0.10)]">
              <Image
                src="/compare-before.png"
                alt="Чёрно-белая раскраска по номерам"
                fill
                sizes="(max-width: 1280px) 100vw, 1100px"
                className="object-contain"
                priority={false}
              />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - compare}% 0 0)` }}
              >
                <Image
                  src="/compare-after.png"
                  alt="Готовая цветная иллюстрация"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1100px"
                  className="object-contain"
                  priority={false}
                />
              </div>
              <div
                className="absolute inset-y-0 w-1 bg-cream shadow-[0_0_0_1px_rgba(91,86,69,0.22),0_0_26px_rgba(172,176,135,0.55)]"
                style={{ left: `${compare}%` }}
              >
                <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sage text-sm font-bold text-cream shadow-xl">
                  ↔
                </div>
              </div>
              <div className="absolute left-5 top-5 rounded-full bg-cream/92 px-4 py-2 text-sm font-bold text-cocoa shadow">
                До
              </div>
              <div className="absolute right-5 top-5 rounded-full bg-sage px-4 py-2 text-sm font-bold text-cream shadow">
                После
              </div>
            </div>
            <input
              aria-label="Сравнить до и после"
              type="range"
              min="18"
              max="82"
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
              className="mt-6 w-full accent-[#69774f]"
            />
          </div>
        </div>
      </section>

      <section id="catalog" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="каталог"
            title="Выберите свой вечер"
            description="Каждый выпуск - это отдельная подборка тёплых сцен: дом, дача, кухня, двор и семейные разговоры."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="reveal group flex flex-col overflow-hidden rounded-[2rem] border border-white/75 bg-white/75 shadow-[0_26px_70px_rgba(91,52,35,0.11)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_85px_rgba(91,52,35,0.18)]"
              >
                <div className="p-4">
                  <ProductArtwork variant="small" />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-2">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-lamp/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
                      {product.badge}
                    </span>
                    <span className="text-sm font-semibold text-sage">в наличии</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-cocoa">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-cocoa/67">
                    {product.description}
                  </p>
                  <ul className="mt-5 grid gap-2">
                    {productList.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-cocoa/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex items-end gap-3">
                    <span className="text-4xl font-semibold text-cocoa">
                      {product.price}
                    </span>
                    <span className="pb-1 text-lg font-medium text-cocoa/38 line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                  <a
                    href="#request"
                    className="mt-6 rounded-full bg-cocoa px-6 py-4 text-center text-sm font-bold text-cream shadow-[0_16px_34px_rgba(91,52,35,0.22)] transition group-hover:bg-burgundy"
                  >
                    {product.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-band px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="галерея"
            title="Фрагменты будущих историй"
            description="Несколько сцен, которые хочется рассматривать ещё до раскрашивания."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <GalleryArtwork key={item} label={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Как оформить заказ" />
          <div className="grid gap-4 md:grid-cols-4">
            {orderSteps.map((step, index) => (
              <div
                key={step}
                className="reveal relative rounded-[1.75rem] border border-caramel/15 bg-cream/70 p-6 shadow-[0_20px_55px_rgba(91,52,35,0.08)]"
              >
                <span className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-burgundy text-lg font-bold text-cream">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-cocoa">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="section-band px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Доставка без лишней суеты" />
          <div className="grid gap-5 md:grid-cols-3">
            {deliveryCards.map((card) => (
              <article
                key={card.title}
                className="reveal rounded-[1.75rem] border border-white/70 bg-white/65 p-7 shadow-[0_22px_60px_rgba(91,52,35,0.09)]"
              >
                <h3 className="text-2xl font-semibold text-cocoa">{card.title}</h3>
                <p className="mt-4 leading-7 text-cocoa/67">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Отзывы" />
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <figure
                key={review}
                className="reveal rounded-[1.75rem] border border-caramel/15 bg-white/72 p-7 shadow-[0_22px_60px_rgba(91,52,35,0.09)]"
              >
                <div className="mb-6 flex gap-1 text-lamp">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <blockquote className="text-lg leading-8 text-cocoa/76">
                  “{review}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-bold text-burgundy">
                  Покупатель #{index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-band px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="FAQ" />
          <div className="grid gap-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="rounded-[1.5rem] border border-white/70 bg-white/70 shadow-[0_16px_45px_rgba(91,52,35,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold text-cocoa">
                      {item.question}
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-xl text-burgundy">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-7 text-cocoa/68">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="request" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,250,240,0.9),rgba(244,211,166,0.72))] p-5 shadow-[0_30px_90px_rgba(91,52,35,0.14)] md:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.75rem] bg-burgundy p-8 text-cream shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-lamp">
              заявка
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Оставьте заявку - и мы поможем выбрать выпуск
            </h2>
            <p className="mt-5 leading-8 text-cream/78">
              Мы не спамим. Свяжемся только по вашему заказу.
            </p>
            <div className="mt-8 rounded-3xl bg-cream/10 p-5 text-sm leading-7 text-cream/78">
              На первом сообщении уточним выпуск, город доставки и удобный
              способ оплаты.
            </div>
          </div>
          <form className="grid gap-4 rounded-[1.75rem] bg-white/72 p-5 md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
                Имя
                <input className="input-field" name="name" placeholder="Анна" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
                Телефон
                <input className="input-field" name="phone" placeholder="+7" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
              Telegram или email
              <input
                className="input-field"
                name="contact"
                placeholder="@username или почта"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
              Выбор выпуска
              <select className="input-field" name="release" defaultValue="">
                <option value="" disabled>
                  Выберите выпуск
                </option>
                <option>Выпуск #1 - Дом, где ждут</option>
                <option>Выпуск #2 - Дачные разговоры</option>
                <option>Выпуск #3 - Вечер на кухне</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-cocoa/70">
              Комментарий
              <textarea
                className="input-field min-h-28 resize-none"
                name="comment"
                placeholder="Например: хочу в подарок"
              />
            </label>
            <label className="flex items-start gap-3 text-sm leading-6 text-cocoa/66">
              <input type="checkbox" className="mt-1 accent-[#74252f]" />
              Я согласен с политикой конфиденциальности
            </label>
            <button
              type="button"
              className="rounded-full bg-burgundy px-7 py-4 text-base font-bold text-cream shadow-[0_18px_38px_rgba(116,37,47,0.23)] transition hover:-translate-y-0.5 hover:bg-[#5f1d27]"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      <section id="contacts" className="section-band px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-burgundy">
              контакты
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-cocoa lg:text-5xl">
              Связаться с нами
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#request"
                className="rounded-full bg-burgundy px-7 py-4 text-center font-bold text-cream shadow-[0_18px_38px_rgba(116,37,47,0.23)]"
              >
                Написать в Telegram
              </a>
              <a
                href="#faq"
                className="rounded-full border border-caramel/35 bg-white/70 px-7 py-4 text-center font-bold text-cocoa"
              >
                Задать вопрос
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_50px_rgba(91,52,35,0.08)]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-burgundy">
                  {label}
                </p>
                <p className="mt-3 text-lg font-semibold text-cocoa">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-cocoa px-4 py-12 text-cream sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-semibold">Родные вечера</h2>
            <p className="mt-4 max-w-xl leading-7 text-cream/70">
              Авторские раскраски по номерам о доме, уюте и тёплых семейных
              историях.
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-cream/55">
              Проект является самостоятельным авторским продуктом и не
              использует названия, кадры, логотипы, персонажей, лица актёров
              или цитаты из сторонних произведений.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-cream/78 sm:grid-cols-3 lg:grid-cols-2">
            {[
              "Каталог",
              "Доставка",
              "Оплата",
              "FAQ",
              "Политика конфиденциальности",
              "Публичная оферта",
            ].map((link) => (
              <a key={link} href="#top" className="transition hover:text-lamp">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
