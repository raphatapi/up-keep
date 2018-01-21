// filterTasks("data-category", "HVAC");

export function filterTask(attribute, filterValue) {
    var tasks = $("#taskList").children();
    tasks.each(function(i, task) {
        var attributeValue = task.getAttribute(attribute);
        if (attributeValue === filterValue) task.setAttribute("style", "display:visible;");
        else task.setAttribute("style", "display:none;");
    });
}

function handleFilterTasksClick() {
    console.log("here?");
    var list = [1, 2, 3];
    var filteredList = filterTask(blah, blah, list);
    // filterTask('data-category', 'HVAC');
} 
// export {filterTask};



// filterTasks({
//     "data-category": "HVAC",
//     "data-season": "spring"
// });