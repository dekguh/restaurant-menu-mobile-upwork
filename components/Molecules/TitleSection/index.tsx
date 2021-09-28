import React from 'react'
import { ITitleSection } from '../../utils/types'

const TitleSection : React.FC<ITitleSection> = ({ classes, title, description }) => {
    return (
        <div className={classes ? `title-section ${classes}` : 'title-section'}>
            <h2 className='title'>{title}</h2>
            {description && (<p className='margin-b-0'>{description}</p>)}
        </div>
    )
}

export default TitleSection
