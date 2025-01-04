import logo from "../assets/navbar_logo.jpg"
import { MdMenuOpen } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

const Navbar = () => {
    const links=<>
    <li><a>About Me</a></li>
    <li><a>My Projects</a></li>
    <li><a>Contact Info</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-gray-900 fixed z-50 border-b">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <MdMenuOpen className="text-4xl"></MdMenuOpen>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <img src={logo} alt="" className="rounded-lg w-72" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-slate-200">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-neutral">
                        <p>RESUME</p>
                        <FaFileDownload></FaFileDownload>
                    </button>
                </div>
            </div>
            <div className="h-16"></div>
        </div>
    );
};

export default Navbar;