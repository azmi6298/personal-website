import LeftSection from "../about/LeftSection";
import RightSection from "../about/RightSection";

function About() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-between lg:justify-around items-start lg:items-center">
      <p className="justify-self-center lg:hidden text-3xl text-white font-bold mb-10 lg:mb-0 ">
        About
      </p>
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default About;
