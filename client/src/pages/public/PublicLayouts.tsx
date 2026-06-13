import { Link, Outlet } from 'react-router-dom'

const PublicLayouts = () => {
  return (
    <>
    <div className=''>
      <div className=" m-auto bg-amber-50 border border-b-2">
        <nav className='max-w-7xl m-auto flex justify-between items-center p-4 '>
          <Link to="/">
            <h1 className='text-3xl font-bold'>MediumX</h1>
          </Link>
          <div className='flex gap-4 items-center'>
            <Link to="/about">Our Story</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/write">Write</Link>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup" className='px-4 py-2 bg-black text-white rounded-full'>Get started</Link>
          </div>
        </nav>
      </div>
      <main className='min-h-[calc(100vh-80px-50px)]'>
        <Outlet />
      </main>
      <footer className='p-4 bg-amber-50 flex justify-center items-center gap-4 border border-t-2'>

        <div className='flex gap-4 text-xs'>
          <Link to="#">Help</Link>
          <Link to="#">Status</Link>
          <Link to="#">About</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Press</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Store</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Rules</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Text to speech</Link>

        </div>
      </footer>
    </div>
    </>
  )
}

export default PublicLayouts