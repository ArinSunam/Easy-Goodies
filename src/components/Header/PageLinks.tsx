"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const PageLinks = () => {
  const pathname = usePathname();

  const pageLinks = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '#'
    },
    {
      title: 'Pages',
      url: '#'
    },
    {
      title: 'News',
      url: '#'
    },
    {
      title: 'Contact',
      url: '#'
    },
    {
      title: 'Shop',
      url: '/shop'
    },
  ]
  return (
    <div>
      <ul className="flex text-[14px] items-center gap-[20px] font-bold">

        {pageLinks.map((el, index) => (
          <li key={index}><Link href={el.url} className={`${pathname === el.url ? "text-primary" : ""}`}>{el.title}</Link></li>
        ))}

      </ul>
    </div>
  )
}
export default PageLinks