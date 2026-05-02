import { SITE } from "../data/site";

export function LessonHeader() {
    return (
        <header className="lesson-topbar">
            <a href="/" className="lesson-home-link" aria-label="Back to home">
                <span aria-hidden="true">←</span> {SITE.siteName}
            </a>
            <a
                href="/lessons/"
                className="lesson-breadcrumb"
            >
                All lessons
            </a>
        </header>
    );
}
