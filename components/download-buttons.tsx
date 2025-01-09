// components/AppDownloadButtons.js
import styles from "./AppDownloadButtons.module.css";

const AppDownloadButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <div className="text-2xl font-semibold text-gray-300">Тун удахгүй...</div>
      <div className="flex gap-6">
        <div className="flex flex-col items-center opacity-60 cursor-not-allowed">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
            alt="App Store - Coming Soon"
            className="w-[200px] grayscale"
          />
          {/* <span className="text-sm text-gray-400 mt-2">Тун удахгүй</span> */}
        </div>

        <div className="flex flex-col items-center opacity-60 cursor-not-allowed">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play - Coming Soon"
            className="w-[200px] grayscale"
          />
          {/* <span className="text-sm text-gray-400 mt-2">Тун удахгүй</span> */}
        </div>
      </div>
    </div>
  );
};

export default AppDownloadButtons;
