export interface Product {
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