import MovingTitle from "../hero/MovingTitle";
import UserLinks from "../hero/UserLinks";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <MovingTitle />
      <span className="text-xl lg:text-2xl font-semibold ">
        Web Developer @{" "}
        <a
          href="https://ukirama.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600"
        >
          Ukirama
        </a>
      </span>
      <UserLinks />
    </div>
  );
}
export default Hero;
