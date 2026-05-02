const PAIN_POINTS = [
    {
        quote: "I memorize the 'main idea' rules, but the trap answers still get me.",
        fix: (
            <>
                Every tutorial teaches <strong>3 named checks</strong> — Scope,
                Stance, Specificity — that catch the exact traps the test writers
                use. Then 8 worked examples show the trap landing in real time.
            </>
        ),
    },
    {
        quote: "Khan Academy hasn't fully updated for the new Digital SAT format.",
        fix: (
            <>
                Every passage is <strong>25–150 words</strong>, one question
                each — matching the post-March-2024 Digital SAT spec exactly.
                Practice tests run 54 questions per module.
            </>
        ),
    },
    {
        quote: "32 minutes per module is brutal. I run out of time on every section.",
        fix: (
            <>
                A <strong>30-second YouTube Short</strong> drops most days,
                each one drilling a single trap. Build pattern recognition so
                the right answer pops without re-reading.
            </>
        ),
    },
];

export function PainPoints() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-eyebrow">The problem</div>
                <h2>Struggling with SAT Reading? You're Not Alone.</h2>
                <p className="section-lede">
                    Most prep material was written for the paper SAT. Here's
                    what students keep telling us — and how this channel fixes
                    each one.
                </p>
                <div className="pain-grid">
                    {PAIN_POINTS.map((p) => (
                        <article className="pain-card" key={p.quote}>
                            <p className="pain-quote">{p.quote}</p>
                            <p className="pain-fix">{p.fix}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
