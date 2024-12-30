import React from 'react'
import "./Section.scss"


export const Section = ({ children, name }) => {
    return (
        <section className={`${name} sectionComponent`}>
            {children}
        </section>
    )
}
