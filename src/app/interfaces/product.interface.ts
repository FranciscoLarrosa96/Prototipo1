export interface Product {
    id:string,
    img: string,
    title: string,
    description: string,
    price: number,
    arrayImgs?:string[],
    review?: {
        stars : number,
        description? : string
    }
}