import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/summary"
            element={
              <Placeholder
                title="오늘의 업무 요약"
                description="AI가 오늘의 업무를 요약해 드립니다."
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Placeholder
                title="나의 에이전트 설정"
                description="에이전트를 사용자 맞춤으로 설정할 수 있습니다."
              />
            }
          />
          <Route
            path="/teams"
            element={
              <Placeholder
                title="Teams"
                description="팀 협업 기능을 제공합니다."
              />
            }
          />
          <Route
            path="/portal"
            element={
              <Placeholder
                title="Portal"
                description="포털 기능을 제공합니다."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
