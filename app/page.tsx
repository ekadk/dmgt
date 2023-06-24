import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full justify-center h-screen lg:flex-row">
        <div className="w-full flex justify-center items-center lg:flex-[2]">
          {/* Image Start */}
          <div className="w-full aspect-square max-w-md object-fill relative lg:max-w-full">
            <Image
              src={"/images/home.png"}
              alt="home"
              fill
              className="object-contain"
              sizes="flex"
              priority
            />
          </div>
          {/* Image End */}
        </div>
        <div className="flex lg:flex-1 lg:w-full lg:h-full p-4 justify-center items-start lg:justify-start lg:items-center">
          <div className="flex flex-col justify-center items-center gap-8 lg:border lg:border-black lg:rounded-xl lg:p-8">
            {/* Title Text Start */}
            <Title
              title="Gitaris Tongkrongan App"
              subtitle="Demi melayani tongkrongan sebaik-baiknya"
            />
            {/* Title Text End */}
            <div className="flex flex-col gap-4 items-center justify-center">
              <Link href="/setel">
                <button className="bg-black text-white w-40 p-2">Setel Gitar</button>
              </Link>
              <Link href="/tempo">
                <button className="bg-black text-white w-40 p-2">Atur Tempo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
