export interface Product {
    title: string,
    priceFrom: number,
    priceTo?: number,
    rate: number,
    reduced?: number,
    img: string,
    isSaled: boolean,

}

export const slideProducts: Array<Product> = [
    {
        title: 'Nunc tem',
        priceFrom: 189,
        rate: 3,
        img: '/images/product20.png',
        isSaled: false,
    },
    {
        title: 'Morvi pulvin',
        priceFrom: 139,
        rate: 4,
        img: '/images/product21.png',
        isSaled: true
    },
    {
        title: 'Cras vive',
        priceFrom: 77,
        rate: 2,
        img: '/images/product22.png',
        isSaled: false,
    },
    {
        title: 'Cras viv',
        priceFrom: 148,
        priceTo: 159,
        rate: 5,
        img: '/images/product23.png',
        isSaled: false,
    },
    {
        title: 'Phasellus',
        priceFrom: 56,
        rate: 4,
        img: '/images/product18.png',
        isSaled: false,
    },
    {
        title: 'Fusce ullam',
        reduced: 55,
        priceFrom: 41,
        rate: 5,
        img: '/images/product19.png',
        isSaled: true
    },
    {
        title: 'Fusce cong',
        priceFrom: 88,
        rate: 4,
        img: '/images/product17.png',
        isSaled: false,
    },
    {
        title: 'Phasellus mo',
        priceFrom: 66,
        rate: 4,
        img: '/images/product12.png',
        isSaled: false,
    },
    {
        title: 'Fusce nec dia',
        priceFrom: 45,
        rate: 4,
        img: '/images/product15.png',
        isSaled: false,
    },
    {
        title: 'Morbi matti',
        priceFrom: 33,
        rate: 5,
        img: '/images/product9.png',
        isSaled: false,
    },
    {
        title: 'Curabitur ult',
        priceFrom: 88,
        rate: 4,
        img: '/images/product6.png',
        isSaled: false,
    },
    {
        title: 'Morbi varius',
        reduced: 55,
        priceFrom: 45,
        rate: 4,
        img: '/images/product7.png',
        isSaled: true
    },
    {
        title: 'Quisque mi',
        reduced: 63,
        priceFrom: 57,
        rate: 3,
        img: '/images/product2.png',
        isSaled: true
    },
    {
        title: 'Vestibulum',
        priceFrom: 56,
        rate: 4,
        img: '/images/product3.png',
        isSaled: false,
    },
    {
        title: 'Aenean non',
        reduced: 68,
        priceFrom: 55,
        rate: 4,
        img: '/images/product4.png',
        isSaled: true
    },
];

export const popularProducts: Array<Product> = [
    ...slideProducts,
    {
        title: 'Mauris elit',
        priceFrom: 50,
        rate: 5,
        img: '/images/product10.png',
        isSaled: true
    },
    {
        title: 'In fringil',
        priceFrom: 50,
        priceTo: 129,
        rate: 4,
        img: '/images/product25.png',
        isSaled: true
    },
    {
        title: 'In fringil',
        priceFrom: 149,
        rate: 5,
        img: '/images/product26.png',
        isSaled: false
    },
    {
        title: 'Suspendis',
        priceFrom: 33,
        rate: 4,
        img: '/images/product27.png',
        isSaled: false
    },
    {
        title: 'Suspe',
        priceFrom: 39,
        rate: 3,
        img: '/images/product27.png',
        isSaled: false
    },
]

export const popularCategories = [
    {
        title: 'Cameras',
        img: '/images/category-img-1.png'
    },
    {
        title: 'Computer & Laptop',
        img: '/images/category-image-5.png'
    },
    {
        title: 'Headphones',
        img: '/images/category-img-6.png'
    },
    {
        title: 'Video Games',
        img: '/images/category-img-2.png'
    },
    {
        title: 'Watches',
        img: '/images/category-image-3.png'
    },
]

export const saleLiveProducts = [
    {
        title: 'Fusce nec dia',
        priceFrom: 45,
        rate: 4,
        img: '/images/product15.png',
        isSaled: false,
    },
    {
        title: 'Morbi matti',
        priceFrom: 33,
        rate: 5,
        img: '/images/product9.png',
        isSaled: false,
    },
    {
        title: 'Curabitur ult',
        priceFrom: 88,
        rate: 4,
        img: '/images/product6.png',
        isSaled: false,
    },
    {
        title: 'Morbi varius',
        reduced: 55,
        priceFrom: 45,
        rate: 4,
        img: '/images/product7.png',
        isSaled: true
    },
    {
        title: 'Quisque mi',
        reduced: 63,
        priceFrom: 57,
        rate: 3,
        img: '/images/product2.png',
        isSaled: true
    },
    {
        title: 'Vestibulum',
        priceFrom: 56,
        rate: 4,
        img: '/images/product3.png',
        isSaled: false,
    },
    {
        title: 'Aenean non',
        reduced: 68,
        priceFrom: 55,
        rate: 4,
        img: '/images/product4.png',
        isSaled: true
    },
]

export const moreDetails = [
    {
        icon: '/svgs/shipping.svg',
        title: 'Free Shipping',
        detail: 'Ut elit tellus, luctus nec ullamcorper mattis,',
        tag: 'Now More'
    },
    {
        icon: '/svgs/gifts.svg',
        title: 'Discount & Coupons',
        detail: 'Ut elit tellus, luctus nec ullamcorper mattis,',
        tag: 'Learn More'
    },
    {
        icon: '/svgs/heart-3.svg',
        title: '24x7 Support',
        detail: 'Ut elit tellus, luctus nec ullamcorper mattis,',
        tag: 'Chat us'
    },
]