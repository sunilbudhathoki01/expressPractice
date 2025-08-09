export default interface product{
    name:String;
    brand:String |null;
    category:String;
    price:number,
    createdAt:Date
    stock:number;
    imageUrls:String[] |[];
    createdBy:String;
    desription:String;

}