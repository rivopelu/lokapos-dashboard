export function PageHeader(props: IProps) {
  return (
    <div>
      <p className="text-2xl font-bold capitalize">{props.title}</p>
      <p className="italic text-slate-600 ">{props.description}</p>
    </div>
  );
}

interface IProps {
  title: string;
  description?: string;
}
