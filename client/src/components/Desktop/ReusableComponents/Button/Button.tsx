import "./Button.module.css";

interface IProps {
  text: string;
  onSubmit?: any;
  onClick?:any;
}

function Button({ text, onSubmit, onClick }: IProps) {
  return (
    <button onSubmit={onSubmit} onClick={onClick}>
      {text}
      <span></span>
    </button>
  );
}

export default Button;
