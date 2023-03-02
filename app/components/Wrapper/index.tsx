import { ReactNode } from "react";

interface typeOfChildren{
    children:ReactNode
}

export default function Wrapper({children}:typeOfChildren) {
    return (
        <div className="max-w-[85rem] mx-auto">{children}</div>
    )
}