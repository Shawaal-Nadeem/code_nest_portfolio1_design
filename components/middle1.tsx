import style from "../styles/middle1.module.css";

const Middle = () => {
  return (
    <div className="flex flex-col items-center py-12">
      {/* Upper text */}

      <div className="pt-10">
        <p className="text-white text-xl -mb-2">Our</p>
        <span className="text-white text-5xl font-bold">Best</span>
        <span className="text-white text-5xl font-bold"> Work</span>
      </div>

      {/* Boxes */}
      <div className="flex flex-col md:flex-row md:space-x-28 md:space-y-0 items-center justify-center pt-20 space-y-28">
        {/* Box 1 */}
        <div className="w-[296px] flex flex-col items-center">
          {/* up */}

          <div className=" w-[100%] h-[208px] -mb-4 z-2 relative">
            <img
              src="box1.jpeg"
              alt=""
              className={`rounded-t-3xl  ${style.box1shadow}`}
            />
          </div>
          {/* down */}

          <div
            className={`${style.box1} flex flex-col h-[195px] p-4 items-center space-y-5 rounded-b-3xl pt-6`}
          >
            <p className="text-white text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem praesenvolup
            </p>
            <button className="bg-white w-[40%] h-[22px]px-10 py-1 font-bold text-center rounded-2xl  text-black">
              View
            </button>
          </div>
        </div>

        {/* Box-2 */}
        <div className="w-[296px] flex flex-col items-center">
          {/* up */}

          <div className=" w-[100%] h-[208px] -mb-4 z-2 relative">
            <img
              src="box2.jpeg"
              alt=""
              className={`rounded-t-3xl  ${style.box1shadow}`}
            />
          </div>
          {/* down */}

          <div
            className={`${style.box2} flex flex-col h-[195px] p-4 items-center space-y-5 rounded-b-3xl pt-6`}
          >
            <p className="text-white text-lg text-center pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem praesenvolup
            </p>
            <button className="bg-white w-[40%] h-[22px]px-10 py-1 font-bold text-center rounded-2xl text-black">
              View
            </button>
          </div>
        </div>

        {/* Box 3 */}

        <div className="w-[296px] flex flex-col items-center">
          {/* up */}

          <div className=" w-[100%] h-[208px] -mb-4 z-2 relative">
            <img
              src="box3.jpeg"
              alt=""
              className={`rounded-t-3xl  ${style.box2shadow}`}
            />
          </div>
          {/* down */}

          <div
            className={`${style.box3} flex flex-col h-[195px] p-4 items-center space-y-5 rounded-b-3xl pt-6`}
          >
            <p className="text-white text-lg text-center pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem praesenvolup
            </p>
            <button className="bg-white w-[40%] h-[22px]px-10 py-1 font-bold text-center rounded-2xl  text-black">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Middle;
