import "./Button.scss";

type style = "primary" | "secondary" | "danger" | "default";
type size = "small" | "normal";

interface ButtonProps {
  text: string;
  style?: style;
  size?: size;
}

export default function Button({
  text,
  style = "primary",
  size = "normal",
}: ButtonProps) {
  return <button className={`btn btn-${style} btn-${size}`}>{text}</button>;
}
