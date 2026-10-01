export type Film = {
  slug: string;
  title: string;
  genre: string;
  age: string;
  rating: string;
  poster: string;
  backdrop: string;
  sessions: string[];
};

export const films: Film[] = [
  { slug: "dune", title: "Дюна: Часть вторая", genre: "Фантастика, приключения", age: "16+", rating: "8.8", poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85", backdrop: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=90", sessions: ["11:20", "15:40", "19:10"] },
  { slug: "civil-war", title: "Падение империи", genre: "Драма, боевик", age: "18+", rating: "7.6", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85", backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=90", sessions: ["13:00", "17:30", "21:50"] },
  { slug: "challengers", title: "Претенденты", genre: "Драма, спорт", age: "18+", rating: "7.9", poster: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=85", backdrop: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=2000&q=90", sessions: ["10:45", "16:15", "20:30"] },
  { slug: "fall-guy", title: "Каскадёры", genre: "Комедия, боевик", age: "16+", rating: "7.4", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85", backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=90", sessions: ["12:10", "18:00", "22:20"] },
  { slug: "planet", title: "Планета обезьян", genre: "Фантастика, экшен", age: "12+", rating: "7.8", poster: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=85", backdrop: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=90", sessions: ["11:50", "15:10", "19:45"] },
  { slug: "furiosa", title: "Фуриоса", genre: "Фантастика, боевик", age: "18+", rating: "8.1", poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=85", backdrop: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=90", sessions: ["14:20", "18:40", "22:45"] },
];

export const navItems = [
  { to: "/", label: "Афиша" },
  { to: "/profile", label: "Мои билеты" },
  { to: "/cashier", label: "Касса" },
  { to: "/controller", label: "Контроль" },
  { to: "/manager", label: "Управление" },
] as const;
