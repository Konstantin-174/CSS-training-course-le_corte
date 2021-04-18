import React from 'react';
import local from './Footer.module.scss'
import LogoOne from './img/LogoOne';
import LogoTwo from './img/LogoTwo';
import LogoThree from './img/LogoThree';

const Footer = () => {
    return (
        <footer className={local.footerWrapper}>
            <div className={local.sectionInner}>
                <div className={local.navUp}>
                    <div className={local.navUpLinks}>
                        <a href="#">Главная</a>
                    </div>
                    <div className={local.navUpLinks}>
                        <a href="#">Каталог</a>
                    </div>
                    <div className={local.navUpLinks}>
                        <a href="#">Поставщики</a>
                    </div>
                    <div className={local.navUpLinks}>
                        <a href="#">Коллекции</a>
                    </div>
                    <div className={local.navUpLinks}>
                        <a href="#">Дегустация</a>
                    </div>
                    <div className={local.navUpLinks}>
                        <a href="#">Коллекция 2020</a>
                    </div>
                    <div className={local.navUpLinks}>
                        <a href="#">Контакты</a>
                    </div>
                </div>
                <div className={local.navDown}>
                    <div className={local.navDownItem}>винный бутик LE CORTE</div>
                    <div className={local.navDownItem}>8 (812) 123-45-67</div>
                    <div className={local.navDownItem}>
                        <div className={local.logo}>
                            <div className={local.logoItem}>
                                <a href="#" className={local.item}>
                                    <LogoOne/>
                                </a>
                            </div>
                            <div className={local.logoItem}>
                                <a href="#"  className={local.item}>
                                    <LogoTwo/>
                                </a>
                            </div>
                            <div className={local.logoItem}>
                                <a href="#"  className={local.item}>
                                    <LogoThree/>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className={local.navDownItem}>
                        <a href="#">© le-corte.ru</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;