import { Link, Outlet } from 'react-router-dom'

const PublicLayouts = () => {
  return (
    <>
        <nav>
            <h1>Navbar</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/membership">Membership</Link>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
            <h1>Footer</h1>

        </footer>
    </>
  )
}

export default PublicLayouts