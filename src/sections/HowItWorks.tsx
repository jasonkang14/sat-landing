const STEPS = [
    {
        title: "Original passage written",
        body: "A copyright-safe passage is generated for the exact question type — varied across science, literature, history, and social science.",
    },
    {
        title: "Claude Opus drafts every choice",
        body: "All four answer choices and per-choice explanations are written by Claude Opus, calibrated to a specific reasoning trap.",
    },
    {
        title: "AI critic re-checks each one",
        body: "A separate logic critic re-reads every explanation. Anything ambiguous or wrong is flagged and regenerated until it passes.",
    },
    {
        title: "Slides + voiceover ship to YouTube",
        body: "Validated content is rendered to 1920×1080 slides, narrated, assembled into MP4, and uploaded on a Sun→Sat schedule.",
    },
];

export function HowItWorks() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-eyebrow">Inside the pipeline</div>
                <h2>How It Works — From Question Bank to Tutorial</h2>
                <p className="section-lede">
                    Most SAT prep is one tutor writing in a notebook. This
                    channel runs a four-stage pipeline that won't render a video
                    until every explanation passes an AI accuracy gate.
                </p>
                <div className="how-grid">
                    {STEPS.map((s) => (
                        <article className="how-step" key={s.title}>
                            <h3>{s.title}</h3>
                            <p>{s.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
