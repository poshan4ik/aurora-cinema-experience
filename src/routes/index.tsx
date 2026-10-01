import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Search, SlidersHorizontal, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { FilmCard } from "@/components/cinema";
import { featuredFilm, films } from "@/lib/cinema-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Аврора — кинотеатр в Екатеринбурге" }, { name: "description", content: "Афиша кинотеатра Аврора: премьеры, расписание сеансов и билеты." }, { property: "og:title", content: "Аврора — кинотеатр в Екатеринбурге" }, { property: "og:description", content: "Выбирайте фильмы и удобные сеансы в кинотеатре Аврора." }, { property: "og:type", content: "website" }, { property: "og:image", content: featuredFilm.backdrop }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:image", content: featuredFilm.backdrop }] }),
  component: HomePage,
});
function HomePage() {
  const [query, setQuery] = useState(""); const [genre, setGenre] = useState("Все жанры");
  const visible = useMemo(() => films.filter((film) => (genre === "Все жанры" || film.genre.includes(genre)) && film.title.toLowerCase().includes(query.toLowerCase())), [genre, query]);
  return <main>
    <section className="relative min-h-[620px] overflow-hidden">
      <img src={featuredFilm.backdrop} alt="Кадр из фильма «Дюна: Часть вторая»" className="absolute inset-0 h-full w-full object-cover object-center opacity-75" />
      <div className="hero-shade absolute inset-0" />
      <div className="page-shell relative flex min-h-[620px] items-end pb-16 pt-28 md:items-center md:pb-0">
        <div className="max-w-2xl"><p className="eyebrow">Главная премьера недели</p><h1 className="font-display text-7xl leading-[.86] text-foreground sm:text-8xl md:text-9xl">ДЮНА:<br/>ЧАСТЬ ВТОРАЯ</h1><div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-foreground"><span className="flex items-center gap-1 text-gold"><Star className="size-4 fill-current" />8.8</span><span>Фантастика, приключения</span><span>166 мин</span><span>16+</span></div><p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">Пол Атрейдес объединяется с Чани и фременами, чтобы отомстить заговорщикам, уничтожившим его семью.</p><Button asChild size="lg" className="mt-7 rounded-full px-7 shadow-[var(--soft-glow)]"><Link to="/movie/$slug" params={{ slug: "dune" }}>Купить билет</Link></Button></div>
      </div>
    </section>
    <section className="page-shell py-14 md:py-20"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div className="section-rule mb-5"/><p className="eyebrow">Сейчас в кино</p><h2 className="font-display text-5xl md:text-6xl">АФИША</h2></div><div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary"/>Екатеринбург, Аврора</div></div>
      <div className="mt-8 grid gap-3 lg:grid-cols-[1fr_auto_auto]"><label className="relative"><Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Найти фильм" className="h-12 w-full rounded-full border border-input bg-card pl-11 pr-4 text-sm outline-none transition focus:border-primary"/></label><label className="relative"><SlidersHorizontal className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><select value={genre} onChange={(e) => setGenre(e.target.value)} className="h-12 min-w-48 appearance-none rounded-full border border-input bg-card pl-11 pr-8 text-sm outline-none"><option>Все жанры</option><option>Фантастика</option><option>Драма</option><option>Комедия</option></select></label><Button variant="outline" className="h-12 rounded-full"><CalendarDays className="size-4 text-primary"/>Сегодня, 1 октября</Button></div>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6">{visible.map((film) => <FilmCard key={film.slug} film={film}/>)}</div>{visible.length === 0 && <p className="py-20 text-center text-muted-foreground">По вашему запросу фильмов не найдено.</p>}
    </section>
  </main>;
}
