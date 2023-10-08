import Image from 'next/image'
import sideBar from './(components)/sideBar/sideBar'
import Link from 'next/link'
import Card from './(components)/card/card'
import SideBar from './(components)/sideBar/sideBar'
import './globals.css'
export default function Home() {
  return (
    <div>
    <div className='grid grid-cols-4 gap-4'>
      <div className='col-span-1 bg-blue-500'>
    
      <SideBar/>
      </div>
      
      
      <div className='col-span-3  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
      <Card title="Students" description='No. of Students'/>
      <Card title="Attendence" description='No. of Present students '/>
      <Card title="Courses" description='No. of Courses'/>
      </div>
     
    </div>
    <div>
    <section class="loacation">
      <section class="loacation">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
            width={'700'} height={'450'} style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
    </section>


    </section>
      
    </div>
    </div>
  )
}
