import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import CardMenuFirst from '../../Molecules/card/CardMenuFirst'
import TitleSection from '../../Molecules/TitleSection'
import { dataCategory, DataMenu } from '../../utils/data'
import { RootState } from '../../utils/redux/Store'
import { IListMenuSection, TDataMenu } from '../../utils/types'

const mapState = (state: RootState) => ({
    categoryPosition: state.choose.categoryPosition
})

const connector = connect(mapState, {})
type ReduxToProps = ConnectedProps<typeof connector>

const ListMenuFirstSection : React.FC<IListMenuSection & ReduxToProps> = ({ categoryPosition }) => {
    const [dataFiltered, setDataFiltered] = useState<TDataMenu>(DataMenu.filter(data => data.category.toLowerCase() === dataCategory[categoryPosition-1].path.toLowerCase()))

    useEffect(() => {
        const filtered = DataMenu.filter(data => data.category.toLowerCase() === dataCategory[categoryPosition-1].path.toLowerCase())
        setDataFiltered(filtered)
    }, [categoryPosition])

    return (
        <div>
            <TitleSection
                title={dataCategory[categoryPosition-1].name}
                description={dataCategory[categoryPosition-1].description}
                classes='text-center margin-b-16'
            />

            {dataFiltered?.length >= 1 && dataFiltered?.map((data, i) => (
                <div className='margin-b-12' key={i}>
                    <CardMenuFirst
                        name={data.name}
                        description={data.description}
                        image={data.image}
                        startPrice={data.startPrice}
                        endPrice={data.endPrice}
                        category={data.category}
                        bestseller={data.bestseller}
                        newMenu={data.newMenu}
                        listLabel={data.listLabel}
                    />
                </div>
            ))}
        </div>
    )
}

export default connector(ListMenuFirstSection)
