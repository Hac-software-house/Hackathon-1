 import Link from "next/link"
 
 
 export default function SideBar(){
    return(
<div >
<ul className="bg-gray-700 text-2xl pt-40 pb-40 ">
    <li className="py-6 font-bold "><Link href="/" >Dashboard</Link></li>
    <li className="py-6 font-bold "><Link href="/students" >Students</Link></li>
    <li className="py-6 font-bold "><Link href="/courses" >Courses</Link></li>
    <li className="py-6 font-bold "><Link href="/attendens" >Attendens</Link></li>
    </ul>
</div>)
}
 