import { useState } from "react";
import { SubscribeButton } from "../components/SubscribeButton";
import { Footer } from "../sections/Footer";
import { LessonHeader } from "./LessonHeader";
import type { Lesson, Question } from "./data/types";

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
                        <span>~{estimatedReadMinutes(lesson)} min read</span>
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
                        {lesson.mnemonic && (
                            <p className="lesson-mnemonic">
                                Mnemonic: <strong>{lesson.mnemonic}</strong>
                            </p>
                        )}
                        <ol className="rule-list">
                            {lesson.rules.map((rule, i) => (
                                <li className="rule-item" key={rule.name}>
                                    <div className="rule-num">{i + 1}</div>
                                    <div className="rule-text">
                                        <h3>{rule.name}</h3>
                                        <p>{rule.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {lesson.traps && lesson.traps.length > 0 && (
                        <section className="lesson-section">
                            <h2>Traps to Watch For</h2>
                            <ul className="trap-list">
                                {lesson.traps.map((trap) => (
                                    <li className="trap-item" key={trap.name}>
                                        <h3>
                                            <span aria-hidden="true">⚠</span>{" "}
                                            {trap.name}
                                        </h3>
                                        <p>{trap.body}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section className="lesson-section">
                        <h2>Worked Examples</h2>
                        <p className="worked-examples-lede">
                            {lesson.sampleQuestions.length} sample questions,
                            ordered easy to hard. Try each on your own first,
                            then reveal the per-choice explanations.
                        </p>
                        <div className="sample-question-stack">
                            {lesson.sampleQuestions.map((q, i) => (
                                <SampleQuestion
                                    key={q.id}
                                    question={q}
                                    index={i + 1}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="lesson-section lesson-cta">
                        <h2>Want every lesson like this?</h2>
                        <p>
                            New tutorial twice a week, plus a daily Short. All
                            free, all on YouTube.
                        </p>
                        <SubscribeButton size="lg" />
                    </section>
                </div>
            </article>
            <Footer />
        </>
    );
}

function SampleQuestion({
    question,
    index,
}: {
    question: Question;
    index: number;
}) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="sample-question">
            <div className="sample-question-header">
                <span className="sample-question-num">Question {index}</span>
                <span className={`diff-${question.difficulty}`}>
                    Difficulty: {question.difficulty}
                </span>
            </div>
            <blockquote className="sample-passage">
                {question.passage}
            </blockquote>
            <p className="sample-prompt">
                <strong>{question.prompt}</strong>
            </p>
            <ol className="sample-choices" type="A">
                {question.choices.map((c) => (
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
                            <span className="choice-letter">({c.letter})</span>
                            <span className="choice-text">{c.text}</span>
                            {revealed && c.correct && (
                                <span
                                    className="choice-badge"
                                    aria-label="Correct"
                                >
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
            {revealed && question.trap && (
                <p className="sample-trap-tag">
                    Illustrates trap: <strong>{question.trap}</strong>
                </p>
            )}
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

function estimatedReadMinutes(lesson: Lesson): number {
    const ruleWords = lesson.rules.reduce(
        (n, r) => n + r.body.split(/\s+/).length,
        0,
    );
    const trapWords = (lesson.traps ?? []).reduce(
        (n, t) => n + t.body.split(/\s+/).length,
        0,
    );
    const introWords = lesson.intro.split(/\s+/).length;
    const questionWords = lesson.sampleQuestions.reduce((n, q) => {
        const passage = q.passage.split(/\s+/).length;
        const choices = q.choices.reduce(
            (m, c) =>
                m + c.text.split(/\s+/).length + c.explanation.split(/\s+/).length,
            0,
        );
        return n + passage + choices;
    }, 0);
    const total = ruleWords + trapWords + introWords + questionWords;
    return Math.max(3, Math.round(total / 220));
}

function formatDate(iso: string) {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
