import useWindowScroll from '@react-hook/window-scroll'
import React, { useState, useEffect } from 'react'
import { Events } from 'react-scroll'
import ButtonText from '../../Atomics/control/ButtonText'
import ListCategorySecond from '../../Molecules/CategorySecondSection/ListCategorySecond'
import TitleSection from '../../Molecules/TitleSection'
import { dataCategory } from '../../utils/data'

const CategorySecondSection = () => {
    const scrollY = useWindowScroll(1)
    const [isActive, setIsActive] = useState<boolean>(false)
    console.log(scrollY)

    useEffect(() => {
        (scrollY >= 400) && setIsActive(true)
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        return (() => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        })
    }, [])

    return (
        <div className={scrollY >= 400 ? 'category-second-navigation' : 'cat'}>
            <div className='category-second-navigation-header'>
                <div className='title'>
                    <TitleSection
                        title='Category'
                        description='choose special variant'
                        classes='margin-b-12'
                    />
                </div>

                {scrollY >= 400 && (<div className='action'>
                    <ButtonText text={isActive ? 'close' : 'open'} onClick={e => setIsActive(!isActive)} />
                </div>)}
            </div>

            <div className='divider-border margin-b-12'></div>

            <div className={`category-second-navigation-content ${isActive ? 'active' : 'nonactive'}`}>
                <ListCategorySecond
                    listCategory={dataCategory}
                />
            </div>
        </div>
    )
}

export default CategorySecondSection
