import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessonPage } from "../LessonPage";
import { wordsInContext } from "../data/words-in-context";
import "../../index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LessonPage lesson={wordsInContext} />
    </StrictMode>,
);
