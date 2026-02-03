import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4 text-current">
      <img
        src="/images/Logo/Logo.png"
        alt="logo"
        width={117}
        height={34}
        className="w-auto h-16"
      />
      <div className="leading-tight">
        <p className="md:text-2xl font-bold text-current">Amrya</p>
        <p className="md:text-2xl text-current">Prime</p>
      </div>
    </Link>
  );
};

export default Logo;
