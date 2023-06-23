import Title from "@/components/Title";
import TempoConfig from "@/components/tempo/TempoConfig";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full h-screen">
        <div className="flex-1">
          {/* Image Start */}
          <div className="w-full h-full object-fill relative">
            <Image src={"/images/metronome.png"} alt="home" fill className="object-contain" />
          </div>
          {/* Image End */}
        </div>
        <div className="flex-1 flex flex-col items-center gap-8">
          <Title title="Atur Tempo" subtitle="Demi ketukan yang selaras" />
          <div className="w-full max-w-sm px-4 flex items-center justify-center">
            <TempoConfig />
          </div>
        </div>
      </div>
    </div>
  );
}
