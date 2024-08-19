import clsx from "clsx";
import { Link, Outlet, useLocation } from "react-router-dom";

export function SettingsPage() {
  return <div className="w-full flex flex-col gap-10">
    <h1 className="w-full pb-4 flex flex-col border-b border-secondary">
      <span className="text-2xl font-bold tracking-tight">Configurações</span>
      <small className="text-lg text-muted-foreground">Ajuste as configurações de acordo com suas necessidades.</small>
    </h1>

    <div className="w-full flex gap-10">
      <aside className="w-60">
        <nav>
          <ul className="flex flex-col gap-2">
            <li>
              <LinkItem href="/settings/profile">
                Perfil
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/settings/billing">
                Cobrança
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/settings/theme">
                Tema
              </LinkItem>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="w-full flex-1 flex">
        <Outlet />      
      </main>
    </div>
  </div>
}

function LinkItem({ href, children }: { href: string, children: React.ReactNode }) {

  const location = useLocation();

  return (
    <Link to={href} className={clsx("w-full p-2 px-4 flex hover:bg-secondary rounded", { "bg-secondary": location.pathname.startsWith(href) })}>
      {children}
    </Link>
  );
}