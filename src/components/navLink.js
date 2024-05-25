"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const NavLink = ({link}) => {
    const pathName = usePathname()

    const getPathName = (path) => {
        switch(path) {
            case '/':
                return styles.linkHome;
            case '/about':
                return styles.linkAbout;
            case '/projects':
                return styles.linkProjects;
            default:
                return styles.linkHome;
        }
    }

    const getHoverStyle = (url) => {
        switch(url) {
            case '/':
                return styles.hoverHome;
            case '/about':
                return styles.hoverAbout;
            case '/projects':
                return styles.hoverProjects;
            default:
                return '';
        }
    }

    return (
        <Link href={link.url}
        >
            <button className={`
                ${styles.linkInactive} ${styles.offset} ${getPathName(pathName)} ${pathName === link.url ? styles.linkActive : getHoverStyle(link.url)}
                `}
            >
                {link.title}  
            </button>
              
        </Link>
    )
}

export default NavLink;