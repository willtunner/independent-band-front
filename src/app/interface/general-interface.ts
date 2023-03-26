import {Injectable} from '@angular/core';
import { Gender } from '../enum/gender.enum';

export interface User {
    id?: number;
    name: string;
    gender: Gender
    password: string;
    cellphone: string;
    email: string;
    created: string;
    deleted: boolean;
    age: string;
}

export interface Band {
    id?: number;
    name: string;
    state: string;
    country: string;
    city: string;
    genre: string;
    creatorId?: number;
    created: string;
    deleted?: boolean;
    logo: string;
}

export interface Music {
    id?: number;
    nameMusic: string;
    duration: string;
    description: string;
    likes: number;
    dislike: number;
    auditions: number;
    discId: number;
}

export interface Disc {
    id?: number;
    name: string;
    description: string;
    release: string;
    likes: number;
    dislike: number;
    members?:User[];
    bandId: number;
    band: Band;
}

export interface Followers {
    id?: number;
    from: User;
    to: User;
}
