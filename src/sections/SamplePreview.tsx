import thumbnail from "../assets/slides/words-in-context-thumbnail.png";

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
                    <div className="thumbnail-frame">
                        <div className="thumbnail-glow" />
                        <img
                            src={thumbnail}
                            alt="Words in Context — Predict, Don't Pick: The C.S.P.M. Formula. Sample SAT R&W tutorial thumbnail showing a fill-in-the-blank Gutenberg press passage with four answer choices."
                            width={1280}
                            height={720}
                            loading="lazy"
                        />
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
