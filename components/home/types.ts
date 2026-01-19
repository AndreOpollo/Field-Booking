export interface Field{
    id:string
    image:string[],
    location:string,
    rating:number,
    time:string,
    price:string,
    gameTags: {
        name:string,
        color:string
    }[],
    extras:string[]
}