

import {
    HomeIcon,
    ShoppingCartIcon,
    PhoneIcon,
    DocumentTextIcon,
    UserIcon,
    CalendarIcon,
    QuestionMarkCircleIcon,
    ChartBarIcon,
    PlusCircleIcon,
    ListBulletIcon
} from "@heroicons/react/24/solid";

const menu = [
    {
        title: "Dashboard",
        to: "/home/dashboard",
        icon: HomeIcon
    },
    {
        title: "Inventory",
        to: "/home/inventory",
        icon: ShoppingCartIcon,
        children: [
            { title: "Add Item", to: "/home/inventory/add", icon: PlusCircleIcon },
            { title: "View All", to: "/home/inventory/list", icon: ListBulletIcon }
        ]
    },
    {
        title: "Contacts",
        to: "/contacts",
        icon: PhoneIcon,
        children: [
            { title: "List Contacts", to: "/contacts/list" },
            { title: "Add Contact", to: "/contacts/add" }
        ]
    },
    {
        title: "Invoices",
        to: "/invoices",
        icon: DocumentTextIcon
    },
    {
        title: "Profile",
        to: "/profile",
        icon: UserIcon
    },
    {
        title: "Calendar",
        to: "/calendar",
        icon: CalendarIcon
    },
    {
        title: "FAQ",
        to: "/faq",
        icon: QuestionMarkCircleIcon
    },
    {
        title: "Charts",
        to: "/charts",
        icon: ChartBarIcon,
        children: [
            { title: "Bar Chart", to: "/charts/bar" },
            { title: "Pie Chart", to: "/charts/pie" },
            { title: "Line Chart", to: "/charts/line" },
            { title: "Geography Chart", to: "/charts/geography" }
        ]
    }
];

export { menu };
