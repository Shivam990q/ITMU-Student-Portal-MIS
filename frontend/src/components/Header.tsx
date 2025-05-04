import { useState, useEffect, useRef } from "react";
import { ChevronDown, Bell, User, Lock, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "ITM University, Gwalior" }: HeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdownName: string) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  // Handle clicks outside of dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-red-900 text-white shadow-sm p-4 flex justify-between items-center relative">
      <div className="flex items-center gap-3">
        <img src="/placeholder.svg" alt="ITM University Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-10" ref={dropdownRef}>
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => toggleDropdown('fees')}
          >
            <span className="text-2xl">₹</span>
            <ChevronDown size={16} />
          </div>
          {openDropdown === 'fees' && (
            <div className="absolute right-0 top-full mt-1 w-80 bg-white shadow-md rounded-sm border z-50 text-gray-800">
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span>Fee due :</span>
                  <span>Rs.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bus due :</span>
                  <span>Rs.</span>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm">* Cr. indicate fee is not due.</p>
                  <p className="text-sm">* Final amount may vary due to incidence of fine, examination fee etc.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => toggleDropdown('registration')}
          >
            <span className="text-3xl">®</span>
            <ChevronDown size={16} />
          </div>
          {openDropdown === 'registration' && (
            <div className="absolute right-0 top-full mt-1 w-80 bg-white shadow-md rounded-sm border z-50 text-gray-800">
              <div className="p-4 space-y-4">
                <div>
                  <p className="font-medium">Roll No.: betn1cs23071</p>
                  <p>You are registered for Sem# 4, regular course.</p>
                </div>
                <div className="flex justify-center">
                  <button className="px-4 py-2 border rounded bg-gray-50 text-gray-800 hover:bg-gray-100">
                    Print Registration Slip
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => toggleDropdown('notifications')}
          >
            <Bell size={20} />
            <ChevronDown size={16} />
          </div>
          {openDropdown === 'notifications' && (
            <div className="absolute right-0 top-full mt-3 w-80 bg-white shadow-md rounded-sm border z-50 text-gray-800">
              <div className="p-4 flex justify-center">
                <Link to="#" className="text-blue-600 hover:underline flex items-center">
                  See All Notices &gt;
                </Link>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => toggleDropdown('profile')}
          >
            <User size={20} />
            <ChevronDown size={16} />
          </div>
          {openDropdown === 'profile' && (
            <div className="absolute right-0 top-full mt-3 w-64 bg-white shadow-md rounded-sm border z-50 text-gray-800">
              <div className="py-2">
                <Link to="/student-profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                  <User size={18} />
                  <span>Student Info</span>
                </Link>
                <Link to="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                  <Lock size={18} />
                  <span>Change Password</span>
                </Link>
                <div className="border-t my-1"></div>
                <Link to="/" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                  <LogOut size={18} />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 