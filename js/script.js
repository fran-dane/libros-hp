const clickButton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
});

function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
    
}


function addItemCarrito(newItem) {


    const inputElemento = tbody.getElementsByClassName('input__elemento')
    for(let i = 0; i < carrito.length; i++) {
        if(carrito[i].title.trim() === newItem.title.trim()) {
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i]
            inputValue.value++;
            carritoTotal()
            return null;
        }
    }

    carrito.push(newItem)
    renderCarrito()
    

}

function renderCarrito() {

    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const content = `
        
        <th scope="row">1</th>
                    <td class="table__productos">
                        <img src=${item.img} alt="">
                        <h6 class="title">${item.title}</h6>
                    </td>
                    <td class="table__price">
                        <p>${item.precio}</p>
                    </td>

                    <td class="table__cantidad">
                        <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                        <button class="delete btn btn-danger">X</button>
                    </td>
        
        `

        tr.innerHTML = content 
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener("click", removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)

    })
    carritoTotal()
}


function carritoTotal() {
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach(item => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + precio * item.cantidad
    })

    itemCartTotal.innerHTML = `
    
    Total $${total}
    
    `

    addLocalStorage()

}


function removeItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest('.itemCarrito')
    const title = tr.querySelector('.title').textContent;
    for(let i =0; i<carrito.length; i++) {
        if(carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1)
        }
    }

    tr.remove()
    carritoTotal()
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Se ha eliminado del carrito',
        showConfirmButton: false,
        timer: 1500
      })

}

function comprarCarrito(e) {
}

function sumaCantidad(e) {
    const sumaInput = e.target
    const tr = sumaInput.closest(".itemCarrito")
    const title = tr.querySelector(".title").textContent;
    carrito.forEach(item => {
        if(item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })

}


function addLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


window.onload = function() {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage) {
        carrito = storage;
        renderCarrito()
    }
}