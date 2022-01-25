import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesString } from '../../Modules/routesString';
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [lang, setlang] = useState('kr')

    const handleShowMenu = () => {
        setshowMenu(!showMenu);
    }

    const { t } = useTranslation();

    const activeLang = localStorage.getItem('i18nextLng');

    console.log(activeLang);

    return (
        <div className="header">
            <div className="header_box">

                {/* icons bars menu */}
                <div
                    className={showMenu ? "header_box_menu_mobile-tonggle active" : "header_box_menu_mobile-tonggle"}
                    onClick={handleShowMenu}
                >
                    <span></span>
                    <span></span>
                </div>

                <div className="header_box_lang">
                    <div className={activeLang == "kr" || !activeLang ? "lang active" : "lang"} onClick={() => setlang('kr')}><span onClick={() => i18next.changeLanguage('kr')}>KR</span></div>
                    <div className={activeLang == "en" ? "lang active" : "lang"} onClick={() => setlang('en')}><span onClick={() => i18next.changeLanguage('en')}>EN</span></div>
                </div >

                {/* menu */}
                <div className={showMenu ? "header_box_menu active" : "header_box_menu"}>
                    <div className="header_box_menu_mobile-icon-close">

                        <div className="header_box_lang">
                            <div className={activeLang == "kr" || !activeLang ? "lang active" : "lang"} onClick={() => setlang('kr')}><span onClick={() => i18next.changeLanguage('kr')}>KR</span></div>
                            <div className={activeLang == "en" ? "lang active" : "lang"} onClick={() => setlang('en')}><span onClick={() => i18next.changeLanguage('en')}>EN</span></div>
                        </div>
                    </div>

                    <div className="menu">
                        <NavLink exact to={RoutesString.Home} onClick={handleShowMenu}>Home</NavLink>
                        <NavLink to={RoutesString.Works} onClick={handleShowMenu}>Works</NavLink>
                        <NavLink to={RoutesString.Teams} onClick={handleShowMenu}>Teams</NavLink>
                        <NavLink to={RoutesString.Contacts} onClick={handleShowMenu}>Contact</NavLink>
                    </div>

                    <div className="infoWrapper">
                        <p id="adress">
                            {t('adress')}
                            <br />
                            Tel 02.543.4983 / Fax 02.6280.4079
                        </p>
                        <p className="link">
                            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr" target="blank">View Map</a>
                        </p>
                        <br />
                        <p>Work with us.</p>
                        <p className="link">
                            <a href="mailto:looc.tzlee@gmail.com">looc.tzlee @gmail.com</a>
                        </p>
                        <br />
                        <p>Recruiting</p>
                        <p className="link">
                            <a href="mailto:looc.tzlee@gmail.com">looc.tzlee @gmail.com</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Header;
