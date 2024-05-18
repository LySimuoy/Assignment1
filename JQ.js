$(document).ready(function(){
    $('#btn-add').click(function(){
        const text=$('#inputText');
        var row=`
        <li class="list list-group-item d-flex justify-content-between align-items-center" id="list">
        <p class="char" style="margin: 0px;">${(text.val())}</p>
        <div class="" style="color: blue;">
            <div class="edit" id="edit-row" style="float: left;">
                <i class="fa-solid fa-pencil"></i>
            </div>
            <div class="delete" id="delete-row" style="float: left;">
                <i class="fa-solid fa-trash-can mx-3"></i>
            </div>
        </div>
        </li>
        `;

        if(text.val()!=''){
            $('ul').append(row);
            text.val('');
            text.focus();
        }else{
            alert('Please Input a value')
            text.focus();
        }
    });

    // Delete row
    $('ul').on('click', '.delete', function() {
    var confirmation = confirm('Are you sure you want to delete?');
    if (confirmation) {
      $(this).closest('li').remove();
    }
    });
    $(document).ready(function() {
      const text=$('#inputText');
      var editedRow = null; // Variable to store the edited row
    
      // Edit row
      $('ul').on('click', '.edit', function() {
        var listItem = $(this).closest('li');
        var text = listItem.find('.char').text();
        $('#row-data').val(text).focus();
        editedRow = listItem; // Store the edited row
      });
    
      // Save edited row
      $('#btn-save').click(function() {
        var editedText = $('#row-data').val();
        if (editedText !== '') {
          if (confirm('Do you want to update?')) { // Confirmation prompt
            editedRow.find('.char').text(editedText);
            $('#row-data').val('');
            editedRow = null; // Reset the edited row variable
            text.focus();
          }else{
            $('#row-data').val('');
            text.focus();
          }
        } else {
          alert('Please input a value.');
          $('#row-data').focus();
        }
      });
    });

});
