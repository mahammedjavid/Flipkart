let shop = document.getElementById('shop')




let generateShop = () => {
    return (shop.innerHTML = shopItem.map((x)=>{
        return `
    <div class="item" id = ${x.id} >
                    <img src="./${x.img}" alt="" width="250px" height="250px">
                    <div class="details">
                        <h3>${x.name}</h3>
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












