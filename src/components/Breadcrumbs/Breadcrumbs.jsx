import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = ({
  items = [],
  title,
  bgImage = "/images/Breadcrumbs/breadcrumb.png",
}) => {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 container text-center text-white">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center text-sm text-white/80">
          <a
            href="/"
            className="flex items-center gap-1 hover:text-white transition"
          >
            <Home size={16} />
            Home
          </a>

          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight size={16} className="mx-2 text-white/60" />
              {item.href ? (
                <a href={item.href} className="hover:text-white transition">
                  {item.label}
                </a>
              ) : (
                <span className="text-white font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
