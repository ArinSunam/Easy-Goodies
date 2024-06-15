import Link from "next/link"
import { FaPaperPlane, FaChevronRight, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  const date = new Date().getFullYear();
  const superAdmin = 'Arin Sunam';
  const company = 'EdgeInnova Technology'


  const aboutData = {
    title: 'About Us',
    content: 'Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.'
  }

  const getInData = {
    title: 'Get in Touch',
    menus: [
      'Baluwatar, Kathmandu', 'arinsunam05@gmail.com', '9702393579'
    ]
  }

  const pageData = {
    title: 'Pages',
    menus: [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'About',
        url: '/about'
      },
      {
        title: 'Shop',
        url: '/shop'
      },
      {
        title: 'News',
        url: '/news'
      },
      {
        title: 'Contact',
        url: '/contact'
      },
    ]
  }
  return (
    <footer className="bg-secondary">

      {/* Main footer */}
      <section className="container py-[100px] grid grid-cols-4">
        {/* About us */}
        <div>
          <h1 className="footer-head underline-footer">{aboutData.title}</h1>
          <p className="footer-menus">{aboutData.content}</p>
        </div>

        {/* Get in Touch */}
        <div>
          <h1 className="footer-head underline-footer">{getInData.title}</h1>
          <ul className="space-y-2">
            {getInData.menus.map((el) => (
              <li className="footer-menus">{el}</li>
            ))}
          </ul>

        </div>

        {/* Pages */}
        <div>
          <h1 className="footer-head underline-footer">{pageData.title}</h1>
          <ul className="space-y-2">
            {pageData.menus.map((data) => (
              <li className="footer-menus flex items-center gap-3 hover:text-primary  "><span className="text-primary text-xs"><FaChevronRight /></span><Link href={data.url}>{data.title}</Link></li>
            ))}
          </ul>

        </div>

        {/* Subscribe */}
        <div>
          <h1 className="footer-head underline-footer">Subscribe</h1>
          <p className="footer-menus pb-4">Subscribe to our mailing list to get the latest updates</p>
          <div className="flex space-x-2">
            <input type="text" placeholder="Email" className="bg-secondary-light px-[15px] py-[10px] rounded-tl-[5px] rounded-bl-[5px]" />
            <button className="text-primary bg-secondary-light p-[10px]"><FaPaperPlane /></button>
          </div>

        </div>


      </section>

      {/* Copyright section */}
      <section className="border-[1px] border-[#232a35] ">

        <div className="container py-4 flex justify-between items-start">
          <div className="text-[15px] opacity-70 space-y-1">
            <p>Copyrights &copy; {date} - <Link href="#" className="text-primary font-bold ">{superAdmin}</Link>, All Rights Reserved</p>
            <p>Distributed by - <Link href="#" className="text-primary font-bold">{company}</Link> </p>
          </div>

          <nav className="text-lg opacity-70 flex gap-4">
            <Link href="#"><FaLinkedin /></Link>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaXTwitter /></Link>
          </nav>

        </div>
      </section>

    </footer>
  )
}

export default Footer
