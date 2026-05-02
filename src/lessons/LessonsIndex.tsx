import { Footer } from "../sections/Footer";
import { LessonHeader } from "./LessonHeader";
import { LESSON_SUMMARIES } from "./data";

export function LessonsIndex() {
    return (
        <>
            <LessonHeader />
            <section className="lesson-index">
                <div className="container container-prose">
                    <div className="section-eyebrow">All lessons</div>
                    <h1>Digital SAT R&amp;W Lessons</h1>
                    <p className="section-lede">
                        Every long-form tutorial as a written breakdown.
                        Read the rules, work the example, watch the video.
                    </p>
                    <ul className="lesson-list">
                        {LESSON_SUMMARIES.map((l) => (
                            <li className="lesson-card" key={l.slug}>
                                <a href={`/lessons/${l.slug}/`}>
                                    <div className="lesson-card-thumb">
                                        <img
                                            src={l.thumbnail}
                                            alt={`${l.questionType}: ${l.title}`}
                                            width={1280}
                                            height={720}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="lesson-card-body">
                                        <span className="lesson-question-type">
                                            {l.questionType}
                                        </span>
                                        <h2>{l.title}</h2>
                                        <p>{l.subtitle}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}
