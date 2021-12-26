import LeftSection from "../about/LeftSection";
import RightSection from "../about/RightSection";

function About() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10 lg:min-h-screen justify-between lg:justify-around items-start lg:items-center pt-36 lg:pt-0">
      <p className="section-title lg:hidden mb-10 lg:mb-0 ">About</p>
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default About;
