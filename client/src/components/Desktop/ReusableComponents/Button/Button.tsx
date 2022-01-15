import "./Button.module.css";

interface IProps {
  text: string;
}

function Button({ text }: IProps) {
  return (
    <button>
      {text}
      <span></span>
    </button>
  );
}

export default Button;
