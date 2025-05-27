import IconSearch from './IconSearch';
import styles from './style.module.css';

export default function Page() {

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.main_header}>
          <a className={styles.logo} href="/">ASCENDION</a>
          <div>
            <IconSearch/>
          </div>
        </div>
        {/* <ul className={styles.nav_links}>
          <li><a href="/">Showcase</a></li>
          <li><a href="/">Docs</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Analytics</a></li>
          <li><a href="/">Commerce</a></li>
          <li><a href="/">Templates</a></li>
          <li><a href="/">Enterprise</a></li>
        </ul>
        <div>
          <input className={styles.search} type="text" placeholder="Search Documentation..." />
        </div> */}
      </div>
    </div>
  )
}
