import { SubscribeButton } from "../components/SubscribeButton";
import heroSlide from "../assets/slides/answer-revealed.png";

export function Hero() {
    return (
        <header className="hero">
            <div className="hero-grid">
                <div className="hero-copy">
                    <span className="hero-eyebrow">
                        <span className="dot" /> New tutorial every day
                    </span>
                    <h1>
                        Free <span className="accent">Digital SAT</span> Reading
                        & Writing Practice — daily on YouTube.
                    </h1>
                    <p className="hero-sub">
                        AI-validated explanations. Original passages. Rules-first
                        teaching with 8 worked examples per lesson, ordered easy
                        to hard. Built for the post-2024 Digital SAT — not
                        recycled paper-test prep.
                    </p>
                    <div className="hero-ctas">
                        <SubscribeButton size="lg" label="▶ Subscribe for Daily Practice" />
                        <a href="#sample" className="btn btn-secondary btn-lg">
                            See a sample lesson ↓
                        </a>
                    </div>
                    <ul className="hero-meta">
                        <li className="hero-meta-item">
                            <Check /> 100% free, no email gate
                        </li>
                        <li className="hero-meta-item">
                            <Check /> Original passages, copyright-safe
                        </li>
                        <li className="hero-meta-item">
                            <Check /> Practice PDF with every video
                        </li>
                    </ul>
                </div>
                <div className="hero-visual">
                    <img
                        src={heroSlide}
                        alt="SAT central ideas question with the correct answer A highlighted in green — a real frame from a published tutorial."
                        width={1920}
                        height={1080}
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </div>
        </header>
    );
}

function Check() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
