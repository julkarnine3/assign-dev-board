// Function for button handler
function handleButtonClick(id, message) {
    const completedBtn = document.getElementById(id);
    completedBtn.addEventListener('click', function (event) {
        event.preventDefault();
        alert(message);
        completedBtn.disabled = true;//btn disable
        //code for task count increment
        const taskDecrement = document.getElementById('task-decrement').innerText;
        const taskIncrement = document.getElementById('task-increment').innerText;
        let convertedTaskDecrement = parseInt(taskDecrement);
        let convertedTaskIncrement = parseInt(taskIncrement); 
        if(convertedTaskDecrement !== 0){
            convertedTaskDecrement = convertedTaskDecrement - 1;
            convertedTaskIncrement = convertedTaskIncrement + 1;
            document.getElementById('task-decrement').innerText = convertedTaskDecrement;
            document.getElementById('task-increment').innerText = convertedTaskIncrement; 
        }
        else{
            alert('You have no task to update');
            completedBtn.disabled = false;
        }        
        
            

    });
}

// function handleTaskCount()

