import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Index />
    <Toaster position="top-right" richColors />
  </StrictMode>,
);
