$(document).ready(function () {
    let groceryList = []
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
        $('#tbody').empty()
        appendTable()

        $('#groItem').val('')
        $('#quantity').val('')
        $('#cat').val('')
        $('#price').val('')
    }//end addGroceries function

    //function to append the table to the DOM and create a counter for itemNumber
    function appendTable() {
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

    $('#delete').click(function(){
        console.log('delete button was clicked')
        $(':checkbox:checked').closest("tr").remove()
        console.log(groceryList)

    })


    // function deleteItem() {
    //     $('input[type="checkbox"]').click(function(){
    //         if($(this).prop("checked") == true){
    //             console.log('checked')
    //         }
    //     }) 
    // }//end delete function

    // clickDelete()

}) //end ready function