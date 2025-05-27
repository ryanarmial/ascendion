'use client';

import { useState, useRef, useEffect } from 'react';
import IconSearch from './IconSearch';
import styles from './style.module.css';

export default function Page() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    const clickOutsideListener = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false);
        setIsOpenSearch(false);
      }
    }

    document.addEventListener('click', clickOutsideListener, { signal: controller.signal });

    return () => {
      controller.abort();
    }

  },[])

  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
    setIsOpenMenu(false);
  }

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsOpenSearch(false);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.container} ref={menuRef}>
          <div className={styles.main_header}>
            <a className={styles.logo} href="/">ASCENDION</a>
            <div className={styles.icon_wrapper}>
              <div onClick={toggleSearch}>
                <IconSearch />
              </div>
              <div className={styles.icon_menu_wrapper} onClick={toggleMenu}>
                <div className={`${styles.icon_menu} ${isOpenMenu ? styles.open_menu : ''}`}/>
              </div>
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
          <div className={`${styles.search_wrapper} ${isOpenSearch ? styles.open_search : ''}`}>
            <div className={styles.search}>
              <input type="text" placeholder="Search Documentation..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
