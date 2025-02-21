const ScheduleMobile = () => {
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

  // TODO: make sure image covers all text
  // TODO: fix for ipad size, maybe distinguish md and smaller screen sizes
  return (
    <section id="Schedule">
      <div
        className="relative h-[240vw]"
        style={{
          backgroundImage: "url('/images/Schedule/sched_mobile.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 text-pale-yellow h-[160vw] w-[60vw] mx-auto translate-y-[40vw] overflow-y-auto overflow-x-hidden">
          <p className="text-m font-bold mt-3 mb-3 text-center">
            Subject to change!
          </p>

          <h2 className="text-4xl font-bold mb-3 break-words">
            BLUEPRINT WEEK [2/26-2/28]
          </h2>
          {Object.entries(bpweek_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-3/4">{event}</div>
              <div className="w-1/8 text-right whitespace-nowrap">{time}</div>
            </div>
          ))}

          <h2 className="text-4xl font-bold mb-3 break-words">
            LEARNATHON [3/1]
          </h2>
          <p className="text-lg font-bold mb-2">Location: Stata Center</p>
          {Object.entries(learnathon_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-3/4">{event}</div>
              <div className="w-1/8 text-right whitespace-nowrap">{time}</div>
            </div>
          ))}

          <h2 className="text-4xl font-bold mt-6 mb-3 break-words">
            HACKATHON [3/2]
          </h2>
          <p className="text-lg font-bold mb-2">
            Location: E14 MIT Media Lab, 6th Floor
          </p>
          {Object.entries(hackathon_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-3/4">{event}</div>
              <div className="w-1/8 text-right whitespace-nowrap">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleMobile;
