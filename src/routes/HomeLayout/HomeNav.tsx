import { Link } from "react-router-dom";
import { useState } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

const HomeNav = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            {/* Search overlay */}
            {searchOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center px-6 z-50">
                    <div className="w-full max-w-7xl border mx-auto px-4 rounded-full flex items-center gap-2">
                        <IoSearchOutline className="text-xl text-gray-400 shrink-0" />
                        <input autoFocus type="text" placeholder="Search" className="flex-1 outline-none text-sm text-gray-700 py-2"/>
                        <button onClick={() => setSearchOpen(false)} className="shrink-0">
                            <IoCloseOutline className="text-2xl text-gray-500 hover:text-black" />
                        </button>
                    </div>
                </div>
            )}
            <div className="navbar max-w-7xl mx-auto px-8 lg:px-4  flex justify-between">
                <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content text-[#001a2e] bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                            <li><Link to='/'>Home</Link></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                            <li><Link to='/categories'>Category</Link></li>
                            <li><Link to='product'>Products</Link></li>   
                        </ul>
                </div>
                <div className="">
                    <Link to="/" className="text-4xl font-black cursor-pointer"><span className="text-cyan-400">Z </span><span className="text-2xl   text-[#001a2e]">ze<span className="text-cyan-400">ros</span></span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><Link to='/' className="text-[#001a2e] relative after:absolute after:bottom-0 after:left-[17%] after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-2/3 hover:bg-transparent">Home</Link></li>
                        <li><a className="text-[#001a2e] relative after:absolute after:bottom-0 after:left-[17%] after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-2/3 hover:bg-transparent">About</a></li>
                        <li><a className="text-[#001a2e] relative after:absolute after:bottom-0 after:left-[17%] after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-2/3 hover:bg-transparent">Contact</a></li>
                        <li><Link to='/categories' className="text-[#001a2e] relative after:absolute after:bottom-0 after:left-[17%] after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-2/3 hover:bg-transparent">Category</Link></li>
                        <li><Link to='product' className="text-[#001a2e] relative after:absolute after:bottom-0 after:left-[17%] after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-2/3 hover:bg-transparent">Products</Link></li>
                    </ul>
                </div>
                <div className="flex md:gap-5 gap-2">
                    {/* Search icon */}
                    <button onClick={() => setSearchOpen(true)} className="btn btn-ghost btn-circle">
                        <IoSearchOutline className="text-xl" />
                    </button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="w-5.5 h-5.5 bg-red-500 text-white indicator-item rounded-full">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn bg-orange-500 text-white rounded-full btn-block">View cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                </div>
            </div>
        </div>
    );
};

export default HomeNav;