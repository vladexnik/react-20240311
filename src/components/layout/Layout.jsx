
const Layout = ({children}) => {
  return (
    <div>
        <header>header</header> 
        <div>{children}</div>
        <footer style={{position: 'absolute', bottom: '50px'}}>Footer</footer>
    </div>
  )
}

export default Layout