"use client";
import { useState } from "react";

type tuneKey = {
  name: string;
  notes: string;
};

const SetelanConfig = () => {
  // State to check current selected tuning
  const [currentTuning, setCurrentTuning] = useState("E2 A2 D3 G3 B3 E4");

  // State to which audio is played
  const [playedAudio, setPlayedAudio] = useState(0);

  //----------------------------------------------
  // Function to change which tuning is selected |
  //---------------------------------------------

  const changeTuning = (e: string) => {
    setPlayedAudio(0);
    setCurrentTuning(e);
  };

  //-----------------------
  // Play Selected String |
  //-----------------------

  const playAudio = (playedString: number) => {
    // Change played string
    setPlayedAudio(playedString);

    // Pause all audio, and set the time to 0
    const audios = document.querySelectorAll("audio");
    audios.forEach((el) => {
      el.pause();
      el.currentTime = 0;
    });

    // Select string to play
    const stringToPlay = document.getElementById(`string-${playedString}`);

    // Get the audio element
    const currentString = stringToPlay?.querySelector("audio");

    // Play the selected audio element
    currentString?.play();
  };

  //-----------------------
  // Stop Selected String |
  //-----------------------

  const stopAudio = (playedString: number) => {
    setPlayedAudio(0);
    const stringToStop = document.getElementById(`string-${playedString}`);
    const currentString = stringToStop?.querySelector("audio");
    currentString?.pause();
  };

  return (
    <>
      {/* Pilih Setelan Start */}
      <div>
        <h2 className="text-center mb-2">Pilih setelan:</h2>
        <form>
          <select
            defaultValue={currentTuning}
            onChange={(e) => changeTuning(e.target.value)}
            className="border border-black p-2 w-60"
          >
            {tunings.map((el: tuneKey, idx) => {
              return <option key={idx} value={el.notes}>{`${el.name} (${el.notes})`}</option>;
            })}
          </select>
        </form>
      </div>
      {/* Pilih Setelan End */}

      {/* Senar Start */}
      <div className="w-full flex flex-col text-center justify-between mb-4">
        <table className="w-full">
          <thead>
            <tr>
              <td className="w-1/3">Senar</td>
              <td className="w-1/3">Nada</td>
              <td className="w-1/3"></td>
            </tr>
          </thead>
          <tbody>
            {currentTuning.split(" ").map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{6 - idx}</td>
                  <td>{el}</td>
                  <td id={`string-${6 - idx}`}>
                    <audio src={`wav/${el}.wav`} typeof="audio/wav" loop />
                    {playedAudio == 6 - idx ? (
                      <button
                        className="w-full text-white bg-black"
                        onClick={() => stopAudio(6 - idx)}
                      >
                        Stop
                      </button>
                    ) : (
                      <button
                        className="w-full text-white bg-black"
                        onClick={() => playAudio(6 - idx)}
                      >
                        Play
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

//-------------------
// Available tunings |
//-------------------

const tunings = [
  { name: "Standard", notes: "E2 A2 D3 G3 B3 E4" },
  { name: "Drop D", notes: "D2 A2 D3 G3 B3 E4" },
];

export default SetelanConfig;
