import "./styles.css";

type ButtonProps = {
  onclick: any;
  btnText: string;
};
const Button = ({ onclick, btnText }: ButtonProps) => {
  return (
    <>
      <button className="btn" onClick={onclick}>
        {btnText}
      </button>
    </>
  );
};

export default Button;
