import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Calendar,
  Clock,
  FileText,
  BookOpen,
  CreditCard,
  Home,
  User,
  FileQuestion,
  Bell,
  Briefcase,
  Building,
  LogOut,
  Users,
  GraduationCap,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

interface NavItem {
  name: string;
  icon: JSX.Element;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; path: string }[];
  isSeparator?: boolean;
}

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const [animatingDropdowns, setAnimatingDropdowns] = useState<number[]>([]);
  const [selectedSubmenuPaths, setSelectedSubmenuPaths] = useState<string[]>([]);
  
  // Auto-open dropdowns based on current path
  useEffect(() => {
    const newOpenDropdowns: number[] = [];
    
    navItems.forEach((item, index) => {
      // Open dropdown if current path matches one of its items
      if (item.dropdownItems?.some(subItem => location.pathname === subItem.path)) {
        newOpenDropdowns.push(index);
        
        // Add the current path to selected submenu paths
        if (!selectedSubmenuPaths.includes(location.pathname)) {
          setSelectedSubmenuPaths(prev => [...prev, location.pathname]);
        }
      }
    });
    
    if (newOpenDropdowns.length > 0) {
      setOpenDropdowns(prev => {
        // Merge previous open dropdowns with new ones (avoid duplicates)
        const combined = [...prev];
        newOpenDropdowns.forEach(index => {
          if (!combined.includes(index)) {
            combined.push(index);
          }
        });
        return combined;
      });
    }
  }, [location.pathname, selectedSubmenuPaths]);
  
  // Close all dropdowns when sidebar is collapsed
  useEffect(() => {
    if (isCollapsed) {
      // Immediately clear all dropdowns without animation
      setOpenDropdowns([]);
      setAnimatingDropdowns([]);
    }
  }, [isCollapsed]);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = (index: number) => {
    // Check if this dropdown contains the currently selected path
    const containsSelectedPath = navItems[index].dropdownItems?.some(
      subItem => selectedSubmenuPaths.includes(subItem.path)
    );

    if (!openDropdowns.includes(index)) {
      // For opening: First add to animating list, then after a tiny delay add to open list
      setAnimatingDropdowns(prev => [...prev, index]);
      
      // Use requestAnimationFrame for smoother animation on opening
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setOpenDropdowns(prev => [...prev, index]);
        });
      });
    } else if (!containsSelectedPath) {
      // Only animate collapse if we're not on a selected submenu path
      // For closing: First remove from open list, keep in animating until animation completes
      setOpenDropdowns(prev => prev.filter(i => i !== index));
      
      // Remove from animating list after animation completes with longer timeout for smooth collapse
      setTimeout(() => {
        setAnimatingDropdowns(prev => prev.filter(i => i !== index));
      }, 600); // Slightly adjusted for better timing
    } else {
      // If we're on a selected path, just close without animation
      setOpenDropdowns(prev => prev.filter(i => i !== index));
      setAnimatingDropdowns(prev => prev.filter(i => i !== index));
    }
  };

  const navItems: NavItem[] = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { 
      name: "My Attendance", 
      icon: <Clock size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Attendance", path: "/attendance" },
        { name: "Ceremony Attendance", path: "#/ceremony-attendance" },
        { name: "Library Attendance", path: "#/library-attendance" }
      ]
    },
    { 
      name: "Registration", 
      icon: <FileText size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Pre Registration Form", path: "/pre-registration-form" }
      ]
    },
    { 
      name: "Exam", 
      icon: <FileText size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Regular Apply", path: "#/regular-apply" },
        { name: "Internal Marks", path: "/internal-marks" },
        { name: "Mid Term Admit Card", path: "#/mid-term-admit-card" },
        { name: "End Term Admit Card (Reg)", path: "#/end-term-admit-card" },
        { name: "Ex & Repeater Apply", path: "#/ex-repeater-apply" },
        { name: "Repeater/Ex Admit Card", path: "#/repeater-ex-admit-card" },
        { name: "Mid Term 2 Admit Card", path: "#/mid-term-2-admit-card" }
      ]
    },
    { 
      name: "Student Information", 
      icon: <User size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Student Profile", path: "/student-profile" },
        { name: "No Dues", path: "/no-dues" },
        { name: "Enrollment Form", path: "#/enrollment-form" },
        { name: "DCS", path: "#/dcs" },
        { name: "Consent", path: "#/consent" }
      ]
    },
    { 
      name: "Result", 
      icon: <FileText size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "View Result", path: "/view-result" }
      ]
    },
    { 
      name: "Student Raise Issue", 
      icon: <FileQuestion size={20} />, 
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Raise Issue/Suggestion Form/Grievance", path: "#/raise-issue" }
      ]
    },
    { name: "Calendar", icon: <Calendar size={20} />, path: "#" },
    { 
      name: "Online Payment", 
      icon: <CreditCard size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Fee Payment HDFC", path: "#/fee-payment-hdfc" },
        { name: "My Payments", path: "#/my-payments" },
        { name: "Hostel / Bus Payment", path: "#/hostel-bus-payment" },
        { name: "Fee Payment ICICI", path: "#/fee-payment-icici" }
      ]
    },
    { 
      name: "Hostel", 
      icon: <Home size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "New Form", path: "#/hostel-new-form" },
        { name: "Rules & Regulations", path: "#/hostel-rules" },
        { name: "Hostel Fees Notice", path: "#/hostel-fees" }
      ]
    },
    { name: "Password", icon: <FileText size={20} />, path: "#" },
    { 
      name: "Training and Placement", 
      icon: <Briefcase size={20} />, 
      path: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Placement Form", path: "#/placement-form" },
        { name: "Training Syllabus", path: "#/training-syllabus" },
        { name: "HandBook", path: "#/handbook" },
        { name: "Upcoming Placement Companies", path: "#/upcoming-companies" },
        { name: "Training Executed", path: "#/training-executed" },
        { name: "Placement Policy", path: "#/placement-policy" },
        { name: "Internship Details", path: "#/internship-details" }
      ]
    },
    { 
      name: "Notices", 
      icon: <Bell size={20} />, 
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "ITMU Activities", path: "#/itmu-activities" },
        { name: "Time Table For Architecture-1", path: "#/timetable-arch-1" },
        { name: "Time Table For Architecture-2", path: "#/timetable-arch-2" },
        { name: "View More", path: "#/notices-more" }
      ]
    },
    { name: "ITMU Activities", icon: <Bell size={20} />, path: "#", hasDropdown: true },
    { name: "Time Table", icon: <Clock size={20} />, path: "#" },
    { name: "Event Registration", icon: <Calendar size={20} />, path: "#" },
    { name: "NSS", icon: <Building size={20} />, path: "#" },
    { name: "Library", icon: <BookOpen size={20} />, path: "#", hasDropdown: true },
    { name: "Student Services", icon: <Users size={20} />, path: "#", hasDropdown: true },
    { name: "Alumni Registration", icon: <GraduationCap size={20} />, path: "#" },
    { 
      name: "My Feedback", 
      icon: <FileText size={20} />, 
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Student Evaluation For Faculties(Anonymously) By Sem", path: "#/faculty-evaluation" },
        { name: "New Student Curriculum Feedback", path: "#/curriculum-feedback" },
        { name: "Student Satisfaction Survey", path: "#/satisfaction-survey" }
      ]
    },
    // Add separator and logout at the end of the navigation items
    { name: "Logout", icon: <LogOut size={20} />, path: "/", isSeparator: true },
  ];

  return (
    <div
      className={`bg-sidebar h-screen flex flex-col ${
        isCollapsed ? "w-20" : "w-64"
      } sticky top-0`}
      style={{ transition: "width 500ms ease-in-out" }}
    >
      <div className={`${isCollapsed ? "p-4" : "p-5"} border-b border-sidebar-border flex justify-between items-center transition-all duration-500 ease-in-out will-change-[padding]`}>
        {!isCollapsed && (
          <div className="flex-1 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out flex justify-center">
            <span className="font-bold text-xl text-red-800 transition-transform duration-500 ease-in-out">ITM University</span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-full flex justify-center transition-all duration-500 ease-in-out">
            <span className="font-bold text-xl text-red-800 transition-transform duration-500 ease-in-out">ITM</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={`${isCollapsed ? "" : "absolute right-4"} transition-all duration-500 ease-in-out`}
          onClick={toggleSidebar}
        >
          {isCollapsed ? <ChevronRight size={20} className="transition-transform duration-500 ease-in-out" /> : <ChevronLeft size={20} className="transition-transform duration-500 ease-in-out" />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-1">
        <nav className="space-y-0 px-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path || 
              (item.dropdownItems?.some(subItem => location.pathname === subItem.path) ?? false);
            const isDropdownOpen = openDropdowns.includes(index);
            
            // Calculate exact dropdown height for precise animations - each item is 36px + consistent spacing
            const dropdownHeight = item.dropdownItems ? (item.dropdownItems.length * 36) + (item.name === "My Feedback" ? 60 : 8) : 0;
            
            // Special case spacing for specific items
            const hasSpecialSpacing = 
              item.name === "Exam" || 
              item.name === "Student Raise Issue" ||
              item.name === "My Feedback";
            
            // Add spacing logic for sequence of items
            const previousItem = index > 0 ? navItems[index - 1].name : "";
            const nextItem = index < navItems.length - 1 ? navItems[index + 1].name : "";
            const isBeforeSpecialItem = nextItem === "Training and Placement";
            const needsNormalSpacing = previousItem === "Password" || (previousItem === "Notices" && item.name === "Training and Placement");
            
            // Specifically reduce gap between certain items
            const reduceSpacingAfterItem = 
              (item.name === "Student Raise Issue" && nextItem === "Calendar") ||
              (item.name === "Exam" && nextItem === "Student Information");
            
            return (
              <div key={index} className="relative" style={{ 
                marginBottom: !isCollapsed && isDropdownOpen ? `${dropdownHeight}px` : 
                               (reduceSpacingAfterItem ? '4px' :
                               (hasSpecialSpacing ? '16px' : '8px')),
                marginTop: item.isSeparator && openDropdowns.includes(navItems.findIndex(i => i.name === "My Feedback")) ? '60px' : ''
              }}>
                {!item.hasDropdown ? (
                  <Link 
                    to={item.path}
                    onClick={(e) => {
                      // Prevent default only if the link is not ready yet or is a placeholder
                      if (item.path.startsWith('#')) {
                        e.preventDefault();
                      }
                    }}
                    className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md cursor-pointer w-full overflow-hidden ${
                      isActive 
                        ? "bg-red-800 text-white hover:bg-red-800" 
                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    } ${
                      item.isSeparator ? "mt-4 border-t border-sidebar-border pt-4" : ""
                    } ${
                      isCollapsed ? "justify-center" : ""
                    }`}
                    style={{ transition: "background-color 300ms ease-in-out, color 300ms ease-in-out" }}
                  >
                    <div className={`${isCollapsed ? "w-6 h-6 flex items-center justify-center" : ""}`}>
                      {item.icon}
                    </div>
                    {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
                  </Link>
                ) : (
                  <div
                    onClick={() => toggleDropdown(index)}
                    className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md cursor-pointer overflow-hidden ${
                      isActive 
                        ? "bg-red-800 text-white hover:bg-red-800" 
                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    } ${
                      item.isSeparator ? "mt-4 border-t border-sidebar-border pt-4" : ""
                    } ${
                      isCollapsed ? "justify-center" : ""
                    }`}
                    style={{ transition: "background-color 300ms ease-in-out, color 300ms ease-in-out" }}
                  >
                    <div className={`${isCollapsed ? "w-6 h-6 flex items-center justify-center" : ""}`}>
                      {item.icon}
                    </div>
                    {!isCollapsed && (
                      <>
                        <span className="whitespace-nowrap">{item.name}</span>
                        {item.hasDropdown && !isCollapsed && (
                          <ChevronRight 
                            className={`ml-auto ${item.name === "Training and Placement" ? "h-6 w-6" : "h-4 w-4"} ${isDropdownOpen ? 'rotate-90' : ''}`}
                            style={{ 
                              transition: "transform 300ms ease-in-out",
                              stroke: "currentColor",
                              strokeWidth: item.name === "Training and Placement" ? "3.5" : "2.5",
                              opacity: item.name === "Training and Placement" ? "1" : "0.9"
                            }}
                          />
                        )}
                      </>
                    )}
                  </div>
                )}
                
                {!isCollapsed && item.hasDropdown && item.dropdownItems && (
                  <div 
                    className={`absolute left-0 w-full pointer-events-none`}
                    style={{ 
                      opacity: isDropdownOpen || animatingDropdowns.includes(index) ? 1 : 0,
                      visibility: (isDropdownOpen || animatingDropdowns.includes(index)) && !isCollapsed ? 'visible' : 'hidden',
                      top: '100%',
                      transition: 'opacity 300ms ease-in-out',
                      height: dropdownHeight,
                      marginTop: '2px'
                    }}
                  >
                    <div className="ml-9 space-y-1">
                      {item.dropdownItems.map((subItem, subIndex, array) => {
                        const isSubItemActive = location.pathname === subItem.path;
                        const totalItems = item.dropdownItems!.length;
                        const reverseIndex = totalItems - subIndex - 1; // Reverse order for collapse
                        const isLastItem = subIndex === array.length - 1;
                        
                        // Special case for specific last dropdown items
                        const isSpecialLastItem = 
                          isLastItem && 
                          (
                            (item.name === "Exam" && subItem.name === "Mid Term 2 Admit Card") ||
                            (item.name === "Student Raise Issue" && subItem.name === "Raise Issue/Suggestion Form/Grievance") ||
                            (item.name === "Training and Placement" && subItem.name === "Internship Details") ||
                            (item.name === "My Feedback" && subItem.name === "Student Satisfaction Survey")
                          );
                        
                        const isShowing = isDropdownOpen || animatingDropdowns.includes(index);
                        
                        return (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-3 py-1.5 text-sm rounded-md pointer-events-auto ${
                              isSubItemActive 
                                ? "bg-red-100 text-red-800 font-medium" 
                                : "text-red-800 hover:bg-sidebar-accent"
                            } ${!isLastItem ? 'mb-1' : ''}`}
                            style={{
                              opacity: isDropdownOpen ? 1 : 0,
                              transform: isShowing ? 'translateY(0)' : 'translateY(-10px)',
                              transitionProperty: isDropdownOpen && !selectedSubmenuPaths.includes(subItem.path) ? 'opacity, transform' : 'none',
                              transitionDuration: isDropdownOpen && !selectedSubmenuPaths.includes(subItem.path) ? '300ms' : '0ms',
                              transitionTimingFunction: 'ease-in-out',
                              transitionDelay: isDropdownOpen && !selectedSubmenuPaths.includes(subItem.path) ? `${50 + subIndex * 60}ms` : '0ms',
                              marginBottom: isSpecialLastItem ? (item.name === "My Feedback" ? '50px' : '24px') : (isLastItem ? '8px' : '4px'),
                              whiteSpace: 'normal',
                              overflow: 'visible',
                              lineHeight: '1.2',
                              maxWidth: '100%',
                              paddingBottom: item.name === "My Feedback" && isLastItem ? '16px' : ''
                            }}
                            onClick={(e) => {
                              if (subItem.path.startsWith('#')) {
                                e.preventDefault();
                              } else {
                                // Add this path to selected submenu paths when clicked
                                setSelectedSubmenuPaths(prev => [...prev, subItem.path]);
                              }
                            }}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
