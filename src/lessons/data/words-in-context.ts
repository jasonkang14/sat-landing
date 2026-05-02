import type { Lesson } from "./types";
import thumbnail from "../../assets/slides/words-in-context-thumbnail.png";

export const wordsInContext: Lesson = {
    slug: "words-in-context",
    questionType: "Words in Context",
    title: "Predict, Don't Pick — The C.S.P.M. Formula",
    subtitle:
        "Cover the choices, circle the signal, predict the meaning, then match. The 4-step routine that turns Words in Context into the most reliable points on the Digital SAT.",
    metaDescription:
        "Master Digital SAT Words in Context questions with the C.S.P.M. method: Cover the choices, Circle the signal, Predict in plain English, Match then plug-test. Free tutorial with 5 worked examples and per-choice explanations.",
    publishedDate: "2026-04-29",
    thumbnail,
    intro:
        "Words in Context asks you to fill a single blank with the most logical and precise word or phrase. The test isn't checking whether you know definitions — it's checking whether you can read the sentence around the blank and figure out what idea has to go there. Vocabulary helps, but the answer is always pinned to context cues you can point at.",
    mnemonic: "C.S.P.M. — Cover · Signal · Predict · Match",
    rules: [
        {
            name: "Cover the Choices",
            body: "Read the sentence with the blank, plus the sentence before or after it. Don't peek at A–D yet. Every wrong choice is engineered to sound plausible in isolation — if you read them first, your brain anchors on whichever one 'sounds smart' instead of the meaning the passage demands.",
        },
        {
            name: "Circle the Signal",
            body: "Find the word or punctuation that pins the blank's direction — a colon or em-dash, 'and' / 'also' (continuation), 'but' / 'though' / 'rather' (contrast), 'because' / 'since' / 'so' (cause), or a definition right next to the blank. Once you know the signal, three of the four choices are usually pointing the wrong way.",
        },
        {
            name: "Predict in Plain English",
            body: "Say out loud — or write down — what the blank means in your own words. Two-word predictions are fine ('brings news,' 'won't happen'). Predicting before matching is the entire trick. Students who skip this step lose 80% of their mistakes — they pick whichever choice 'feels close' instead of the one that matches a concrete idea they wrote down.",
        },
        {
            name: "Match, then Plug-Test",
            body: "Find the choice closest to your prediction. Plug it in and read the sentence aloud. The right answer must work in BOTH meaning and tone — no register clash, no over- or understatement. Plug-testing catches connotation traps where the dictionary definition is right but the vibe contradicts the passage.",
        },
    ],
    traps: [
        {
            name: "Same-topic distractor",
            body: "A choice that relates to the passage's topic but doesn't fit the specific blank. A garden passage may make 'memory' look atmospheric — but if the sentence is about a SCENT, 'memory' is grading the topic instead of the sentence. The #1 mistake on this question type.",
        },
        {
            name: "Direction trap",
            body: "A choice that goes the wrong way relative to the signal word. The passage uses 'but' or 'yet' — your prediction needs to flip — and the trap choice continues the previous idea instead of contrasting it.",
        },
        {
            name: "Connotation trap",
            body: "A choice whose dictionary definition is fine but whose connotation conflicts with the passage's tone. 'Exhaustive' (thorough, positive) vs. 'exhausting' (draining, negative) — students who only check the definition miss the tone mismatch. Always plug-test for vibe.",
        },
    ],
    sampleQuestions: [
        {
            id: "T001",
            difficulty: "easy",
            passage:
                "Recent advancements in microbiology have revealed the profound influence of gut microbiota on human health. Studies suggest that these microorganisms contribute to immunity, digestion, and even mental health. Their role in regulating neurotransmitter production highlights their potential impact on disorders such as anxiety and depression, yet many mechanisms remain poorly _____.",
            prompt:
                "Which choice completes the text with the most logical and precise word or phrase?",
            choices: [
                {
                    letter: "A",
                    text: "understood",
                    correct: true,
                    explanation:
                        "The passage tells us studies have REVEALED the influence of gut microbiota and that role HIGHLIGHTS potential impact — so the field has made discoveries. The contrast signal 'yet' tells us the blank goes the OPPOSITE direction: there are still gaps. 'Mechanisms remain poorly understood' captures exactly that gap.",
                },
                {
                    letter: "B",
                    text: "developed",
                    correct: false,
                    explanation:
                        "Mechanisms aren't 'developed' — they exist in nature. This choice mismatches the kind of thing being talked about (a process, not a product).",
                },
                {
                    letter: "C",
                    text: "addressed",
                    correct: false,
                    explanation:
                        "'Addressed' is too vague and doesn't fit 'poorly' as a degree word — a mechanism isn't addressed, a problem is.",
                },
                {
                    letter: "D",
                    text: "controlled",
                    correct: false,
                    explanation:
                        "'Controlled' shifts the topic to intervention, but the sentence is about scientific knowledge, not control.",
                },
            ],
        },
        {
            id: "T002",
            difficulty: "easy",
            trap: "Direction trap",
            passage:
                "The invention of the Gutenberg press around 1440 revolutionized the production of books in Europe. This innovation enabled the ________ dissemination of knowledge, thereby fostering the Renaissance, a period of immense cultural, artistic, and scientific growth. By reducing the cost and time required to produce texts, the press made information more accessible than ever before.",
            prompt:
                "Which choice completes the text with the most logical and precise word or phrase?",
            choices: [
                {
                    letter: "A",
                    text: "limited",
                    correct: false,
                    explanation:
                        "DIRECTION TRAP. 'Limited' is the opposite of what the passage describes — the press EXPANDED access, didn't restrict it.",
                },
                {
                    letter: "B",
                    text: "widespread",
                    correct: true,
                    explanation:
                        "The passage says the press 'revolutionized' production and made information 'more accessible than ever before.' Predict a positive, broad-reach word. 'Widespread' is the direct match.",
                },
                {
                    letter: "C",
                    text: "sporadic",
                    correct: false,
                    explanation:
                        "'Sporadic' (irregular, scattered) contradicts 'revolutionized' and 'more accessible than ever.'",
                },
                {
                    letter: "D",
                    text: "experimental",
                    correct: false,
                    explanation:
                        "'Experimental' doesn't fit — the dissemination wasn't a trial, it was a transformation.",
                },
            ],
        },
        {
            id: "T003",
            difficulty: "medium",
            trap: "Same-topic distractor",
            passage:
                "Impressionism emerged in late 19th-century France as a revolutionary approach to painting. Instead of adhering to traditional techniques, artists of this movement focused on capturing the fleeting effects of light and color, often painting outdoors en plein air to achieve their desired ______. This emphasis broke away from the highly detailed and idealized depictions favored by the academic art of the time.",
            prompt:
                "Which choice completes the text with the most logical and precise word or phrase?",
            choices: [
                {
                    letter: "A",
                    text: "urgency",
                    correct: false,
                    explanation:
                        "'Urgency' is the wrong feeling — fleeting doesn't mean urgent. Nothing in the passage signals time pressure.",
                },
                {
                    letter: "B",
                    text: "tranquility",
                    correct: false,
                    explanation:
                        "SAME-TOPIC DISTRACTOR. Impressionist paintings can FEEL tranquil — gardens, water lilies — but the sentence is about what artists were trying to ACHIEVE technically. Tranquility is a vibe of the topic, not the goal stated in the sentence.",
                },
                {
                    letter: "C",
                    text: "essence",
                    correct: true,
                    explanation:
                        "The artists 'capture the fleeting effects of light and color' — that's the essential quality they're after. 'Essence' (the core nature of something) names exactly that. The blank is what they wanted to capture in their paintings.",
                },
                {
                    letter: "D",
                    text: "ambition",
                    correct: false,
                    explanation:
                        "'Ambition' is something a painter has, not something they paint outdoors to capture. Wrong target for the verb 'achieve.'",
                },
            ],
        },
        {
            id: "T004",
            difficulty: "medium",
            trap: "Direction trap",
            passage:
                "The development of advanced medical imaging techniques has revolutionized the diagnosis and treatment of various diseases. By allowing physicians to visualize internal organs with unprecedented clarity, technologies such as MRI and CT scans have ______ the need for invasive exploratory surgery. This significant advancement has not only improved patient outcomes but has also reduced healthcare costs significantly.",
            prompt:
                "Which choice completes the text with the most logical and precise word or phrase?",
            choices: [
                {
                    letter: "A",
                    text: "amplified",
                    correct: false,
                    explanation:
                        "DIRECTION TRAP. 'Amplified' is the exact opposite — better imaging would NOT increase the need for surgery. The passage is unambiguously positive about imaging replacing surgery.",
                },
                {
                    letter: "B",
                    text: "eliminated",
                    correct: true,
                    explanation:
                        "The passage frames imaging as a positive substitute for invasive surgery — 'improved outcomes,' 'reduced costs.' If MRI lets doctors see inside the body, you don't need to cut. Predict 'removed' or 'gotten rid of.' 'Eliminated' matches.",
                },
                {
                    letter: "C",
                    text: "dampened",
                    correct: false,
                    explanation:
                        "'Dampened' (weakened, reduced) is closer than 'amplified,' but it implies imaging only softened the need rather than removed it. The 'reduced costs' framing is too strong for 'dampened.'",
                },
                {
                    letter: "D",
                    text: "redistributed",
                    correct: false,
                    explanation:
                        "'Redistributed' makes no sense here — the need isn't being shuffled around, it's being made unnecessary.",
                },
            ],
        },
        {
            id: "T005",
            difficulty: "hard",
            trap: "Direction trap",
            passage:
                "Impressionism emerged in 19th-century France as a revolutionary approach to painting that emphasized light and color over fine details. Artists of this movement sought to capture fleeting moments and the ____ effects of light, often painting en plein air to observe natural conditions directly. This new style challenged the traditional methods taught in academic institutions and reshaped public perceptions of art.",
            prompt:
                "Which choice completes the text with the most logical and precise word or phrase?",
            choices: [
                {
                    letter: "A",
                    text: "transient",
                    correct: true,
                    explanation:
                        "The continuation signal 'and' tells us 'fleeting moments' and 'the ___ effects of light' point in the same direction. 'Fleeting' = brief, passing. Predict 'short-lived.' 'Transient' is the textbook synonym.",
                },
                {
                    letter: "B",
                    text: "static",
                    correct: false,
                    explanation:
                        "DIRECTION TRAP. 'Static' is the OPPOSITE of fleeting — fleeting means changing, static means unchanging. The 'and' signal demands the same direction as 'fleeting,' not the reverse.",
                },
                {
                    letter: "C",
                    text: "distorted",
                    correct: false,
                    explanation:
                        "'Distorted' is a connotation trap — it implies the artists rendered light incorrectly, but the passage admires their work. Wrong tone.",
                },
                {
                    letter: "D",
                    text: "methodical",
                    correct: false,
                    explanation:
                        "'Methodical' contradicts 'fleeting moments' — methodical implies systematic and slow, while the artists were chasing brief, changing effects.",
                },
            ],
        },
    ],
};
