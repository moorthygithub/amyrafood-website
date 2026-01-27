// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const HeaderLink = ({ item }) => {
//   const [submenuOpen, setSubmenuOpen] = useState(false);
//   const { pathname } = useLocation();

//   const handleMouseEnter = () => {
//     if (item.submenu) {
//       setSubmenuOpen(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     setSubmenuOpen(false);
//   };

//   console.log(pathname);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Link
//         to={item.href}
//         className={`text-lg flex font-medium duration-300 ${
//           pathname === item.href
//             ? "text-primary"
//             : "text-black/50 hover:text-primary"
//         }`}
//       >
//         {item.label}
//         {item.submenu && (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="1.5em"
//             height="1.5em"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="1.5"
//               d="m7 10l5 5l5-5"
//             />
//           </svg>
//         )}
//       </Link>

//       {submenuOpen && item.submenu && (
//         <div
//           className="absolute py-2 left-0 mt-0.5 w-60 bg-white shadow-lg rounded-lg"
//           data-aos="fade-up"
//           data-aos-duration="500"
//         >
//           {item.submenu.map((subItem, index) => (
//             <Link
//               key={index}
//               to={subItem.href}
//               className={`block px-4 py-2 ${
//                 pathname === subItem.href
//                   ? "bg-primary text-white"
//                   : "text-black dark:text-white hover:bg-primary"
//               }`}
//               onClick={() => setSubmenuOpen(false)}
//             >
//               {subItem.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderLink;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderLink = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        to={item.href}
        className={`text-lg flex items-center gap-1 font-medium duration-300 ${
          pathname === item.href
            ? "text-primary"
            : "text-black/50 hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div className="absolute left-0 top-full w-60 bg-white shadow-lg rounded-lg py-2">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href}
              className={`block px-4 py-2 transition ${
                pathname === subItem.href
                  ? "bg-primary text-white"
                  : "text-black hover:bg-primary hover:text-white"
              }`}
              onClick={() => setSubmenuOpen(false)}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
