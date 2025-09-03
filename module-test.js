var categories = ["Fruits","Foods"];
function addCategory(){
    var newCategory=document.getElementById("newCategory").value;
    if(newCategory && !categories.includes(newCategory)){
        categories.push(newCategory);
        products.push([]);
        var option=document.createElement("option");
        option.value=newCategory;
        option.text=newCategory;
        document.getElementById("categories").appendChild(option);
        document.getElementById("newCategory").value="";
    }
    else{
        alert("Category already exists or is invalid.");
    }
}

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
var product4 = new product(
  "1",
  "https://anhquanbakery.com/uploads/product/full_v2ah7y94-1274-hamburger-thit-nuong.jpg",
  "Hamburger",
  "5.00",
  100,
  "Delicious beef hamburger"
);
var product5 = new product(
  "2",
  "https://pizzacraft.com.vn/assets/img/photo/Beef%20Sausage%20Pizza.png",
  "Pizza",
  "8.00",
  80,
  "Cheesy pepperoni pizza"
);
products.push([product1,product2,product3]);
products.push([product4,product5]);
function displayProducts(){
    var curcategory=categories.indexOf(document.getElementById("categories").value);
    var content="";
    for(let i=0;i<products[curcategory].length;i++){
        let curproduct=products[curcategory][i];
        content+=`<tr>
            <td>${curproduct.id}</td>
            <td><img src="${curproduct.imagine}" alt="${curproduct.name}" style="width:50px;height:50px;"></td>
            <td>${curproduct.name}</td>
            <td>$${curproduct.price}</td>
            <td>${curproduct.quantity}</td>
            <td>${curproduct.description}</td>
            <td><button onclick="editProduct(${curproduct.id})">Edit</button></td>
            <td><button onclick="deleteProduct(${curproduct.id})">Delete</button></td>
        </tr>`;
    }
    document.getElementById("productList").innerHTML=content;
    document.getElementById("numofProducts").innerText=`Number of Products: ${products[curcategory].length}`;
}
displayProducts();
function deleteProduct(id){
    var curcategory = categories.indexOf(document.getElementById("categories").value);
    if(confirm("Are you sure you want to delete this product?")){
        products[curcategory] = products[curcategory].filter(product => product.id != id);
        displayProducts();
    }
}
function addProduct(event){
    if(event) event.preventDefault();
    var curcategory = categories.indexOf(document.getElementById("categories").value);
    var id=document.getElementById("productId").value;
    var imagine=document.getElementById("productImage").value;
    var name=document.getElementById("productName").value;
    var price=document.getElementById("price").value;
    var quantity=document.getElementById("quantity").value;
    var description=document.getElementById("description").value;
    var newProduct=new product(id,imagine,name,price,quantity,description);
    if(products[curcategory].some(product => product.id == id)){
        alert("Product ID already exists in this category.Please use a different ID.");
    }
    else{
        products[curcategory].push(newProduct);
        displayProducts();
        document.getElementById("productForm").reset();
    }
}
function editProduct(id){
    var curcategory = categories.indexOf(document.getElementById("categories").value);
    products[curcategory].forEach(product => {
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
