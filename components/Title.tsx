export default function Title(props: props) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <h2 className="text-sm w-2/3">{props.subtitle}</h2>
    </div>
  );
}

type props = {
  title: string;
  subtitle: string;
};
