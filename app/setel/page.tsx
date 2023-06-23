"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Setel() {
  const [pilihan, setPilihan] = useState(0);

  const gantiSetelan = (e: any) => {
    setPilihan(e.target.value);
  };
  const setelan = [
    {
      name: "Standard (E A D G B E)",
      notes: [
        {
          string: 6,
          key: "E",
        },
        {
          string: 5,
          key: "A",
        },
        {
          string: 4,
          key: "D",
        },
        {
          string: 3,
          key: "G",
        },
        {
          string: 2,
          key: "B",
        },
        {
          string: 1,
          key: "E",
        },
      ],
    },
    {
      name: "Drop D (D A D G B E)",
      notes: [
        {
          string: 6,
          key: "D",
        },
        {
          string: 5,
          key: "A",
        },
        {
          string: 4,
          key: "D",
        },
        {
          string: 3,
          key: "G",
        },
        {
          string: 2,
          key: "B",
        },
        {
          string: 1,
          key: "E",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full">
        <div className="flex-1">
          {/* Image Start */}
          <div className="w-full aspect-square max-h-96 object-fill relative">
            <Image src={"/images/guitar.png"} alt="home" fill className="object-contain" />
          </div>
          {/* Image End */}
        </div>
        <div className="flex-1 flex flex-col items-center gap-8">
          {/* Title Text Start */}
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">Setel Gitar</h1>
            <h2 className="text-center text-sm">Demi nada yang harmonis</h2>
          </div>
          {/* Title Text End */}

          {/* Pilih Setelan Start */}
          <div>
            <h2 className="text-center mb-2">Pilih setelan:</h2>
            <select
              defaultValue={setelan[pilihan].name}
              onChange={(e) => gantiSetelan(e)}
              className="border border-black p-2 w-60"
            >
              {setelan.map((el, idx) => (
                <option key={idx} value={idx}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          {/* Pilih Setelan End */}

          {/* Senar Start */}
          <div className="w-40 flex text-center justify-between mb-8">
            <div className="flex flex-col gap-4">
              <div>Senar</div>

              {/* Senar Row Start */}
              {setelan[pilihan].notes.map((el, idx) => {
                return (
                  <div key={idx}>
                    <p>{el.string}</p>
                  </div>
                );
              })}
              {/* Senar Row End */}
            </div>
            <div className="flex flex-col gap-4">
              <div>Nada</div>
              {/* Nada Row Start */}
              {setelan[pilihan].notes.map((el, idx) => {
                return (
                  <div key={idx}>
                    <p>{el.key}</p>
                  </div>
                );
              })}
              {/* Nada Row End */}
            </div>
            <div>
              <div>Tombol</div>
            </div>
          </div>
          {/* Senar End */}
        </div>
      </div>
    </div>
  );
}
