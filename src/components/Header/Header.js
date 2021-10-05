import './Header.css'

const Header = ({background}) => {
    return (
        <header className={background ? 'background' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="Netflix"
                    />
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img 
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" 
                        alt="Usuário"
                    />
                </a>
            </div>
        </header>
    )
}

export default Header