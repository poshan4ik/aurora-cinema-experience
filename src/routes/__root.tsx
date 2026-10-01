import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { Footer, Navbar } from "@/components/cinema";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" }, { rel: "icon", href: "/favicon.ico" }] }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <main className="page-shell flex min-h-[70vh] flex-col items-center justify-center text-center"><span className="font-display text-8xl text-primary">404</span><h1 className="font-display text-4xl">Сеанс не найден</h1><p className="mt-2 text-muted-foreground">Возможно, эта страница уже ушла из проката.</p><Link to="/" className="mt-6 text-primary">Вернуться к афише</Link></main>,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="ru"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Navbar /><Outlet /><Footer /></QueryClientProvider>; }
