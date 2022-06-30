
// ESTE ES UN CARRITO EN PROCESO / PRACTICA

/* // DOM
const ingredientesBurger = document.getElementById('ingredientesBurger')
const itemBurger = document.getElementById('itemBurger')
const fragment = document.createDocumentFragment()




// EVENTO PARA QUE CARGUE LA PAG 

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})

// LLAMAR A LOS PRODUCTOS DEL JSON

const fetchData = async () => {
  try {
    const res = await fetch('api.json')
    const data = await res.json()
    reflejarIngredientes(data)
  } catch (error) {
    console.log(error)
  }

}

const reflejarIngredientes = data => {
  data.forEach(ingredientes => {
    ingredientesBurger.querySelector('h3').textContent = ingredientes.title

    const clone = ingredientesBurger.cloneNode(true)
    fragment.appendChild(clone)
  })
  itemBurger.appendChild(fragment)

}
*/


// DOM CONSTANTES 

const ingredientesA = document.querySelector(".listadeIngredientes")
const addButtons = document.getElementsByClassName("añadirProducto");
const removeButtons = document.getElementsByClassName("quitarProducto");
const amountLabel = document.getElementById("cartamnt");


// CARRITO (todavia lo tengo que pasar a localStorage)

const cart = [];

// Evento para que cargue la página

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
});

// Llamar a los productos del archivo JSON

const fetchData = async () => {
  try {
    const res = await fetch('api.json')
    const data = await res.json()
    reflejarIngredientes(data)
  } catch (error) {
    console.log(error)
  }

}


// Reflejar los productos del JSON al DOM 

const reflejarIngredientes = data => {
  data.forEach(ingredientes => {
    let contenedor = document.createElement("div");
    contenedor.className = "ingredientesDiv"
    contenedor.innerHTML = `<h3> ID: ${ingredientes?.id}</h3>
                              <p>  Producto: ${ingredientes?.title}</p>
                              <b> $ ${ingredientes?.precio}</b>
                             <button class="añadirProducto">+
                             <button class="quitarProducto">-`;
    document.body.appendChild(contenedor);
  })
}
 
// ACA ESTA EL ERROR LUCASSSSSSSSSS 

ingredientesA.addEventListener('click', e => {
  addCarrito(e)
});

// Añadir productos al carrito

const addCarrito = e => {
  console.log(e.target)
}
/*function purchaseProduct(e) {
  if(e.target.classList.contains('añadirProducto')){
      let product = e.target.parentElement.parentElement;
      getProductInfo(product);
  }
}*/

/*
const addCarrito = e => {
  console.log(e.target)
  if (e.target.classList.contains('añadirProducto')) {
      setCarrito(e.target.parentElement)
  }
  e.stopPropagation()
}*/

for (const addButton of addButtons) {
  addButton.addEventListener("click", () => {
    let product = products.find(p => p.id == addButton);
    cart.push(product);
    amountLabel.innerText = cart.length + " Total";
  });
}




















//ARRAY DE PRODUCTOS REFLEJADOS EN EL DOM

/*const products = [
  { Id: 1, nombre: "Lechuga", precio: 125 },
  { Id: 2, nombre: "Tomate", precio: 70 },
  { Id: 3, nombre: "Queso", precio: 50 },
  { Id: 4, nombre: "Carne", precio: 100 }];

for (const product of products) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> ID: ${product.Id}</h3>
                            <p>  Producto: ${product.nombre}</p>
                            <b> $ ${product.precio}</b>
                           <button class="añadirProducto">agregar
                           <button class="quitarProducto">agregar`;
  document.body.appendChild(contenedor);
}
*/


// BUCLE DE AÑADIR

/*
for (const addButton of addButtons) {
  addButton.addEventListener("click", () => {
    let product = products.find(p => p.Id == addButton);
    cart.push(product);
    amountLabel.innerText = cart.length + " Total";
  });
 }
*/