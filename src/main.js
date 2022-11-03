let shop = document.getElementById('shop')




let generateShop = () => {
    return (shop.innerHTML = shopItem.map((x)=>{
        return `
    <div class="${x.categoty} item" id = ${x.id}>
                    <img src="./${x.img}" alt="">
                    <div class="details">
                        <h3 class="productName">${x.name}</h3>
                        <p>${x.desc}</p>
                        <div class="amountAndAddtoCart">
                            <i class="fa fa-rupee">${x.price}</i>
                            <button class="addToCart"  onclick="increment(${x.id})" >Add to Cart</button>
                        </div>
                    </div>
            </div>`
    }).join(''))
    
}

generateShop()

let basket =JSON.parse(localStorage.getItem("data")) || []

let increment = (id) => {
    let selectedItem = id.id;
    let search = basket.find((x)=> x.id === selectedItem)
    if(search === undefined){
        basket.push({
        id : selectedItem,
        item : 1
        })
    }
    else{
        search.item +=1
    }

    localStorage.setItem("data",JSON.stringify(basket))
    calculation()
}

let navCartAmount = document.querySelector('.cartAmount')

let calculation = () => {
    let totalcartItem =  basket.map((x)=> x.item).reduce((x,y) => x + y,0)
    navCartAmount.innerHTML = totalcartItem
}
calculation()


// Search

let search = document.getElementById('loginBtn')
search.addEventListener('click',()=>{
    let searchInput = document.getElementById('search').value
    let product_Name = document.querySelectorAll('.productName')
    let items = document.querySelectorAll('.item')

    // looping throgh all the elements

    product_Name.forEach((elem,index) => {
        if(elem.innerText.toUpperCase().includes(searchInput.toUpperCase())){
            items[index].classList.remove('hide')
        }
        else {
            items[index].classList.add('hide')
        }
    })
})


// Filtering

let filter = (value) => {

    let items = document.querySelectorAll('.item')

    items.forEach((elem)=>{
    if(elem.classList.contains(value)){
        elem.classList.remove('hide')
    }
    else{
        elem.classList.add('hide')
    }
    })
    
}












