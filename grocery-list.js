$(document).ready(function(){
    let groceryList = []

    //function to add groceries to the grocert list variable
    function addGroceries(){
        let groceries = {
            itemNumber: $('#itemNumber').val(),
            groceryItem: $('#groItem').val(),
            quantityNeeded: $('#quantity').val(),
            category: $('#cat').val(),
            itemPrice: $('#price').val()
        }//end groceryList object
        groceryList.push(groceries)
        console.log(groceryList)

        $('#groItem').val('')
    }//end addGroceries function

    addGroceries()

    function groceryTable(){
        let el=$('#grocery-table')
        for(i=0; i<groceryList.length; i++){
            el.append()
        console.log(el)
        }
    }

    groceryTable()
}) //end ready function