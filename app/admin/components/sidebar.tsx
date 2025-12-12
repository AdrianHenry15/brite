"use client";

import {
    ChevronLeft,
    MenuIcon,
    XIcon,
    User,
    LayoutDashboard,
    FileText,
    ClipboardList,
    Star,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define icons for sidebar items
const icons = {
    back: <ChevronLeft color="red" size={20} />,
    dashboard: <LayoutDashboard size={20} />,
    users: <User size={20} />,
    promotions: <Star size={20} />,
    blogs: <FileText size={20} />,
    applications: <ClipboardList size={20} />,
    resumes: <ClipboardList size={20} />,
};

const SidebarItems = [
    { href: "/", label: "Back To Website", icon: icons.back, alwaysShowIcon: true },

    { href: "/admin/dashboard", label: "Dashboard", icon: icons.dashboard },
    { href: "/admin/users", label: "Users", icon: icons.users },
    { href: "/admin/promotions", label: "Promotions", icon: icons.promotions },
    { href: "/admin/blogs", label: "Blogs", icon: icons.blogs },
    { href: "/admin/applications", label: "Applications", icon: icons.applications },
    { href: "/admin/resumes", label: "Resumes", icon: icons.resumes },
];

interface IAdminSidebarProps {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
const AdminSidebar = (props: IAdminSidebarProps) => {
    const { collapsed, setCollapsed } = props;
    const pathname = usePathname();

    return (
        <aside
            className={`
                h-full fixed left-0 top-0 z-40
                bg-white dark:bg-gray-800 shadow-lg
                transition-all duration-300 ease-in-out
                ${collapsed ? "w-18" : "w-64"}
                flex flex-col
            `}
        >
            {/* Sidebar Header */}
            <div
                className={`${collapsed ? "justify-center" : "justify-between border-b border-gray-200 dark:border-gray-700"} flex items-center p-4 `}
            >
                {!collapsed && (
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Admin Panel</h2>
                )}

                {/* Collapse Toggle */}
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className={`${collapsed ? "pointer-events-none md:pointer-events-auto" : ""} text-gray-700 dark:text-gray-300 hover:text-blue-500 transition`}
                >
                    {collapsed ? (
                        <MenuIcon size={22} />
                    ) : (
                        <XIcon className={`xl:hidden`} size={22} />
                    )}
                </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                {SidebarItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        title={collapsed ? item.label : ""}
                        className={`
                            flex items-center gap-3 p-2 rounded-md
                            text-gray-700 dark:text-gray-200
                            hover:bg-blue-600 hover:text-white transition
                            ${pathname === item.href ? "bg-blue-500 text-white" : ""}
                        `}
                    >
                        {/* Icon logic */}
                        {(collapsed || item.alwaysShowIcon) && (
                            <div className="flex-shrink-0">{item.icon}</div>
                        )}

                        {/* Label only when not collapsed */}
                        {!collapsed && <span>{item.label}</span>}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default AdminSidebar;
