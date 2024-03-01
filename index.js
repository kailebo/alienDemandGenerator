//This program will generate a demand message to Earth from invading Aliens

//Message pools
const greetings = ['Hello we are', 'Greetings Earthlings'];
const aliens = ['Pingons', 'Javas', 'incredably small Bugs'];
const demandTones = ['surrender', 'handover', 'please give us'];
const demandObjs = ['all your pets', 'the water in your oceans', 'figits spinners'];
const threats = ['kill all your misquitos', 'abduct all your', 'Blow up the Sun'];

function pullRandMsg(msgArr) {
    return msgArr[Math.floor(Math.random()*msgArr.length)];
}
function alienDemandGenerator() {
    greeting = pullRandMsg(greetings);
    alien = pullRandMsg(aliens);
    demandTone = pullRandMsg(demandTones);
    demandObj = pullRandMsg(demandObjs);
    threat = pullRandMsg(threats);
    return `${greeting} the ${alien} ${demandTone} your ${demandObj} or else we will ${threat}`;
}

console.log(alienDemandGenerator())
