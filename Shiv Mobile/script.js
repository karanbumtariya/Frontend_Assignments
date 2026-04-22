function addToCart(name, price, image) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = {
    name: name,
    price: price,
    image: image,
    quantity: 1
  };

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showToast("Added to Cart SuccessFully 🛒");
  function showToast(message){
  const toast = document.getElementById("cartToast");
  if(!toast) return;

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

}