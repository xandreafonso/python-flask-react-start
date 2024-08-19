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
import { SettingsThemePage } from './router/SettingsTheme.tsx'
import { SettingsProfilePage } from './router/SettingsProfile.tsx'
import { SettingsBillingPage } from './router/SettingsBilling.tsx'
import { ClientsPage } from './router/Clients.tsx'
import { ProjectsPage } from './router/Projects.tsx'
import { IncomePage } from './router/Income.tsx'
import { ExpensesPage } from './router/Expenses.tsx'

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
        path: '/clients',
        element: <ClientsPage />
      }, {
        path: '/projects',
        element: <ProjectsPage />
      }, {
        path: '/income',
        element: <IncomePage />
      }, {
        path: '/expenses',
        element: <ExpensesPage />
      }, {
        path: '/settings',
        element: <SettingsPage />,
        children: [
          {
            path: '/settings',
            element: <Navigate to="/settings/profile" />
          }, {
            path: '/settings/profile',
            element: <SettingsProfilePage />
          }, {
            path: '/settings/billing',
            element: <SettingsBillingPage />
          }, {
            path: '/settings/theme',
            element: <SettingsThemePage />
          }
        ]
      },
    ]
  }, {
    path: '*',
    element: <Error404Page />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
