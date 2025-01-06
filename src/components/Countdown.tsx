import { useState, useEffect } from "react";

export default function Countdown({
  className,
  to,
}: {
  className?: string;
  to: Date;
}) {
  const [[days, hours, minutes, seconds], setCountdown] = useState([
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      if (now > to) {
        setCountdown(["0", "0", "0", "0"]);
      } else {
        let differenceInMillis = to.getTime() - now.getTime();

        const days = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
        differenceInMillis -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
        differenceInMillis -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(differenceInMillis / (1000 * 60));
        differenceInMillis -= minutes * (1000 * 60);

        const seconds = Math.floor(differenceInMillis / 1000);

        setCountdown([days + "", hours + "", minutes + "", seconds + ""]);
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [to]);

  return (
    <div className={`${className}`}>
      <div>Applications due in</div>
      <div>
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    </div>
  );
}
