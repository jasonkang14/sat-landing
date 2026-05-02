import type { Lesson, LessonSummary } from "./types";
import { wordsInContext } from "./words-in-context";

export const LESSONS: Lesson[] = [wordsInContext];

export const LESSON_SUMMARIES: LessonSummary[] = LESSONS.map((l) => ({
    slug: l.slug,
    questionType: l.questionType,
    title: l.title,
    subtitle: l.subtitle,
    publishedDate: l.publishedDate,
    thumbnail: l.thumbnail,
}));
