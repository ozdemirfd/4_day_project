 
   // Create random number

const getRandEvent = () => {
  // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
  const random = Math.floor(Math.random()*3);
  switch(random){
    case 1:
      return "Marathon";
      break;
    case 2:
      return "Triathlon";
      break;
    case 3:
      return "Pentathlon";
      break;
  }
};

// The scope of `days` is too tight 
const getTrainingDays = condition => {
  let days;
  if(condition==="Marathon"){
    return days=50;
  }else if(condition==="Triathlon"){
    return days=75;
  }else if(condition==="Pentathlon"){
    return days=100;
  }
};

const logEvent = (condition,name) => {
  // const  = 'Nala';
  console.log(`${name}'s condition is: ${condition}`);
};

const logTime = (days,name) => {
  // const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const condition = getRandEvent();
const days = getTrainingDays(condition);
const name = 'Nala';

const condition2 = getRandEvent();
const days2=getTrainingDays(condition2);
const name2="Warren"

logEvent(condition,name);
logTime(days,name);

logEvent(condition2,name2);
logTime(days2,name2);