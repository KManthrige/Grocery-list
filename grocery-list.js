$(document).ready(function () {
    let groceryList = []
    //let newList = groceryList.filter()
    let itemID = 0

    //funtion to use the 'Add to List' button so it runs the addGroceries function
    function addButton() {
        $('#addItems').on('click', addGroceries)
    }//end addButton function
    addButton()

    //function to add groceries to the grocert list variable
    function addGroceries() {
        itemID++
        let groceries = {
            checkbox: "",
            itemNumber: itemID,
            groceryItem: $('#groItem').val(),
            quantityNeeded: $('#quantity').val(),
            category: $('#cat').val(),
            itemPrice: $('#price').val()
        }//end groceryList object
        groceryList.push(groceries)
        appendTable()

        $('#groItem').val('')
        $('#quantity').val('')
        $('#cat').val('')
        $('#price').val('')
    }//end addGroceries function

    //function to append the table to the DOM and create a counter for itemNumber
    function appendTable() {
        $('#tbody').empty()
        for (i = 0; i < groceryList.length; i++) {
            $('#tbody').append(`<tr id=${groceryList[i].itemNumber}> 
            <td> <input type="checkbox" id="checkbox"> </td>
            <td> ${groceryList[i].itemNumber} </td>
            <td> ${groceryList[i].groceryItem} </td>
            <td> ${groceryList[i].quantityNeeded} </td>
            <td> ${groceryList[i].category} </td>
            <td> ${groceryList[i].itemPrice} </td>
            </tr>`)

        }//end for loop
    }//end appendTable function
    console.log(groceryList)

    $('#delete').click(function () {
        let el = $(':checkbox:checked').closest("tr").attr("id")
        //shorthand version: let updatedList = groceryList.filter(item => item.itemNumber !== parseInt(el))
        let updatedList = groceryList.filter(function( item ){
            return item.itemNumber !== parseInt(el)
        })
        console.log(updatedList)
        groceryList = updatedList
        appendTable()
        console.log(groceryList)

    })

    function searchItem(){
        
    }
    // function deleteItem() {
    //     $('input[type="checkbox"]').click(function(){
    //         if($(this).prop("checked") == true){
    //             console.log('checked')
    //         }
    //     }) 
    // }//end delete function

    // clickDelete()

}) //end ready function