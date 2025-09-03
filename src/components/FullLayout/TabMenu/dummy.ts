import { ROUTES } from "@/constants/routes";
import { link } from "fs";
import { Link } from "react-router-dom";

export const menu = [
    {
        field: 'home',
        link: '/'
    },
    {
        field: 'accessories',
        link: ROUTES.MAIN.PRODUCT_CATEGORY.ACCESSORIES,
    },
    {
        field: 'computer & Laptop',
        link: ROUTES.MAIN.PRODUCT_CATEGORY.COMPUTER_LAPTOP,
    },
    {
        field: 'headphones',
        link: ROUTES.MAIN.PRODUCT_CATEGORY.HEADPHONES,
    },
    {
        field: 'new arrival',
        link: ROUTES.MAIN.PRODUCT_CATEGORY.NEW_ARRIBAL,
    },
    {
        field: 'on sale',
        link: ROUTES.MAIN.PRODUCT_CATEGORY.ON_SALE,
    },
    {
        field: 'watches',
        link: ROUTES.MAIN.PRODUCT_CATEGORY.WATCHES
    },
    {
        field: 'about us',
        link: ROUTES.MAIN.ABOUT_US.INDEX,
    },
    {
        field: 'contract us',
        link: ROUTES.MAIN.CONTACT_US,
    },
]