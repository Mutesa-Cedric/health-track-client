import { useRecoilState } from "recoil";
import { showDeleteUserModalState } from "../atoms";
import { Button } from "./Button";
import { RiDeleteBin5Line } from "react-icons/ri"
import { IUser } from "../types";



export default function UsersTable({ users }: { users: IUser[] }) {
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-auto  shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg min-h-[60vh]">
                        <table className="min-w-full  divide-y divide-gray-300">
                            <thead className="">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Country
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 shrink-0">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Joined At
                                    </th>

                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {
                                    users.map((user: IUser, idx) => (
                                        <UserRow key={idx} {...user} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserRow = ({ firstName, country, lastName, email, joinedAt }: IUser) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_show, setShowDelete] = useRecoilState(showDeleteUserModalState);

    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {country}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{firstName}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lastName}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{joinedAt}</td>
            <Button className="rounded-md space-x-2" color="red" variant="solid"
                onClick={() => setShowDelete({
                    email, show: true
                })}
            >
                <span>Delete</span>
                <RiDeleteBin5Line />
            </Button>
        </tr >
    )
}