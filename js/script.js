$(document).ready(function () {
  $("#createUserForm").validate({
    submitHandler: function(form) {
      var paramObj = {};
      $.each($('#createUserForm').serializeArray(), function(_, kv) {
        paramObj[kv.name] = kv.value;
      });

      $('#jsonRenderer').jsonViewer(paramObj);
      $('#modal').modal('show');

      return false;
    }
  });
  $('#birthday').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1900
  });


});