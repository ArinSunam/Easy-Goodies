
const About = () => {
  const aboutData = {
    est: 'Since  Year 1999',
    name: 'EasyGoodies',
    desc1: 'Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.'
  }

  return (
    <div className="container  ">
      <div className="grid grid-cols-2 place-items-center gap-x-16">

        <iframe width="540" height="451" className="w-[540px] rounded-tr-[10px] rounded-bl-[10px]" src="https://www.youtube.com/embed/zfHDkS31-0g?si=XRJRMgQoQCqxpezL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div className="text-secondary flex flex-col items-start gap-y-4">
          <p className=" text-[15px] leadinng-[160%] opacity-80">{aboutData.est}</p>
          <p className="text-[42px] font-bold">We are <span className="text-primary">{aboutData.name}</span></p>

          <div className="space-y-2  text-[15px] leading-[160%] ">
            <p>{aboutData.desc1}</p>
            <p>{aboutData.desc2}</p>
          </div>

          <button className="w-[129px] py-[10px] px-[20px] text-body bg-primary rounded-[50px] hover:bg-secondary hover:text-primary">Know More</button>

        </div>
      </div>


    </div>
  )
}

export default About
