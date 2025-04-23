// Function for button handler
function handleButtonClick(id, message) {
    const completedBtn = document.getElementById(id);
    completedBtn.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Board Updated successfully');
        completedBtn.disabled = true;//btn disable
        //code for task count increment
        const taskDecrement = document.getElementById('task-decrement').innerText;
        const taskIncrement = document.getElementById('task-increment').innerText;
        const textTitle = document.getElementById(message).innerText;
        // console.log(textTitle);

        
        let convertedTaskDecrement = parseInt(taskDecrement);
        let convertedTaskIncrement = parseInt(taskIncrement);
        if (convertedTaskDecrement !== 0) {
            convertedTaskDecrement = convertedTaskDecrement - 1;
            convertedTaskIncrement = convertedTaskIncrement + 1;
            document.getElementById('task-decrement').innerText = convertedTaskDecrement;
            document.getElementById('task-increment').innerText = convertedTaskIncrement;

            handleActivityLog('activity-history',textTitle);  

        }
        else {
            alert('You have no task to update');
            completedBtn.disabled = false;
        }
        if(convertedTaskDecrement === 0){
            alert('Congrats!!! You have completed all the current tasks');
        }



    });
}

function handleActivityLog(id,textTitle){
    const activityHistory = document.getElementById(id);
    const div = document.createElement("div");

    //Get current time 
    const currentTime = new Date().toLocaleTimeString('en-US',{
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    div.innerHTML = 
    `
    <p> You have completed the task ${textTitle} at ${currentTime}. </P>
    `
    //style for activity div
    div.style.background = "#f8f8f8"; // Off-white color
    div.style.borderRadius = "10px";
    div.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
    div.style.marginTop = "10px";
    div.style.padding = "10px";
    div.style.color = "#333";
    
    activityHistory.appendChild(div);

    const clearHistoryBtn = document.getElementById('clear-history-btn');
    clearHistoryBtn.addEventListener('click', function () {
        activityHistory.replaceChildren();
    })

 }

