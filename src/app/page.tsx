import { Hero } from "@/components/Hero";
import { Reservation } from "@/components/Reservation";


export default function Home() {
  return (
   <main className="w-full h-auto">
    <Hero/>
    <Reservation/>
   </main>
  );
}
