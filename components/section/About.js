import LeftSection from "../about/LeftSection";
import RightSection from "../about/RightSection";

function About() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen justify-between lg:justify-around items-start lg:items-center pt-36 lg:pt-0">
      <p className="underline lg:hidden text-3xl font-bold mb-10 lg:mb-0 ">
        About
      </p>
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default About;
