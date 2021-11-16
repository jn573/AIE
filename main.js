function setQtyZero(quantity) {
    console.log(quantity)
    console.log(`setQty${quantity}`)
    quantity = parseInt(quantity)
    if (typeof (quantity) === 'undefined' || quantity === '') {

        return 0;
    } else {
        return parseInt(quantity)
    }
}


function addQty(e) {
    console.log('add quantity')
    let elem = e.nextElementSibling
    let qty = elem.value
    qty = setQtyZero(qty)

    console.log(`addQty${qty}`)
    qty++;

    console.log(qty)

    elem.value = qty
}

function subQty(e) {
    console.log('subtract quantity')
    let elem = e.previousElementSibling
    let qty = elem.value
    qty = setQtyZero(qty)

    if (qty > 0
    ) {
        qty--;
    }

    console.log(`subQty${qty}`)

    elem.value = qty
}