'use strict';

// This is for testing. It's commented out so the DOM element will work. To verify the tests, just un-comment the line below.
// const assert = require('assert');

// Our array of people to choose from. These people will become players and join a team. They are held as objects.
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
  
//   Variables set to empty arrays. To hold data.
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []


// *** I started with a class Person, but I couldn't get it to extend correctly throughout the code.
//   class Person {
//       constructor(id, name, age, skillSet, placeBorn) {
//           this.id = id;
//           this.name = name;
//           this.age = age;
//           this.skillSet = skillSet;
//           this.placeBorn = placeBorn;
//       }
//   }
  
// So I went with Player, and adding all the object properties in here. Then extended it to the teams.
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
// This pushes the class Player's properties into the arrays for 'blueTeam' and 'redTeam'.
    joinRedTeam(redTeam){
        this.redTeam = redTeam;
        player.redTeam.push(this);
            }
    joinBlueTeam(blueTeam){
        this.blueTeam = blueTeam
        player.blueTeam.push(this);
            }
}


// Here we have a class of 'BlueTeammate' and 'RedTeammate'. It extends the 'Player' class and adds in 'color' and 'mascot'. We want to keep the properties from 'Player', hence we use 'super'.
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



// This function lists the people from the array of objects at the beginning. Along with a 'make player' button.
const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button");
    button.style.backgroundColor='green';
    button.style.color = 'white';
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id);
        listElement.removeChild(li);});
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    });
    }
  
    //   This function makes the people into players! It ties into the HTML aspect. As the people are found, they are turned into players. They are given their properties, and if they 'canThrowBall' or 'hasPaid', etc, it's set to true.
  const makePlayer = (id) => {
    const players = document.getElementById('players');
    const findPlayer = arrOfPeople.find((entry) => {  
      return entry.id == id;  
    });
    const playerIndex = arrOfPeople.indexOf(findPlayer);
    
    const newPlayer = new Player (findPlayer.id, findPlayer.name, findPlayer.age, findPlayer.skillSet, findPlayer.placeBorn, true, true, true, true, 3);
    listOfPlayers.push(newPlayer);
    arrOfPeople.splice(playerIndex, 1);

    // We're making a list here. Of the new players.
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newPlayer.name + " - "));

    // These are the buttons for the teams. Best practice would be to style it in CSS, but since it's a few things, I'll just put it here. Once these are clicked, that person, who became a player, is now on the 'red' or 'blue' team.
    const button_blue = document.createElement("button");
    button_blue.style.backgroundColor='lightblue';
    button_blue.style.color = 'blue';
    button_blue.innerHTML = "Blue Team!";
    button_blue.addEventListener('click', () => {makeBluePlayer(newPlayer.id);
      players.removeChild(li);})
    li.appendChild(button_blue);

    const button_red = document.createElement("button");
    button_red.style.backgroundColor='white';
    button_red.style.color = 'red';
    button_red.innerHTML = "Red Team!";
    button_red.addEventListener('click', () => {makeRedPlayer(newPlayer.id);
      players.removeChild(li);})
    li.appendChild(button_red);

    players.append(li);
    }

    // Once they've been selected as a blue or red player. They are put into their respective sections. And are given the properties of a teammate. Along with their team's color and mascot.
    const makeBluePlayer = (id) =>{
      const playersBlue = document.getElementById('blue');
      playersBlue.style.backgroundColor = 'white';
      playersBlue.style.color = 'blue';
      const selectBlue = listOfPlayers.find((pick) => {  
        return pick.id == id;  
      });
      const blueIndex = listOfPlayers.indexOf(selectBlue);

      const newBluePlayer = new BlueTeammate (selectBlue.id, selectBlue.name, selectBlue.age, selectBlue.skillSet, selectBlue.placeBorn, true, true, true, true, 3, 'Blue', 'Tigers');
      blueTeam.push(newBluePlayer);
      listOfPlayers.splice(blueIndex, 1); 

      const li = document.createElement("li");
      li.appendChild(document.createTextNode(newBluePlayer.name + " - " + "is on the " + newBluePlayer.color + " Team, " + " GO " + newBluePlayer.mascot + "!"));
      playersBlue.append(li);
    }

    // Here we make a red player. Very similar to making a blue player. Mascot and color of team is defined. Along with the statement after they've joined the team.
    const makeRedPlayer = (id) =>{
      const playersRed = document.getElementById('red');
      playersRed.style.backgroundColor = 'white';
      playersRed.style.color = 'red';
      const selectRed = listOfPlayers.find((pick) => {
        return pick.id == id;
      });
      const redIndex = listOfPlayers.indexOf(selectRed);

      const newRedPlayer = new RedTeammate (selectRed.id, selectRed.name, selectRed.age, selectRed.skillSet, selectRed.placeBorn, true, true, true, true, 3, 'Red', 'Fishes');
      redTeam.push(newRedPlayer);
      listOfPlayers.splice(redIndex, 1);
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(newRedPlayer.name + " - " + "is on the " + newRedPlayer.color + " Team, " + " GO " + newRedPlayer.mascot + "!"));
      playersRed.append(li);
    }


    // Testing! Here are my tests, to ensure a newPlayer can be added from the people list. And then that they can join a team. And then that they have their team's color. Don't foget to un-comment the line near the beginning of the program, and also npm i.
    

    if (typeof describe === 'function'){

        describe('newPlayer', () => {
          it('should make a player from the person list', () => {
              let newPlayer = new Player(true, 'newPlayer.name');
                assert.equal(newPlayer.id, true);
            });
        });
      
      
        describe('JoinTeam', () => {
            it('Player joins a team', () => {
                let  newBluePlayer = new BlueTeammate(true, 'newBluePlayer.name');
                assert.equal(newBluePlayer.id, true);
        });
            it('Player joins a team', () => {
                let  newRedPlayer = new RedTeammate(true, 'newRedPlayer.name');
                assert.equal(newRedPlayer.id, true);
        });
      });
    
        
        describe('ColorOfTeam', () => {
          it('Add color to teammate', () => {
            let  newBluePlayer = new BlueTeammate(true, true, true, true, true, true, true, true, true, true, 'blue', true);
            assert.equal(newBluePlayer.color, 'blue');
          });
      });

    }
