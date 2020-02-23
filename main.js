'use strict';

let assert = require('assert');


const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []

//   class Person {
//       constructor(id, name, age, skillSet, placeBorn) {
//           this.id = id;
//           this.name = name;
//           this.age = age;
//           this.skillSet = skillSet;
//           this.placeBorn = placeBorn;
//       }
//   }
  
  class Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }

    joinRedTeam(redTeam){
        this.redTeam = redTeam;
        player.redTeam.push(this);
            }
    joinBlueTeam(blueTeam){
        this.blueTeam = blueTeam
        player.blueTeam.push(this);
            }
}



class BlueTeammate extends Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot){
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
        this.color = color;
        this.mascot = mascot;
    }
}
class RedTeammate extends Player{
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot){
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
        this.color = color;
        this.mascot = mascot;
    }
}




const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id);
        listElement.removeChild(li);});
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    });
    }
  
  
  const makePlayer = (id) => {
    const players = document.getElementById('players');
    const findPlayer = arrOfPeople.find(function(entry){  
      return entry.id == id;  
    });
    const playerIndex = arrOfPeople.indexOf(findPlayer);
    
    const newPlayer = new Player (findPlayer.id, findPlayer.name, findPlayer.age, findPlayer.skillSet, findPlayer.placeBorn, true, true, true, true, 4);
    listOfPlayers.push(newPlayer);
    arrOfPeople.splice(playerIndex, 1);
    
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newPlayer.name + " - "));

    const button_blue = document.createElement("button");
    button_blue.style.backgroundColor='Blue';
    button_blue.style.color = 'white';
    button_blue.innerHTML = "Blue Team";
    button_blue.addEventListener('click', function() {makeBluePlayer(newPlayer.id);
      players.removeChild(li);})
    li.appendChild(button_blue);
    const button_red = document.createElement("button");
    button_red.style.backgroundColor='Red';
    button_red.style.color = 'yellow';
    button_red.innerHTML = "Red Team";
    button_red.addEventListener('click', function() {makeRedPlayer(newPlayer.id);
      players.removeChild(li);})
    li.appendChild(button_red);

    players.append(li);
    }

    const makeBluePlayer = (id) =>{
      const playersBlue = document.getElementById('blue');
      playersBlue.style.backgroundColor = 'blue';
      playersBlue.style.color = 'white';
      const selectBlue = listOfPlayers.find(function(pick){  
        return pick.id == id;  
      });
      const blueIndex = listOfPlayers.indexOf(selectBlue);

      const newBluePlayer = new BlueTeammate (selectBlue.id, selectBlue.name, selectBlue.age, selectBlue.skillSet, selectBlue.placeBorn, true, true, true, true, 4, 'Blue', 'Tiger');
      blueTeam.push(newBluePlayer);
      listOfPlayers.splice(blueIndex, 1); 

      const li = document.createElement("li");
      li.appendChild(document.createTextNode(newBluePlayer.name + " - " + "Mascot = " + newBluePlayer.mascot + " and Team Color is " + newBluePlayer.color));
      playersBlue.append(li);
    }
    const makeRedPlayer = (id) =>{
      const playersRed = document.getElementById('red');
      playersRed.style.backgroundColor = 'red';
      playersRed.style.color = 'yellow';
      const selectRed = listOfPlayers.find(function(pick){
        return pick.id == id;
      });
      const redIndex = listOfPlayers.indexOf(selectRed);

      const newRedPlayer = new RedTeammate (selectRed.id, selectRed.name, selectRed.age, selectRed.skillSet, selectRed.placeBorn, true, true, true, true, 4, 'Red', 'Fish');
      redTeam.push(newRedPlayer);
      listOfPlayers.splice(redIndex, 1);
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(newRedPlayer.name + " - " + "Mascot = " + newRedPlayer.mascot + " and Team Color is " + newRedPlayer.color));
      playersRed.append(li);
    }


    // Testing!

    if (typeof describe === 'function'){
        describe('Player', function(){
          it('should throw a ball, dodge a ball, has paid dues, is healthy, has experience', function(){
            let newPlayer = new Player('newPlayer.id', 'newPlayer.name', 'newPlayer.age', 'newPlayer.skillSet', 'newPlayer.placeBorn', true, true, true, true, 4);
            
          });
        });
      }
      if (typeof describe === 'function'){
        describe('Team', function(){
        it('team mate should have mascot', function(){
          let  newBluePlayer = new BlueTeammate ('newBluePlayer.id', 'newBluePlayer.name', 'newBluePlayer.age', 'newBluePlayer.skillSet', 'newBluePlayer.placeBorn', true, true, true, true, 4, 'Dragon', 'Blue');
          
        });
      });
    }
        if (typeof describe === 'function'){
          describe('Team', function(){
          it('team mate should have team color', function(){
            let  newBluePlayer = new BlueTeammate ('newBluePlayer.id', 'newBluePlayer.name', 'newBluePlayer.age', 'newBluePlayer.skillSet', 'newBluePlayer.placeBorn', true, true, true, true, 4, 'Dragon', 'Blue');
            
          });
      });
    }
