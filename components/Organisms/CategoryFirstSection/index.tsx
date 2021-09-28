import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import CardCategoryFirst from '../../Molecules/card/CardCategoryFirst'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { dataCategory } from '../../utils/data';
import { RootState } from '../../utils/redux/Store';
import { actUpdateCategoryPosition } from '../../utils/redux/choose/action';
import { connect, ConnectedProps } from 'react-redux';
import { ICategoryFirstCarousel } from '../../utils/types';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 0
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 0
    }
};

const ButtonGroup = ({ next, previous, goToSlide, getCurrentClick, totalCat, currentClick, ...rest } : any) => {
    const { carouselState: { currentSlide } } = rest;

    const prevClickSlide = () => {
        const summ = currentClick >= 2 ? currentClick - 1 : 1
        getCurrentClick(summ)
    }

    const nextClickSlide = () => {
        const summ = currentClick < totalCat ? currentClick + 1 : currentClick
        getCurrentClick(summ)
    }

    return (
      <div className='carousel-category-button-group'>
          <div>
            <button
                onClick={() => {
                    prevClickSlide()
                    previous()
                }}
                className='button-carousel-category left'
            >
                <i><BiChevronLeft /></i>
            </button>

            <button
                onClick={() => {
                    nextClickSlide()
                    next()
                }}
                className='button-carousel-category right'
            >
                <i><BiChevronRight /></i>
            </button>
          </div>
      </div>
    );
};

const mapState = (state: RootState) => ({
    categoryPosition: state.choose.categoryPosition
})

const mapDispatch = {
    updateCategoryPosition: (position: number) => (actUpdateCategoryPosition(position))
}

const connector = connect(mapState, mapDispatch)
type ReduxToProps = ConnectedProps<typeof connector>

const CategoryFirstCarousel : React.FC<ICategoryFirstCarousel & ReduxToProps> = ({ categoryPosition, updateCategoryPosition }) => {
    return (
        <div>
            <Carousel
                responsive={responsive}
                focusOnSelect={false}
                centerMode={false}
                containerClass='container-category-carousel'
                partialVisible={true}
                slidesToSlide={1}
                customButtonGroup={<ButtonGroup totalCat={dataCategory.length} getCurrentClick={updateCategoryPosition} currentClick={categoryPosition} />}
                arrows={false}
            >
                {dataCategory.length >= 1 && dataCategory.map((data, i) => (
                    <div className='padding-r-4 padding-l-4' key={i}>
                        <CardCategoryFirst
                            image={data.image}
                            title={data.name}
                            position={i + 1}
                            active={categoryPosition === i + 1}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default connector(CategoryFirstCarousel)
