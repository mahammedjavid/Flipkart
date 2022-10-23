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
                    <img src="../${search.img}" alt="" width="250px" height="250px">
                    <div class="singleProductdetails">
                        <h3>${search.topName}</h3>
                        <h4>${search.name}</h4><br>
                        <p>${search.fulldes}</p><br><br>
                        <div class="lastpartflex">
                            <i class="fa fa-rupee">${search.price}</i><br>
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

    localStorage.setItem("data",JSON.stringify(basket))
    update(selectedID)
    calculation()

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
    calculation()   
}

let update = (id) => {
    let search = basket.find((x)=>x.id === id)
    let qty = document.getElementById(id)
    qty.innerHTML = search.item
}








