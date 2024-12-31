import Modal from "../Modal";
import basket from "../../assets/basket.png";
import bread from "../../assets/bread_will_this_be_different.png";

const About = () => {
  return (
    <div>
      <Modal className="w-[100%]">
        <div className="flex flex-row justify-center">
          <div className="min-h-full flex items-end min-w-[40%] translate-y-[20%]">
            <img src={basket} alt="Basket" />
          </div>
          <div className="flex flex-col min-w-[40%] max-w-[40%] max-h-[100%] h-[60vh]">
            <h1 className="text-4xl font-bold mb-6">Blueprint 2025</h1>
            <div className="overflow-y-auto pr-4 space-y-4">
              <p className="text-lg leading-relaxed">
                Blueprint is a weekend-long learnathon and hackathon for high
                school students hosted at MIT. Blueprint is open to all skill
                levels, from first-time coders to veteran hackers! Over the
                course of Blueprint, you'll learn coding skills from MIT
                students, form a team, and work on a cool computer science
                project with the support of our mentors! After Blueprint, you'll
                not only have a project under your belt, but have the tools to
                do so much more.
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  BP WEEK (2/26-2/27)
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Join the hacker community!</li>
                  <li>
                    Meet fellow hackers through team formation and mini-events
                  </li>
                  <li>
                    Tune into tech talks by MIT student clubs and other
                    organizations
                  </li>
                  <li>
                    Get a head start on learning at Blueprint with intro
                    workshops
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  LEARNATHON (3/1)
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Participate in hands-on workshops taught by MIT students and
                    industry professionals on programming fundamentals, web
                    programming, or game development
                  </li>
                  <li>
                    Attend tech talks on specialized computer science and STEM
                    topics
                  </li>
                  <li>
                    Engage with our educational organization partners at the
                    organization fair!
                  </li>
                  <li>Eager to get started? Check out StartHacking.org!</li>
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold text-blue-600">
                  HACKATHON (3/2)
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Put your new skills to practice!</li>
                  <li>
                    Form a team and experience the challenge and reward of
                    building a project from scratch
                  </li>
                  <li>
                    Consult mentors for personalized feedback and help on your
                    project
                  </li>
                  <li>
                    Demo your project to judges and potentially win prizes to
                    take home!
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="min-h-full flex items-end">
            <img className="translate-y-[15%]" src={bread} alt="bread" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default About;
