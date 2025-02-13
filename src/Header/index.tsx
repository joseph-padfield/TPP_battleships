import './styles.css'

interface HeaderProps {
    text: string
}
function Header ({text}: HeaderProps) {
    return (
        <h1>{text}</h1>
    )
}

export default Header