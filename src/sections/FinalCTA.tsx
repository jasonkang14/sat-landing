import { SubscribeButton } from "../components/SubscribeButton";

export function FinalCTA() {
    return (
        <section className="final-cta">
            <h2>Subscribe for Daily Practice.</h2>
            <p>
                One tutorial every day. Built for the Digital SAT. Free, ad-light,
                and explained like a real tutor — not a textbook.
            </p>
            <SubscribeButton size="lg" />
        </section>
    );
}
