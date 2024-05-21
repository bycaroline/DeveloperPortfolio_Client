import React from 'react'
import styles from '../css/styles.module.css'

function Paragraph2() {
    return (
        <div className={styles.wrapperParagraph2}>
            <div>
                {/* get text from backend */}
                <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also</p>
            </div>
            <div>
                <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also</p>
            </div>
        </div>
    )
}

export default Paragraph2