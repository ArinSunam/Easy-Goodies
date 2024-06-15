
const SmallBanner = ({ children }: String | JSX.Element) => {
  return (
    <header className="h-[70vh] bg-secondary-light">
      <div className="h-full  flex flex-col items-center justify-center space-y-2">
        {children}
      </div>
    </header>
  )
}

export default SmallBanner

