import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders();

//add click eventListener to the document that will display alert whenever a salesperson is clicked showing how many products sold
//declare document click eventListener
document.addEventListener('click',
    //add an anonymous function with a clickEvent parameter
    (clickEvent) => {
        //declare a constant that will store the clickEvent target
        const itemClicked = clickEvent.target //what does .target do?
        console.log(itemClicked.id)
        //write logic for when a target is clicked...what should be done...?
        // if (itemClicked.id.startsWith("employee")) {  //if the id of the item clicked starts with employee then...(below)
        // const [, employeeId] = itemClicked.id.split("--"); //const of employeeId (destructured results or array created) == what's behind the -- 
        //.splits creates an array of the id; employee--1 to ["employee--"", "1"] therefore employeeId becomes a string "1".

        for (const employeeObject of employees) {
            console.log(itemClicked.id)
            if (employeeObject.id === parseInt(itemClicked.id)) { //parseInt(employeeId is transformed to integer from "1" so the comparison can be made)
                console.log(itemClicked.id)
                const productSold = numberOfProductsSold(employeeObject)
                // window.alert(`  ${employeeObject.name} sold ${employeeObject.id} product(s)`)
                window.alert(`  ${employeeObject.name} sold ${productSold} product(s)`)
            }

        }
    }
)

//declare a function to calculate how many product a employee sold
const numberOfProductsSold = (employeeObject) => {
    //declare a variable equal to number 0 to add the number of items sold too?!
    let n = 0
    //iterate through (there is no need to iterate through employeesObject because it is already filtered) and then orders (import orders function)
    // for (const employee of employeeObject) *******
    for (const order of orders) {
        if (employeeObject.id === order.employeeId) {
            //add 1 integer each time condition is made...
            n++
        }

    }
    //return n (count)
    return n
}
// console.log(numberOfProductsSold(employees))

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

