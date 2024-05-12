import techStack from "../../utils/static-data/techStack";

function LeftSection() {
  return (
    <div className="lg:text-2xl lg:text-[3rem] font-light space-y-10 lg:space-y-40">
      <p className="leading-[3rem]">
        Based in{"  "}
        <strong className="font-semibold">Jakarta, Indonesia</strong>
      </p>

      <div className="lg:text-4xl space-y-6">
        <span>Tech Stack</span>
        <ul className=" font-semibold space-y-2">
          {techStack.map((data) => (
            <li key={data.label}>{data.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftSection;
