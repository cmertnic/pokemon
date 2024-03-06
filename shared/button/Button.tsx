import './button.scss';
import Link from 'next/link';

const Button = ({ children, type, link }) => {
    return (
        <Link href={link} className={`btn ${type}`}>{children}</Link>
    )
}

export default Button
