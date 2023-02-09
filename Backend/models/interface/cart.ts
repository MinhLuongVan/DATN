export interface ICart {
    _id: string;
    userId: string;
    productId: string;  
    productName: string;
    productPrice: number;
    totalMoney: number; 
    quantity: number;   
}