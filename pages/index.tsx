import Header from "../components/header";
import Middle from "../components/middle1";
import Middle2 from "../components/middle2";
import About from "../components/about";
import Contact from "../components/contact";
const Home = () => {
  return (
    <div className="bg-black ">
      <Header />
      <Middle />
      <Middle2 />
      <About />
      <Contact />
    </div>
  );
};
export default Home;
