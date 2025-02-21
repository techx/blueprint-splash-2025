import Modal from "../Modal";
import { useEffect, useState } from "react";

const bpweek_events: Record<string, string> = {
  "Feb 26, 7:00pm": "Assistive Tech",
  "Feb 27, 7:00pm": "Motorsports",
  "Feb 27, 8:00pm": "Team Formation",
  "Feb 27, 9:00pm": "MITIT",
  "Feb 28, 7:00pm": "Battlecode",
  "Feb 28, 8:00pm": "Intro to Git",
  "Feb 28, 9:00pm": "Intro to Figma",
};

const learnathon_events: Record<string, string> = {
  "8:30am": "Check-in & Breakfast",
  "9:30am": "Opening",
  "10:00am": "Workshop #1",
  "11:30am": "Tech Talks",
  "12:00pm": "Lunch",
  "1:00pm": "Organization Fair",
  "2:00pm": "Workshop #2",
  "3:15pm": "Workshop #3",
  "4:15pm": "Team Formation",
  "5:00pm": "Workshop #4",
  "6:00pm": "Closing Talk",
};
const hackathon_events: Record<string, string> = {
  "7:00am": "Check-in & Breakfast",
  "8:00am": "Opening Ceremony",
  "8:30am": "Intro to Git Workshop (optional)",
  "12:30pm": "Lunch",
  "5:30pm": "Dinner",
  "6:00pm ": "Project Judging",
  "7:30pm": "Closing Ceremony",
};

const Schedule = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Modal className="w-[100%]">
        {!isMobile && (
          <div className="w-[110vh] md:w-[90vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
            <img
              src="/images/Schedule/sched_bg.svg"
              alt="Schedule"
              className="h-[100%] object-contain m-auto"
            />
          </div>
        )}

        <p className="text-sm text-pale-yellow font-bold mt-3 mb-3 text-center absolute top-[37%] left-[50%] -translate-x-[50%] -translate-y-[50]%">
          Subject to change!
        </p>

        <div
          className={`overflow-y-scroll justify-center  ${
            isMobile
              ? "text-black max-h-[65vh]"
              : "text-pale-yellow max-h-[30vh] md:max-h-[26vh] pr-4 mt-3 w-[56vh] md:w-[40vw] absolute top-[64%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          }`}
        >
          {isMobile && (
            <h1 className="text-7xl font-bold mt-5 mb-3">Schedule</h1>
          )}
          <h2 className="text-4xl font-bold mb-3">
            BLUEPRINT WEEK [2/26-2/28]
          </h2>
          {Object.entries(bpweek_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-1/2">{event}</div>
              <div className="w-1/2 text-right">{time}</div>
            </div>
          ))}
          <h2 className="text-4xl font-bold mb-3">LEARNATHON [3/1]</h2>
          <p className="text-lg font-bold mb-2">Location: Stata Center</p>
          {Object.entries(learnathon_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-1/2">{event}</div>
              <div className="w-1/2 text-right">{time}</div>
            </div>
          ))}
          <h2 className="text-4xl font-bold mt-3 mb-3">HACKATHON [3/2]</h2>
          <p className="text-lg font-bold mb-2">
            Location: E14 MIT Media Lab, 6th Floor
          </p>
          {Object.entries(hackathon_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-1/2">{event}</div>
              <div className="w-1/2 text-right">{time}</div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Schedule;
