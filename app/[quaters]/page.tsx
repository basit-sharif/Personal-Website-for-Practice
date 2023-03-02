"use client"
import { DetailQuarterData } from "@/typesAndArray/Quarterdata"

export default function Page({ params }: { params: { quaters: string } }) {
    const data = DetailQuarterData.filter((item: any) => item.id == params.quaters)

    let orgData: any = "";

    data.forEach((item: any) => {
        orgData = item
    })

    return (
        <div>
            <h2>{orgData.label}</h2>
            <p>{orgData.content}</p>
        </div>
    )
}