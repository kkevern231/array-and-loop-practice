const taskList = [];

//This was all copied from AI

function addTask() {
  const task = prompt("Enter the task name:");
  tasks.push({ name: task, completed: false });
  console.log("Task added!");
}

function viewTasks() {
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? "X" : " "}] ${task.name}`);
  });
}

function markCompleted() {
  const index =
    parseInt(prompt("Enter the task number to mark as completed:")) - 1;
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log("Task marked as completed!");
  } else {
    console.log("Invalid task number.");
  }
}

function deleteTask() {
  const index = parseInt(prompt("Enter the task number to delete:")) - 1;
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log("Task deleted!");
  } else {
    console.log("Invalid task number.");
  }
}

while (true) {
  const choice = prompt(
    "Select an option:\n1. Add Task\n2. View Tasks\n3. Mark Completed\n4. Delete Task\n5. Exit"
  );

  switch (choice) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      markCompleted();
      break;
    case "4":
      deleteTask();
      break;
    case "5":
      console.log("Goodbye!");
      process.exit(0);
    default:
      console.log("Invalid choice.");
  }
}
