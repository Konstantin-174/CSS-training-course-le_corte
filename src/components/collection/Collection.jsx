import React from 'react';
import local from './Collection.module.scss'
import img_1 from './img/Rectangle 11.png'
import img_2 from './img/Rectangle 12.png'
import img_3 from './img/Rectangle 13.png'

const Collection = () => {
    return (
        <section className={local.collectionWrapper}>
            <div className={local.sectionInner}>
                <div className={local.content}>
                    <div className={local.contentTitle}>
                        Новинки коллекций
                    </div>
                    <h2>
                        Март 1980<br/> Урожай Марселя
                    </h2>
                    <hr/>
                    <div className={local.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet
                        adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
                    </div>
                    <div className={local.table}>
                        <div className={local.tableItem}>
                            <div className={local.tableItemDate}>
                                1980
                            </div>
                            <div className={local.tableItemContent}>
                                <div className={local.itemTitle}>
                                    Colli Euganei Bianco Ca' Lustra 1980
                                </div>
                                <div className={local.itemContent}>
                                    Красочная бутылка вина из Марселя
                                </div>
                            </div>
                        </div>
                        <div className={local.tableItem}>
                            <div className={local.tableItemDate}>
                                1980
                            </div>
                            <div className={local.tableItemContent}>
                                <div className={local.itemTitle}>
                                    Colli Euganei Bianco Ca' Lustra 1980
                                </div>
                                <div className={local.itemContent}>
                                    Красочная бутылка вина из Марселя
                                </div>
                            </div>
                        </div>
                        <div className={local.tableItem}>
                            <div className={local.tableItemDate}>
                                1980
                            </div>
                            <div className={local.tableItemContent}>
                                <div className={local.itemTitle}>
                                    Colli Euganei Bianco Ca' Lustra 1980
                                </div>
                                <div className={local.itemContent}>
                                    Красочная бутылка вина из Марселя
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={local.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet
                        adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
                    </div>
                    <button>
                        узнать подробнее
                    </button>
                </div>
                <div className={local.galary}>
                    <div className={local.galaryImg1}>
                        <img src={img_1} alt="Pictures"/>
                    </div>
                    <div className={local.galaryImg2}>
                        <img src={img_2} alt="Pictures"/>
                    </div>
                    <div className={local.galaryImg3}>
                        <img src={img_3} alt="Pictures"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection;