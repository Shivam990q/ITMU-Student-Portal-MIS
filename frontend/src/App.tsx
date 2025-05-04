import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/components/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import NotFound from "@/pages/NotFound";
import AttendancePage from "@/pages/AttendancePage";
import PreRegistrationFormPage from "@/pages/PreRegistrationFormPage";
import StudentProfilePage from "@/pages/StudentProfilePage";
import InternalMarksPage from "@/pages/InternalMarksPage";
import NoDuesPage from "@/pages/NoDuesPage";
import ViewResultPage from "@/pages/ViewResultPage";
import "./App.css";

// Preload routes to ensure immediate navigation
const routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/attendance", element: <AttendancePage /> },
  { path: "/pre-registration-form", element: <PreRegistrationFormPage /> },
  { path: "/student-profile", element: <StudentProfilePage /> },
  { path: "/internal-marks", element: <InternalMarksPage /> },
  { path: "/no-dues", element: <NoDuesPage /> },
  { path: "/view-result", element: <ViewResultPage /> },
  { path: "*", element: <NotFound /> }
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Reduce unnecessary refetches
      retry: false, // Don't retry failed requests by default
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
