$(document).ready(function() {
  $("form#StressForm").submit(function(event) {
    event.preventDefault();

    $("#warnings-responses").show();
    $("input:checkbox[name=warningSigns]:checked").each(function() {
      var warningSignsMode = $(this).val();
      $('#warnings-responses').append(warningSignsMode + "<br>");
    });

    $("#changes-responses").show();
    $("input:checkbox[name=changes]:checked").each(function() {
      var changesMode = $(this).val();
      $('#changes-responses').append(changesMode + "<br>");
    });

    $("#methods-responses").show();
    $("input:checkbox[name=method]:checked").each(function() {
      var methodsMode = $(this).val();
      $('#methods-responses').append(methodsMode + "<br>");
    });

    $('#StressForm').hide();

    for (index = 3; index <= warningSignsMode, index += 1) {
      alert(You are doing a great Job)
    }


  });
});
