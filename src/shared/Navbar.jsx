 
 
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navitem = <>
  
  <li className='font-bold'><Link to='/'>Home</Link></li> 
     <li className='font-bold'><Link to = '/feature'>Features</Link></li>
     <li className='font-bold'><Link to='/best'>Best Deals</Link></li>
     <li className='font-bold'><Link to = '/offered'>Offered</Link></li>
     <li className='font-bold'><Link to = '/collection'>Collections</Link></li>
    
   </>
        return (
                <div>
                      <div className="navbar bg-gray-300 bg-opacity-25 top-0 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navitem}
      </ul>
    </div>
    <img className="md:h-10 h-6 rounded-full" src="https://i.pinimg.com/736x/b5/ac/f3/b5acf3f7ce620af31da71fdb221020e9.jpg" alt="" />
    <Link to='/' className="btn btn-ghost normal-case md:text-xl text-rose-800 font-bold">ElectronicsHUB</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
          
          {navitem}
         
    </ul>
  </div>
  <div className="navbar-end sm:display-none">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="md:w-10 w-6 rounded-full">
          <img src="https://randomuser.me/api/portraits/men/78.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    <Link to = '/login' className="md:btn px-2 py-1 rounded-lg md:bg-green-400 bg-green-400">Login</Link>
  </div>
</div>  
                </div>
        );
};

export default Navbar;