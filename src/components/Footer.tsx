import Link from "next/link"
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {

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
    <div className="bg-secondary">
      <div className="container pt-[100px] grid grid-cols-4">
        {/* About us */}
        <div>
          <h1 className="footer-head underline-footer">{aboutData.title}</h1>
          <p className="footer-menus">{aboutData.content}</p>
        </div>

        {/* Get in Touch */}
        <div>
          <h1 className="footer-head underline-footer">{getInData.title}</h1>
          <ul>
            {getInData.menus.map((el) => (
              <li className="footer-menus">{el}</li>
            ))}
          </ul>

        </div>

        {/* Pages */}
        <div>
          <h1 className="footer-head underline-footer">{pageData.title}</h1>
          <ul>
            {pageData.menus.map((data) => (
              <li className="footer-menus hover:text-primary"><Link href={data.url}>{data.title}</Link></li>
            ))}
          </ul>

        </div>

        {/* Subscribe */}
        <div>
          <h1 className="footer-head underline-footer">Subscribe</h1>
          <p className="footer-menus">Subscribe to our mailing list to get the latest updates</p>
          <div>
            <input type="text" placeholder="Email" />
            <button><FaPaperPlane /></button>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Footer
