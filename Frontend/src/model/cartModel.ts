export class CartModel {
    _id ='';
    userId = '';
    productId = '';
    productImage = '';
    productName = '';
    productPrice = 0;
    totalMoney = 0;
    quantity = 0;
    createdAt ?: Date = new Date();
}