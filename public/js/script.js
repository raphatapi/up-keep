$(document).ready(function(){

    $('[data-toggle="popover"]').popover({
      html: true,
      trigger: 'hover',
      placement: 'top',
      content: function(){return '<img src="'+$(this).data('img') + '" height="200" width="245" />';}
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

      document.getElementById("btnPrint").onclick = function () {
        printElement(document.getElementById("printThis"));
    }
    
    function printElement(elem) {
        var domClone = elem.cloneNode(true);
        
        var $printSection = document.getElementById("printSection");
        
        if (!$printSection) {
            var $printSection = document.createElement("div");
            $printSection.id = "printSection";
            document.body.appendChild($printSection);
        }
        
        $printSection.innerHTML = "";
        $printSection.appendChild(domClone);
        window.print();
    }
 });

function getSelected() {
  var selected = [];
  $('#taskList input:checked').each(function(i) {
      selected.push($(this).attr('name'));
      var selectedTask = $("</p>");
      selectedTask.attr("id", "checkbox");
      selectedTask.text(selected[i]);
      selectedTask.prepend('<img id="check" src="../img/icons/checked.png" />');
      $(".modal-body").prepend(selectedTask);
  });
};

function sendMail()
{
    var body = [];
    $('#taskList input:checked').each(function(i){
      body.push("%0D" + $(this).attr('name') + "%20");
    })
    window.location.href = "mailto:?subject=up-keep Preventative Tasks&body=Here is what you need to take care of: %0D" + body + "%0D";
}