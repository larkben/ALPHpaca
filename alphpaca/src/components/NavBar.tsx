import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <style>
            @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
      <div className={styles.logo}>ALPHpaca</div>
      <ul className={styles.navItems}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Token Creator">
            <a>Create Token</a>
          </Link>
        </li>
        <li>
          <Link href="/Mint">
            <a>Mint</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Coming Soon!</a>
          </Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  );
};