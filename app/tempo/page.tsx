import Title from "@/components/Title";
import TempoConfig from "@/components/tempo/TempoConfig";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full justify-center h-screen lg:flex-row">
        <div className="w-full flex justify-center items-center lg:flex-[2]">
          {/* Image Start */}
          <div className="w-full aspect-square max-w-md object-fill relative lg:max-w-full">
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
        <div className="flex lg:flex-1 lg:w-full lg:h-full p-4 justify-center items-start lg:justify-start lg:items-center">
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
