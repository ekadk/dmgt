import Title from "@/components/Title";
import TempoConfig from "@/components/tempo/TempoConfig";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <div className="flex-1">
          {/* Image Start */}
          <div className="w-full h-full object-fill relative">
            <Image
              src={"/images/metronome.png"}
              alt="home"
              fill
              sizes="flex"
              priority
              className="object-contain"
            />
          </div>
          {/* Image End */}
        </div>
        <div className="flex-1 flex flex-col items-center lg:justify-center gap-8">
          <div className="flex flex-col justify-center items-center gap-8 w-full max-w-sm lg:border lg:border-black lg:rounded-xl lg:p-8">
            <Title title="Atur Tempo" subtitle="Demi ketukan yang selaras" />
            <div className="w-full max-w-sm px-4 flex items-center justify-center">
              <TempoConfig />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
