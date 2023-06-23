"use client"

const TempoConfig = () => {
  return (
    <>
      <div className="w-full flex flex-col text-center gap-4">
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
    </>
  );
};

export default TempoConfig;
