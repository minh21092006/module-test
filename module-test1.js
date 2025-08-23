function product(id,imagine,name,price,quantity,description){
    this.id=id;
    this.imagine=imagine;
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.description=description;
}
var products=[];
var product1 = new product(
  "1",
  "https://hips.hearstapps.com/hmg-prod/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg?crop=1.00xw:0.923xh;0,0.0486xh&resize=980:*",
  "Apple",
  "1.00",
  100,
  "Fresh red apples"
);
var product2 = new product(
  "2",
  "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
  "Banana",
  "0.50",
  200,
  "Sweet ripe bananas"
);
var product3 = new product(
  "3",
  "https://traicaytonyteo.com/uploads/source/anh-web-ngoc/cherry-canada-khfruit.jpg",
  "Cherry",
  "2.00",
  150,
  "Juicy cherries"
);
products.push(product1,product2,product3);
function displayProducts(){
    var content="";
    for(let i=0;i<products.length;i++){
        content+=`<tr>
            <td>${products[i].id}</td>
            <td><img src="${products[i].imagine}" alt="${products[i].name}" style="width:50px;height:50px;"></td>
            <td>${products[i].name}</td>
            <td>$${products[i].price}</td>
            <td>${products[i].quantity}</td>
            <td>${products[i].description}</td>
            <td><button onclick="editProduct(${products[i].id})">Edit</button></td>
            <td><button onclick="deleteProduct(${products[i].id})">Delete</button></td>
        </tr>`;
    }
    document.getElementById("productList").innerHTML=content;
    document.getElementById("numofProducts").innerText=`Number of Products: ${products.length}`;
}
displayProducts();
function deleteProduct(id){
    if(confirm("Are you sure you want to delete this product?")){
        products = products.filter(product => product.id != id);
        displayProducts();
    }
}
function addProduct(){
    var id=document.getElementById("productId").value;
    var imagine=document.getElementById("productImage").value;
    var name=document.getElementById("productName").value;
    var price=document.getElementById("price").value;
    var quantity=document.getElementById("quantity").value;
    var description=document.getElementById("description").value;
    var newProduct=new product(id,imagine,name,price,quantity,description);
    products.push(newProduct);
    displayProducts();
    document.getElementById("productForm").reset();
}
function editProduct(id){
    products.forEach(product => {
        if(product.id == id){
            var newPrice = prompt("Enter new price:", product.price);
            var newQuantity = prompt("Enter new quantity:", product.quantity);
            var newDescription = prompt("Enter new description:", product.description);
            if(newPrice != null && newQuantity != null){
                product.price = newPrice;
                product.quantity = newQuantity;
                product.description = newDescription;
                displayProducts();
            }
        }
    });
}
document.getElementById("productForm").addEventListener("submit", function(e){
    e.preventDefault();
    addProduct();
});
