import styles from './Header.module.scss'

export default function Header({ children }) {
    return (
        <div className={styles.Jeff}>{children}</div>
    )
}