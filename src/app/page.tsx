import CategorySection from "@/components/HomePage/CategorySection";
import EntertainmentNews from "@/components/HomePage/NewsSection";
import OtherSection from "@/components/HomePage/OtherSection";
import VideoSection from "@/components/HomePage/VideoSection";
import MainSlider from "@/components/Slider/MainSlider";

export default function Home() {
  return (
    <main>
      <MainSlider />
      <section>
        <h2 className="text-3xl font-semibold text-primary text-center my-10">
          Category
        </h2>
        <CategorySection />
      </section>
      <OtherSection />
      <VideoSection />
      <EntertainmentNews />
    </main>
  );
}
