import React from 'react';
import local from './Text.module.scss';
import glass from './img/image.png'

const Text = () => {
    return (
        <section className={local.textWrapper}>
            <div className={local.sectionInner}>
                <h2>
                    Лучший вкус, это вкус долголетнего вина
                </h2>
                <hr/>
                <div className={local.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.
                </div>
                <div className={local.img}>
                    <img src={glass} alt="Glass"/>
                </div>
            </div>
        </section>
    )
}

export default Text;