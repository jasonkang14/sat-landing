import { useState } from "react";
import { SubscribeButton } from "../components/SubscribeButton";
import { Footer } from "../sections/Footer";
import { LessonHeader } from "./LessonHeader";
import type { Lesson } from "./data/types";

export function LessonPage({ lesson }: { lesson: Lesson }) {
    return (
        <>
            <LessonHeader />
            <article className="lesson">
                <div className="lesson-hero">
                    <span className="lesson-question-type">
                        {lesson.questionType}
                    </span>
                    <h1>{lesson.title}</h1>
                    <p className="lesson-subtitle">{lesson.subtitle}</p>
                    <div className="lesson-meta">
                        <time dateTime={lesson.publishedDate}>
                            {formatDate(lesson.publishedDate)}
                        </time>
                        <span aria-hidden="true">·</span>
                        <span>~6 min read</span>
                    </div>
                </div>

                <div className="lesson-body container container-prose">
                    <figure className="lesson-thumbnail">
                        <img
                            src={lesson.thumbnail}
                            alt={`${lesson.questionType} tutorial thumbnail: ${lesson.title}`}
                            width={1280}
                            height={720}
                            loading="eager"
                            fetchPriority="high"
                        />
                        {lesson.youtubeUrl && (
                            <figcaption>
                                <a
                                    href={lesson.youtubeUrl}
                                    target="_blank"
                                    rel="noopener"
                                    className="btn btn-yt"
                                >
                                    ▶ Watch on YouTube
                                </a>
                            </figcaption>
                        )}
                    </figure>

                    <p className="lesson-intro">{lesson.intro}</p>

                    <section className="lesson-section">
                        <h2>The {lesson.rules.length} Rules</h2>
                        <ol className="rule-list">
                            {lesson.rules.map((rule, i) => (
                                <li className="rule-item" key={rule.name}>
                                    <div className="rule-num">
                                        {i + 1}
                                    </div>
                                    <div className="rule-text">
                                        <h3>{rule.name}</h3>
                                        <p>{rule.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="lesson-section">
                        <h2>Worked Example</h2>
                        <SampleQuestion lesson={lesson} />
                    </section>

                    <section className="lesson-section lesson-cta">
                        <h2>Want every lesson like this?</h2>
                        <p>
                            New tutorial twice a week, plus a daily Short.
                            All free, all on YouTube.
                        </p>
                        <SubscribeButton size="lg" />
                    </section>
                </div>
            </article>
            <Footer />
        </>
    );
}

function SampleQuestion({ lesson }: { lesson: Lesson }) {
    const { sampleQuestion } = lesson;
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="sample-question">
            <div className="sample-question-header">
                <span className="sample-question-num">Question 2</span>
                <span className={`diff-${sampleQuestion.difficulty}`}>
                    Difficulty: {sampleQuestion.difficulty}
                </span>
            </div>
            <blockquote className="sample-passage">
                {sampleQuestion.passage}
            </blockquote>
            <p className="sample-prompt">
                <strong>{sampleQuestion.prompt}</strong>
            </p>
            <ol className="sample-choices" type="A">
                {sampleQuestion.choices.map((c) => (
                    <li
                        key={c.letter}
                        className={
                            revealed
                                ? c.correct
                                    ? "choice correct"
                                    : "choice incorrect"
                                : "choice"
                        }
                    >
                        <div className="choice-row">
                            <span className="choice-letter">
                                ({c.letter})
                            </span>
                            <span className="choice-text">{c.text}</span>
                            {revealed && c.correct && (
                                <span className="choice-badge" aria-label="Correct">
                                    ✓
                                </span>
                            )}
                        </div>
                        {revealed && (
                            <p className="choice-explanation">
                                {c.explanation}
                            </p>
                        )}
                    </li>
                ))}
            </ol>
            <button
                type="button"
                className="btn btn-secondary reveal-btn"
                onClick={() => setRevealed((r) => !r)}
            >
                {revealed ? "Hide explanations" : "Show answer & explanations"}
            </button>
        </div>
    );
}

function formatDate(iso: string) {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
