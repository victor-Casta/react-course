function Layout({ children }) {
  return(
    <div className="px-4 sm:px-0 w-full h-full mx-6 flex flex-col mt-24  max-w-[1240px]">
      { children }
    </div>
  )
}

export { Layout }