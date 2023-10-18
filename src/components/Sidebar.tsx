import { FiLogOut } from "react-icons/fi";
import { Button } from "./Button";
import { Link, useLocation } from "react-router-dom";


const links: { label: string, href: string }[] = [
    {
        label: "overview", href: '/dashboard'
    },
    {
        label: "users (table)", href: "/dashboard/users"
    },
    {
        label: "Analytics (charts)", href: "/dashboard/analytics"
    }
]

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="h-[92vh] w-[15vw] shadow-md fixed p-4 flex flex-col justify-between">
            <div className="space-y-2">
                {
                    links.map(link => (
                        <li className="list-none" key={link.href}>
                            <Link
                                to={link.href}
                                className={`block py-2.5 px-4 rounded transition duration-200 ${location.pathname == link.href ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-200'}`}>
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </div>
            <Button className="mb-8 rounded-md space-x-4">
                <span>logout</span>
                <FiLogOut className="text-lg" />
            </Button>
        </div>
    )
}

