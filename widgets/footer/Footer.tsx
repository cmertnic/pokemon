import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={styles.footer}>
					<p>Make with ❤️ for the PokéSpartans team Platzi Master</p>
					<a href='#'><p>Ours Team</p></a>
				</div>
			</div>
		</footer>)
}

export default Footer;