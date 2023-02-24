export default function Buttons({name }:any){
    let bgc = "red-500"
    return(
        <button className={`bg-${bgc} text-red-500`}>{name}</button>
    )
}
