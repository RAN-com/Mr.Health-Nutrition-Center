import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/mr1.png';
import { BiMenu } from 'react-icons/bi';

const navLinks = [
    { path: '/home', display: 'Home' },
    { path: '/Nutrition', display: 'Find a Nutritionist' },
    // { path: '/Form', display: 'SurveyForm' },
    { path: '/Services', display: 'Services' },
    { path: '/Careers', display: 'Careers' },
    { path: '/Contact', display: 'Contact' },
  
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu');
    };

    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.remove('show__menu');
        }
    };

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between p-8 bg-emerald-600">
                    <div>
                        <img src={logo} alt="Logo" className="w-16 h-auto" />
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="md:hidden">
                            <BiMenu
                                className="w-6 h-6 cursor-pointer"
                                onClick={toggleMenu}
                            />
                        </span>
                    </div>
                    <div className="navigation" ref={menuRef}>
                        <ul className="menu flex gap-8">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        className="font-bold mb-4 text-yellow-400"
                                        to={link.path}
                                        onClick={closeMenu} // Close menu on link click
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
