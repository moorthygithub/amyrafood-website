import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileHeaderLink = ({ item, onClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();

  const isActive = item.href === location.pathname;

  const handleToggle = (e) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen((prev) => !prev);
    } else {
      onClose?.(); 
    }
  };

  return (
    <div className="w-full">
      <Link
        to={item.href}
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-2 px-3 rounded-lg transition
          ${
            submenuOpen || isActive
              ? "bg-primary/10 text-primary"
              : "text-muted hover:bg-primary/5"
          }
        `}
      >
        {item.label}

        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            className={`transition-transform ${
              submenuOpen ? "rotate-180" : ""
            }`}
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
        <div className="ml-3 mt-1 space-y-1">
          {item.submenu.map((subItem, index) => {
            const subActive = subItem.href === location.pathname;

            return (
              <Link
                key={index}
                to={subItem.href}
                className={`block py-2 px-3 rounded-lg text-sm transition
                  ${
                    subActive
                      ? "bg-primary/15 text-primary"
                      : "text-gray-500 hover:bg-primary/10"
                  }
                `}
                onClick={() => {
                  setSubmenuOpen(false);
                  onClose?.(); 
                }}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
