const COUNTERS = [
    { num: "10", label: "SAT R&W question types covered" },
    { num: "Daily", label: "New videos shipped" },
    { num: "54", label: "Questions per module" },
    { num: "100%", label: "Original, copyright-safe content" },
];

export function Proof() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-eyebrow">By the numbers</div>
                <h2>Built for the 2026 Digital SAT</h2>
                <p className="section-lede">
                    A growing library, a daily cadence, and a format that
                    matches the real test — module length, passage length,
                    difficulty mix, all of it.
                </p>
                <div className="proof-grid">
                    {COUNTERS.map((c) => (
                        <div className="proof-card" key={c.label}>
                            <div className="proof-num">{c.num}</div>
                            <div className="proof-label">{c.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
