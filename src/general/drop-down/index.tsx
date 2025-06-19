// components/Dropdown.tsx
import { useEffect, useRef } from "react";

interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  isOpen: boolean;
  toggleOpen: () => void;
  items: DropdownItem[];
}

const OptionsDropdown = ({ isOpen, toggleOpen, items }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleOpen();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleOpen]);

  return (
    <div className="relative">
      <button
        data-testid="view-actions"
        type="button"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.stopPropagation();
          toggleOpen();
        }}
        className="cursor-pointer p-1"
      >
        <label className="sr-only">view actions</label>
        {/* <KebabIcon className='text-text-secondary' /> */}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-[20px] z-50 mt-2 w-48 cursor-pointer rounded-md bg-white shadow-xl"
        >
          <ul className="text-text-secondary bg-surface-primary text-sm">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    item.onClick();
                    toggleOpen();
                  }}
                  className="hover:bg-button-outline-stroke-enabled w-full cursor-pointer px-4 py-2 text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptionsDropdown;
