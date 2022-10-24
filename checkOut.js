let label = document.querySelector('.label')
let shop1 = document.getElementById('singleproduct')



let basket =JSON.parse(localStorage.getItem("data")) || []

let navCartAmount = document.querySelector('.cartAmount')
let calculation = () => {
    let totalcartItem =  basket.map((x)=> x.item).reduce((x,y) => x + y,0)
    navCartAmount.innerHTML = totalcartItem
}
calculation()

let generateSingleProductShop = () => {
    if(basket.length!==0){
        return shop1.innerHTML = basket.map((x)=>{   //only id and item are in basket so get data rom data.js using id
            let search = shopItem.find((y) => y.id === x.id) || []  //if we find something return html if not return empty arr


            return `
                 <div class="first">
                    <img src="./${search.img}" alt="" width="250px" height="250px">
                    <div class="singleProductdetails">
                        <h3>${search.topName}</h3><br>
                        <h4>Price : <i class="fa fa-rupee">${search.price}</i><br><br></h4>
                        <p>${search.fulldes}</p><br><br>
                        <div class="lastpartflex">
                            <h4>Total Amount : <i class="fa fa-rupee">${search.price * x.item}</i></h4><br>
                            <div class="buttons">
                                <i class="bi bi-plus-lg" onclick = "increment(${x.id})"></i>
                                <div id = ${x.id} class="qty">${x.item}</div>
                                <i class="bi bi-dash-lg" onclick = "decrement(${x.id})"></i>
                            </div>
                        </div>
                    </div>
                </div> 
            `
        })
    }
    else{
        shop1.innerHTML = ""
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
            <button class="backToShop">Back to shop</button>
        </a>
        `
    }
}
generateSingleProductShop()



let increment = (id) => {
    let selectedID = id.id
    let search = basket.find((x)=> x.id === selectedID)
    
    search.item +=1 

    update(selectedID)
    generateSingleProductShop()
    localStorage.setItem("data",JSON.stringify(basket))

}
let decrement = (id) => {
    let selectedID = id.id
    let search = basket.find((x)=> x.id === selectedID)
    if(search.item === 0 ) return 
        
    else{
        search.item -=1
    }
    
    update(selectedID)
    
    basket = basket.filter((x)=>x.item!==0)
    generateSingleProductShop()
    localStorage.setItem("data",JSON.stringify(basket))
}

let update = (id) => {
    let search = basket.find((x)=>x.id === id)
    let qty = document.getElementById(id)
    qty.innerHTML = search.item
    calculation()
    TotalCartAmount()
}

let TotalCartAmount = () => {
    if(basket.length !==0){
        let amount = basket.map((x)=>{
        let search = shopItem.find((y)=>y.id ===x.id) || []
        return x.item * search.price 
        }).reduce((x,y)=> x+y,0)

        // console.log(amount)
        label.innerHTML = `
            <h2>Total Bill : &#8377; ${amount}</h2>
            <button onclick = "clear()" class="clear">Clear Cart</button>
        `
    }
    
    else{
        return
    }
}
TotalCartAmount()

let clear = () => {
    console.log('clear')
}








