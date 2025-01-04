const ScheduleMobile = () => {
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
            LEARNATHON [3/1]
          </h2>
          {Object.entries(learnathon_events).map(([time, event], index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div className="w-3/4">{event}</div>
              <div className="w-1/8 text-right whitespace-nowrap">{time}</div>
            </div>
          ))}

          <h2 className="text-4xl font-bold mt-6 mb-3 break-words">
            HACKATHON [3/2]
          </h2>
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
