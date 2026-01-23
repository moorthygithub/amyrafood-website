import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <img
        src="/images/Logo/Logo.png"
        alt="logo"
        width={117}
        height={34}
        className="w-auto h-16"
      />
      <div>
        <p className="text-black md:text-2xl font-bold">Amrya</p>
        <p className="text-black md:text-2xl">Prime</p>
      </div>
    </Link>
  );
};

export default Logo;
