export interface ProductsInterface
{
    id:number,
    name:string,
    description:string,
    price:number,
    img:string,
    bgcolor:boolean,
    category:Category,
    code:string,
    rating:number
  }

export enum Category
{
    ALL="all",
    SOFA="sofa",
    TABLE="table",
    BED="bed",
    CHAIRS="chair"
}