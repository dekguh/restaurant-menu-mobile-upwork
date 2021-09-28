import { IconBread, IconDrink, IconEgg, IconMeat, IconSauceKetchup, IconSausage, IconVegetarian } from '../svg'
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
    },
    {
        name: 'Drinks',
        path: 'drinks',
        description: 'All fresh water and fruit',
        image: '/foods/juice-strawberry.jpg'
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
        newMenu: false,
        bestseller: false,
        listLabel: [
            {
                icon: IconSauceKetchup,
                description: 'sauce'
            },
            {
                icon: IconVegetarian,
                description: 'vegetarion'
            },
            {
                icon: IconMeat,
                description: 'meat'
            }
        ]
    },
    {
        name: 'Special Salad',
        path: 'special-salad',
        category: 'salads',
        image: '/foods/special-salad.jpg',
        description: 'special salad with many fruit and vegetarian',
        startPrice: 15,
        endPrice: 20,
        newMenu: true,
        bestseller: false,
        listLabel: [
            {
                icon: IconSauceKetchup,
                description: 'sauce'
            },
            {
                icon: IconVegetarian,
                description: 'vegetarion'
            }
        ]
    },
    {
        name: 'Hamburger Deluxe',
        path: 'hamburger-deluxe',
        category: 'maincourses',
        image: '/foods/hamburger-deluxe.jpg',
        description: 'special hamburger with egg and cheese',
        startPrice: 15,
        endPrice: 20,
        newMenu: true,
        bestseller: false,
        listLabel: [
            {
                icon: IconSauceKetchup,
                description: 'sauce'
            },
            {
                icon: IconMeat,
                description: 'meat'
            },
            {
                icon: IconEgg,
                description: 'egg'
            }
        ]
    },
    {
        name: 'Sushi Bundle',
        path: 'sushi-bundle',
        category: 'seafoods',
        image: '/foods/sushi-bundle.jpg',
        description: 'special sushi with variant taste',
        startPrice: 20,
        endPrice: 30,
        newMenu: false,
        bestseller: true,
        listLabel: [
            {
                icon: IconSauceKetchup,
                description: 'sauce'
            },
            {
                icon: IconVegetarian,
                description: 'vegetarion'
            }
        ]
    },
    {
        name: 'Pizza Sausage',
        path: 'pizza-sausage',
        category: 'pizza',
        image: '/foods/pizza-sausage.jpg',
        description: 'pizza 30cm with BBQ sauce and sausage beef',
        startPrice: 20,
        endPrice: 20,
        newMenu: false,
        bestseller: true,
        listLabel: [
            {
                icon: IconSausage,
                description: 'sausage'
            },
            {
                icon: IconVegetarian,
                description: 'vegetarion'
            },
            {
                icon: IconBread,
                description: 'bread'
            }
        ]
    },
    {
        name: 'Orange Juice',
        path: 'orange-juice',
        category: 'drinks',
        image: '/foods/juice-orange.jpg',
        description: 'fresh orange juice and water',
        startPrice: 5,
        endPrice: 5,
        newMenu: true,
        bestseller: true,
        listLabel: [
            {
                icon: IconDrink,
                description: 'juice'
            },
        ]
    },
    {
        name: 'Strawberry Juice',
        path: 'strawberry-juice',
        category: 'drinks',
        image: '/foods/juice-strawberry.jpg',
        description: 'fresh strawberry juice and water',
        startPrice: 5,
        endPrice: 5,
        newMenu: true,
        bestseller: true,
        listLabel: [
            {
                icon: IconDrink,
                description: 'juice'
            },
        ]
    }
]