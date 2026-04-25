import { Hero } from "./sections/Hero";
import { PainPoints } from "./sections/PainPoints";
import { HowItWorks } from "./sections/HowItWorks";
import { Features } from "./sections/Features";
import { SamplePreview } from "./sections/SamplePreview";
import { Proof } from "./sections/Proof";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export function App() {
    return (
        <>
            <Hero />
            <PainPoints />
            <HowItWorks />
            <Features />
            <SamplePreview />
            <Proof />
            <FAQ />
            <FinalCTA />
            <Footer />
        </>
    );
}
