import './Header.modules.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
       <header className='header' >
            <img src={igniteLogo} alt="Logotipo do Ignite" />
       </header>
    )
}