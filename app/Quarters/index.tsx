import Link from "next/link"
export default function QuarterSystemReuse({data}:any) {

    return (
        <div className="flex items-center justify-center space-x-0 sm:space-x-10 space-y-4 sm:space-y-2 pb-6 flex-wrap">
            {
                data.map((item: any) => (
                    <div className="relative -z-20 flex flex-col items-center justify-center rounded-lg h-52 bg-blue-700 basis-80 w-40">
                        <h2>{item.label}</h2>
                        <p className="text-xl py-2">{item.detail}</p>
                        <button><Link href={item.link}>{item.button}</Link></button>
                        <h5 className="absolute right-8 text-8xl text-blue-600 -z-10">{item.q}</h5>
                    </div>

                ))
            }
        </div>
    )
} 