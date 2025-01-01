import Modal from "../Modal";
import { useEffect, useState } from "react";

const learnathon_events: Record<string, string> = {
  "8:30am": "Mandatory Check-in",
  "9:30am": "Learnathon Opening",
  "10:00am": "Workshop #1",
  "11:30am": "Tech Talk #1 + #2",
  "12:00pm": "Lunch Break",
  "1:00pm": "Orgs Fair",
  "2:00pm": "Workshop #2",
  "3:15pm": "Workshop #3",
  "4:15pm": "Ideation + Team Formation",
  "5:00pm": "Workshop #4",
  "6:00pm": "Learnathon Closing",
  // "6:30pm": "Speedfriending",
};
const hackathon_events: Record<string, string> = {
  "7:00am": "Mandatory Check-in",
  "8:00am": "Opening Ceremony",
  "8:30am": "Git & Terminal Workshop",
  "11:30am": "MIT Student Panel",
  "12:30pm": "Lunch Break",
  "12:30pm ": "Mini Event #1: Meet Wide Tim!",
  "2:15pm": "Mini Event #2: Campus excursion",
  "3:00pm": "Mini Event #3: Tetris",
  "4:00pm": "Mini Event #4: Cup stacking",
  "5:30pm": "Project submission deadline",
  "5:30pm ": "Dinner",
  "6:00pm": "Judging",
  "7:30pm": "Closing Ceremony",
};

const bpweek_events = [
  ["Feb 29, 3:00pm", "Questbridge Talk"],
  ["Feb 29, 8:00pm", "Design Workshop"],
  ["Mar 1, 3:00pm", "AI for Dummies"],
  ["Mar 1, 4:00pm", "Postman Workshop"],
];

const Schedule = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-center w-[95%]">
        <Modal className="w-[85%]">
          <div className="items-center justify-center flex flex-col -mt-[7%]">
            {!isMobile && (
              <img
                src="/schedule/bg_transparent.png"
                alt="Schedule"
                className="max-h-[80vh] m-auto"
              />
            )}
          </div>

          <div
            className={`overflow-y-scroll justify-center ${
              isMobile
                ? "text-black max-h-[65vh]"
                : "text-white max-h-[35vh] pr-4 w-[40%] -mt-[47vh] ml-[25vw]"
            }`}
          >
            {isMobile && (
              <div className="text-4xl font-bold mt-5 mb-3">Schedule</div>
            )}
            <div className="text-4xl font-bold mt-3 mb-3">BP Week</div>
            {bpweek_events.map(([date, event], index) => (
              <div key={index} className="flex flex-row space-x-4">
                <div className="w-1/2">{event}</div>
                <div className="w-1/2 text-right">{date}</div>
              </div>
            ))}
            <div className="text-4xl font-bold mt-3 mb-3">Learnathon</div>
            {Object.entries(learnathon_events).map(([time, event], index) => (
              <div key={index} className="flex flex-row space-x-4">
                <div className="w-1/2">{event}</div>
                <div className="w-1/2 text-right">{time}</div>
              </div>
            ))}
            <div className="text-4xl font-bold mt-3 mb-3">Hackathon</div>
            {Object.entries(hackathon_events).map(([time, event], index) => (
              <div key={index} className="flex flex-row space-x-4">
                <div className="w-1/2">{event}</div>
                <div className="w-1/2 text-right">{time}</div>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Schedule;
