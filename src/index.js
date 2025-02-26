class Fighter {
    name;
    attack;
    defense;
    hp;

    static fightersList = []

    constructor(name, attack, defense, hp){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        Fighter.fightersList.push(this)
    }
}

new Fighter('Ryu', 8, 4, 10)  
new Fighter('Scorpion', 9, 5, 10)  
new Fighter('Sub-Zero', 10, 5, 10)  
new Fighter('Chun-Li', 10, 3, 10)  

async function defineFighter1(){
    let randomNumber = Math.floor(Math.random() * Fighter.fightersList.length) + 1
    let fighter1 = Fighter.fightersList[randomNumber - 1]

    return fighter1
}

async function defineFighter2(fighter1){
    let randomNumber = Math.floor(Math.random() * Fighter.fightersList.length) + 1
    let fighter2 = Fighter.fightersList[randomNumber - 1]

    while(fighter2 === fighter1){
        randomNumber = Math.floor(Math.random() * Fighter.fightersList.length) + 1
        fighter2 = Fighter.fightersList[randomNumber - 1]
    }

    return fighter2
}

async function defineFighter3(fighter1, fighter2){
    let randomNumber = Math.floor(Math.random() * Fighter.fightersList.length) + 1
    let fighter3 = Fighter.fightersList[randomNumber - 1]

    while(fighter3 === fighter1 || fighter3 === fighter2){
        randomNumber = Math.floor(Math.random() * Fighter.fightersList.length) + 1
        fighter3 = Fighter.fightersList[randomNumber - 1]
    }

    return fighter3
}

async function defineFighter4(fighter1, fighter2, fighter3){
    let randomNumber = Math.floor(Math.random() * Fighter.fightersList.length) + 1
    let fighter4 = Fighter.fightersList[randomNumber - 1]

    while(fighter4 === fighter1 || fighter4 === fighter2 || fighter4 === fighter3){
        randomNumber = Math.floor(Math.random() * Fighter.fightersList.length) + 1
        fighter4 = Fighter.fightersList[randomNumber - 1]
    }

    return fighter4
}

async function drawAttackRounds(){
    let result = Math.random()

    switch (true) {
        case result <= 0.50:
            return "Attack1"
    
        default:
            return "Attack2"
    }
}

async function engineSemiFinal1(character1, character2) {

    let round = 1

    while(character1.hp > 0 && character2.hp > 0){

        console.log(`Round ${round}\n`);
        
        let attackDraw = await drawAttackRounds()

        let damage1 = Math.max(1, character1.attack - character2.defense)
        let damage2 = Math.max(1, character2.attack - character1.defense)


        if(attackDraw === "Attack1"){
            character2.hp = Math.max(0, character2.hp - damage1)
            console.log(`${character1.name} deu ${damage1} de dano!`);
        } else if(attackDraw === "Attack2"){
            character1.hp = Math.max(0, character1.hp - damage2)
            console.log(`${character2.name} deu ${damage2} de dano!`);
        }

        console.log(`${character1.name}: ${character1.hp}`);
        console.log(`${character2.name}: ${character2.hp}`);

        console.log(`___________________________\n`);
        
        round++;
    }

    if(character1.hp > 0){
        console.log(`${character1.name} ganhou a semifinal 1\n`);
    } else{
        console.log(`${character2.name} ganhou a semifinal 1\n`);
    }
}

async function engineSemiFinal2(character3, character4) {

    let round = 1 

    while(character3.hp > 0 && character4.hp > 0){

        console.log(`Round ${round}\n`);
        
        let attackDraw = await drawAttackRounds()

        let damage1 = Math.max(1, character3.attack - character4.defense)
        let damage2 = Math.max(1, character4.attack - character3.defense)

        if(attackDraw === "Attack1"){
            character4.hp = Math.max(0, character4.hp - damage1)
            console.log(`${character3.name} deu ${damage1} de dano!`);
        } else if(attackDraw === "Attack2"){
            character3.hp = Math.max(0, character3.hp - damage2)
            console.log(`${character4.name} deu ${damage2} de dano!`);
        }

        console.log(`${character3.name}: ${character3.hp}`);
        console.log(`${character4.name}: ${character4.hp}`);

        console.log(`___________________________\n`);
        
        round++;
    }

    if(character3.hp > 0){
        console.log(`${character3.name} ganhou a semifinal 2\n`);
    } else{
        console.log(`${character4.name} ganhou a semifinal 2\n`);
    }
}

async function declareWinnerSemiFinal(character1, character2){

    let winner

    if(character1.hp > 0){
        winner = character1
    } else{
        winner = character2
    }

    return winner
}

async function engineFinal(character1, character2, character3, character4) {

    let winnerSemiFinal1 = await declareWinnerSemiFinal(character1, character2)
    let winnerSemiFinal2 = await declareWinnerSemiFinal(character3, character4)

    winnerSemiFinal1.hp = 20
    winnerSemiFinal2.hp = 20 

    console.log(`Vai começar a final entre ${winnerSemiFinal1.name} e ${winnerSemiFinal2.name}!\n`);

    let round = 1

    let champion 

    while(winnerSemiFinal1.hp > 0 && winnerSemiFinal2.hp > 0){

        console.log(`Round ${round}\n`);
        
        let attackDraw = await drawAttackRounds()

        let damage1 = Math.max(1, winnerSemiFinal1.attack - winnerSemiFinal2.defense)
        let damage2 = Math.max(1, winnerSemiFinal2.attack - winnerSemiFinal1.defense)


        if(attackDraw === "Attack1"){
            winnerSemiFinal2.hp = Math.max(0, winnerSemiFinal2.hp - damage1)
            console.log(`${winnerSemiFinal1.name} deu ${damage1} de dano!`);
        } else if(attackDraw === "Attack2"){
            winnerSemiFinal1.hp = Math.max(0, winnerSemiFinal2.hp - damage2)
            console.log(`${winnerSemiFinal2.name} deu ${damage2} de dano!`);
        }

        console.log(`${winnerSemiFinal1.name}: ${winnerSemiFinal1.hp}`);
        console.log(`${winnerSemiFinal2.name}: ${winnerSemiFinal2.hp}`);

        console.log(`-----------------------------\n`);
        
        round++;
    }

    if(winnerSemiFinal1.hp > 0){
        champion = winnerSemiFinal1
    } else{
        champion = winnerSemiFinal2
    }

    console.log(` 🏆 O campeão foi o ${champion.name}! 🏆 `);
}

(async function main(){
    let fighter1 = await defineFighter1()
    let fighter2 = await defineFighter2(fighter1)
    let fighter3 = await defineFighter3(fighter1, fighter2)
    let fighter4 = await defineFighter4(fighter1, fighter2, fighter3)

    console.log(` 🏆 Vai começar o campeonato de luta, valendo o título mundial!\n`);

    console.log(` 🥊 Quatro lutadores estão na disputa! 🥊 \n`);

    console.log(` --- Vai começar a semifinal 1 entre ${fighter1.name} e ${fighter2.name}! --- \n`);
    await engineSemiFinal1(fighter1, fighter2)
    
    console.log(` --- Vai começar a semifinal 2 entre ${fighter3.name} e ${fighter4.name}! --- \n`);
    await engineSemiFinal2(fighter3, fighter4)
    
    await engineFinal(fighter1, fighter2, fighter3, fighter4)
})()
