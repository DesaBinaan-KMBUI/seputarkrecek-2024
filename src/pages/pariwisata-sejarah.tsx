import PariwisataSejarahHero from "@/components/PariwisataSejarah";
import Highlights from "@/components/PariwisataSejarah/highlights";
import Bottom from "@/components/PariwisataSejarah/bottom";

export default function PariwisataSejarah() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <PariwisataSejarahHero />
      <Highlights />
      <Bottom />
    </main>
  );
}
