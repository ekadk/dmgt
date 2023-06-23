import Title from "@/components/Title";
import SetelanConfig from "@/components/setel/SetelanConfig";

import Image from "next/image";

export default function Setel() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full lg:flex-row lg:h-screen lg:justify-center lg:items-center">
        <div className="flex-1 lg:flex-[2]">
          {/* Image Start */}
          <div className="w-full aspect-square max-h-96 lg:max-h-full object-fill relative">
            <Image
              src={"/images/guitar.png"}
              alt="home"
              sizes="flex"
              fill
              className="object-contain"
              priority={true}
            />
          </div>
          {/* Image End */}
        </div>
        <div className="flex-1 flex lg:w-full lg:h-full justify-center items-start lg:justify-start lg:items-center">
          <div className="flex flex-col justify-center items-center gap-8 lg:border lg:border-black lg:rounded-xl lg:p-8">
            <Title title="Setel Gitar" subtitle="Demi nada yang harmonis" />
            <SetelanConfig />
          </div>
        </div>
      </div>
    </div>
  );
}
