import { TwitterFollowButton } from "react-twitter-embed";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        {" "}
        <p>
          {" "}
          ©{new Date().getFullYear()} &bull; Made with
          <a href="https://www.fentybeauty.com/" className={styles.iconLink}>
            💄
          </a>{" "}
          by <a href="https://aboutmonica.com">Monica Powell</a>{" "}
        </p>{" "}
        <TwitterFollowButton screenName={"waterproofheart"} /> &bull;{" "}
        <a
          href="https://twitter.com/httriri"
          target="_blank"
          rel="me noopener noreferrer"
        >
          @httriri
        </a>
      </div>
    </footer>
  );
}
