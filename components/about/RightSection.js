function RightSection() {
  const workHistories = [
    {
      title: "Sequis Innovation Lab",
      link: "https://sequis.co.id/",
      description: "Frontend Developer (Next.js)",
      period: "May 2023 - Present",
    },
    {
      title: "Ukirama",
      link: "https://ukirama.com/",
      description: "Full Stack Web Dev (RoR) - ERP Software",
      period: "September 2019 - April 2023",
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
      <hr className="mb-10 border-2 border-gray-900 dark:border-gray-100 lg:hidden" />
      <p className="section-title mb-8">Work History</p>
      <div className="flex flex-col">
        {workHistories.map((history, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:grid lg:grid-cols-2 "
          >
            <p className="font-semibold text-base lg:text-lg grayed-text">
              {history.period}
            </p>
            <div>
              <p className="font-bold text-2xl lg:text-3xl">{history.title}</p>
              <p className="grayed-text">{history.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="Resume-Muhammad-Azmi-2022.pdf"
        alt="Muhammad Azmi's Resume"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold italic mt-6"
      >
        Get Latest Resume in PDF
      </a>
    </div>
  );
}

export default RightSection;
