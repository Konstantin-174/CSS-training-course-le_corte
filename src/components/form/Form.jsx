import React from 'react';
import local from './Form.module.scss'

const Form = () => {
    return (
        <section className={local.formWrapper}>
            <div className={local.sectionInner}>
                <h2>Запись на дегустацию</h2>
                <hr/>
                <div className={local.formContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.
                </div>
                <div className={local.feedBack}>
                    <div className={local.feedBackContacts}>
                        <div className={local.fbItem}>Имя</div>
                        <div  className={local.fbItem}>Телефон</div>
                    </div>
                    <div className={local.fbItem}>
                        Бутик на Невском 103
                    </div>
                    <button className={local.formButton}>
                        <a href="#">
                            записаться
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Form;