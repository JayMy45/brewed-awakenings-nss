import { getProducts } from "./database.js"


//algorithm
//1. add click Event Listener to product strings.
//2.  When a product is clicked a popup alert will appear with name of product and price below it with dollarsign in front

//declare click event listener
document.addEventListener("click",
    (clickEvent) => {
        //store clickEvent.target in variable defined itemClicked
        const itemClicked = clickEvent.target
        //if product is present then create a const using the split method below to create an array and destructure the definition into productId variable...
        if (itemClicked.id.startsWith("product")) {
            const [, productId] = itemClicked.id.split("--");
            //iterate the products object array imported from database
            for (const product of products) {
                if (product.id === parseInt(productId))
                    window.alert(`          ${product.name}\n           $${product.price.toFixed(2)}`)
            }
        }
    }
)




const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

