import Title from "@/components/Title";
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
          {/* Title Text Start */}
          <Title title="Atur Tempo" subtitle="Demi ketukan yang selaras" />
          {/* Title Text End */}
          <div className="w-full max-w-sm px-4 flex flex-col gap-4 text-center items-center justify-center">
            <div className="w-full flex gap-4">
              <div className="flex-1">
                <h3 className="mb-2">BPM:</h3>
                <select className="w-full border border-black p-2">
                  <option>60</option>
                  <option>70</option>
                  <option>80</option>
                  <option>90</option>
                  <option>100</option>
                </select>
              </div>

              <div className="flex-1">
                <h3 className="mb-2">Subdivision:</h3>
                <select className="w-full border border-black p-2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>
            <button className="bg-black text-white w-full p-2">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}
