export interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string | null;
    is_active: boolean;
}

export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    bio: string;
    image: string | null;
}

export interface Article {
    id: number;
    title: string;
    slug: string;
    body: string;
    image: string | null;
    is_published: boolean;
}

export interface Appointment {
    full_name: string;
    phone_number: string;
    service_id?: number | null;
    message?: string;
}