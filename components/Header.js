import styles from './Header.module.scss'

export default function Header({ children }) {
    return (
        <header>
            <div className="container">
                <div className={styles.logo}>
                    <i className="fa-solid fa-leaf"></i>&nbsp;&nbsp;Evergreen Plants
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}