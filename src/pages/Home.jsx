import ScrollSection from "../components/ScrollSection";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen relative flex flex-col gap-5 justify-center items-center bg-sg_black">
        <h1 className="text-7xl text-sg_gray">My Experience</h1>
      </section>
      <ScrollSection />
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
}
