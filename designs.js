// Select color input
// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid
$('#sizePicker').submit(function (event){
  event.preventDefault();
  height= $('#inputHeight').val();
  width=$('#inputWeight').val();
  makeGrid(height, width);
})

function makeGrid(row, column) {
  /**
  *@description dynamically draws a grid using user-given values
  *@param {number} row - The number of rows the grid should have
  *@param {number} column - The number of columns the grid should have
  */
  //Checking to make sure no table rows stil exists before creating the grid
  const element = document.getElementsByTagName('tr');
  while (element.length != 0){
    $('tr').remove();
  }
  //Creating the Grid
  for (let i=1; i <= row; i++){
    $('#pixelCanvas').append('<tr id=row'+ i +'></tr>');
    for (let j = 1; j <= column; j++){
      $('#row'+ i).append('<td></td>');
    }
  }

  /**Event-listener, listens for the click event and then
     changes the background color of table cells when the event occurs
  */
  $('td').on('click', function(){
    color = $('#colorPicker').val();
    if ($(this).attr('style')){
      $(this).removeAttr('style');
    }else{
      $(this).attr('style', 'background-color:'+color);
    }
  });
}
