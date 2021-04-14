import React from 'react';
import local from './Header.module.scss';

const Header = () => {
    return (
        <header className={local.headerWrapper}>
           <div className={local.sectionInner}>
               <div className={local.headerNav}>
                   <div className={local.headerContacts}>
                       <div className={local.headerContactsItem}>
                           Новокузнечный переулок 4/1
                       </div>
                       <div className={local.headerContactsItem}>
                           8 (812) 123-45-67
                       </div>
                   </div>
                   <div className={local.headerLinks}>
                       <div className={local.headerLinksItem}>
                           <a href="#">Каталог</a>
                       </div>
                       <div className={local.headerLinksItem}>
                           <a href="#">Доставка</a>
                       </div>
                       <div className={local.headerLinksItem}>
                           <a href="#">Коллекции</a>
                       </div>
                       <div className={local.headerLinksItem}>
                           <a href="#">Контакты</a>
                       </div>
                   </div>
               </div>
               <div className={local.headerBtns}>
                   <button className={local.btnItem}>
                       Винная карта
                   </button>
                   <button className={local.btnItem}>
                       Дегустация
                   </button>
               </div>
           </div>
        </header>
    )
}

export default Header;