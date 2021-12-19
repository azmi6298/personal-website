import TypeIt from "typeit-react";

function MovingTitle() {
  return (
    <TypeIt
      className="hero-title"
      getBeforeInit={(instance) => {
        instance
          .type("Hi, I'm Imza")
          .pause(500)
          .delete(4)
          .pause(1000)
          .type("Azmi!")
          .pause(2000);
        return instance;
      }}
      options={{ loop: true, waitUntilVisible: true, deleteSpeed: 100 }}
    />
  );
}

export default MovingTitle;
