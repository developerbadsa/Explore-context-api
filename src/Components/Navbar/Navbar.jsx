import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../UserProvider";

const Navbar = () => {
    const { logout, user } = useContext(userContext);
    const [btn, setBtn] = useState(null);

    const menuItems = (
        <>
            <li><NavLink to='/'> Home </NavLink></li>
            {
                !user?.email && (
                    <>
                        <li><NavLink to='/login'> Login </NavLink></li>
                        <li><NavLink to='/register'> Register </NavLink></li>
                    </>
                )
            }
            {
                user?.email && (
                    <>

                        <li><NavLink to='/order'> Order </NavLink></li>
                    </>
                )
            }

        </>
    );

    const handleLogOut = () => {
        logout()
            .then()
            .catch(err => console.log(err));
    };

    console.log(user)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">{menuItems}</ul>
                </div>
                <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="gap-5 px-1 menu menu-horizontal">{menuItems}</ul>
            </div>
            {user?.email ? (
                <div className="flex gap-2 navbar-end">
                    <span>{user?.email}</span>
                    <button className="btn btn-sm btn-primary" onClick={handleLogOut}>Logout</button>
                </div>) : ''
            }
        </div>
    );
};

export default Navbar;
