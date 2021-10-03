import useWindowScroll from '@react-hook/window-scroll'
import React, { useState, useEffect } from 'react'
import { Events } from 'react-scroll'
import ButtonText from '../../Atomics/control/ButtonText'
import ListCategorySecond from '../../Molecules/CategorySecondSection/ListCategorySecond'
import TitleSection from '../../Molecules/TitleSection'
import { ICategorySecondSection } from '../../utils/types'

const CategorySecondSection : React.FC<ICategorySecondSection> = ({ dataCategory }) => {
    const scrollY = useWindowScroll(1)
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        (scrollY >= 400) && setIsActive(true)
        Events.scrollEvent.register('begin', function () {});

        Events.scrollEvent.register('end', function () {});

        return (() => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        })
    }, [])

    return (
    <>
        <div>
            <TitleSection
                title='Category'
                description='choose special variant'
                classes='margin-b-12'
            />

            <div>
                <ListCategorySecond
                    listCategory={dataCategory}
                />
            </div>
        </div>

        {scrollY >= 400 && <div className='category-second-navigation'>
            <div className='category-second-navigation-header'>
                <div className='title'>
                    <TitleSection
                        title='Category'
                        description='choose special variant'
                        classes='margin-b-12'
                    />
                </div>

                <div className='action'>
                    <ButtonText text={isActive ? 'close' : 'open'} onClick={e => setIsActive(!isActive)} />
                </div>
            </div>

            <div className='divider-border margin-b-12'></div>

            <div className={`category-second-navigation-content ${isActive ? 'active' : 'nonactive'}`}>
                <ListCategorySecond
                    listCategory={dataCategory}
                    labelOnClick={() => setIsActive(false)}
                />
            </div>
        </div>}
    </>
    )
}

export default CategorySecondSection
