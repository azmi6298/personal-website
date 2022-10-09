import { differenceInYears } from "date-fns";

function countAge() {
  return differenceInYears(new Date(), new Date(1998, 6, 2));
}

function LeftSection() {
  const age = countAge();
  return (
    <div className="text-2xl lg:text-[3rem] font-light space-y-10 lg:space-y-40">
      <div className="lg:space-y-10 leading-[3rem]">
        <p>
          {age} y.o. <strong className="font-semibold">Web Developer</strong>
        </p>
        <p>
          Based in{"  "}
          <strong className="font-semibold  ">Jakarta, Indonesia</strong>
        </p>
      </div>
      <div className="lg:text-4xl space-y-6">
        <span>Tech Stack</span>
        <ul className=" font-semibold space-y-2">
          <li className="hover:text-red-600">Ruby on Rails</li>
          <li className="hover:text-green-400">Vue | Nuxt.js</li>
          <li className="hover:text-blue-300">React | Next.js</li>
          <li className="hover:text-blue-400">CSS | TailwindCSS</li>
          <li className="hover:text-blue-600">Postgres</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSection;
