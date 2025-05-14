let todoList = []; // Array to store tasks

    function addTask() {
      const input = document.getElementById("taskInput"); // Get the input element
      const task = input.value.trim();                    // Get and trim the entered task text

      if (task !== "") {                  // Check that the input is not empty
        todoList.push(task);             // Add the task to the array
        input.value = "";                // Clear the input field
        renderTasks();                   // Call function to update task list on page
      }
    }

    function removeTask(index) {
      todoList.splice(index, 1); // Remove the task at the given index
      renderTasks();             // Update the task list after removal
    }

    function renderTasks() {
      const list = document.getElementById("taskList"); // Get the <ul> element
      list.innerHTML = "";                              // Clear the current list

      todoList.forEach((task, index) => {               // Loop through each task
        const li = document.createElement("li");        // Create a <li> for each task

        li.innerHTML = `
          ${task} 
          <button class="remove-btn" onclick="removeTask(${index})">❌</button>
        `; // Add task text and a delete button with its index

        list.appendChild(li); // Add the <li> to the <ul>
      });
    }