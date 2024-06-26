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

/*class Player {
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
console.log(barbarian);*/


/*class Vehicle {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
}

class Spaceship extends Vehicle {
    constructor(name, maxSpeed, numRocketEngines) {
        super(name, maxSpeed);
        this.numRocketEngines = numRocketEngines;
    }
}

const spaceship = new Spaceship("Enterprise", 1000, 2);
console.log(spaceship.getMaxSpeed());
console.log(spaceship.numRocketEngines);*/

/*class Shape {
    constructor(coulor = "Transparent") {
        this.coulor = coulor;
        this.type = "shape";
    }
    describe() {
        console.log("A " + this.coulor + " " + this.type);
    }
}

class Square extends Shape {
    constructor(coulor, sideLength) {
        super(coulor);
        this.type = "square";
        this.sideLength = sideLength;
    }
    area() {
        return(this.sideLength**2);
    }
}

class Rectangle extends Shape {
    constructor(coulor, width, height) {
        super(coulor);
        this.type = "rectangle";
        this.width = width;
        this.height = height;
    }
    area() {
        return(this.width * this.height);
    }
}

class Circle extends Shape {
    constructor(coulor, radius) {
        super(coulor);
        this.type = "circle";
        this.radius = radius;
    }
    area() {
        return(Math.PI * this.radius**2);
    }
    describe() {
        console.log("A round and awesome " + this.coulor + " " + this.type);
    }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
const circle = new Circle("green", 3);
console.log(square.area());
console.log(rectangle.area());
console.log(circle.area());
for (const Shape of [square, rectangle, circle]) {
    Shape.describe();
}*/

/*class Enemy {
    constructor(positionX, positionY, direction, speed, fireRate, sprite) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = direction;
        this.speed = speed;
        this.fireRate = fireRate;
        this.fireCount = fireRate;
        this.id = enemies.length - 1;
        this.sprite = sprite;
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

class Boss extends Enemy {
    constructor (positionX, positionY, direction, speed, fireRate, sprite) {
        super(positionX, positionY, direction, speed, fireRate, fireCount, sprite);
    }
    defeat() {
        level++;
        resetShelter();
        clearEnemies();
    }
}

class Drop extends Enemy {
     constructor (positionX, positionY, direction, speed, fireRate, sprite) {
        super(positionX, positionY, direction, speed, fireRate, sprite);
    }
    update() {
        this.positionX += this.speed * this.direction;
        if ((this.positionX == screenX && this.direction == 1) || (this.positionX == 0 && this.direction == -1)) {
            this.direction *= -1;
            this.positionY += 2;
        } else if (this.direction == 0) {
            this.positionY += 3;
        }
        this.fireRate--;
        if (this.fireRate == 0) {
            this.direction = 0;
        }
    }
}*/

/*class FancyArray extends Array {
    mapWithLogging(callback) {
        let i = 0;
        for(const item of this) {
            const mappedItem = callback(item, i);
            console.log("Current: " + item + ", After Callback: " + mappedItem);
            this[i] = mappedItem;
            i++;
        }
    }
}

const arr = new FancyArray();
console.log(arr);
arr.push(1);
arr.push(2);
arr.push(3);

const mapped = arr.mapWithLogging((item, i) => {
    return (item + i);
});
console.log(arr);*/

/*class Printer {
    constructor(brand, coulors) {
        this.#setUpPrinter(brand, coulors);
    }

    #setUpPrinter(brand, coulors) {
        this.brand = brand;
        this.coulors = coulors;
    }
}

const device = new Printer("HP", ["Red", "Green", "Blue"]);
console.log(device);*/

class Utilities {
    static camelCase(str) {
        if (typeof str == "string") {
            var index;
            str = str.toLowerCase();
            while(str.includes(" ")) {
                index = str.search(" ");
                str = str.slice(0, index) + str.charAt(index + 1).toUpperCase() + str.slice(index + 2);
            }
            return str;
        } else {
            console.log("not a string");
        }
    }
}

console.log(Utilities.camelCase("he llo tH  Ere"));
const utility = new Utilities();
console.log(utility.camelCase("wo w"));