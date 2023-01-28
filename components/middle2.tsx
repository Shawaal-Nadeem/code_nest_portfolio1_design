import style from "../styles/middle2.module.css";
const Middle2 = () => {
  return (
    <div className="flex flex-col items-center py-24">
      {/* upper text */}
      <div className="flex flex-col items-center">
        <span className="text-white font-bold text-5xl">Services</span>
        <span className="text-white font-bold text-5xl"> & Portfolio</span>
      </div>

      {/* BOXES */}
      <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-28 items-center  py-20  space-y-20">
        {/* Box1 */}
        <div
          className={`${style.bigbox1} md:w-[370px]  py-6 md:px-8 w-[320px] px-4 space-y-6`}
        >
          {/* small box */}
          <div className={`${style.smallbox1} w-[93px] h-[93px] m-auto`}></div>
          {/* Text */}
          <div className="">
            <p className="text-white text-[40px] font-[700]">Web</p>
            <p className="text-white text-[40px] font-[700] -mt-4">FrontEnd</p>
            <p className="text-white text-[16px] font-[300]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam vitae porro nesciunt iste, nulla, nam architecto
              blanditiis aspernatur iure similiquegit illum
            </p>
            <li className="text-white">Platform1</li>
            <li className="text-white">Platform2</li>
            <li className="text-white">Platform3</li>
          </div>
          {/* button */}
          <div className="text-center">
            <button
              className={`${style.button1} w-[155px] h-[38px] text-center font-bold text-white`}
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* box2 */}
        <div
          className={`${style.bigbox2} md:w-[370px] py-6 md:px-8 w-[320px] px-4 space-y-6`}
        >
          {/* small box */}
          <div className={`${style.smallbox2} w-[93px] h-[93px] m-auto`}></div>
          {/* Text */}
          <div className="">
            <p className="text-white text-[40px] font-[700]">Graphics &</p>
            <p className="text-white text-[40px] font-[700] -mt-4">
              UI/UX Design
            </p>
            <p className="text-white text-[16px] font-[300]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam vitae porro nesciunt iste, nulla, nam architecto
              blanditiis aspernatur iure similiquegit illum
            </p>
            <li className="text-white">Platform1</li>
            <li className="text-white">Platform2</li>
            <li className="text-white">Platform3</li>
          </div>
          {/* button */}
          <div className="text-center">
            <button
              className={`${style.button2} w-[155px] h-[38px] text-center font-bold text-white`}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Middle2;
