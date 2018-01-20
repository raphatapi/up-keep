// filterTasks("data-category", "HVAC");

export function filterTask(attribute, filterValue) {
    var tasks = $("#taskList").children();
    tasks.each(function(i, task) {
        var attributeValue = task.getAttribute(attribute);
        if (attributeValue === filterValue) task.setAttribute("style", "display:visible;");
        else task.setAttribute("style", "display:none;");
    });
}

// export {filterTask};



// filterTasks({
//     "data-category": "HVAC",
//     "data-season": "spring"
// });