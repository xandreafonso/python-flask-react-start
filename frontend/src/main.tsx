import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { ThemeProvider } from "@/components/Theme-provider"

import './index.css'
import { App } from './App.tsx'
import { ErrorPage } from './router/Error.tsx'
import { Error404Page } from './router/Error404.tsx'
import { SettingsPage } from './router/Settings.tsx'
import { DashboardPage } from './router/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      }, {
        path: '/dashboard',
        element: <DashboardPage />
      }, {
        path: '/settings',
        element: <SettingsPage />
      },
    ]
  }, {
    path: '*',
    element: <Error404Page />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
