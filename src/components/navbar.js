import Link from "next/link";
import styles from './navbar.module.css';
import NavLink from "./navLink";

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/projects', title: 'Projects' },
];

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            
            {links.map((link) => (
                <NavLink link={link} key={link.title} />
            ))}
            
        </div>
    );
};

export default Navbar;