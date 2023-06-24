const TempoConfig = () => {
  return (
    <>
      <div className="w-full flex flex-col text-center gap-4">
        <div className="w-full flex gap-4">
          <div className="flex-1">
            <h3 className="mb-2">BPM:</h3>
            <select className="w-full border border-black p-2">
              {BPM.map((el, idx) => (
                <option key={idx} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <h3 className="mb-2">Subdivision:</h3>
            <select className="w-full border border-black p-2">
              {subdiv.map((el, idx) => (
                <option key={idx} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="bg-black text-white w-full p-2">Start</button>
      </div>
    </>
  );
};

//----------------------------
// Number Sequence Generator |
// --------------------------

const generateSequence = (start: number, end: number, step: number) => {
  return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
};

const BPM = generateSequence(60, 200, 5);
const subdiv = generateSequence(1, 6, 1);

export default TempoConfig;
