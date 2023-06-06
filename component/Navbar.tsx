/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import { FaCrown } from 'react-icons/fa';
import { BsFillBarChartLineFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import Image from 'next/image';
import logoImage from '/public/logo.png';
import styles from '/styles/Navbar.module.scss';
import SearchBar from './SearchBar';
import { ThemeToggler } from './ThemeToggler';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftWrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logoImage} alt="logo" fill />
          </Link>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <FaCrown className={styles.icon} />
        {/* Ranking */}
        <BsFillBarChartLineFill className={styles.icon} />
        {/* Statistics */}
      </div>
      <div className={styles.rightWrapper}>
        <MdSettings className={styles.icon} />
        <ThemeToggler />
      </div>
    </nav>
  );
}
