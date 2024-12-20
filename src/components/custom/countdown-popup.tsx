import React from "react";

interface CountdownPopupProps {
  onClose: () => void; // Callback to close the popup
}

const CountdownPopup: React.FC<CountdownPopupProps> = ({ onClose }) => {
  // Set the target date to December 5, 2024, 17:00 UTC
  // const targetDateUTC = new Date(Date.UTC(2024, 11, 5, 12, 0, 0)); 

  // const [timeLeft, setTimeLeft] = useState(() => targetDateUTC.getTime() - new Date().getTime());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeLeft((prev) => Math.max(prev - 1000, 0));
  //   }, 1000);

  //   return () => clearInterval(interval); 
  // }, [targetDateUTC]);

  // const formatTime = (ms: number) => {
  //   const totalSeconds = Math.floor(ms / 1000);
  //   const days = Math.floor(totalSeconds / 86400);
  //   const hours = Math.floor((totalSeconds % 86400) / 3600);
  //   const minutes = Math.floor((totalSeconds % 3600) / 60);
  //   const seconds = totalSeconds % 60;

  //   return {
  //     days: String(days).padStart(2, "0"),
  //     hours: String(hours).padStart(2, "0"),
  //     minutes: String(minutes).padStart(2, "0"),
  //     seconds: String(seconds).padStart(2, "0"),
  //   };
  // };

  // const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Popup Container */}
      <div
        className="relative shadow-lg max-w-xs md:max-w-sm text-center overflow-hidden
          transform scale-0 animate-popup"
      >
        {/* Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black -z-5 rounded-xl border-primary border-2" />

        {/* Popup Content */}
        <div className="relative md:p-20 p-10 text-white">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute text-lg top-2 right-3 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>

          {/* Timer Content */}
          <h2 className="md:text-3xl text-3xl font-bold md:mb-4 mb-6">
            Our <strong className="text-primary">Private Sale</strong> is live.
          </h2>
          {/* <div className="flex justify-center gap-4 text-lg font-bold">
            <div className="text-center">
              <div
                className="md:text-4xl text-3xl font-mono w-[50px]"
              >
                {days}
              </div>
              <div className="text-sm">DAYS</div>
            </div>
            <div className="text-center">
              <div
                className="md:text-4xl text-3xl font-mono w-[50px]"
              >
                {hours}
              </div>
              <div className="text-sm">HRS</div>
            </div>
            <div className="text-center">
              <div
                className="md:text-4xl text-3xl font-mono w-[50px]"
              >
                {minutes}
              </div>
              <div className="text-sm">MINS</div>
            </div>
            <div className="text-center">
              <div
                className="md:text-4xl text-3xl font-mono w-[50px]"
              >
                {seconds}
              </div>
              <div className="text-sm">SECS</div>
            </div>
          </div> */}
          <p className="text-sm mt-4 text-primary">
            Buy $AAV at an exclusive 70% discount!
          </p>
          <a
            href="https://solsale.app/presale/8zAN2TjF1hftviFo416YMw7ZUc9HuV1UD7Yexp1rDWrg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Join the Sale
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountdownPopup;
