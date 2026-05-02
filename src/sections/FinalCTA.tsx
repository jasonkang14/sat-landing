import { SubscribeButton } from "../components/SubscribeButton";

export function FinalCTA() {
    return (
        <section className="final-cta">
            <h2>Subscribe for the Daily Drill.</h2>
            <p>
                Two long-form tutorials a week. A new Short most days. Built for
                the Digital SAT. Free, ad-light, and explained like a real tutor
                — not a textbook.
            </p>
            <SubscribeButton size="lg" />
        </section>
    );
}
