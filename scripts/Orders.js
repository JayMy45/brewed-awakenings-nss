import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
    let orderProduct = null

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
//what kind of information is this supposed to return???
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null
    // console.log(allEmployees)
    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            // console.log(employee)
            orderEmployee = employee
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        // console.log(employee)
        // console.log(employee.name)
        const product = findProduct(order, products)
        if (employee !== null && employee !== undefined) {
            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
        }
        // html += `<li>${product.name} was sold by ${employee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}
