const alarmSubmit= document.getElementById('SubmitAlarm'); // retireves the element with the id submitAlarm and store it's value in the variable
var ringtone= new Audio("./files/ringtone.mp3");// creates a new audio object which will be played when the alarm goes off

//adding the eventListener to the setAlarm button
SubmitAlarm.addEventListener('click', setAlarm);


// function for rintone to play
function alarmRing(){
    ringtone.play();

}

//  fucntion to set the alarm

function setAlarm(e){
    e.preventDefault(); // to prevent the default behavior of form submission i.e to reload the page 
    
    const alarm= document.getElementById('alarm'); // retrieve the element with the id alarm and store it in the variable alarm
    alarmDate= new Date(alarm.value); // creates a new date object and stores the value enetred by the user 

    // if user enter the wrong input this will throw an error 
    if (isNaN(alarm)) {
        alert('Wrong input! Please enter a valid date and time.');
        return; 
    }


    console.log(`Alarm set for ${alarm.value}`);// shows date and time for which the alarm is set
    now= new Date(); // creates a new date object and represent the current date 
    
    let timeLeftforAlarm=alarmDate-now; // this will calculate how much time is left for the alarm to go off
    console.log(timeLeftforAlarm);// this line will display how much time is left for the alarm to go off



    // this condition check if the time left is in positive then it will start the setTimeout() function which will call the alarmRing() function after the specified time and the alarm tone will play
    if(timeLeftforAlarm>=0){ 
        setTimeout(()=>{
            alarmRing();
             
        },timeLeftforAlarm )
    }


}