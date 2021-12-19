function RightSection() {
  const workHistories = [
    {
      title: "Ukirama",
      link: "https://ukirama.com/",
      description: "Full Stack Web Dev (RoR) - ERP Software",
      period: "September 2019 - Present",
    },
    {
      title: "RuangUMKM",
      link: "https://pekanraya.ruangumkm.id/",
      description: "Freelance Frontend Dev (Nuxt.js) - Marketplace Project",
      period: "October 2021 - December 2021",
    },
    {
      title: "Gank Global",
      link: "https://ganknow.com",
      description: "Freelance Frontend Dev (Nuxt.js) - Gaming Gig Platform",
      period: "July 2021 - August 2021",
    },
    {
      title: "@infiniteclass.id",
      link: null,
      description: "Coding Mentor - Programming Fundamentals with Javascript",
      period: "February 2021 - May 2021",
    },
    {
      title: "cataloq.co",
      link: null,
      description: "Freelance Backend Dev (Express.js) - Marketplace Project",
      period: "August 2020 - March 2021",
    },
    {
      title: "Aristi Jasadata",
      link: null,
      description: "Android Developer Intern - Banking Project",
      period: "July 2018 - August 2018",
    },
  ];
  return (
    <div className="flex flex-col min-w-full lg:min-w-min lg:px-0 mt-20 lg:mt-0">
      <hr className="mb-10 border-2 lg:hidden" />
      <p className="text-white text-2xl mb-8 font-semibold">Work History</p>
      <div className="flex flex-col">
        {workHistories.map((history, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:grid lg:grid-cols-2 "
          >
            <p className="text-slate-400 font-semibold text-base lg:text-lg ">
              {history.period}
            </p>
            <div>
              <p className="font-bold text-white text-2xl lg:text-3xl">
                {history.title}
              </p>
              <p className="text-slate-400">{history.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSection;
