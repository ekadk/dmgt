import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full h-screen">
        <div className="flex-1">
          {/* Image Start */}
          <div className="w-full h-full object-fill relative">
            <Image src={"/images/home.png"} alt="home" fill className="object-contain" />
          </div>
          {/* Image End */}
        </div>
        <div className="flex-1 flex flex-col items-center gap-8">
          {/* Title Text Start */}
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <h1 className="text-2xl font-bold">Gitaris Tongkrongan App</h1>
            <h2 className="text-sm w-2/3">Demi melayani tongkrongan sebaik-baiknya</h2>
          </div>
          {/* Title Text End */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <button className="bg-black text-white w-40 p-2">Setel Gitar</button>
            <button className="bg-black text-white w-40 p-2">Atur Tempo</button>
            <button className="bg-black text-white w-40 p-2">Contekan</button>
          </div>
        </div>
      </div>
    </div>
  );
}
