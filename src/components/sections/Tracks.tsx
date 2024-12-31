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
      <Modal backgroundColor="#DABD93" className="w-[85%]">
        <div className="flex space-x-5 flex-row items-center justify-center h-[60vh] p-0">
          <div className="flex flex-col justify-center min-w-[30%] max-w-[30%] max-h-[100%] h-[60vh]">
            <h1 className="text-4xl font-bold mb-6">TRACKS</h1>
            <p className="text-lg leading-relaxed">
              Blueprint offers a variety of workshops that fall into various
              tracks. These workshops are meant to develop skills that may be
              useful for your hackathon project. Explore this year’s tracks by
              clicking the box to the right!
            </p>
          </div>

          <div
            className="relative w-[60%] h-[100%] flex items-center justify-center rounded-3xl p- mt-8 shadow-lg"
            style={{ backgroundColor: "#F6EBCB" }}
          >
            {!isImageClicked && (
              <img
                className="h-full w-auto"
                src="/src/assets/0_closed_box.png"
                alt="track"
                onClick={handleImageClick}
              />
            )}
            {isImageClicked && (
              <div className="h-full w-auto">
                {videoFinished ? (
                  hoverDonutImage ? (
                    <img
                      className="h-full w-auto z-49"
                      src={`/src/assets/selected/donut${hoverDonutImage}.png`}
                      alt="track"
                    />
                  ) : (
                    <img
                      className="h-full w-auto z-49"
                      src={`/src/assets/full_box.png`}
                      alt="Full Box"
                    />
                  )
                ) : (
                  <video
                    className="h-full w-auto z-49 bg-transparent"
                    src={"/src/assets/1_MP4.mp4"}
                    onEnded={() => setVideoFinished(true)}
                    autoPlay
                    muted
                  />
                )}
                {videoFinished && (
                  <>
                    <div
                      className="relative top-[-74%] left-[23%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(1)}
                      onMouseEnter={() => setHoverDonutImage(1)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Beginner Web Dev
                    </div>
                    <div
                      className="relative top-[-98%] left-[52%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(4)}
                      onMouseEnter={() => setHoverDonutImage(4)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Hardware
                    </div>
                    <div
                      className="relative top-[-96%] left-[21%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(2)}
                      onMouseEnter={() => setHoverDonutImage(2)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Advanced Web Dev
                    </div>
                    <div
                      className="relative top-[-121%] left-[50%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(3)}
                      onMouseEnter={() => setHoverDonutImage(3)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Game Development
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Modal>
      {track && <TrackModal track={track} />}
    </div>
  );
};

export default Tracks;

function TrackModal({ track }: { track: number }) {

  const trackMap: Record<number, string> = {
    1: "Beginner Web Dev",
    2: "Advanced Web Dev",
    3: "Game Development",
    4: "Hardware",
  };

  const descriptionMap: Record<number, string> = {
    1: "In the Beginner Web Dev track, participants will learn to develop websites from scratch. " 
        + "Students will learn the fundamentals of HTML, CSS, and JavaScript -- the essence of web applications. "
        + "This track is perfect for beginners as it’ll introduce attendees to hackathons through the basics of web development. "
        + "Even if they’ve never coded before, this track will set them up with the skills and resources needed to create a hackathon project. ",
    2: "In the Advanced Web Dev track, hackers who are already familiar with HTML, CSS, and JavaScript will learn React "
        + "and back-end development. This track is perfect for hackers who have experience creating websites, but want to " 
        + "build upon the basics and learn how to build more complex and interactive web applications!",
    3: "Want to learn how to build your own games? This track is a chance for hackers to boost their skills in game design. "
       + "Hackers and their teams will design games starting from ideation to a playable product. This track is split into two" 
       + " subtracks, Beginner and Advanced, and taught using a variety of tools. Hackers with creative talents outside of programming have the " 
       + "opportunity to apply their skills in this track. Minimal coding experience is recommended for the Beginner Game Dev track.",
    4: "Hardware gives participants the hands-on experience of wiring/experimenting with various electrical pieces as well as learning how to "
       + "utilize that hardware in code! We will start from the very beginning, teaching students how to use the basics of the C language and "
       + "the Arduino software. We also guide participants through the basics of making a circuit and how they work. The hardware track is meant "  
       + "to expose students to the intersection of electrical engineering and computer science (EECS).",
  };

  const questionMap: Record<number, Array<string>> = {
    1: ["Are you interested in learning to develop websites?", "Have you ever wondered how much work goes into designing and building websites?",
       "Are there any websites you think have a great design, and why?"],
    2: ["Are there any particularly useful features you have noticed on certain websites that you believe could be more widely implemented?",
      "How do you think certain websites can be improved?",
      "Are there any website features that you would like to be able to implement but don’t yet have the skills for?"],
    3: ["Are you interested in making your own games?",
        "How can you bring your creativity into different aspects of game design (art, music, level design)?",
        "What are some of your favorite games and what makes them fun?",
        "What are some of your favorite game mechanics and how can you incorporate them into your own game?"],
    4: ["Have you ever wondered how circuits and other electrical components work?",
        "Have you ever wanted to make your own circuit?",
        "Are there any appliances that currently don't exist that would be beneficial for your day-to-day?",
        "Do you want to find out how code and hardware interact?",
        "Are you interested in learning a new language that specializes in interacting with hardware?",],
  };

  const resourceMap: Record<number, Array<{heading: string, url: string, desc: string}>> = {
    1: [
      {heading: "try.github.io", url: "try.github.io", desc: "Github reference page"},
      {heading: "Hubspot Tutorial", url: "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners", desc: "Introduction to Git for beginners"},
      {heading: "Lifewire", url: "https://www.lifewire.com/what-is-a-web-application-3486637", desc: "What is a webapp? (article)"},
      {heading: "FreeCodeCamp.org", url: "http://FreeCodeCamp.org", desc: "Intro to HTML/CSS, JavaScript, and responsive web design"},
      {heading: "HTMLDog", url: "https://htmldog.com/", desc: "Tutorials and techniques for implementing HTML/CSS"},
      {heading: "Codeacademy", url: "https://www.codecademy.com/", desc: "Beginner and more advanced web development tutorials"},
      {heading: "MozillaDocs (HTML)", url: "https://developer.mozilla.org/en-US/docs/Web/Tutorials", desc: "Tutorials for creating web pages with HTML spanning all skill levels"},
      {heading: "JavaScript.info", url: "http://JavaScript.info", desc: "Intro to Javascript"},
      {heading: "MozillaDocs (JavaScript)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript", desc: "An in-depth beginner’s guide to JavaScript"}
    ],
    2: [
      {heading: "FreeCodeCamp.org", url: "http://FreeCodeCamp.org", desc: "Intro to HTML/CSS, JavaScript, and responsive web design"},
      {heading: "HTMLDog", url: "https://htmldog.com/", desc: "Tutorials and techniques for implementing HTML/CSS"},
      {heading: "Codeacademy", url: "https://www.codecademy.com/", desc: "Beginner and more advanced web development tutorials"},
      {heading: "JavaScript.info", url: "http://JavaScript.info", desc: "Intro to Javascript"},
      {heading: "MozillaDocs (JavaScript)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript", desc: "An in-depth beginner’s guide to JavaScript"},
      {heading: "React Tutorial", url: "https://reactjs.org/tutorial/tutorial.html", desc: "Intro to React"},
    ],
    3: [
      {heading: "try.github.io", url: "try.github.io", desc: "Github reference page"},
      {heading: "Hubspot Tutorial", url: "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners", desc: "Introduction to Git for beginners"},
      {heading: "CS50", url: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbluXJKKbCIb4xd7fcRkpzoz", desc: "Extensive playlist covering introductory game development taught at Harvard CS50."},
      {heading: "Phaser", url: "https://phaser.io/", desc: "HTML5 game framework (web and mobile)."},
      {heading: "LibreSprite", url: "https://libresprite.github.io/", desc: "Free and open source program for creating sprites."},
      {heading: "Bosca Ceoil", url: "https://boscaceoil.net/", desc: "Free tool to create music aimed at beginners."},
      {heading: "Unity Learn", url: "https://learn.unity.com/", desc: "Tutorials to learn game development with Unity"},
    ],
    4: [
      {heading: "Arduino Setup Tutorial", url: "https://arduinogetstarted.com/", desc: "Learn how to set up an Arduino"},
      {heading: "Paul McWhorter's Arduino Tutorial", url: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP", desc: "An Arduino tutorial series on YouTube"},
      {heading: "All About Circuits", url: "https://www.allaboutcircuits.com/", desc: "Circuit news and information"},
      {heading: "Circuits with Arduino", url: "https://www.circuitbasics.com/arduino/", desc: "Circuit basics with Arduino"},
      {heading: "Learn C!", url: "https://www.learn-c.org/", desc: "A C tutorial"},
    ],
  }
    
  const [title, setTitle] = useState(0);
  return (
    <Modal backgroundColor="#DABD93" className="w-[85%]">
      <div className="relative w-full flex flex-row items-center justify-center h-[60vh] p-0">
        <img
          className="h-auto w-[20vw] -top-20 left-12 absolute"
          src={`/src/assets/opened/donut${track}.png`}
          alt="track"
        />
        <div className="w-full flex flex-col gap-8 text-3xl justify-end pb-16 min-w-[30%] max-w-[30%] max-h-[100%] h-[60vh]">
          <div className="bg-[#b27b5d] p-4 text-white rounded-l-3xl shadow-lg hover:bg-[#405a3f]" onClick={() => setTitle(0)}>
            Description
          </div>
          <div className="bg-[#b27b5d] p-4 text-white rounded-l-3xl shadow-lg hover:bg-[#405a3f]" onClick={() => setTitle(1)}>
            Guiding Questions
          </div>
          <div className="bg-[#b27b5d] p-4 text-white rounded-l-3xl shadow-lg hover:bg-[#405a3f]" onClick={() => setTitle(2)}>
            Resources
          </div>
        </div>

        <div
          className="relative w-[60%] h-[100%] rounded-3xl mt-8 shadow-lg p-8"
          style={{ backgroundColor: "#F6EBCB" }}
        >
          <div className="w-[75%]">
            <h1 className="text-6xl font-bold mb-6">{trackMap[track]}</h1>
            <p className="text-lg leading-relaxed">
              {(title == 0) && descriptionMap[track]}
              {(title == 1) && (
                <>
                  This track might be right for you if you're intrigued by these questions:
                  <br />
                  {questionMap[track].map((question, index) => (
                    <span key={index}>
                      {question}
                      <br />
                    </span>
                  ))}
                </>
              )}
            </p>
            {(title == 2) && (
              <ol>
                {resourceMap[track].map((resource, index) => (
                <li key={index}>
                  <a href={resource.url} className="text-lg leading-relaxed">{resource.heading}</a>
                  <br />
                  {resource.desc}
                  <br />
                  <br />
                </li>
                ))}
              </ol>
            )}
            
          </div>
          <img
            className="h-auto w-[30vw] -bottom-8 -right-[20%] absolute"
            src={`/src/assets/opened/foxdonut${track}.png`}
            alt="track"
          />
        </div>
      </div>
    </Modal>
  );
}
