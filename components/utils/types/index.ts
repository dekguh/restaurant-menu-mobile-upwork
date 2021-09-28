import React from "react";

export type TDataCategory = Array<{
    name: string;
    path: string;
    description: string;
    image: string;
}>

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
    }>
}>

export type TChooseRadio = {
    value: string | number;
    name: string;
    id: string;
    forLabel: string;
    text: string;
    classes?: string;
    onClick?: React.MouseEventHandler;
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

export interface ICategoryFirstCarousel {}

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

export interface IListMenuSection {}

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