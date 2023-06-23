"use client";
import React, { useState } from "react";

const SetelanConfig = () => {
  const [pilihan, setPilihan] = useState(0);

  const gantiPilihan = (value: number) => {
    setPilihan(value);
  };

  return (
    <>
      {/* Pilih Setelan Start */}
      <div>
        <h2 className="text-center mb-2">Pilih setelan:</h2>
        <form>

        <select
          defaultValue={setelan[pilihan].name}
          onChange={(e) => {
            gantiPilihan(Number.parseInt(e.target.value));
          }}
          className="border border-black p-2 w-60"
        >
          {setelan.map((el, idx) => (
            <option key={idx} value={idx}>
              {el.name}
            </option>
          ))}
        </select>
        </form>
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
    </>
  );
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

export default SetelanConfig;
