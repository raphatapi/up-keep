$(document).ready(function(){

    $('[data-toggle="popover"]').popover({
      html: true,
      trigger: 'hover',
      placement: 'bottom',
      content: function(){return '<img src="'+$(this).data('img') + '" height="200" width="200" />';}
    }

    );
    
    $(".dropdown1, .dropdown2").change(function() {
        var tasks = $("#taskList").children();
        var category = $("#category").val();
        var season = $("#season").val();
        tasks.each(function(i, task) {
          if (category === "category") {
            if (task.getAttribute("data-season") === season) task.setAttribute("style", "display:visible;");
              else task.setAttribute("style", "display:none;");
          } else if (season === "season") {
            if (task.getAttribute("data-category") === category) task.setAttribute("style", "display:visible;");
              else task.setAttribute("style", "display:none;");
          } else {
            if (task.getAttribute("data-category") === category && task.getAttribute("data-season") === season) task.setAttribute("style", "display:visible;");
              else task.setAttribute("style", "display:none;");
          }
        });
      });
      
      $('#myModal').on('hidden.bs.modal', function () {
       location.reload();
      })
    
 });

 function getSelected() {
    var selected = [];
    $('#taskList input:checked').each(function(i) {
        selected.push($(this).attr('name'));
        console.log(selected);
        var selectedTask = $("</p>");
        selectedTask.text(selected[i]);
        $(".modal-body").prepend(selectedTask);
    });
  };