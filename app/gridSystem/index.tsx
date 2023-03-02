
export default function GridSystemReuse({data}:any) {

    return (
        <div className="flex items-center justify-center space-x-0 sm:space-x-10 space-y-4 sm:space-y-2 pb-6 flex-wrap">
            {
                data.map((item: any) => (

                    <div className="flex flex-col items-center justify-center rounded-lg h-52 bg-blue-700 basis-80 w-40">
                        <h2>{item.name}</h2>
                        <p className="text-xl py-2">{item.instructor}</p>
                        <h4>{item.students}</h4>
                    </div>

                ))
            }
        </div>
    )
} 