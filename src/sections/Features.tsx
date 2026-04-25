import answerRevealed from "../assets/slides/answer-revealed.png";
import passageQuestion from "../assets/slides/passage-question.png";
import centralIdeasRules from "../assets/slides/central-ideas-rules.png";
import boundariesTitle from "../assets/slides/boundaries-title.png";
import textStructureTitle from "../assets/slides/text-structure-title.png";

const FEATURES = [
    {
        tag: "AI-validated",
        title: "Every wrong answer explained — and double-checked",
        body: "Per-choice explanations are written by Claude Opus, then a separate logic critic re-reads each one. Bad explanations never reach the video.",
        thumb: answerRevealed,
        alt: "Real tutorial slide showing the correct answer (A) revealed in green with a checkmark.",
    },
    {
        tag: "Original",
        title: "100% copyright-safe passages, written for each question type",
        body: "Domain-varied across science, literature, history, and social science. No recycled paper-test passages, ever.",
        thumb: passageQuestion,
        alt: "Real tutorial slide showing an original passage about ukiyo-e prints with a 4-choice main idea question.",
    },
    {
        tag: "Rules-first",
        title: "3 named checks before any examples",
        body: "Every video opens with the 3 rules that catch every trap on that question type — like Scope, Stance, Specificity for main ideas.",
        thumb: centralIdeasRules,
        alt: "Real tutorial slide titled 'The Rules' showing Scope, Stance, and Specificity as numbered cards.",
    },
    {
        tag: "Calibrated",
        title: "8 examples, easy → hard — matching the real Digital SAT",
        body: "Difficulty distribution mirrors the test: 30% easy, 40% medium, 30% hard. Practice tests are a full 54 questions per module.",
        thumb: boundariesTitle,
        alt: "Real tutorial title slide for the SAT Boundaries (punctuation) lesson.",
    },
    {
        tag: "Daily",
        title: "New video every single day, automated",
        body: "An automated Sun→Sat schedule ships a long-form tutorial Mon/Thu and a YouTube Short on Tue/Wed/Fri/Sat. There's always something new.",
        thumb: textStructureTitle,
        alt: "Real tutorial title slide for the SAT Text Structure & Purpose lesson.",
    },
];

export function Features() {
    return (
        <section className="section">
            <div className="container">
                <div className="section-eyebrow">What you get</div>
                <h2>What's on the Channel</h2>
                <p className="section-lede">
                    Five things you won't find in your prep book — pulled
                    directly from the production pipeline behind every video.
                </p>
                <div className="feature-grid">
                    {FEATURES.map((f, i) => (
                        <article
                            className={`feature-card${i === 0 ? " span-2" : ""}`}
                            key={f.title}
                        >
                            <div className="feature-thumb">
                                <img
                                    src={f.thumb}
                                    alt={f.alt}
                                    width={1920}
                                    height={1080}
                                    loading="lazy"
                                />
                            </div>
                            <div className="feature-body">
                                <span className="feature-tag">{f.tag}</span>
                                <h3>{f.title}</h3>
                                <p>{f.body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
