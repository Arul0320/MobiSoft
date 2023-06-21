// // Initialize Firebase
// // Import the functions you need from the SDKs you need
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// //import firebase from 'firebase/app';
// //   const firebaseConfig = {
// //   apiKey: "AIzaSyDHJ32d9jvoQ68coodQ4QHaLmVgop_ynzE",
// //   authDomain: "mobisoft-b7fb4.firebaseapp.com",
// //   databaseURL: "https://mobisoft-b7fb4-default-rtdb.firebaseio.com",
// //   projectId: "mobisoft-b7fb4",
// //   storageBucket: "mobisoft-b7fb4.appspot.com",
// //   messagingSenderId: "61433596980",
// //   appId: "1:61433596980:web:3c3128a5629ff7652f4e61",
// //   measurementId: "G-F3CYTJ0Z1Q"
// // };
// //  firebase.initializeApp(firebaseConfig);
// //  //import {getDatabase }from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
// // //  const db=getDatabase(app);
// // // 

//  function addProduct() {
//   // Get input values
//   var productName = document.getElementById("product-name").value;
//   var manufacturerName = document.getElementById("manufacturer-name").value;
//   var productImage = document.getElementById("product-image").files[0];

//   // Create a new list item
//   var listItem = document.createElement("li");

//   // Create elements for product details
//   var productDetails = document.createElement("div");
//   var nameElement = document.createElement("p");
//   var manufacturerElement = document.createElement("p");

//   // Set the product details
//   nameElement.textContent = "Product Name: " + productName;
//   manufacturerElement.textContent = "Manufacturer Name: " + manufacturerName;

//   // Append product details to the list item
//   productDetails.appendChild(nameElement);
//   productDetails.appendChild(manufacturerElement);

//   // Append product details to the list item
//   listItem.appendChild(productDetails);

//   // Display the product image
//   var imageElement = document.createElement("img");
//   imageElement.classList.add("preview-image");
//   var reader = new FileReader();
//   reader.onload = function (e) {
//     imageElement.src = e.target.result;
//   };
//   reader.readAsDataURL(productImage);
//   listItem.appendChild(imageElement);

//   // Create a delete button
//   var deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//   deleteButton.addEventListener("click", function () {
//     listItem.remove(); // Remove the list item when delete button is clicked
//   });
//   // Append the delete button to the list item
//   listItem.appendChild(deleteButton);
//   // Append the list item to the product list
//   var productList = document.getElementById("product-items");
//   productList.appendChild(listItem);
//   // Save product details to Firebase Firestore
//   // db.collection("products")
//   //   .add({
//   //     productName: productName,
//   //     manufacturerName: manufacturerName,
//   //   })
//   //   .then(function (docRef) {
//   //     console.log("Product saved with ID: ", docRef.id);
//   //   })
//   //   .catch(function (error) {
//   //     console.error("Error adding product: ", error);
//   //   });
//   //   alert('hi');
 














//  function getProductsFromStorage() {
//    const storedProducts = localStorage.getItem("devices");
//    return storedProducts ? JSON.parse(storedProducts) : [];
//  }
//  // Function to save products to local storage
//  function saveProductsToStorage() {
//    localStorage.setItem("devices", JSON.stringify(devices));
//  }
//  // Initialize the products array
//  let devices = getProductsFromStorage()
//  // Function to add a new product
//  function addProduct() {
//    const productNameInput = document.getElementById("productName");
//    const manufacturerInput = document.getElementById("manufacturer");
//    const descriptionInput= document.getElementById("description");
//    const imageUrlInput = document.getElementById("imageUrl")
//    // Get the values from the input fields
//    const productName = productNameInput.value;
//    const manufacturer = manufacturerInput.value;
//    const description=description.value;
//    const imageUrl = imageUrlInput.value
//    // Clear the input fields
//    productNameInput.value = "";
//    manufacturerInput.value = "";
//    descriptionInput.value="";
//    imageUrlInput.value = ""
//    // Generate a unique ID for the new product
//    const id = devices.length > 0 ? devices[devices.length - 1].id + 1 : 1
//    // Create a new product object
//    const newProduct = { id, name: productName, manufacturer,description, imageUrl }
//    // Add the new product to the devices array
//    devices.push(newProduct)
//    // Save the updated products to local storage
//    saveProductsToStorage()
//    console.log("Added product:", newProduct);
//    console.log("All products:", devices)
//    // Render the updated product list
//    renderProductList();
//  }
//  function deleteProduct(id) {
//    const index = devices.findIndex(device => device.id === id);
//    if (index !== -1) {
//      devices.splice(index, 1);
//      saveProductsToStorage();
//      renderProductList();
//      console.log("Deleted product with ID:", id);
//      console.log("All products:", devices);
//    } else {
//      console.log("Product not found");
//    }
//   }
//  // Function to rename a product
//  function renameProduct(id) {
//    const newName = document.getElementById(`productName_${id}`).innerText.trim()
//    const product = devices.find(device => device.id === id);
//    if (product) {
//      product.name = newName;
//      saveProductsToStorage();
//      console.log("Renamed product:", product);
//    } else {
//      console.log("Product not found");
//    }
//   }
//  // Render the initial product list in the UI
//  function renderProductList() {
//    const productList = document.getElementById("products");
//    productList.innerHTML = ""; // Clear the existing lis
//    for (let i = 0; i < devices.length; i++) {
//      const device = devices[i];
//      const listItem = document.createElement("li");
//      listItem.innerHTML = `
//        <img src="${device.imageUrl}" alt="${device.name}" width="300">
//        <p style="font-size: 25px;">Name: ${device.name} </p>
//        <p>Manufacturer: ${device.manufacturer}</p>
//        <p>Description: ${device.description}</p>
//         <button onclick="deleteProduct(${device.id})">Delete</button>    
//       <button onclick="renameProduct(${device.id})">Rename</button> 
//      `;
//      productList.appendChild(listItem);
//  }
// }
 
//  // // Call the renderProductList function on page load
//  renderProductList();
 



 function getProductsFromStorage() {
  const storedProducts = localStorage.getItem("devices");
  return storedProducts ? JSON.parse(storedProducts) : [];
}


function saveProductsToStorage() {
  localStorage.setItem("devices", JSON.stringify(devices));
}


let devices = getProductsFromStorage();


function addProduct() {
  const productNameInput = document.getElementById("productName");
  const manufacturerInput = document.getElementById("manufacturer");
  const imageUrlInput = document.getElementById("imageUrl");

  
  const productName = productNameInput.value;
  const manufacturer = manufacturerInput.value;
  
  const imageUrl = imageUrlInput.value;

  productNameInput.value = "";
  manufacturerInput.value = "";
  
  imageUrlInput.value = "";

  const id = devices.length > 0 ? devices[devices.length - 1].id + 1 : 1;

  const newProduct = { id, name: productName, manufacturer, imageUrl };
  devices.push(newProduct);
  saveProductsToStorage();
  console.log("Added product:", newProduct);
  console.log("All products:", devices);
  renderProductList();
}
function deleteProduct(id) {
  const index = devices.findIndex(device => device.id === id);
  if (index !== -1) {
    devices.splice(index, 1);
    saveProductsToStorage();
    renderProductList();
    console.log("Deleted product with ID:", id);
    console.log("All products:", devices);
  } else {
    console.log("Product not found");
  }
}
function renameProduct(id) {
  const newName = document.getElementById(`productName_${id}`).innerText.trim();

  const product = devices.find(device => device.id === id);
  if (product) {
    product.name = newName;
    saveProductsToStorage();
    console.log("Renamed product:", product);
  } else {
    console.log("Product not found");
  }
}

function renderProductList() {
  const productList = document.getElementById("products");
  productList.innerHTML = ""; // Clear the existing list

  for (let i = 0; i < devices.length; i++) {
    const device = devices[i];
    const listItem = document.createElement("li");
    listItem.innerHTML= `
    <img src="${device.imageUrl}" alt="${device.name}" width="250">
      <p style="text-align:center"><b>Name: <span id="productName_${device.id}" contenteditable="true">${device.name}</span></p>
      <p style="text-align:center">Price: ${device.manufacturer}</p>
      <div style="text-align: center;  
      width: 300px;  
      height: auto;  
      padding-top: 10px; ">
      <button style="
     border: 2px solid black;
      min-height: 25px;
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 1px;
      padding-bottom: 2px;
      border-radius: 50px;" onclick="deleteProduct(${device.id})"><b>Delete</button>
      </div>
    `;
            productList.appendChild(listItem);
          }
        }
        renderProductList();