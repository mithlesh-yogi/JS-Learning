const cards = document.querySelector('.cards')

 fetch("https://fakestoreapi.noksha.dev/api/products")
  .then((response) => response.json())
  .then((info) => {
    console.log(info);
    const products = info.data
    // console.log(products[0].title);
    products.forEach((products) => {
      cards.innerHTML +=
      ` <div class="card">
          <img src="${products.image}" alt="">
          <p class="product-title">${products.title}</p>
          <p class="descrip">${products.description}</p>
           <div class="size-box">
               <p class="size-text">Size</p>
               <p class="size">${products.size[0]}</p>
               <p class="size">${products.size[1]}</p>
               <p class="size">${products.size[2]}</p>
           </div>
          <div class="price">
             <p> ₹ ${products.price}</p> 
             <button>Buy</button>
          </div>
        </div>
      `

    });
    
    
  });