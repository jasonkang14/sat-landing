import centralIdeasTitle from "../assets/slides/central-ideas-title.png";
import centralIdeasRules from "../assets/slides/central-ideas-rules.png";
import passageQuestion from "../assets/slides/passage-question.png";
import answerRevealed from "../assets/slides/answer-revealed.png";

const SLIDES = [
    { src: centralIdeasTitle, alt: "Central Ideas tutorial title slide." },
    { src: centralIdeasRules, alt: "Slide showing the three named rules: Scope, Stance, Specificity." },
    { src: passageQuestion, alt: "Slide showing an original passage with a 4-choice question." },
    { src: answerRevealed, alt: "Slide showing the correct answer revealed in green with a checkmark." },
] as const;

const STAGES = [
    {
        emoji: "📖",
        title: "Original Passage",
        body: "Domain-varied, copyright-safe — written fresh for the question type.",
    },
    {
        emoji: "📐",
        title: "3 Named Rules",
        body: "Scope · Stance · Specificity — the checks that catch every trap.",
    },
    {
        emoji: "❓",
        title: "Worked Example",
        body: "8 questions per lesson, ordered easy → hard, matching the real test.",
    },
    {
        emoji: "✅",
        title: "Per-Choice Explanation",
        body: "Every wrong answer is explained — not just the right one.",
    },
] as const;

export function SamplePreview() {
    return (
        <section className="section" id="sample">
            <div className="container">
                <div className="section-eyebrow">Inside a lesson</div>
                <h2>
                    Four Stages.{" "}
                    <span className="accent">Every Tutorial.</span>
                </h2>
                <p className="section-lede">
                    Every video on the channel follows the same four-stage flow.
                    Here's what each one looks like on screen.
                </p>
                <div className="sample-grid">
                    <div className="slide-deck" aria-hidden="true">
                        <div className="slide-deck-glow" />
                        {SLIDES.map((s, i) => (
                            <div
                                className="slide-card"
                                key={s.alt}
                                style={{ ["--i" as string]: i }}
                            >
                                <img
                                    src={s.src}
                                    alt={s.alt}
                                    width={1920}
                                    height={1080}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <ul className="stage-list">
                        {STAGES.map((s, i) => (
                            <li
                                className="stage-row"
                                key={s.title}
                                style={{ ["--i" as string]: i }}
                            >
                                <span className="stage-emoji" aria-hidden="true">
                                    {s.emoji}
                                </span>
                                <div className="stage-text">
                                    <h3>{s.title}</h3>
                                    <p>{s.body}</p>
                                </div>
                                <span className="stage-step">
                                    0{i + 1}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
