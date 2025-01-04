import Modal from "../Modal";
import { useState } from "react";

const Tracks = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [hoverDonutImage, setHoverDonutImage] = useState(0);
  const [track, setTrack] = useState(0);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };
  return (
    <div>
      <Modal backgroundColor="#DABD93">
        <div className="flex space-x-5 flex-row items-center justify-center h-[60vh] p-0">
          <div className="flex flex-col justify-center min-w-[30%] max-w-[30%] max-h-[100%] h-[60vh]">
            <h1 className="text-7xl font-bold mb-6">TRACKS</h1>
            <p className="text-lg leading-relaxed overflow-y-auto max-h-[38vh]">
              Blueprint offers a variety of workshops that fall into various
              tracks. These workshops are meant to develop skills that may be
              useful for your hackathon project. Explore this year's tracks by
              clicking the box to the right!
            </p>
          </div>

          <div className="relative w-[60%] h-[100%] flex items-center justify-center rounded-3xl p- mt-8 shadow-lg bg-pale-yellow">
            {!isImageClicked && (
              <img
                className="h-full w-auto object-contain"
                src="/images/Tracks/boxstates/box_closed.png"
                alt="track"
                onClick={handleImageClick}
              />
            )}
            {isImageClicked && (
              <div className="h-full w-auto">
                {videoFinished ? (
                  hoverDonutImage ? (
                    <img
                      className="h-full w-auto object-contain z-49"
                      src={`/images/Tracks/boxstates/selected/donut${hoverDonutImage}.png`}
                      alt="track"
                    />
                  ) : (
                    <img
                      className="h-full w-auto object-contain z-49"
                      src={`/images/Tracks/boxstates/box_opened.png`}
                      alt="Full Box"
                    />
                  )
                ) : (
                  <video
                    className="h-full w-auto z-49 bg-transparent"
                    src={"/images/Tracks/boxstates/box_opening.webm"}
                    onEnded={() => setVideoFinished(true)}
                    autoPlay
                    muted
                  />
                )}
                {videoFinished && (
                  <>
                    {[
                      {
                        top: "-74%",
                        left: "24%",
                        track: 1,
                        text: "Beginner Web Dev",
                      },
                      {
                        top: "-97%",
                        left: "51%",
                        track: 4,
                        text: "Hardware",
                      },
                      {
                        top: "-96%",
                        left: "22%",
                        track: 2,
                        text: "Advanced Web Dev",
                      },
                      {
                        top: "-122%",
                        left: "52%",
                        track: 3,
                        text: "Game Development",
                      },
                    ].map(({ top, left, track: trackNum, text }) => (
                      <div
                        key={trackNum}
                        className="relative h-[24%] w-[24%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white cursor-pointer"
                        style={{
                          backgroundColor: "transparent",
                          top,
                          left,
                        }}
                        onClick={() => setTrack(trackNum)}
                        onMouseEnter={() => setHoverDonutImage(trackNum)}
                        onMouseLeave={() => setHoverDonutImage(0)}
                      >
                        <div className="text-pale-yellow text-center md:text-[10px]">
                          {text}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Modal>
      {track !== 0 && <TrackModal track={track} setTrack={setTrack} />}
    </div>
  );
};

export default Tracks;

function TrackModal({ track, setTrack }: { track: number; setTrack: any }) {
  const trackMap: Record<number, string> = {
    1: "BEGINNER WEB DEV",
    2: "ADVANCED WEB DEV",
    3: "GAME DEVELOPMENT",
    4: "HARDWARE",
  };

  const descriptionMap: Record<number, string> = {
    1:
      "In the Beginner Web Dev track, participants will learn to develop websites from scratch. " +
      "Students will learn the fundamentals of HTML, CSS, and JavaScript -- the essence of web applications. " +
      "This track is perfect for beginners as it’ll introduce attendees to hackathons through the basics of web development. " +
      "Even if they’ve never coded before, this track will set them up with the skills and resources needed to create a hackathon project. ",
    2:
      "In the Advanced Web Dev track, hackers who are already familiar with HTML, CSS, and JavaScript will learn React " +
      "and back-end development. This track is perfect for hackers who have experience creating websites, but want to " +
      "build upon the basics and learn how to build more complex and interactive web applications!",
    3:
      "Want to learn how to build your own games? This track is a chance for hackers to boost their skills in game design. " +
      "Hackers and their teams will design games starting from ideation to a playable product. This track is split into two" +
      " subtracks, Beginner and Advanced, and taught using a variety of tools. Hackers with creative talents outside of programming have the " +
      "opportunity to apply their skills in this track. Minimal coding experience is recommended for the Beginner Game Dev track.",
    4:
      "Hardware gives participants the hands-on experience of wiring/experimenting with various electrical pieces as well as learning how to " +
      "utilize that hardware in code! We will start from the very beginning, teaching students how to use the basics of the C language and " +
      "the Arduino software. We also guide participants through the basics of making a circuit and how they work. The hardware track is meant " +
      "to expose students to the intersection of electrical engineering and computer science (EECS).",
  };

  const questionMap: Record<number, Array<string>> = {
    1: [
      "Are you interested in learning to develop websites?",
      "Have you ever wondered how much work goes into designing and building websites?",
      "Are there any websites you think have a great design, and why?",
    ],
    2: [
      "Are there any particularly useful features you have noticed on certain websites that you believe could be more widely implemented?",
      "How do you think certain websites can be improved?",
      "Are there any website features that you would like to be able to implement but don’t yet have the skills for?",
    ],
    3: [
      "Are you interested in making your own games?",
      "How can you bring your creativity into different aspects of game design (art, music, level design)?",
      "What are some of your favorite games and what makes them fun?",
      "What are some of your favorite game mechanics and how can you incorporate them into your own game?",
    ],
    4: [
      "Have you ever wondered how circuits and other electrical components work?",
      "Have you ever wanted to make your own circuit?",
      "Are there any appliances that currently don't exist that would be beneficial for your day-to-day?",
      "Do you want to find out how code and hardware interact?",
      "Are you interested in learning a new language that specializes in interacting with hardware?",
    ],
  };

  const resourceMap: Record<
    number,
    Array<{ heading: string; url: string; desc: string }>
  > = {
    1: [
      {
        heading: "try.github.io",
        url: "try.github.io",
        desc: "Github reference page",
      },
      {
        heading: "Hubspot Tutorial",
        url: "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners",
        desc: "Introduction to Git for beginners",
      },
      {
        heading: "Lifewire",
        url: "https://www.lifewire.com/what-is-a-web-application-3486637",
        desc: "What is a webapp? (article)",
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
      {
        heading: "Codeacademy",
        url: "https://www.codecademy.com/",
        desc: "Beginner and more advanced web development tutorials",
      },
      {
        heading: "MozillaDocs (HTML)",
        url: "https://developer.mozilla.org/en-US/docs/Web/Tutorials",
        desc: "Tutorials for creating web pages with HTML spanning all skill levels",
      },
      {
        heading: "JavaScript.info",
        url: "http://JavaScript.info",
        desc: "Intro to Javascript",
      },
      {
        heading: "MozillaDocs (JavaScript)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript",
        desc: "An in-depth beginner’s guide to JavaScript",
      },
    ],
    2: [
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
      {
        heading: "Codeacademy",
        url: "https://www.codecademy.com/",
        desc: "Beginner and more advanced web development tutorials",
      },
      {
        heading: "JavaScript.info",
        url: "http://JavaScript.info",
        desc: "Intro to Javascript",
      },
      {
        heading: "MozillaDocs (JavaScript)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript",
        desc: "An in-depth beginner’s guide to JavaScript",
      },
      {
        heading: "React Tutorial",
        url: "https://reactjs.org/tutorial/tutorial.html",
        desc: "Intro to React",
      },
    ],
    3: [
      {
        heading: "try.github.io",
        url: "try.github.io",
        desc: "Github reference page",
      },
      {
        heading: "Hubspot Tutorial",
        url: "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners",
        desc: "Introduction to Git for beginners",
      },
      {
        heading: "CS50",
        url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbluXJKKbCIb4xd7fcRkpzoz",
        desc: "Extensive playlist covering introductory game development taught at Harvard CS50.",
      },
      {
        heading: "Phaser",
        url: "https://phaser.io/",
        desc: "HTML5 game framework (web and mobile).",
      },
      {
        heading: "LibreSprite",
        url: "https://libresprite.github.io/",
        desc: "Free and open source program for creating sprites.",
      },
      {
        heading: "Bosca Ceoil",
        url: "https://boscaceoil.net/",
        desc: "Free tool to create music aimed at beginners.",
      },
      {
        heading: "Unity Learn",
        url: "https://learn.unity.com/",
        desc: "Tutorials to learn game development with Unity",
      },
    ],
    4: [
      {
        heading: "Arduino Setup Tutorial",
        url: "https://arduinogetstarted.com/",
        desc: "Learn how to set up an Arduino",
      },
      {
        heading: "Paul McWhorter's Arduino Tutorial",
        url: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP",
        desc: "An Arduino tutorial series on YouTube",
      },
      {
        heading: "All About Circuits",
        url: "https://www.allaboutcircuits.com/",
        desc: "Circuit news and information",
      },
      {
        heading: "Circuits with Arduino",
        url: "https://www.circuitbasics.com/arduino/",
        desc: "Circuit basics with Arduino",
      },
      {
        heading: "Learn C!",
        url: "https://www.learn-c.org/",
        desc: "A C tutorial",
      },
    ],
  };

  const [title, setTitle] = useState(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [checkedResources, setCheckedResources] = useState<boolean[]>([]);

  return (
    <Modal backgroundColor="#DABD93">
      <div className="relative w-full flex flex-row items-center justify-center h-[60vh] p-0">
        <div className="w-full flex flex-col gap-2 text-2xl md:text-xl justify-end pb-6 min-w-[25%] max-w-[25%] max-h-[100%] h-[60vh] mt-8">
          <div
            className={`bg-brown p-3 text-pale-yellow rounded-l-3xl shadow-lg ease-linear transition hover:bg-dark-green cursor-pointer aria-selected:bg-dark-green z-40 ${
              title == 0 ? "-ml-4" : ""
            }`}
            aria-selected={title == 0}
            onClick={() => setTitle(0)}
          >
            Description
          </div>
          <div
            className={`bg-brown p-3 text-pale-yellow rounded-l-3xl shadow-lg ease-linear transition hover:bg-dark-green cursor-pointer aria-selected:bg-dark-green z-40 ${
              title == 1 ? "-ml-4" : ""
            }`}
            aria-selected={title == 1}
            onClick={() => setTitle(1)}
          >
            Guiding Questions
          </div>
          <div
            className={`bg-brown p-3 text-pale-yellow rounded-l-3xl shadow-lg ease-linear transition hover:bg-dark-green cursor-pointer aria-selected:bg-dark-green z-40 ${
              title == 2 ? "-ml-4" : ""
            }`}
            onClick={() => setTitle(2)}
            aria-selected={title == 2}
          >
            Resources
          </div>
        </div>
        <img
          className="h-auto w-[20vw] -top-[7.5%] left-[2%] absolute z-30"
          src={`/images/Tracks/boxstates/opened/donut${track}.png`}
          alt="track"
          onClick={() => setTrack(0)}
        />

        <div className="bg-pale-yellow relative w-[68%] h-[100%] rounded-3xl mt-8 shadow-lg p-8">
          <div className="absolute top-4 right-4 flex gap-1 z-50">
            <img
              src="/images/Tracks/left_arrow.svg"
              alt="Previous"
              className="w-8 h-8 cursor-pointer bg-pale-yellow rounded-full p-1"
              onClick={() => {
                setTrack(track === 1 ? 4 : track - 1);
                setCheckedItems([]);
                setCheckedResources([]);
              }}
            />
            <img
              src="/images/Tracks/right_arrow.svg"
              alt="Next"
              className="w-8 h-8 cursor-pointer bg-pale-yellow rounded-full p-1"
              onClick={() => {
                setTrack(track === 4 ? 1 : track + 1);
                setCheckedItems([]);
                setCheckedResources([]);
              }}
            />
          </div>
          <div className="w-[88%] h-[100%] scroll-auto overflow-y-auto relative z-40 pr-2">
            <h1 className="text-6xl font-bold mb-6">{trackMap[track]}</h1>
            <p className="text-lg leading-relaxed">
              {title == 0 && descriptionMap[track]}
              {title == 1 && (
                <>
                  This track might be right for you if you're intrigued by these
                  questions:
                  <br />
                  <div className="space-y-4 mt-4">
                    {questionMap[track].map((question, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 cursor-pointer"
                        onClick={() => {
                          const newCheckedItems = [
                            ...(checkedItems.length
                              ? checkedItems
                              : Array(questionMap[track].length).fill(false)),
                          ];
                          newCheckedItems[index] = !newCheckedItems[index];
                          setCheckedItems(newCheckedItems);
                        }}
                      >
                        <div
                          className="relative flex-shrink-0"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <img
                            src="/images/Tracks/checkbox.svg"
                            alt="box"
                            className="absolute top-0 left-0 w-full h-full"
                          />
                          {checkedItems[index] && (
                            <img
                              src="/images/Tracks/check.svg"
                              alt="Checked"
                              className="absolute top-0 left-0 w-full h-full"
                            />
                          )}
                        </div>
                        <span className="text-lg">{question}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </p>
            {title == 2 && (
              <div className="space-y-4">
                {resourceMap[track].map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => {
                      const newCheckedResources = [
                        ...(checkedResources.length
                          ? checkedResources
                          : Array(resourceMap[track].length).fill(false)),
                      ];
                      newCheckedResources[index] = !newCheckedResources[index];
                      setCheckedResources(newCheckedResources);
                    }}
                  >
                    <div
                      className="relative flex-shrink-0"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <img
                        src="/images/Tracks/checkbox.svg"
                        alt="box"
                        className="absolute top-0 left-0 w-full h-full"
                      />
                      {checkedResources[index] && (
                        <img
                          src="/images/Tracks/check.svg"
                          alt="Checked"
                          className="absolute top-0 left-0 w-full h-full"
                        />
                      )}
                    </div>
                    <div>
                      <a
                        href={resource.url}
                        className="text-lg leading-relaxed"
                      >
                        {resource.heading}
                      </a>
                      <br />
                      {resource.desc}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <img
            className="h-[52vh] w-[28vw] object-contain -bottom-8 -right-[28%] absolute z-30"
            src={`/images/Tracks/boxstates/opened/foxdonut${track}.png`}
            alt="track"
          />
        </div>
      </div>
    </Modal>
  );
}
