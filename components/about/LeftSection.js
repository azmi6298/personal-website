import { differenceInYears } from "date-fns";

function countAge() {
  return differenceInYears(new Date(), new Date(1998, 6, 2));
}

function LeftSection() {
  const age = countAge();
  return (
    <div className="text-2xl lg:text-[3rem] font-light text-slate-400 space-y-10 lg:space-y-40">
      <div className="lg:space-y-10 leading-[3rem]">
        <p>
          {age} y.o.{" "}
          <strong className="text-white font-semibold">Web Developer</strong>
        </p>
        <p>
          Based in{"  "}
          <strong className="text-white font-semibold  ">
            Jakarta, Indonesia
          </strong>
        </p>
      </div>
      <div className="lg:text-4xl space-y-6">
        <span>Tech Stack (Current)</span>
        <ul className="text-white font-semibold space-y-2">
          <li className="hover:text-red-600">Ruby on Rails</li>
          <li className="hover:text-green-400">Vue | Nuxt</li>
          <li className="hover:text-blue-300">React | Next</li>
          <li className="hover:text-blue-400">TailwindCSS</li>
          <li className="hover:text-blue-600">Postgres</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSection;
