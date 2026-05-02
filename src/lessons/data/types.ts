export interface Choice {
    letter: "A" | "B" | "C" | "D";
    text: string;
    correct: boolean;
    explanation: string;
}

export interface Question {
    id: string;
    passage: string;
    prompt: string;
    choices: Choice[];
    difficulty: "easy" | "medium" | "hard";
    trap?: string;
}

export interface LessonRule {
    name: string;
    body: string;
}

export interface Trap {
    name: string;
    body: string;
}

export interface Lesson {
    slug: string;
    questionType: string;
    title: string;
    subtitle: string;
    metaDescription: string;
    publishedDate: string;
    youtubeUrl?: string;
    thumbnail: string;
    intro: string;
    mnemonic?: string;
    rules: LessonRule[];
    traps?: Trap[];
    sampleQuestions: Question[];
}

export interface LessonSummary {
    slug: string;
    questionType: string;
    title: string;
    subtitle: string;
    publishedDate: string;
    thumbnail: string;
}
