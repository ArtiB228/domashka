/*// 1
class Account {
    constructor({login, email}) {
    this.login = login
    this.email = email
}
}
Account.prototype.getInfo = function() {
    console.log('Login: ' + this.login + ', Email: ' + this.email)
}; // function

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
// 2
class User {
    constructor({name, age, followers}) {
        this.name = name
        this.age = age
        this.followers = followers
    }
    getInfo1() {
        console.log('User ' + this.name + ' is ' + this.age + ' years old and has ' + this.followers + ' followers')
    }
}
const mango1 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
   });
   
   mango1.getInfo1(); // User Mango is 2 years old and has 20 followers
   
   const poly1 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
   });
   
   poly1.getInfo1(); // User Poly is 3 years old and has 17 followers
// 3
class Storage {
    constructor(items) {
      this.items = [...items];
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
   ]);
   
   const items = storage.getItems();
   console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
   
   storage.addItem('Дроїд');
   console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
   storage.removeItem('Пролонгер');
   console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//4
class StringBuilder {
    constructor(value) {
      this._value = value;
    }
  
    get value() {
      return this._value;
    }
  
    append(char) {
      this._value += char;
    }
  
    prepend(char) {
      this._value = char + this._value;
    }
  
    pad(char) {
      this._value = char + this._value + char;
    }
  }
  const builder = new StringBuilder('.');
  
  builder.append('^');
  console.log(builder.value); // '.^'
  
  builder.prepend('^');
  console.log(builder.value); // '^.^'
  
  builder.pad('=');
  console.log(builder.value); // '=^.^='
//5
class Car {
    getSpecs(car) {

    }
    // Конструктор отримує об'єкт налаштувань.
    //
    // Додай властивості майбутнього екземпляра класу:
    // speed - поточна швидкість, початкова 0
    // price - ціна автомобіля
    // maxSpeed - максимальна швидкість
    // isOn - заведений автомобіль, значення true або false. Спочатку false
    // distance - загальний кілометраж, спочатку 0
    constructor(speed, price, maxSpeed, inOn, distance) {
        this.speed = speed
        this.price = price
        this.maxSpeed = maxSpeed
        this.inOn = inOn
        this.distance = distance
    }
    get price() {
        return this.price
    }
    // Додай геттер і сеттер для властивості price,
    // який буде працювати з властивістю ціни автомобіля.
    //
    // Додай код для того, щоб завести автомобіль
    // Записує у властивість isOn значення true
    
    turnOn() {}
    // Додай код для того, щоб заглушити автомобіль
    // Записує у властивість isOn значення false,
    // і скидає поточну швидкість в 0
    turnOff() {}
    // Додає до властивості speed отримане значення,
    // за умови, що результуюча швидкість
    // не більше, ніж значення властивості maxSpeed
    accelerate(value) {}
    // Забирає від властивості speed отримане значення,
    // за умови, що результуюча швидкість не менше нуля
    decelerate(value) {}
   
    
    // Додає в поле distance кілометраж (hours * speed),
    // але тільки в тому випадку, якщо машина заведена!
    drive(hours) {}
   }
   
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000
*/
let mouseIsDown = false;

window.addEventListener('mousedown', function() {
  mouseIsDown = true;
  console.log(mouseIsDown)
});
window.addEventListener('mouseup', function() {
  mouseIsDown = false;
  console.log(mouseIsDown)
});
const div = document.querySelector('div')
document.body.addEventListener('mousemove', (e) => {
    div.addEventListener('mousedown', () => {
        while(mouseIsDown == true) {
            setTimeout(() => {
                const x = e.pageX
                const y = e.pageY
                div.style.left = x + 'px'
                div.style.top = y + 'px'
            }, 1);
        }
    })
})
