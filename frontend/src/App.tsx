import { Link, Outlet } from 'react-router-dom'
import { Button } from './components/ui/button';

import {
  Settings,
  BarChart,
  Smartphone,
} from "lucide-react";
import { ModeToggle } from './components/Mode-toggle';

export function App() {

  return <>  
  <div className="h-full flex flex-col">
    <header className="flex items-center justify-between p-4 border-b-2">
      <div className="flex gap-2 text-xl">
        <Smartphone />
        Meu App
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </header>

    <main className="flex-1 flex">
      <aside className="w-60 p-4 border-r-2 flex flex-col justify-between">
        <nav className="w-full flex flex-col gap-2">
          <LinkItem href="/">
            <BarChart className="w-4" />
            Dashboard
          </LinkItem>        
          <LinkItem href="/settings">
            <Settings className="w-4" />
            Configurar
          </LinkItem>
        </nav>

        <div className="flex flex-col gap-4">
          <Button>
            Sair
          </Button>
        </div>
      </aside>

      <article className="p-4 flex-1">
        <Outlet />
      </article>
    </main>
  </div>
  </>
}

function LinkItem({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link to={href} className="w-full p-2 px-4 flex gap-2 hover:bg-foreground hover:text-background rounded">
      {children}
    </Link>
  );
}