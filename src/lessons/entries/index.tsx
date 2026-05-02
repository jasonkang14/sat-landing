import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessonsIndex } from "../LessonsIndex";
import "../../index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LessonsIndex />
    </StrictMode>,
);
