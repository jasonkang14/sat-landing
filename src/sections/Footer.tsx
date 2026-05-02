import { SITE } from "../data/site";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span>
                    © {new Date().getFullYear()} {SITE.siteName}. Free SAT prep, made with care.
                </span>
                <div className="footer-links">
                    <a href={SITE.channelUrl} target="_blank" rel="noopener">
                        YouTube
                    </a>
                    <a href="/lessons/">Lessons</a>
                    <a href={`https://${SITE.domain}/`}>Home</a>
                </div>
            </div>
        </footer>
    );
}
