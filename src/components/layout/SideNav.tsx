import { Link, useLocation } from "@tanstack/react-router";
import { sideNavLinks } from "@/content/site";

export function SideNav() {
  const location = useLocation();
  return (
    <aside className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <nav className="pointer-events-auto flex flex-col items-end gap-3 text-xs font-medium uppercase tracking-wider text-foreground/50">
        {sideNavLinks.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 transition-colors ${
                active ? "text-foreground" : "hover:text-foreground"
              }`}
              data-cursor="hover"
            >
              <span>{link.label}</span>
              <span
                className={`h-px transition-all ${
                  active ? "w-8 bg-foreground" : "w-3 bg-foreground/30"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
