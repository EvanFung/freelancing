$(document).ready(function() {
  var table = $('#user-table').DataTable();
  $("#editUser").click(function(e) {
        e.preventDefault();
        $(".edit-form").slideToggle();
  });
  $(".btn-delete").click(function() {
      $("#user_id").val($(this).closest("tr").attr("data-userid"));
  });

  $(".btn-save").click(function() {
    $("#pw")
  });
});
