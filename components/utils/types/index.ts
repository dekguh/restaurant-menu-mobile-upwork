import React from "react";

/**
 * @type TDataCategory
 * @param name is name category
 * @param path path of category (ex: starters / main-courses)
 * @param description description category
 * @param image image of category (save on public folder)
 */
export type TDataCategory = Array<{
    name: string;
    path: string;
    description: string;
    image: string;
}>

/**
 * @type TDataMenu
 * @param name is name menu
 * @param path path of menu (ex: steak / hamburger-deluxe)
 * @param description description menu
 * @param category is path category
 * @param image image of menu (save on public folder)
 * @param startPrice is start price
 * @param endPrice is end price (if not, make value equal to startPrice)
 * @param newMenu new menu
 * @param bestseller new menu
 * @param listLabel label of menu (ex: [{ icon (svg on /public/icons/menu), description }])
 * @param isAvailable menu is available
 */
export type TDataMenu = Array<{
    name: string;
    path: string;
    description: string;
    category: string;
    image?: string;
    startPrice: number;
    endPrice?: number;
    newMenu?: boolean;
    bestseller?: boolean;
    listLabel: Array<{
        icon: any;
        description: string;
    }>,
    isAvailable?: boolean;
}>

/**
 * @type TDataSchedule
 * @param day is day (ex: monday)
 * @param openTime is open time (ex: 08.00)
 * @param endTime is open time (ex: 23.00)
 */
export type TDataSchedule = Array<{
    day: string;
    openTime: string;
    closeTime: string;
}>

export type TChooseRadio = {
    value: string | number;
    name: string;
    id: string;
    forLabel: string;
    text: string;
    classes?: string;
    onClick?: React.MouseEventHandler;
    defaultChecked?: boolean;
}

export type TChooseInitState = {
    chooseValue: string;
    categoryPosition: number;
}

export interface IChooseMenu {}

export type TCardCategoryFirst = {
    image: string;
    title: string;
    onClick?: React.MouseEventHandler;
    position: number;
    active: boolean;
}

export interface ICategoryFirstCarousel {
    dataCategory: TDataCategory;
}

export interface IBannerWrap {
    image: string;
    children?: React.ReactNode | JSX.Element | undefined;
}

export interface IBannerContent {
    title: string;
    description?: string;
}

export interface ITitleSection {
    classes?: string;
    title: string;
    description?: string;
}

export interface IListMenuSection {
    dataCategory: TDataCategory;
    dataMenu: TDataMenu;
}

export interface ICardMenuFirst {
    name: string;
    path?: string;
    description: string;
    category: string;
    image?: string;
    startPrice: number;
    endPrice?: number;
    newMenu?: boolean;
    bestseller?: boolean;
    listLabel: Array<{
        icon: any;
        description: string;
    }>
}

export interface IBackgroundDotted {
    color: string;
    width?: number;
    height?: number;
}

export interface IListLabelFirst {
    listLabel: Array<{
        icon: any;
        description: string;
    }>
}

export interface ILabelBox {
    text: string;
    classes?: string;
}

export interface IBannerImageSection {
    image: string;
    height?: number;
}

export type IOpenHourSection = {
    description?: string;
    listSchedule: TDataSchedule;
}

export interface IButtonText {
    text: string;
    onClick?: React.MouseEventHandler;
}

export interface ICardListSchedule {
    listSchedule: TDataSchedule;
    isOpen: boolean;
    updateIsOpen: (status : boolean) => void
}

export interface IListCategorySecond {
    listCategory: TDataCategory;
    labelOnClick?(): void;
}

export interface ILabelCategorySecond {
    text: string;
    active?: boolean;
    toCategoryPath: string;
    offset: number;
    duration: number;
    isSpy?: boolean;
    onClick?(): void;
}

export interface IListMenuSecondSection {
    categoryPath: string;
    title: string;
    description?: string;
    dataMenu: TDataMenu;
}

export interface ICardMenuSecond extends ICardMenuFirst {
    isAvailable?: boolean;
}

export interface IListLabelSecond extends IListLabelFirst {}

export interface ICategorySecondSection {
    dataCategory: TDataCategory;
}

export interface IHeaderFirstSection {
    description?: string;
}

export interface IBannerSection {
    image: string;
    title: string;
    description: string;
}