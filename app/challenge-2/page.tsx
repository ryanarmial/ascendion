'use client';

import { useState } from 'react';
import IconSearch from './IconSearch';
import styles from './style.module.css';

export default function Page() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.main_header}>
            <a className={styles.logo} href="/">ASCENDION</a>
            <div className={styles.icon_wrapper}>
              <IconSearch/>
              <div onClick={() => setIsOpenMenu(!isOpenMenu)} className={`${styles.icon_menu} ${isOpenMenu ? styles.open_menu : ''}`}/>
            </div>
          </div>
          <div className={`${styles.nav_links} ${isOpenMenu ? styles.active : ''}`}>
            <ul>
              <li><a href="/">Showcase</a></li>
              <li><a href="/">Docs</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Analytics</a></li>
              <li><a href="/">Commerce</a></li>
              <li><a href="/">Templates</a></li>
              <li><a href="/">Enterprise</a></li>
            </ul>
          </div>
          {/* <div>
            <input className={styles.search} type="text" placeholder="Search Documentation..." />
          </div> */}
        </div>
      </div>
    </div>
  )
}
