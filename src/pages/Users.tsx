import { FiPlus } from "react-icons/fi";
import { Button } from "../components/Button";
import UsersTable from "../components/UsersTable";
import { IUser } from "../types";
import { useEffect, useState } from "react";
import LoadingState from "../components/states/LoadingState";
import EmptyState from "../components/states/EmptyState";
import { useRecoilState } from "recoil";
import { showAddUserModalState } from "../atoms";

const user: IUser = {
  country: "Rwanda",
  firstName: "Hirwa",
  lastName: "Vanessa",
  email: "hirwavanessa@gmail.com",
  joinedAt: "2022-09-07"
}

export default function Users() {
  // replace this with actual api call.
  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [users, setUsers] = useState<IUser[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setShow] = useRecoilState(showAddUserModalState);

  useEffect(() => {
    setInterval(() => {
      setUsers(new Array(12).fill(user));
      setFetchingUsers(false);
    }, 2000);
  }, []);

  return (
    <div className="space-y-4 px-6">
      <div className="w-full flex justify-between">
        <div>
          <h2 className="text-xl font-medium text-gray-700">Users</h2>
          <p className="text-gray-500">Manage your users here.</p>
        </div>
        <Button
          onClick={() => setShow(true)}
          color="blue" className="rounded-md space-x-2">
          <span>Add User</span>
          <FiPlus className="text-lg" />
        </Button>
      </div>
      {/* when users are available */}
      {(!fetchingUsers && users.length > 0) && < UsersTable users={users} />}

      {/* when fetching users */}
      {fetchingUsers && <LoadingState message="Fetching users..." />}

      {/* when no users were found */}
      {(!fetchingUsers && users.length === 0) && <EmptyState message="no users found!" />}
    </div>
  )
}
