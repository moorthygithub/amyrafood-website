// import { ChevronRight, Home } from "lucide-react";

// const Breadcrumbs = ({
//   items = [],
//   title,
//   bgImage = "/images/Breadcrumbs/breadcrumb.png",
// }) => {
//   return (
//     <section
//       className="relative py-20"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/15" />

//       <div className="relative z-10 container text-center text-white">
//         {/* Page Title */}
//         <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//           {title}
//         </h1>

//         {/* Breadcrumb */}
//         <nav className="flex items-center justify-center text-sm text-white/80">
//           <a
//             href="/"
//             className="flex items-center gap-1 hover:text-white transition"
//           >
//             <Home size={16} />
//             Home
//           </a>

//           {items.map((item, index) => (
//             <div key={index} className="flex items-center">
//               <ChevronRight size={16} className="mx-2 text-white/60" />
//               {item.href ? (
//                 <a href={item.href} className="hover:text-white transition">
//                   {item.label}
//                 </a>
//               ) : (
//                 <span className="text-white font-medium">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </nav>
//       </div>
//     </section>
//   );
// };

// export default Breadcrumbs;
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({
  items = [],
  title,
  bgImage = "/images/Breadcrumbs/breadcrumb.png",
}) => {
  return (
    <section
      className="relative py-14 sm:py-16 md:py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 break-words text-white">
          {title}
        </h1>

        <nav
          className="flex flex-wrap items-center justify-center gap-y-2 text-xs sm:text-sm text-white/80"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>

          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-white/60" />

              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-white transition whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
