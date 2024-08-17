import { Link, Outlet } from 'react-router-dom'
import { Button } from './components/ui/button';

import {
  Settings,
  BarChart,
  Smartphone,
  LogOut,
} from "lucide-react";

export function App() {

  return <>  
  <div className="h-full flex">
    <aside className="h-full w-60 flex flex-col gap-5 bg-secondary">
      <header className="h-20 pl-4 flex items-center">
        <div className="flex gap-2 text-xl">
          <Smartphone />
          One App
        </div>
      </header>

      <div className="h-full flex flex-col justify-between">
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

        <nav className="m-2 py-2 flex flex-col gap-4">
          <Button variant="link" className="flex gap-4 items-start justify-start text-primary">
            <LogOut />
            Sair
          </Button>
        </nav>
      </div>
    </aside>    

    <main className="w-full flex-1 p-4 flex">
      <Outlet />      
    </main>
  </div>
  </>
}

function LinkItem({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link to={href} className="w-full p-2 px-4 flex gap-2 hover:bg-foreground hover:text-background">
      {children}
    </Link>
  );
}