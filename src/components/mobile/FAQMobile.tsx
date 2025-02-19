import { useState } from "react";
import ClosedBullet from "/images/Faq/faq_closed.svg";

const FaqMobile = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Can ignore this section; just for updating the states
  const toggleItem = (index: number, section: "general" | "logistics") => {
    const adjustedIndex =
      section === "logistics" ? index + generalQuestions.length : index;
    setOpenIndexes((prevIndexes) => updateIndexes(prevIndexes, adjustedIndex));
  };

  // Define all the FAQ questions here; doesn't need fixing
  const faqItems = [
    {
      title: "What is a learnathon?",
      content: (
        <>
          A day of learning skills in computer science! You will have the
          opportunity to attend a day of workshops in your chosen track: web dev
          (beginner, advanced), game dev (beginner, advanced), or hardware. See
          the tracks section above for more info. Beyond track-specific
          workshops, we'll also have auxiliary workshops, tech talks, an
          organization fair, and more.
        </>
      ),
    },
    {
      title: "What is a hackathon?",
      content: (
        <>
          A chance to build an amazing computer science project! Students who
          attend the learnathon will apply their newly-acquired skills to create
          something they can call their own. Websites and mobile apps are common
          hacks, but you can build anything. We encourage you to think outside
          the box!
        </>
      ),
    },
    {
      title: "How much experience do I need to attend?",
      content: (
        <>
          <strong>Zero</strong> computer science, coding, or hacking experience
          is needed! We encourage students of <strong>all skill levels</strong>{" "}
          to apply—many of our workshops assume you have no experience and will
          help build your coding abilities from the ground up.
        </>
      ),
    },
    {
      title: "Do I need to attend both the learnathon and hackathon?",
      content: (
        <>
          No, you can attend either one or both days! However, only participants
          who participate in track workshops during the learnathon or submit a
          project for the hackathon will be eligible for swag.
        </>
      ),
    },
    {
      title: "How will teams work? What if I don't have a team?",
      content: (
        <>
          During our hackathon, you'll have the opportunity to create a project
          in a team of up to 4 students. Don't worry if you don't have a team
          now—we'll have team formation and ideation sessions, so there'll be
          plenty of time to meet new people!
        </>
      ),
    },
    {
      title: "Why is there an application?",
      content: (
        <>
          While we want to open Blueprint to everyone, having an application
          allows us to provide a better event experience with respect to
          planning and logistics. However, you do not need any experience to
          apply. We're looking for people who are passionate about learning and
          creating!
        </>
      ),
    },
    {
      title: "I have more questions!",
      content: (
        <>
          Feel free to reach out to us at <strong>blueprint@hackmit.org</strong>{" "}
          for any questions, concerns, or just to say hi {":)"}
        </>
      ),
    },
    {
      title: "When is Blueprint?",
      content: (
        <>
          Blueprint will be from <strong>March 1 to March 2</strong>. There will
          be a learnathon on Saturday March 1, and a hackathon on Sunday March
          2.
        </>
      ),
    },
    {
      title: "Where is Blueprint?",
      content: (
        <>
          The Saturday learnathon will take place at MIT's Stata Center (32
          Vassar St, Cambridge, MA 02139). The Sunday hackathon will take place
          at the MIT Media Lab (75 Amherst St, Cambridge, MA 02139).
        </>
      ),
    },
    {
      title: "Will Blueprint be fully in-person?",
      content: (
        <>
          Yes – the events over the weekend will have no virtual component.
          However, we may potentially host virtual events during Blueprint week,
          which will be open to everyone.
        </>
      ),
    },
    {
      title: "Am I eligible to attend?",
      content: (
        <>
          If you're a <strong>high school student</strong>, we invite you to
          apply - no coding experience required! Blueprint will teach you all
          you need to know to compete in your first hackathon, so beginners are
          more than welcome!
        </>
      ),
    },
    {
      title: "Does Blueprint cost money?",
      content: (
        <>
          Admission is <strong>free</strong> and includes mentors, workshops,
          swag, resources, and an unforgettable experience!
        </>
      ),
    },
    {
      title: "What will I eat?",
      content: (
        <>
          We will provide breakfast and lunch for Saturday's learnathon, and
          breakfast, lunch, and dinner for Sunday's hackathon for free! We also
          have options for those with dietary restrictions. There will also be a
          snack bar on Sunday {":)"}
        </>
      ),
    },
    {
      title: "When is the application deadline?",
      content: (
        <>
          Applications are due{" "}
          <strong>February 3rd, 11:59pm Eastern Time</strong> (please note the
          timezone!). No extensions will be granted unless there are special
          circumstances; in that case, please email blueprint@hackmit.org.
        </>
      ),
    },
    {
      title: "Can I volunteer to judge or mentor?",
      content: (
        <>
          If you're in college or beyond, we will consider your application!{" "}
          <a
            href="https://forms.gle/dQcKgcqCF8gXEDy1A"
            className="text-dark-green font-bold underline hover:opacity-70"
            target="_blank"
          >
            Here
          </a>{" "}
          is the application link.
        </>
      ),
    },
    {
      title: "Are you doing travel reimbursements?",
      content: (
        <>
          Due to logistical & financial restrictions, we cannot reimburse
          lodging expenses for this event, and in order to provide our attendees
          with the best possible experience, we will not be able to accommodate
          virtual hackers. However, we are partnering with Hack Club to provide
          transportation subsidies:{" "}
          <a
            href="https://forms.hackclub.com/t/8EieSvYSpdus"
            className="text-dark-green font-bold underline hover:opacity-70"
            target="_blank"
          >
            Gas Fund
          </a>
        </>
      ),
    },
    {
      title: "Will you be hosting students?",
      content: (
        <>
          Unfortunately, MIT administration has strict requirements regarding
          hosting minors on campus, so we would not be able to match you with a
          host through the Blueprint team. If you aren't able to commute to
          Blueprint and happen to know an MIT student or a student in the Boston
          area, you could try reaching out to them personally to see if they are
          able to host you!
        </>
      ),
    },
  ];
  const generalQuestions = faqItems.slice(0, 7);
  const logisticsQuestions = faqItems.slice(7);

  // Can ignore this section; just for updating the states
  const updateIndexes = (prevIndexes: number[], index: number): number[] => {
    const updatedIndexes = prevIndexes.includes(index)
      ? prevIndexes.filter((i) => i !== index)
      : [...prevIndexes, index];
    console.log("Updated openIndexes:", updatedIndexes);
    return updatedIndexes;
  };

  return (
    <section id="FAQ">
      <div className="px-4 py-6">
        <h1 className="text-5xl font-bold text-center mb-8">FAQ</h1>

        <div className="mb-8 bg-magenta/20 rounded-3xl p-6">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">GENERAL</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {generalQuestions.map((item, index) => (
                <li key={index} className="mb-[10px] flex flex-col items-start">
                  <div className="flex items-start hover:opacity-70">
                    <img
                      src={ClosedBullet}
                      alt="dropdown"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                        cursor: "pointer",
                        marginTop: "5px",
                        transition: "transform 0.3s ease",
                        transform: openIndexes.includes(index)
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                      }}
                      onClick={() => toggleItem(index, "general")}
                    />
                    <div className="w-full">
                      <div
                        onClick={() => toggleItem(index, "general")}
                        className="cursor-pointer font-bold mb-[5px] text-xl text-dark-green"
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openIndexes.includes(index) ? "500px" : "0",
                        opacity: openIndexes.includes(index) ? 1 : 0,
                      }}
                    >
                      <div className="text-lg leading-relaxed pl-[30px] pr-[10px]">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">LOGISTICS</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {logisticsQuestions.map((item, index) => (
                <li key={index} className="mb-[10px] flex flex-col items-start">
                  <div className="flex items-start hover:opacity-70">
                    <img
                      src={ClosedBullet}
                      alt="dropdown"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                        cursor: "pointer",
                        marginTop: "5px",
                        transition: "transform 0.3s ease",
                        transform: openIndexes.includes(
                          index + generalQuestions.length
                        )
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                      }}
                      onClick={() => toggleItem(index, "logistics")}
                    />
                    <div className="w-full">
                      <div
                        onClick={() => toggleItem(index, "logistics")}
                        className="cursor-pointer font-bold mb-[5px] text-xl text-dark-green"
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: openIndexes.includes(
                          index + generalQuestions.length
                        )
                          ? "500px"
                          : "0",
                        opacity: openIndexes.includes(
                          index + generalQuestions.length
                        )
                          ? 1
                          : 0,
                      }}
                    >
                      <div className="text-lg leading-relaxed pl-[30px] pr-[10px]">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/Faq/faq_asset.svg"
            alt="FAQ illustration"
            className="w-84 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqMobile;
