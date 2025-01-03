import basket from "/images/About/basket.svg";

const AboutMobile = () => {
  return (
    <section id="about">
      <div className="px-6 py-4 space-y-6">
        <h1 className="text-5xl font-bold text-center">BLUEPRINT 2025</h1>

        <p className="text-base leading-relaxed mx-4">
          Blueprint is a weekend-long learnathon and hackathon for high school
          students hosted at MIT. Blueprint is open to all skill levels, from
          first-time coders to veteran hackers! Over the course of Blueprint,
          you'll learn coding skills from MIT students, form a team, and work on
          a cool computer science project with the support of our mentors! After
          Blueprint, you'll not only have a project under your belt, but have
          the tools to do so much more.
        </p>

        <div className="flex justify-center">
          <img src={basket} alt="Basket" className="w-[80%] object-contain" />
        </div>

        <div className="space-y-4 pl-4">
          <h2 className="text-4xl font-bold">BP WEEK (2/26-2/27)</h2>
          <ul className="list-disc mx-4 space-y-2">
            <li>Join the hacker community!</li>
            <li>Meet fellow hackers through team formation and mini-events</li>
            <li>
              Tune into tech talks by MIT student clubs and other organizations
            </li>
            <li>
              Get a head start on learning at Blueprint with intro workshops
            </li>
          </ul>
        </div>

        <div className="space-y-4 pl-4">
          <h2 className="text-4xl font-bold">LEARNATHON (3/1)</h2>
          <ul className="list-disc mx-4 space-y-2">
            <li>
              Participate in hands-on workshops taught by MIT students and
              industry professionals on programming fundamentals, web
              programming, or game development
            </li>
            <li>
              Attend tech talks on specialized computer science and STEM topics
            </li>
            <li>
              Engage with our educational organization partners at the
              organization fair!
            </li>
            <li>Eager to get started? Check out StartHacking.org!</li>
          </ul>
        </div>

        <div className="space-y-4 pl-4">
          <h2 className="text-4xl font-bold">HACKATHON (3/2)</h2>
          <ul className="list-disc mx-4 space-y-2">
            <li>Put your new skills to practice!</li>
            <li>
              Form a team and experience the challenge and reward of building a
              project from scratch
            </li>
            <li>
              Consult mentors for personalized feedback and help on your project
            </li>
            <li>
              Demo your project to judges and potentially win prizes to take
              home!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMobile;
