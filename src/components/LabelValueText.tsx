export function LabelValueText(props :IProps){
  return (
    <div>
      <div className={"text-slate-600  italic"}>{props.label}</div>
      <div className={"font-semibold"}>{props?.value || "-"}</div>
    </div>
  )
}

interface  IProps {
  label : string;
  value ?: string;
}