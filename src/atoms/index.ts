import { atom } from "recoil";


export const showAddUserModalState = atom({
    key: "showAddUserModalState",
    default: false,
});

export const showDeleteUserModalState = atom<{ show: boolean, email: string } | null>({
    key: "showDeleteUserModalState",
    default: null,
});
