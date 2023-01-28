import style from "../styles/contact.module.css";
const Contact = () => {
  return (
    <div className="flex flex-col items-center py-24">
      {/* text */}
      <div>
        <p className="text-[40px] font-bold">CONTACT US</p>
      </div>

      {/* box */}
      <div
        className={`mt-24 ${style.big} h-[580px] items-center  md:flex md:space-x-10  md:w-[881px] md:h-[330px]`}
      >
        {/* upper */}
        <div
          className={`${style.small} h-[150px] w-[300px] md:h-[330px] text-center text-4xl flex items-center justify-center font-bold`}
        >
          CODE NEST
        </div>

        {/* middle */}
        <div className="flex-col items-center flex pt-10 md:pt-0 ">
          {/* text */}
          <p className="text-2xl font-[700]">Enter your</p>
          <p className="text-4xl font-[600]">Query here:</p>
          <div className="flex flex-col mt-10 md:mt-6 space-y-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[218px] md:w-[380px] py-2 text-xl text-white px-2 bg-inherit border-b-2"
            />
            <input
              type="text"
              placeholder="Your message"
              className="w-[218px]  md:w-[380px] py-2 text-xl text-white px-2 bg-inherit border-b-2"
            />
          </div>
          {/* buttons */}
          <div className="flex flex-col items-center space-y-6 mt-10 md:flex-row md:space-y-0 md:space-x-6">
            <button className={`${style.button1} w-[147px] h-[38px]`}>
              Send
            </button>
            <button className={`h-[38px] w-[147px]  ${style.button2}`}>
              Send from G-mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
