import { Gender } from '../enum/gender.enum';

export interface User {
    id: number;
    name: string;
    gender: Gender
    password: string;
    cellphone: string;
    email: string;
    created: string;
    deleted: boolean;
    age: string;
    image: string;
}

export interface Band {
    id: number;
    name: string;
    state: string;
    country: string;
    city: string;
    genre: string;
    creatorId?: number;
    created: string;
    deleted?: boolean;
    logo: string;
    members: User[];
}

export interface Music {
    id: number;
    nameMusic: string;
    duration: string;
    description: string;
    like: number;
    dislike: number;
    auditions: number;
    discId: number;
    favorite: number;
}

export interface Disc {
    id: number;
    name: string;
    description: string;
    release: string;
    likes: number;
    dislike: number;
    members?:User[];
    musics: Music[];
    bandId: number;
    band: Band;
    image: string;
}

export interface Followers {
    id?: number;
    from: User;
    to: User;
}
