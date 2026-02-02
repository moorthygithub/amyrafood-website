// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const HeaderLink = ({ item }) => {
//   const [submenuOpen, setSubmenuOpen] = useState(false);
//   const { pathname } = useLocation();

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
//       onMouseLeave={() => setSubmenuOpen(false)}
//     >
//       <Link
//         to={item.href}
//         className={`text-lg flex items-center gap-1 font-medium duration-300 ${
//           pathname === item.href
//             ? "text-primary"
//             : "text-black/50 hover:text-primary"
//         }`}
//       >
//         {item.label}
//         {item.submenu && (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="1.25em"
//             height="1.25em"
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
//         <div className="absolute left-0 top-full w-60 bg-white shadow-lg rounded-lg py-2">
//           {item.submenu.map((subItem, index) => (
//             <Link
//               key={index}
//               to={subItem.href}
//               className={`block px-4 py-2 transition ${
//                 pathname === subItem.href
//                   ? "bg-primary text-white"
//                   : "text-black hover:bg-primary hover:text-white"
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
  const { pathname, hash } = useLocation();

  const isActive = item.href.includes("#")
    ? pathname === "/" && `#${item.href.split("#")[1]}` === hash
    : pathname === item.href;

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        to={item.href}
        className={`text-lg flex items-center gap-1 font-medium duration-300 ${
          isActive ? "text-primary" : "text-black/50 hover:text-primary"
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
