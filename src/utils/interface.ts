export interface Organization {
    id: number | null;
    create_date: Date | null;
    description: string;
    logo_url: string;
    site_url: string;
    title: string;
}

export interface Form {
    avatar_url?: File | null;
    email: string;
    firstname: string;
    id: number | null;
    org: Organization | null;
    org_status: string;
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
    over_score: number;
    reg_date: Date;
    scores_count: string;
    surname: string;
    username: string;
    notification: number;
}