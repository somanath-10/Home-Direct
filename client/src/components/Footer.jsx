import { Logo } from "./";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { userType } = useSelector((store) => store.auth);

  return (
    <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-slate-300 mt-auto">

    </footer>
  );
};

export default Footer;
