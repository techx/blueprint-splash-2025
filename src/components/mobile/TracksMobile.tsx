import { useState } from "react";

const TracksMobile = () => {
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<
    "description" | "questions" | "resources"
  >("description");

  const tracks = [
    {
      id: 1,
      name: "BEGINNER WEB DEV",
      description:
        "In the Beginner Web Dev track, participants will learn to develop websites from scratch. " +
        "Students will learn the fundamentals of HTML, CSS, and JavaScript -- the essence of web applications. " +
        "This track is perfect for beginners as it'll introduce attendees to hackathons through the basics of web development. " +
        "Even if they've never coded before, this track will set them up with the skills and resources needed to create a hackathon project.",
      questions: [
        "Are you interested in learning to develop websites?",
        "Have you ever wondered how much work goes into designing and building websites?",
        "Are there any websites you think have a great design, and why?",
      ],
      resources: [
        {
          heading: "try.github.io",
          url: "try.github.io",
          desc: "Github reference page",
        },
        {
          heading: "FreeCodeCamp.org",
          url: "http://FreeCodeCamp.org",
          desc: "Intro to HTML/CSS, JavaScript, and responsive web design",
        },
        {
          heading: "HTMLDog",
          url: "https://htmldog.com/",
          desc: "Tutorials and techniques for implementing HTML/CSS",
        },
      ],
    },
    {
      id: 2,
      name: "ADVANCED WEB DEV",
      description:
        "In the Advanced Web Dev track, hackers who are already familiar with HTML, CSS, and JavaScript will learn React " +
        "and back-end development. This track is perfect for hackers who have experience creating websites, but want to " +
        "build upon the basics and learn how to build more complex and interactive web applications!",
      questions: [
        "Are there any particularly useful features you have noticed on certain websites that you believe could be more widely implemented?",
        "How do you think certain websites can be improved?",
        "Are there any website features that you would like to be able to implement but don't yet have the skills for?",
      ],
      resources: [
        {
          heading: "React Tutorial",
          url: "https://reactjs.org/tutorial/tutorial.html",
          desc: "Intro to React",
        },
        {
          heading: "JavaScript.info",
          url: "http://JavaScript.info",
          desc: "Intro to Javascript",
        },
      ],
    },
    {
      id: 3,
      name: "GAME DEVELOPMENT",
      description:
        "Want to learn how to build your own games? This track is a chance for hackers to boost their skills in game design. " +
        "Hackers and their teams will design games starting from ideation to a playable product. This track is split into two" +
        " subtracks, Beginner and Advanced, and taught using a variety of tools. Hackers with creative talents outside of programming have the " +
        "opportunity to apply their skills in this track. Minimal coding experience is recommended for the Beginner Game Dev track.",
      questions: [
        "Are you interested in making your own games?",
        "How can you bring your creativity into different aspects of game design (art, music, level design)?",
        "What are some of your favorite games and what makes them fun?",
      ],
      resources: [
        {
          heading: "Unity Learn",
          url: "https://learn.unity.com/",
          desc: "Tutorials to learn game development with Unity",
        },
        {
          heading: "Phaser",
          url: "https://phaser.io/",
          desc: "HTML5 game framework (web and mobile).",
        },
      ],
    },
    {
      id: 4,
      name: "HARDWARE",
      description:
        "Hardware gives participants the hands-on experience of wiring/experimenting with various electrical pieces as well as learning how to " +
        "utilize that hardware in code! We will start from the very beginning, teaching students how to use the basics of the C language and " +
        "the Arduino software. We also guide participants through the basics of making a circuit and how they work. The hardware track is meant " +
        "to expose students to the intersection of electrical engineering and computer science (EECS).",
      questions: [
        "Have you ever wondered how circuits and other electrical components work?",
        "Have you ever wanted to make your own circuit?",
        "Are there any appliances that currently don't exist that would be beneficial for your day-to-day?",
      ],
      resources: [
        {
          heading: "Arduino Setup Tutorial",
          url: "https://arduinogetstarted.com/",
          desc: "Learn how to set up an Arduino",
        },
        {
          heading: "Learn C!",
          url: "https://www.learn-c.org/",
          desc: "A C tutorial",
        },
      ],
    },
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-magenta/20 rounded-3xl p-6">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">TRACKS</h1>
          <p className="text-lg leading-relaxed">
            Blueprint offers a variety of workshops that fall into various
            tracks. These workshops are meant to develop skills that may be
            useful for your hackathon project. Explore this year's tracks below!
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="/images/Tracks/boxstates/box_opened.png"
            alt="Tracks"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="space-y-4">
        {tracks.map((track) => (
          <div key={track.id} className="border rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-pale-yellow hover:bg-pale-yellow/80 font-semibold text-xl flex justify-between items-center"
              onClick={() =>
                setExpandedTrack(expandedTrack === track.id ? null : track.id)
              }
            >
              {track.name}
              <span>{expandedTrack === track.id ? "−" : "+"}</span>
            </button>

            {expandedTrack === track.id && (
              <div className="p-4 bg-white">
                <div className="flex gap-4 mb-4">
                  {(["description", "questions", "resources"] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        className={`px-4 py-2 rounded ${
                          activeTab === tab
                            ? "bg-brown text-pale-yellow"
                            : "bg-gray-200"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </div>

                {activeTab === "description" && (
                  <p className="text-lg">{track.description}</p>
                )}

                {activeTab === "questions" && (
                  <ul className="list-disc pl-6 space-y-2">
                    {track.questions.map((question, idx) => (
                      <li key={idx} className="text-lg">
                        {question}
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "resources" && (
                  <div className="space-y-4">
                    {track.resources.map((resource, idx) => (
                      <div key={idx}>
                        <a
                          href={resource.url}
                          className="text-lg font-semibold text-blue-600 hover:underline"
                        >
                          {resource.heading}
                        </a>
                        <p className="text-gray-600">{resource.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksMobile;
