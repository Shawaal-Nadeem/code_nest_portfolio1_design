import styles from "../styles/gradients.module.css";

const Header = () => {
  return (
    <div className={`${styles.header} p-4 w-[100%] `}>
      <video className={styles.video} poster="" loop autoPlay muted>
          <source src="/videos/vid.webm" type="video/webm" />
          <source src="/videos/vid.mp4" type="video/mp4" />
        </video>
      {/* XXX */}
      <nav className={styles.navbar}>
        <ul className=" space-x-12 md:flex hidden">
          <li className="text-white text-xl">Home</li>
          <li className="text-white text-xl">Portfolio</li>
          <li className="text-white text-xl">Services</li>
          <li className="text-white text-xl">About</li>
          <li className="text-white text-xl">Contact Us</li>
        </ul>
      </nav>
      <div className={styles.navbar}>
      <div className="pt-14 md:pt-24 md:w-[40%] w-[75%]">
        <h1 className="text-white text-6xl font-bold">CODE</h1>
        <h1 className="text-white text-6xl font-bold">NEST</h1>
        <p className="text-white pt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          gnam Lor magnam sit amet, consectetur adipis
        </p>

        <p className="text-purple-900 text-xl">Read more...</p>
      </div>
      </div>
      {/* Buttons */}
      <div className={styles.navbar}>
      <div className="md:space-x-6 space-y-6 md:space-y-0 flex flex-col md:items-center md:flex-row py-6 ">
        <button className="text-white hover:bg-purple-500 bg-purple-800 px-6 py-1 rounded-3xl w-28">
          Portfolio
        </button>
        <button className="px-6 py-1 rounded-3xl bg-black text-white  w-28 border-purple-500 border-2 hover:bg-purple-500">
          Services
        </button>
      </div>
      </div>
    </div>
  );
};
export default Header;
