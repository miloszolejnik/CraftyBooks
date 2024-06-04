import Examples from "./components/Examples";
import Explore from "./components/Explore";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main 
    className="
      flex
      h-screen 
      flex-col 
      items-center
      overflow-x-hidden
      ">
        <Hero/>
        <Explore />
        <Examples />
    </main>
  );
}
