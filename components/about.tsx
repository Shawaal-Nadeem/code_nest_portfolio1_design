import style from "../styles/about.module.css";
const About = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Text */}
      <div>
        <span className="text-white text-4xl font-bold">ABOUT US</span>
      </div>

      {/* Box */}
      <div
        className={`mt-36 ${style.about} flex flex-col md:flex-row items-center`}
      >
        {/* small box */}
        <div
          className={`w-[130px] h-[130px] relative bottom-20 md:bottom-40 md:right-16  ${style.aboutsmallbox}`}
        ></div>
        <div className="w-[340px] h-[250px] md:w-[881px] md:h-[310px] p-2 md:p-10">
          {/* Text */}
          <p className="text-[21px] font-[300] text-center px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            similique dolorum commodi ea tempora eaque eum qui asperiores
            aspernatur debitis ab illo vel, ipsa harum inventore saepe ex
            nostrum alias? Lo
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
