function Layout({ children }) {
  return(
    <div className="w-full h-full mx-6 flex flex-col mt-24  max-w-[1240px]">
      { children }
    </div>
  )
}

export { Layout }