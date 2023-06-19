import React from 'react'
import logoConpec from '../imagens/logoConpec.png'

const LogoConpec = () => {
    return (
    <div>
        <img src = {logoConpec} alt = "Logo Conpec" className='logoConpec'/>
        <p  className='siteConpec'>
            Conheça o <a href='https://www.conpec.com.br/' className='linkConpec'>site</a>!
        </p>
    </div>
    )
}

export default LogoConpec