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
    image: string;
    startPrice: number;
    endPrice: number;
    new?: boolean;
    bestseller?: boolean;
    listLabel?: Array<{
        icon: JSX.Element | React.ReactNode | string;
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