
const Layout = ({children}) => {
  return (
    <div>
        <header>header</header> 
        <div>{children}</div>
        <footer>Footer</footer>
    </div>
  )
}

export default Layout