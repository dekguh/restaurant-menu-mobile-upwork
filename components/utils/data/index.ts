import { TDataCategory, TDataMenu } from '../types'

export const dataCategory : TDataCategory = [
    {
        name: 'Starters',
        path: 'starters',
        description: 'Soups & Tapes',
        image: '/foods/soup-meatball.jpg'
    },
    {
        name: 'Salads',
        path: 'salads',
        description: 'Fresh and organic ingredients',
        image: '/foods/special-salad.jpg'
    },
    {
        name: 'Main Courses',
        path: 'mainCourses',
        description: 'From the best chefs in the world',
        image: '/foods/hamburger-deluxe.jpg'
    },
    {
        name: 'Seafoods',
        path: 'seafoods',
        description: 'All fresh ingredients, delivered daily',
        image: '/foods/sushi-bundle.jpg'
    },
    {
        name: 'Pizza',
        path: 'pizza',
        description: 'All fresh ingredients, delivered daily',
        image: '/foods/pizza-sausage.jpg'
    }
]

export const DataMenu : TDataMenu = [
    {
        name: 'Soup Meatball',
        path: 'soup-meatball',
        category: 'starters',
        image: '/foods/soup-meatball.jpg',
        description: 'special beef meatball with soup',
        startPrice: 20,
        endPrice: 20,
        new: false,
        bestseller: false,
        listLabel: [
            {
                icon: '/icons/menu/13 - Salad.svg',
                description: 'vegetarion'
            }
        ]
    }
]