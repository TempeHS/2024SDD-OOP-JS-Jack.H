/* const player = {
    name: "?",
    hp: 100, 
    mp: 0,
    items: [],
};

const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];

const darthVader = player; 

console.log(hanSolo);
console.log(darthVader);*/

/* const createPlayer = (name, hp, mp, items) => {
    return {
        name: name, 
        hp: hp,
        mp: mp,
        items: items,
    };
};

const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
hanSolo.hp = 150;

const darthVader = createPlayer("Darth Vader", 90, 20, ["Saber"]); 

console.log(hanSolo);
console.log(darthVader);*/

/*class Player {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);

console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
const nader = new Player("Nader", 10, 5, [ "Computer" ]);
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
}

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);

console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));*/

/*class Player {
    age = 20;
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
hanSolo.speak("Never tell me the odds!");
hanSolo.age = 50;
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    this.speak = function (phrase) {
        console.log(`${this.name} says: ${phrase}`);  
    };
}

AnotherPlayer.prototype.speak = function (phrase) {
    console.log(`${this.name} says: ${phrase}`);  
};

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
darthVader.speak("hhhhhfshhhh");
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));*/

/*var bullets = [];
var enemies = [];
var player;
var screenX = screen.width;
var screenY = screen.height;
var playerY = screen.height - 5;
var highScore = 0;

class Player {
    constructor(lives, position) {
        this.lives = lives;
        this.position = position;
        this.score = 0;
    }
    move(input) {
        this.position += input;
    }
    shoot() {
        bullets[bullets.length] = new Bullet(-1, position, playerY);
    }
    incScore() {
        this.score++;
    }
    lose() {
        this.lives--;
        if (this.lives == 0) {
            gameOver();
        }
    }
}

class Enemy {
    constructor(positionX, positionY, direction, speed, fireRate) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = direction;
        this.speed = speed;
        this.fireRate = fireRate;
        this.fireCount = fireRate;
        this.id = enemies.length - 1;
    }
    update() {
        this.positionX += this.speed * this.direction;
        if ((this.positionX == screenX && this.direction == 1) || (this.positionX == 0 && this.direction == -1)) {
            this.direction *= -1;
            this.positionY += 2;
        }
        this.fireCount--;
        if (this.fireCount == 0) {
            this.fireCount = this.fireRate;
            bullets[bullets.length] = new Bullet(1, positionX, positionY);
        }
    }
}

class Bullet {
    constructor(direction, positionX, positionY) {
        this.direction = direction;
        this.positionY = positionY + this.direction * 4;
        this.positionX = positionX;
        this.id = bullets.length - 1;
    }
    update() {
        this.positionY += this.direction;
        if (this.positionY > screenY || this.positionY < 0) {
            destroyBullet(this.id);
        }
        if (direction == 1 && this.positionY == playerY && player.position == this.positionX) {
            player.lose();
        } else if (direction == -1) {
            for (let i=0; i<enemies.length; i++) {
                if (this.positionY == enemies[i].positionY && this.positionX == enemies[i].positionX) {
                    destroy(enemies[i]);
                    player.incScore();
                }
            }
        }
    }
}

function gameOver() {
    enemies = [];
    bullets = [];
    if (player.score > highScore) {
        highScore = player.score;
    }
    player = "";
}

function destroy(id) {
    enemies.slice(id);
}

function destroyBullet(id) {
    bullets.slice(id);
}

function newGame() {
    player = new Player(3, (screenX / 2));
    enemies = [new Enemy(0, 5, 1, 5, 6), new Enemy(0, 8, 1, 5, 9)];
}
newGame();*/

/*class EnemyFactory {
    constructor() {
        this.Flying = class {
            constructor(name) {
                this.name = name;
            }
            fly() {
                console.log(this.name + " is flying");
            }
        }
    }
    generateFlyingEnemy(naming) {
        return new this.Flying(naming);
    }
}

EnemyFactory.generateSwimmingEnemy = function(name) {
    class Swimming {
        name = name;
        swim() {
            console.log(this.name + " is swimming");
        }
    }
    return new Swimming(name)
}

const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("Batman");
console.log(flying);
flying.fly();

const swimming = EnemyFactory.generateSwimmingEnemy("Aquaman");
console.log(swimming);
swimming.swim();*/

class Player {
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
}

class Warrior extends Player {
    constructor(name, hp, mp, items, shield) {
        super(name, hp, mp, items);
        this.shield = shield;
    }
}

const barbarian = new Warrior("Greg", 50, 0, ["Sword", "Potion"], "Metal Shield");
console.log(barbarian);