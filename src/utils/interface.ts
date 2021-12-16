import { NumberLiteralType } from "typescript";

export interface Organization {
    id: number | null;
    create_date: Date | null;
    description: string;
    logo_url: string;
    site_url: string;
    title: string;
}

export interface Form {
    avatar_url?: string;
    email: string;
    firstname: string;
    id: number | null;
    org: Organization | null;
    org_status: string;
    org_title: string;
    over_score: number | null;
    scores_count: string;
    surname: string;
    username: string;
    password: string;
    passwordRepeat: string;
}

export interface User {
    avatar_url: string;
    email: string;
    firstname: string;
    id: number;
    last_login: Date;
    middlename: string;
    org: Organization | null;
    org_status: string;
    org_title: string;
    over_score: number;
    reg_date: Date;
    scores_count: string;
    surname: string;
    username: string;
    notification: number;
}

export interface Event {
    id: number;
    title: string;
    date: Date;
    create_date: Date;
    factor: number;
    scores_count: number;
    over_score: number;
}