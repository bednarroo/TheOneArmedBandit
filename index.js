const stats = document.querySelector('.stats');
const popUp = document.querySelector('.popUp');
const closePopUp = document.querySelector('.closeButton');
const draw = document.querySelector('.draw');
const walet = document.querySelector('.wallet span');
const bet = document.querySelector('input');
const pictures = [...document.querySelectorAll('.container div')];
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const games = document.querySelector('.games');
let waletValue =  parseInt(walet.textContent, 10);

const showStats = function () {
    popUp.style.display = 'block'

}
const closeElement = function (){
    popUp.style.display = 'none'
}


stats.addEventListener("click", showStats)
closePopUp.addEventListener("click", closeElement)


const StatsObject = {
wins: 0,
losses: 0,
games: 0,
}
const Possibilites = [
    {text:'King',
    src: 'images/king.png'},
    {text: 'Jack',
    src: 'images/jack.png'},
    {text:'Queen',
    src: 'images/queen.png'}
]

let Draws = {
    first: "",
    second: "",
    third: "",
}

const drawElements = function () {
    Draws.first = Math.floor(Math.random()*3);
    Draws.second = Math.floor(Math.random()*3);
    Draws.third = Math.floor(Math.random()*3);
}

const showElement = function(){
    pictures[0].style.backgroundImage = `url('${Possibilites[Draws.first].src}')`;
    pictures[1].style.backgroundImage = `url('${Possibilites[Draws.second].src}')`;
    pictures[2].style.backgroundImage = `url('${Possibilites[Draws.third].src}')`;
}

const checkElement = function () {
    if((Draws.first === Draws.second && Draws.first === Draws.third) || (Draws.first !== Draws.second && Draws.first !== Draws.third && Draws.second !== Draws.third)){
        wins.textContent = `wins: ${++StatsObject.wins}`;
        games.textContent = `games: ${++StatsObject.games}`;
        return("1");
    }else{
        losses.textContent = `losses: ${++StatsObject.losses}`
        games.textContent = `games: ${++StatsObject.games}`
        return(0);
    }

}
const updateWallet = function(checking) {
    waletValue = waletValue - bet.value;
    walet.innerHTML = waletValue;
    if (checking === "1"){
        waletValue = waletValue + 3*bet.value;
        walet.innerHTML = waletValue;
    }
}


const startGame = function () {

    if(bet.value>1){
        if(bet.value > waletValue){
            alert(`You don't have enought money`);
            return;
        }
        drawElements();
        showElement();
        let checking = checkElement();
        updateWallet(checking);
        
    }else{
        alert('Your value is too small')
    }
    bet.value = ""
}

draw.addEventListener("click", startGame)