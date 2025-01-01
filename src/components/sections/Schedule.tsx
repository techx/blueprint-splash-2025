import Modal from "../Modal";
import { useEffect, useState } from "react";

const learnathon_events: Record<string, string> = {
  "8:30am": "Check-in & breakfast",
  "9:30am": "Opening",
  "10:00am": "Workshop #1",
  "11:30am": "Tech Talk #1",
  "12:00pm": "Lunch",
  "1:00pm": "Organization Fair",
  "2:00pm": "Workshop #2",
  "3:15pm": "Workshop #3",
  "4:15pm": "Tech Talk #2",
  "5:00pm": "Workshop #4",
  "6:00pm": "Closing talk",
};
const hackathon_events: Record<string, string> = {
  "7:00am": "Check-in & breakfast",
  "8:00am": "Opening ceremony",
  "8:30am": "Team formation and ideation",
  "11:30am": "Mini-Event #1 (TBA)",
  "12:30pm": "Lunch",
  "1:30pm": "Mini-Event #2 (TBA)",
  "2:30pm": "Mini-Event #3 (TBA)",
  "3:00pm": "Mini-Event #4 (TBA)",
  "4:00pm": "Project submission deadline",
  "5:30pm": "Dinner",
  "5:30pm ": "Project Judging",
  "7:30pm": "Closing ceremony",
};

// const bpweek_events = [
//   ["Feb 29, 3:00pm", "Questbridge Talk"],
//   ["Feb 29, 8:00pm", "Design Workshop"],
//   ["Mar 1, 3:00pm", "AI for Dummies"],
//   ["Mar 1, 4:00pm", "Postman Workshop"],
// ];

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

        <div
          className={`overflow-y-scroll justify-center ${
            isMobile
              ? "text-black max-h-[65vh]"
              : "text-pale-yellow max-h-[32vh] md:max-h-[26vh] pr-4 w-[58vh] md:w-[40vw] absolute top-[62%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          }`}
        >
          {isMobile && (
            <h1 className="text-7xl font-bold mt-5 mb-3">Schedule</h1>
          )}
          {/* <div className="text-4xl font-bold mt-3 mb-3">BP Week</div>
            {bpweek_events.map(([date, event], index) => (
              <div key={index} className="flex flex-row space-x-4">
                <div className="w-1/2">{event}</div>
                <div className="w-1/2 text-right">{date}</div>
              </div>
            ))} */}
          <h2 className="text-4xl font-bold mt-3 mb-3">Learnathon [3/1]</h2>
          {Object.entries(learnathon_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-1/2">{event}</div>
              <div className="w-1/2 text-right">{time}</div>
            </div>
          ))}
          <h2 className="text-4xl font-bold mt-3 mb-3">Hackathon [3/2]</h2>
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
