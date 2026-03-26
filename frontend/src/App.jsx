import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#4D2FB2] via-[#B153D7] to-[#F375C2] text-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};
export default App;
