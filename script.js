const tasks = [];

function addTask() {
  const task = prompt('Enter a new task: ');
  if (task) {
    tasks.push(task);
    alert('Task added!');
  } else {
    alert('Please enter a valid task.');
  }
}

function viewTask() {
  if (tasks.length === 0) {
    alert('No tasks available.');
  } else {
    let taskList = 'Tasks: \n';
    for (const task of tasks) {
      taskList += `- ${task}\n`;
    }
  }
  alert(taskList);
}
