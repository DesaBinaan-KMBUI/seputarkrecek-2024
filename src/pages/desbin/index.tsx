import Hero from "@/components/Desbin/Hero";
import KMB from "@/components/Desbin/KMB";
import Timeline from "@/components/Desbin/Timeline";

export default function DesbinPage() {
  return (
    <main className="flex min-h-screen bg-[#F6ECE3] flex-col items-center">
      <Hero />
      <Timeline />
      <KMB />
    </main>
  );
}
