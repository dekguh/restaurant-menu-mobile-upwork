import React, { useState } from 'react'
import { Element } from 'react-scroll'
import TitleSection from '../../Molecules/TitleSection'
import { dataMenu } from '../../utils/data'
import { IListMenuSecondSection, TDataMenu } from '../../utils/types'

const ListMenuSecondSection : React.FC<IListMenuSecondSection> = ({ categoryPath, title, description }) => {
    const [dataFiltered, setDataFiltered] = useState<TDataMenu>(dataMenu.filter(data => data.category.indexOf(categoryPath) > -1))
    return (
        <Element name={categoryPath}>
            <TitleSection
                title={title}
                description={description}
            />

            <div className='divider-border'></div>

            {dataFiltered.length >= 1 && dataFiltered.map((data, i) => (
                <div></div>
            ))}
        </Element>
    )
}

export default ListMenuSecondSection
