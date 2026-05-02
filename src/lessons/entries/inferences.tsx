import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessonPage } from "../LessonPage";
import { inferences } from "../data/inferences";
import "../../index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LessonPage lesson={inferences} />
    </StrictMode>,
);
