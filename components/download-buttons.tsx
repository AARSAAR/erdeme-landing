// components/AppDownloadButtons.js
import styles from "./AppDownloadButtons.module.css";

const AppDownloadButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <div className="flex gap-6">
        <a
          href="https://apps.apple.com/mn/app/erdeme-bagsh/id6470268855"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80 active:opacity-70"
        >
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
              alt="App Store"
              className="w-[200px]"
            />
          </div>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.htp.erdeme_tutor"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80 active:opacity-70"
        >
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="w-[200px]"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default AppDownloadButtons;
