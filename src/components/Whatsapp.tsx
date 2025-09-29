import "./Whatsapp.css";

export const Whatsapp: React.FC = ({}) => {
  return (
    <a
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=56944718488&text&type=phone_number&app_absent=0"
    >
      <img className="btn-whatsapp" src="/whatsapp.png" alt="" />
    </a>
  );
};
