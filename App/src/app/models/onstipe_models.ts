export class onstipe {
    id: number;
    name: string;
    posts: postObj[];
}
export class postObj {
    source: sourceObj
    id: number;
    created_at: number;
    link: string;
    image_url: string;
    video_url: boolean;
    title: string;
    description: string;
    author_name: string;
    author_username: string;
    author_picture: string;
    cta: any;
}
export class sourceObj{
    id: number;
    name: string;
    network: string;
}