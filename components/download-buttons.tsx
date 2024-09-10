// components/AppDownloadButtons.js
import styles from './AppDownloadButtons.module.css';

const AppDownloadButtons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <a
        href="https://apps.apple.com/app/erdeme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
          alt="Available on the App Store"
          className={styles.badge}
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=erdeme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
          alt="Get it on Google Play"
          className={styles.badge}
        />
      </a>
    </div>
  );
};

export default AppDownloadButtons;