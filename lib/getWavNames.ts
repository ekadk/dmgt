import { readdirSync } from "fs";

export type wavFile = {
  name: string;
  url: string;
};

export type arrayOfWav = Array<wavFile>;

const mappedWavfilenames: arrayOfWav = readdirSync("./public/wav/", { withFileTypes: true }).map(
  (wav) => {
    return { name: wav.name.split(".")[0], url: `public/wav/${wav.name}` };
  }
);

export default mappedWavfilenames;
