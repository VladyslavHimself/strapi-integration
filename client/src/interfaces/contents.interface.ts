interface Attributes {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Datum {
    id: number;
    attributes: Attributes;
}

export interface IContent {
    data: Datum[];
}


