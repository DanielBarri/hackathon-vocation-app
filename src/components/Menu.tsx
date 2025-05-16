import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/llave.png",
                label: "Admin",
                href: "/admin",
                visible: ["admin"],
            },
            {
                icon: "/teacher.png",
                label: "Teacher",
                href: "/teacher",
                visible: ["admin"],
            },
            {
                icon: "/student.png",
                label: "Student",
                href: "/student",
                visible: ["admin", "teacher", "parent"],
            },
            {
                icon: "/parent.png",
                label: "Parent",
                href: "/parent",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/test.png",
                label: "Test Vocacional",
                href: "/quiz",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/plan.png",
                label: "Plan de estudio",
                href: "/list/plan",
                visible: ["admin", "student", "parent", "teacher"],
            },
            {
                icon: "/topics.png",
                label: "Temas",
                href: "/list/topics",
                visible: ["admin", "student", "parent", "teacher"],
            },
            {
                icon: "/progress.png",
                label: "Progreso",
                href: "/list/progress",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    return (
        <div className="mt-4 text-sm ">
            {menuItems.map((i) => (
                <div className="flex flex-col gap-1.5" key={i.title}>
                    <span className="hidden lg:block text-white font-semibold my-4">
                        {i.title}
                    </span>
                    {i.items.map((item) => {
                        if (item.visible.includes(role)) {
                            return (
                                <Link
                                    href={item.href}
                                    key={item.label}
                                    className="flex items-center justify-center lg:justify-start gap-4 text-white font-semibold py-2 md:px-2 rounded-md hover:bg-lamaSkyLight hover:text-gray-700">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={20}
                                        height={20}
                                    />
                                    <span className="hidden lg:block ">
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        }
                    })}
                </div>
            ))}
        </div>
    );
};

export default Menu;
