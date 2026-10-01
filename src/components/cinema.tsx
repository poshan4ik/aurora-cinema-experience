import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, Ticket, UserRound, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, type Film } from "@/lib/cinema-data";

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "blue" | "gold" | "green" | "red" }) {
  return <span className={cn("badge", `badge-${tone}`)}>{children}</span>;
}

export function SessionPill({ children, selected, onClick }: { children: ReactNode; selected?: boolean; onClick?: () => void }) {
  return <button type="button" className={cn("session-pill", selected && "session-pill-selected")} onClick={onClick}>{children}</button>;
}

export function FilmCard({ film }: { film: Film }) {
  return (
    <article className="film-card group">
      <Link to="/movie/$slug" params={{ slug: film.slug }} className="block overflow-hidden rounded-[14px]">
        <div className="relative aspect-[2/3] overflow-hidden bg-surface-raised">
          <img src={film.poster} alt={`Постер фильма «${film.title}»`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
          <div className="poster-shade absolute inset-x-0 bottom-0 h-2/5" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
            <Badge tone="gold">★ {film.rating}</Badge><Badge>{film.age}</Badge>
          </div>
        </div>
        <h3 className="mt-4 font-display text-2xl leading-none text-foreground">{film.title}</h3>
      </Link>
      <p className="mt-1 text-sm text-muted-foreground">{film.genre}</p>
      <div className="mt-4 flex flex-wrap gap-2">{film.sessions.map((time) => <SessionPill key={time}>{time}</SessionPill>)}</div>
    </article>
  );
}

export function StatCard({ label, value, delta, icon }: { label: string; value: string; delta: string; icon: ReactNode }) {
  return <article className="panel p-5"><div className="flex items-center justify-between text-muted-foreground"><span className="text-sm">{label}</span><span className="text-primary">{icon}</span></div><strong className="mt-5 block text-3xl font-semibold text-foreground">{value}</strong><span className="mt-2 block text-xs text-success">{delta}</span></article>;
}

export function Seat({ state, label, selected, onClick }: { state: "free" | "taken" | "vip"; label: string; selected?: boolean; onClick?: () => void }) {
  return <button type="button" aria-label={`Место ${label}`} disabled={state === "taken"} onClick={onClick} className={cn("seat", `seat-${state}`, selected && "seat-selected")}><span>{label}</span></button>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <header className="site-header">
      <div className="page-shell flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Аврора — на главную"><span className="brand-mark"><span /></span><span className="font-display text-2xl leading-none">АВРОРА</span></Link>
        <nav className="hidden items-center gap-1 lg:flex">{navItems.map((item) => <Link key={item.to} to={item.to} className={cn("nav-link", pathname === item.to && "nav-link-active")}>{item.label}</Link>)}</nav>
        <div className="hidden items-center gap-2 sm:flex"><Button variant="ghost" size="icon" aria-label="Поиск"><Search /></Button><Button asChild size="sm"><Link to="/login"><UserRound />Войти</Link></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="mobile-nav page-shell lg:hidden">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={cn("mobile-nav-link", pathname === item.to && "text-primary")}>{item.label}</Link>)}<Link to="/login" onClick={() => setOpen(false)} className="mobile-nav-link"><UserRound className="size-4" />Войти</Link></nav>}
    </header>
  );
}

export function Footer() {
  return <footer className="border-t border-border"><div className="page-shell flex flex-col gap-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><div><span className="font-display text-xl text-foreground">АВРОРА</span><p>Кино начинается здесь.</p></div><div className="flex gap-6"><span>Екатеринбург, ул. Ленина, 46</span><span>+7 343 000-00-00</span></div><span>© 2026 Аврора</span></div></footer>;
}

export function PageTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="mb-8"><div className="section-rule mb-5" />{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1 className="font-display text-5xl leading-none text-foreground md:text-7xl">{title}</h1>{description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}</div>;
}

export function TicketStub({ past = false }: { past?: boolean }) {
  return <article className={cn("ticket-stub", past && "opacity-60")}><div className="ticket-info"><Badge tone={past ? "neutral" : "green"}>{past ? "Завершён" : "Активен"}</Badge><h3 className="mt-4 font-display text-3xl">Дюна: Часть вторая</h3><p className="mt-1 text-muted-foreground">Сегодня, 19:10 · Зал 1</p><div className="mt-5 flex gap-6 text-sm"><span><b className="block text-muted-foreground">Ряд</b>7</span><span><b className="block text-muted-foreground">Места</b>8, 9</span><span><b className="block text-muted-foreground">Сумма</b>1 100 ₽</span></div></div><div className="ticket-code"><Ticket className="size-5 text-primary"/><div className="barcode" aria-label="Штрихкод билета"/><span className="text-xs text-muted-foreground">AVR-2405-1908</span></div></article>;
}
