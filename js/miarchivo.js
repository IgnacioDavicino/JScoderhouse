
// DOM CONSTANTES 

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

// Eventos
document.addEventListener('DOMContentLoaded', e => {
  fetchData()
  if (localStorage.getItem('carrito')) {
      carrito = JSON.parse(localStorage.getItem('carrito'))
      pintarCarrito()
  }
});
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

// Traer productos
const fetchData = async () => {
  const res = await fetch('api.json');
  const data = await res.json()
  pintarCards(data)
}

// Pintar productos
const pintarCards = data => {
  data.forEach(item => {
    templateCard.querySelector('h5').textContent = item.title
    templateCard.querySelector('p').textContent = item.precio
    templateCard.querySelector('button').dataset.id = item.id
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  cards.appendChild(fragment)
}

// Agregar al carrito
const addCarrito = e => {
  if (e.target.classList.contains('btn-dark')) {
    
    setCarrito(e.target.parentElement)
  }
  e.stopPropagation()
}

const setCarrito = item => {
  
  const producto = {
    title: item.querySelector('h5').textContent,
    precio: item.querySelector('p').textContent,
    id: item.querySelector('button').dataset.id,
    cantidad: 1
  }
  // console.log(producto)
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1
  }
  
    carrito[producto.id] = { ...producto }
    
    pintarCarrito()
  }
  
  const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}
  
  const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
      footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
      `
      return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    
    footer.appendChild(fragment)
    
    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
      carrito = {}
      pintarCarrito()
    })
    
  }
  
  const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-info')) {
      const producto = carrito[e.target.dataset.id]
      producto.cantidad++
      carrito[e.target.dataset.id] = { ...producto }
      pintarCarrito()
    }
    
    if (e.target.classList.contains('btn-danger')) {
      const producto = carrito[e.target.dataset.id]
      producto.cantidad--
      if (producto.cantidad === 0) {
        delete carrito[e.target.dataset.id]
      } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
      }
      e.stopPropagation()
    }
    



    // CODIGO PARA REUTILIZAR
    





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
    

/*
const ingredientesA = document.querySelector(".ingredientesDiv")
const addButtons = document.getElementsByClassName("añadirProducto");
const removeButtons = document.getElementsByClassName("quitarProducto");
const amountLabel = document.getElementById("cartamnt");
*/

/*
const addCarrito = e => {
  console.log(e.target)
  if (e.target.classList.contains('añadirProducto')) {
    setCarrito(e.target.parentElement)
  }
  e.stopPropagation()
}*/

/*
for (const addButton of addButtons) {
  addButton.addEventListener("click", () => {
    let product = products.find(p => p.id == addButton);
    cart.push(product);
    amountLabel.innerText = cart.length + " Total";
  });
}
*/

/*const reflejarIngredientes = data => {
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
                          */
                         
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