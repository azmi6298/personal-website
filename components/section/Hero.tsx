import MovingTitle from "../hero/MovingTitle";
import UserLinks from "../hero/UserLinks";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center select-none">
      <MovingTitle />
      <span className="text-xl lg:text-2xl font-semibold ">
        Web Developer @{" "}
        <span
          className="hover:text-violet-600"
        >
          Sequis Innovation Lab
        </span>
      </span>
      <UserLinks />
    </div>
  );
}
export default Hero;
