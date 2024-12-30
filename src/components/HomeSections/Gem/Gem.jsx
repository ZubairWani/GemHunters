import React from 'react'
import { Section } from '../../Section/Section'
import { Button } from '../../Button/Button'

export const Gem = () => {
    return (
        <Section name={"flex-row gem-section"}>
            <div className="gem-content">
        <h1>Ready to <span>Uncover the Gems?</span> </h1>
        <p>
          Join thousands of investors who trust Gem Hunters to simplify the
          crypto market and unlock exclusive opportunities.
        </p>
        <Button text={"Start Your Journey Today"}/>
      </div>
        </Section>
    )
}
