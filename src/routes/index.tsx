import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Instagram,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Nav, { WA_LINK } from "@/components/site/Nav";
import logo from "@/assets/logo.jpg.asset.json";
import poster from "@/assets/poster.jpg.asset.json";
import doc1 from "@/assets/doc1.jpg.asset.json";
import doc2 from "@/assets/doc2.jpg.asset.json";
import doc3 from "@/assets/doc3.jpg.asset.json";
import doc4 from "@/assets/doc4.jpg.asset.json";

const TITLE = "CV. Furnama Tour Travel — Umroh & Open Trip Palembang";
const DESC =
  "Travel resmi Palembang: paket umroh, open trip & private trip domestik dan internasional. Hotel dan maskapai terpercaya, harga all-in, konsultasi gratis via WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const masalah = [
  { t: "Takut travel abal-abal", d: "Banyak agen tanpa legalitas jelas, uang jamaah raib sebelum berangkat." },
  { t: "Biaya tiba-tiba membengkak", d: "Harga awal murah, di lapangan muncul biaya tambahan yang tidak diinformasikan." },
  { t: "Itinerary tidak jelas", d: "Jadwal berubah mendadak, destinasi dikurangi, waktu habis di jalan." },
  { t: "Hotel & maskapai seadanya", d: "Penginapan jauh dari lokasi utama dan penerbangan transit berkali-kali." },
  { t: "Tidak ada pendamping", d: "Jamaah bingung urus imigrasi, bagasi, dan ibadah tanpa tour leader." },
  { t: "Susah dihubungi", d: "Admin lambat membalas saat calon jamaah butuh kepastian keberangkatan." },
];

const solusi = [
  { i: ShieldCheck, t: "Legalitas resmi", d: "CV. Furnama Tour Travel berbadan hukum, kantor jelas di Palembang, dokumen perjalanan lengkap." },
  { i: BadgeCheck, t: "Harga all-in transparan", d: "Rincian include & exclude dijelaskan sejak awal. Tanpa biaya tersembunyi." },
  { i: Building2, t: "Hotel & maskapai terpercaya", d: "Hotel lokasi strategis dan penerbangan resmi berjadwal untuk kenyamanan perjalanan." },
  { i: HeartHandshake, t: "Tour leader mendampingi", d: "Didampingi tour leader berpengalaman dari keberangkatan sampai kembali ke Tanah Air." },
];

const keunggulan = [
  { i: Users, t: "Small group", d: "Grup kecil, perjalanan lebih personal dan nyaman." },
  { i: Plane, t: "Domestik & internasional", d: "Umroh, Turki, Dubai, sampai open trip nusantara." },
  { i: Sparkles, t: "Banyak spot foto", d: "Itinerary dirancang dengan waktu foto yang cukup." },
  { i: Clock, t: "Fast response", d: "Admin balas cepat via WhatsApp setiap hari." },
  { i: ShieldCheck, t: "Aman & terjadwal", d: "Perencanaan matang, jadwal jelas sejak hari pertama." },
  { i: Star, t: "4.500+ followers", d: "Dipercaya ribuan travelmates dari berbagai kota." },
];

const galeri = [
  { src: doc1.url, alt: "Rombongan jamaah di depan Blue Mosque Istanbul" },
  { src: doc2.url, alt: "Peserta trip menikmati private boat cruise" },
  { src: doc3.url, alt: "Travelmates bersulang saat welcome dinner tour" },
  { src: doc4.url, alt: "Peserta diving berenang bersama penyu" },
];

const testimoni = [
  { n: "Rani S.", k: "Open Trip Turki", q: "Semua diurus dari bandara sampai hotel. Tour leader-nya sabar banget dan itinerary tepat waktu." },
  { n: "H. Marzuki", k: "Umroh Keluarga", q: "Legalitas jelas dan pembimbing ibadah membantu sekali. Hotel dekat, ibadah jadi tenang." },
  { n: "Dewi & Anto", k: "Private Trip", q: "Harga all-in sesuai yang dijanjikan, tidak ada biaya dadakan di lokasi." },
  { n: "Fajar P.", k: "Open Trip Travelmates", q: "Awalnya berangkat sendiri, pulang dapat circle baru. Fotonya juga bagus-bagus." },
];

const harga = [
  {
    n: "Open Trip Travelmates",
    p: "Rp18,5 jt",
    s: "9 Hari 6 Malam · Istanbul – Cappadocia",
    f: ["Tiket PP CGK – IST", "Domestic flight Istanbul – Kayseri", "Hotel & makan sesuai program", "Tour leader + guide", "Air mineral 1 botol/pax"],
  },
  {
    n: "Umroh Reguler",
    p: "Mulai Rp29 jt",
    s: "9 Hari · Makkah – Madinah",
    f: ["Penerbangan resmi berjadwal", "Hotel dekat Masjidil Haram", "Muthawwif berpengalaman", "Visa & perlengkapan umroh", "Manasik sebelum berangkat"],
    hi: true,
  },
  {
    n: "Private Trip",
    p: "By request",
    s: "Fleksibel · Domestik & internasional",
    f: ["Itinerary custom", "Pilihan hotel sesuai budget", "Transport privat", "Dokumentasi perjalanan", "Cocok untuk keluarga & korporat"],
  },
];

const faq = [
  { q: "Apakah CV. Furnama Tour Travel resmi?", a: "Ya. Kami perusahaan travel berbadan hukum yang berbasis di Palembang dengan kantor dan dokumen legalitas yang dapat diperiksa langsung sebelum pendaftaran." },
  { q: "Apakah harga sudah all-in?", a: "Harga paket sudah mencakup komponen yang tertulis pada bagian include. Komponen exclude seperti tour tambahan opsional dan pengeluaran pribadi dijelaskan di awal agar tidak ada biaya kejutan." },
  { q: "Bagaimana sistem pembayarannya?", a: "Pendaftaran dengan DP, lalu pelunasan bertahap sesuai jadwal keberangkatan. Semua pembayaran dilakukan ke rekening resmi perusahaan dan mendapat bukti pembayaran." },
  { q: "Apakah bisa berangkat sendirian?", a: "Bisa. Open trip travelmates dirancang untuk peserta individu dengan grup kecil, sehingga tetap aman, nyaman, dan mudah berkenalan." },
  { q: "Hotel dan maskapai apa yang digunakan?", a: "Kami memakai hotel berlokasi strategis dekat destinasi utama serta maskapai resmi berjadwal. Nama hotel dan maskapai diinformasikan sebelum keberangkatan." },
  { q: "Bagaimana cara konsultasi?", a: "Klik tombol Konsultasi Gratis untuk terhubung langsung dengan admin kami di WhatsApp. Konsultasi tidak dipungut biaya dan tanpa kewajiban mendaftar." },
];

const mitra = [
  {
    n: "Optibis",
    d: "Solusi bisnis & pengembangan usaha",
    web: "https://optibis.id",
    webLabel: "optibis.id",
    tel: "+6287772577020",
    telLabel: "+62 877-7257-7020",
  },
  {
    n: "Contech",
    d: "Teknologi & solusi konstruksi",
    web: "https://contech.id",
    webLabel: "contech.id",
    tel: "+6287730309409",
    telLabel: "+62 877-3030-9409",
  },
];

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section id={id} className={tone === "muted" ? "bg-secondary/50 py-16 sm:py-24" : "py-16 sm:py-24"}>
      <div className="container-page">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-foreground/70">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-2xl font-extrabold text-primary sm:text-4xl">{title}</h2>
        {desc && <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{desc}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <main>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden bg-brand-gradient text-primary-foreground">
          <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold ring-1 ring-primary-foreground/20">
                <MapPin className="h-3.5 w-3.5" /> Palembang · Umroh & Open Trip
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                Perjalanan Ibadah & Wisata yang{" "}
                <span className="bg-gold-gradient bg-clip-text text-transparent">Aman, Nyaman, dan Berkesan</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
                CV. Furnama Tour Travel melayani paket umroh, open trip, dan private trip domestik maupun
                internasional dengan legalitas resmi, hotel & maskapai terpercaya, serta harga all-in transparan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-gold-foreground shadow-soft transition-transform hover:scale-[1.03]"
                >
                  Konsultasi Gratis
                </a>
                <a
                  href="#paket"
                  className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
                >
                  Lihat Paket
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-4 sm:max-w-lg sm:grid-cols-3">
                {[
                  ["4.500+", "Followers"],
                  ["194+", "Dokumentasi trip"],
                  ["100%", "Small group"],
                ].map(([v, k]) => (
                  <div key={k} className="rounded-2xl bg-primary-foreground/10 p-4 ring-1 ring-primary-foreground/15">
                    <dt className="text-xl font-extrabold sm:text-2xl">{v}</dt>
                    <dd className="text-xs text-primary-foreground/70">{k}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {galeri.slice(0, 4).map((g, i) => (
                  <img
                    key={g.src}
                    src={g.src}
                    alt={g.alt}
                    loading={i > 1 ? "lazy" : "eager"}
                    className={`h-40 w-full rounded-2xl object-cover shadow-card sm:h-56 ${i % 2 ? "mt-6" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MASALAH */}
        <Section
          id="masalah"
          eyebrow="Masalah"
          title="Kendala yang sering dialami calon jamaah & traveler"
          desc="Sebelum berangkat, ini keresahan yang paling sering kami dengar dari calon peserta."
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {masalah.map((m) => (
              <article key={m.t} className="rounded-2xl border border-border bg-card p-4 sm:p-6">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-destructive/10 text-destructive">
                  <X className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-primary sm:text-base">{m.t}</h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{m.d}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* SOLUSI */}
        <Section
          id="solusi"
          tone="muted"
          eyebrow="Solusi"
          title="Cara kami memastikan perjalanan Anda tenang"
          desc="Setiap keberangkatan disiapkan dengan standar yang sama: legal, transparan, dan terdampingi."
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {solusi.map((s) => (
              <article key={s.t} className="rounded-2xl bg-card p-4 shadow-soft sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-gold-foreground">
                  <s.i className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-primary sm:text-base">{s.t}</h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.d}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* KEUNGGULAN */}
        <Section
          id="keunggulan"
          eyebrow="Keunggulan"
          title="Kenapa memilih CV. Furnama Tour Travel"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {keunggulan.map((k) => (
              <article
                key={k.t}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 sm:gap-4 sm:p-6"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <k.i className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-primary sm:text-base">{k.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{k.d}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* PORTFOLIO / PRODUK */}
        <Section
          id="paket"
          tone="muted"
          eyebrow="Portfolio & Produk"
          title="Dokumentasi perjalanan dan paket unggulan"
          desc="Foto asli peserta trip kami — bukan stok foto."
        >
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <figure className="overflow-hidden rounded-3xl bg-card shadow-card">
              <img
                src={poster.url}
                alt="Paket Turki Istanbul – Cappadocia 9 hari 6 malam CV. Furnama Tour Travel"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {galeri.map((g) => (
                <img
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-40 w-full rounded-2xl object-cover shadow-soft sm:h-64"
                />
              ))}
            </div>
          </div>
        </Section>

        {/* TESTIMONI */}
        <Section id="testimoni" eyebrow="Testimoni" title="Kata mereka yang sudah berangkat">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {testimoni.map((t) => (
              <figure key={t.n} className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 sm:p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-xs text-foreground/80 sm:text-sm">“{t.q}”</blockquote>
                <figcaption className="mt-4 border-t border-border pt-3">
                  <p className="text-xs font-bold text-primary sm:text-sm">{t.n}</p>
                  <p className="text-[11px] text-muted-foreground">{t.k}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* HARGA */}
        <Section
          id="harga"
          tone="muted"
          eyebrow="Harga"
          title="Pilihan paket & estimasi biaya"
          desc="Harga dapat menyesuaikan tanggal keberangkatan, kurs, dan pilihan hotel."
        >
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {harga.map((h) => (
              <article
                key={h.n}
                className={`flex flex-col rounded-3xl p-6 sm:p-8 ${
                  h.hi
                    ? "bg-brand-gradient text-primary-foreground shadow-card"
                    : "border border-border bg-card shadow-soft"
                }`}
              >
                {h.hi && (
                  <span className="mb-4 w-fit rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-bold text-gold-foreground">
                    Paling diminati
                  </span>
                )}
                <h3 className={`text-base font-extrabold sm:text-lg ${h.hi ? "" : "text-primary"}`}>{h.n}</h3>
                <p className={`mt-1 text-xs ${h.hi ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                  {h.s}
                </p>
                <p className="mt-5 text-2xl font-extrabold sm:text-3xl">{h.p}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {h.f.map((f) => (
                    <li key={f} className="flex gap-2 text-xs sm:text-sm">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${h.hi ? "text-gold" : "text-primary"}`}
                      />
                      <span className={h.hi ? "text-primary-foreground/85" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 rounded-full px-5 py-3 text-center text-sm font-bold transition-transform hover:scale-[1.02] ${
                    h.hi
                      ? "bg-gold-gradient text-gold-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Tanya Paket Ini
                </a>
              </article>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering diajukan">
          <div className="grid gap-3 lg:grid-cols-2">
            {faq.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-primary sm:text-base">
                  {f.q}
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs text-muted-foreground sm:text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA AKHIR */}
        <section className="pb-16 sm:pb-24">
          <div className="container-page">
            <div className="overflow-hidden rounded-3xl bg-brand-gradient px-6 py-12 text-center text-primary-foreground shadow-card sm:px-12 sm:py-16">
              <h2 className="mx-auto max-w-2xl text-2xl font-extrabold sm:text-4xl">
                Siap berangkat bersama travelmates berikutnya?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
                Ceritakan rencana perjalanan Anda. Admin kami bantu susun pilihan paket, estimasi biaya, dan jadwal
                keberangkatan — gratis, tanpa kewajiban mendaftar.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full bg-gold-gradient px-8 py-4 text-sm font-bold text-gold-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Konsultasi Gratis Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="Logo CV. Furnama Tour Travel" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-extrabold text-primary">CV. FURNAMA TOUR TRAVEL</p>
                <p className="text-[11px] tracking-[0.24em] text-muted-foreground">CURATED TRAVEL EXPERIENCE</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-xs text-muted-foreground sm:text-sm">
              Open trip & private trip, domestik · internasional · umroh. Fast response via WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary">Alamat</h3>
            <p className="mt-3 flex gap-2 text-xs text-muted-foreground sm:text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Palembang, Sumatera Selatan, Indonesia
            </p>
            <a
              href="tel:+6282163775180"
              className="mt-3 flex gap-2 text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              0821 6377 5180
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary">Sosial Media</h3>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:text-sm">
              <a
                href="https://www.instagram.com/furnamatourtravel/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> @furnamatourtravel
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container-page py-5 text-center text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} CV. Furnama Tour Travel. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}
