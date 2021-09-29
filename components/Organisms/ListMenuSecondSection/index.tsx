import React, { useState } from 'react'
import { Element } from 'react-scroll'
import CardMenuSecond from '../../Molecules/card/CardMenuSecond'
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

            <div className='divider-border margin-t-12 margin-b-12'></div>

            {dataFiltered.length >= 1 && dataFiltered.map((data, i) => (
                <div key={i} className='margin-b-12'>
                    <CardMenuSecond
                        name={data.name}
                        category={data.category}
                        description={data.description}
                        startPrice={data.startPrice}
                        endPrice={data.endPrice}
                        bestseller={data.bestseller}
                        newMenu={data.newMenu}
                        listLabel={data.listLabel}
                        isAvailable={data.isAvailable}
                    />
                </div>
            ))}
        </Element>
    )
}

export default ListMenuSecondSection
