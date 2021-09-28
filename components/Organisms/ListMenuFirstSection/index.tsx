import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import CardMenuFirst from '../../Molecules/card/CardMenuFirst'
import TitleSection from '../../Molecules/TitleSection'
import { dataCategory, dataMenu } from '../../utils/data'
import { RootState } from '../../utils/redux/Store'
import { IListMenuSection, TDataMenu } from '../../utils/types'

const mapState = (state: RootState) => ({
    categoryPosition: state.choose.categoryPosition,
    chooseValue: state.choose.chooseValue
})

const connector = connect(mapState, {})
type ReduxToProps = ConnectedProps<typeof connector>

const ListMenuFirstSection : React.FC<IListMenuSection & ReduxToProps> = ({ categoryPosition, chooseValue }) => {
    const [dataFiltered, setDataFiltered] = useState<TDataMenu>(dataMenu.filter((data : any) => data.category.toLowerCase() === dataCategory[categoryPosition-1].path.toLowerCase()))

    useEffect(() => {
        const filtered = chooseValue === 'main_menu'
        ? dataMenu.filter((data : any) => data.category.toLowerCase() === dataCategory[categoryPosition-1].path.toLowerCase())
        : dataMenu.filter((data : any) => data.category.toLowerCase() === 'drinks')
        setDataFiltered(filtered)
    }, [categoryPosition, chooseValue])

    return (
        <div>
            {chooseValue === 'main_menu'
            ? (<TitleSection
                title={dataCategory[categoryPosition-1].name}
                description={dataCategory[categoryPosition-1].description}
                classes='text-center margin-b-16'
            />)
            : (<TitleSection
                title='Drinks'
                description='All fresh fruit and water'
                classes='text-center margin-b-16'
            />)}

            {dataFiltered.length >= 1 ? dataFiltered?.map((data, i) => (
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
            ))
        : (
            <div className='message-not-found'>
                <span>not found</span>
            </div>
        )}
        </div>
    )
}

export default connector(ListMenuFirstSection)
