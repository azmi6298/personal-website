import MovingTitle from "../hero/MovingTitle";
import UserLinks from "../hero/UserLinks";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <MovingTitle />
      <span className="text-2xl font-semibold text-white/75">
        Web Developer @{" "}
        <a
          href="https://ukirama.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ukirama
        </a>
      </span>
      <UserLinks />
    </div>
  );
}
export default Hero;
