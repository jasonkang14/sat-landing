import { SITE } from "../data/site";

interface Props {
    label?: string;
    size?: "md" | "lg";
}

export function SubscribeButton({ label = "Subscribe on YouTube", size = "md" }: Props) {
    return (
        <a
            href={SITE.channelUrl}
            target="_blank"
            rel="noopener"
            className={`btn btn-yt${size === "lg" ? " btn-lg" : ""}`}
            aria-label={`Subscribe to ${SITE.channelHandle} on YouTube`}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
            </svg>
            {label}
        </a>
    );
}
