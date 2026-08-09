import { NavLink, Outlet } from "react-router";
import { Header } from "../components/Header";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
    isActive
      ? "bg-[image:var(--gradient-button)] text-white"
      : "text-muted-foreground hover:text-foreground"
  }`;
}

export const MainLayout = () => {
  return (
    <div className="flex flex-col lg:h-screen lg:overflow-hidden">
      <Header />

      <nav className="flex flex-wrap items-center justify-center gap-2 border-b border-border bg-surface px-6 py-3">
        <NavLink to="/" end className={navLinkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/clients" className={navLinkClass}>
          Clientes
        </NavLink>
        <NavLink to="/service-orders" className={navLinkClass}>
          Ordens de Serviço
        </NavLink>
      </nav>

      <main className="flex flex-col gap-5 px-6 py-5 lg:min-h-0 lg:flex-1 lg:overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
