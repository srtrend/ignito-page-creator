import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import Downloads from "@/pages/Downloads";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
    <Toaster position="top-right" richColors />
  </StrictMode>,
);
