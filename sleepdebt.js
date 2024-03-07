const getsleepHours = day =>{
    if(day === 'monday'){
        return 7;
    }
    else if(day === 'tuesday'){
        return 6;
    }
    else if(day === 'wednesday'){
        return 7;
    }
    else if(day === 'thursday'){
        return 5;
    }
    else if(day === 'friday'){
        return 9;
    }
    else if(day === 'saturday'){
        return 7;

    }
    else if(day === 'sunday')
    {
        return 5;
    }
    else{
        return "Invalid day";
    }

}
const getActualsleep = ()=>{
    return getsleepHours('monday') + getsleepHours('tuesday') +getsleepHours('wednesday') +getsleepHours('thursday')+ getsleepHours('friday') + getsleepHours('saturday') +getsleepHours('sunday');
};
const totalHoursSlept = getActualsleep();
console.log('you slept ' + totalHoursSlept+ ' last week');

const idealSleepHours = (hours)=> {
    hours = 6;
    return hours*=7
}
const idealSleep = idealSleepHours();
const sleepDeptHours = ()=>{
    let getSleepDebt = idealSleep - totalHoursSlept;
    return getSleepDebt
};
const sleepDebt = sleepDeptHours();
if(totalHoursSlept === idealSleep){
    console.log('You got the perfect amount of sleep')

}
else if(totalHoursSlept < idealSleep){
    console.log("you haven't slept " + sleepDebt + " last week you should take some rest" );
}
else{
    const getExtrahours = Math.abs(sleepDebt);
    console.log ("Hey, you have slept " + getExtrahours + " more than needed");
}

