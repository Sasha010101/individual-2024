// # Обєкти

// ## ОСНОВИ

// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та
// професія.
// const person = {
//     name: "Sasha",
//     age: 25,
//     job: "Farm",
// }

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(person.name);
// console.log(person["name"]);

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.
// person.age = 26;

// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи
// зі значенням.
// person.workPlace = { city: "Vora", address: "Shevchenko", }

// Видалення властивостей: Видаліть властивість професія з об'єкта person.
// console.log(person.workPlace.address);

// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.
// console.log(!!person.workPlace.address);

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить
// інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з
// об'єктом person.
// const friend = {
//     ...person,
//     name: "Anton",
//     age: 20,
//     job: "mechanic",
//     phoneNumber: "0632671580",

// }
// console.log(friend);

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у
// вигляді ключ-значення.
// console.log("name", person.name);
// ['name', 'age']
// const arr = Object.keys(person);
// for (let element of arr) {
//     console.log(`${element}: ${person['age']}`);

// }

// const x = 'name'
// person[x]

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити
// вітання з іменем особи.

// person.sayHello = function () {
//     console.log("Hello", this.name);

// }
// person.sayHello();

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта
// person за допомогою функції Object.keys().
// console.log(Object.keys(person));

// ---

// ## ЗАДАЧІ

// ```
// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// ```
// function createPerson(name, age) {
//     return {name,age}
// }
// const person = createPerson("Oleksandr", 30);
// console.log(person);

// ---

// ```
// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.
// ``
// function addAddress(obj, address) {
//     obj.address = address;
// return obj;
// }
// const person = { name: "Oleksandr", age: "25", };
// const updateObj = addAddress(person, "Shevchenka 47");
// console.log(updateObj);

// ---

// ```
// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.
// ```
// function changeValueAge(obj, key, age) {
//     obj[key] = age;
//     return obj;
// }
//     const person = { name: "Oleksandr", age: "25", };
// const updateAge = changeValueAge(person, "age", 33);
// console.log(updateAge);

// // ---

// ```
// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.
// ```
// function changeValueAge(obj) {
//    delete obj.age
//     return obj;
// }
//     const person = { name: "Oleksandr", age: "25", };
// const updateAge = changeValueAge(person,);
// console.log(updateAge);
// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// ```
// function getObj(obj) {
//     return obj.name;
// }
// const person = { name: "Oleksandr", age: "25", };
// const updateObj = getObj(person);
// console.log(updateObj);

// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
// ```
// function getObj(obj) {
//     return obj;
// }
// const person = { name: "Oleksandr", age: "25", };
// const updateObj = getObj(!!person.address);
// console.log(updateObj);
// ---

// ```
// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.
// ```
// function getObj(obj) {
//     return obj;
// }
// const person1 = { name: "Oleksandr", surname:"Shevchenko", age: "25", city:"Lviv" };
// const person2 = { name: "Anton", surname:"Antonov", age: "47", };
// const mergeObj = { ...person1,...person2 };
// console.log(mergeObj);

// ---

// ```
// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.
// ```
// function createObj(name = "Unknown", age = 0, address) {
//     return {name, age, address};
// }
// const person1 = createObj("Anton", 25, "Zhytomyr");
// console.log(person1);

// const person2 = createObj();
// console.log(person2);

// ---

// ```
// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// ```
// function getObj(obj, newName, newAge) {
//     obj.name = newName;
//     obj.age = newAge;
//     return obj;
// }
// const person = { name: "Oleksandr", age: "25", };
// const updatePerson = getObj(person, "Ivan", 35);
// console.log(updatePerson);

// ---

// ```
// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// ```
// function getObj(obj, email) {
//     if (!obj.hasOwnProperty("email")) {
//        obj.email = email
//    }
//     return obj;
// }
// const person = { name: "Oleksandr", age: "25", email:"leonov12@gmail.com" };
// const person1 = { name: "Ivan", age: "25", };
// const updatePerson = getObj(person, "vasiliev12@gmail.com");
// const updatePerson1 = getObj(person1,"antonov@gmail.com");
// console.log(updatePerson);
// console.log(updatePerson1);

// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.
// ```
// function changeType(obj) {
//   if (obj.hasOwnProperty('age') && typeof obj.age === 'number') {
//     obj.age = String(obj.age);
//   }
//   return obj;
// }
// const person = { name: 'Ivan', age: 36, address: 'Shevchenka 1' };
// console.log(changeType(person));

// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.
// ```
// function getObj(obj, newAddress) {
//     if (obj.hasOwnProperty("address")) {
//         obj.address = newAddress;
//    }
//     return obj;
// }
// const person = { name: "Oleksandr", age: "25", email:"leonov12@gmail.com", address:"Shevchenka 42" };
// const person1 = { name: "Ivan", age: "25", email:"antonov@gmail.com"};
// const updatePerson = getObj(person, "Antonova 118");
// const updatePerson1 = getObj(person1);
// console.log(updatePerson);
// console.log(updatePerson1);
// // ---

// ```
// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
// ```
// function task1(obj) {
//   return `User ${obj.name} from ${obj.city}`;
// }
// const user = {
//   name: 'Oleh',
//   city: 'Kyiv',
// };
// console.log(task1(user));
// ---

// ```
// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
// ```

// function getArray(arr) {
//   let result = {};

//   for (let array of arr) {
//     const key = array[0];
//     const value = array[1];
//     result[key] = value;
//   }

//   return result;
// }

// const arrayArr = [
//   ['name', 'John'],
//   ['age', 25],
//   ['address', '123 Street'],
// ];
// console.log(getArray(arrayArr));
// ---

// ```
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// ```
// function getArrObj(arrObj) {
//   return arrObj.map(user => {
//     user.age++;
//     return user;
//   });
// }
// const users = [
//   {
//     id: 1,
//     name: 'John Doe',
//     age: 28,
//     email: 'john.doe@example.com',
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     age: 34,
//     email: 'jane.smith@example.com',
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: 'Alice Johnson',
//     age: 22,
//     email: 'alice.johnson@example.com',
//     isActive: true,
//   },
//   {
//     id: 4,
//     name: 'Bob Brown',
//     age: 40,
//     email: 'bob.brown@example.com',
//     isActive: true,
//   },
// ];
// console.log(getArrObj(users));
// ---

// ## ЗАДАЧІ №2

// ```
// Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.
// ```

// ```
// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
// ```

// ```
// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
// ```

// ```
// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
// ```

// ```
// Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// ```

// ```
// Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.
// ```

// ```
// Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.
// ```

// ```
// Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
// ```

// ```
// Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// ```

// ```
// Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
// ```

// ```
// Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
// ```

// ---

// ## РОЗПИСАНІ ЗАДАЧІ

// Створити об'єкт **contactBook**:

// - **Властивості**:
//   - `contacts` (масив контактів)
// - **Методи**:
//   - `addContact(contact)` - метод, що приймає контакт та додає його до масиву
//     контактів.
//   - `deleteContact(contactName)` - метод, що приймає ім'я контакта та видаляє
//     його з масиву контактів.
//   - `findContact(contactName)` - метод, що приймає ім'я контакта та шукає його у
//     масиві контактів.

// ---

// Створити об'єкт **rectangle**:

// - **Властивості**:
//   - `width` (довжина першої сторони)
//   - `height` (довжина другої сторони)
// - **Методи**:
//   - `area()` - метод, що обчислює та повертає площу прямокутника.
//   - `perimeter()` - метод, що обчислює та повертає периметр прямокутника.

// ---

// Створити об'єкт **toDoList**:

// - **Властивості**:
//   - `tasks` (масив задач)
// - **Методи**:
//   - `addTask(task)` - метод, що приймає задачу та додає її до масиву задач.
//   - `markAsDone(taskName)` - метод, що приймає ім'я задачі та позначає її як
//     виконану.
//   - `listTasks()` - метод, що виводить список всіх задач.

// ---

// Створити об'єкт **bankAccount**:

// - **Властивості**:
//   - `balance` (поточний баланс)
// - **Методи**:
//   - `deposit(amount)` - метод, що приймає суму та додає її до балансу.
//   - `withdraw(amount)` - метод, що приймає суму та знімає її з балансу (з
//     перевіркою на достатність коштів).
//   - `checkBalance()` - метод, що повертає поточний баланс.

// ---

// Створити об'єкт **libraryCatalog**:

// - **Властивості**:
//   - `books` (масив книг)
// - **Методи**:
//   - `addBook(book)` - метод, що приймає книгу та додає її до масиву книг.
//   - `findBookByAuthor(author)` - метод, що приймає ім'я автора та повертає книги
//     цього автора.
//   - `findBookByISBN(isbn)` - метод, що приймає ISBN та повертає книгу з цим
//     ISBN.
//   - `listBooks()` - метод, що виводить список всіх книг.

// ---

// Створити об'єкт **temperatureConverter**:

// - **Методи**:
//   - `celsiusToFahrenheit(celsius)` - метод, що приймає температуру в градусах
//     Цельсія та повертає її в градусах Фаренгейта.
//   - `fahrenheitToCelsius(fahrenheit)` - метод, що приймає температуру в градусах
//     Фаренгейта та повертає її в градусах Цельсія.

// ---

// Створити об'єкт **shoppingCart**:

// - **Властивості**:
//   - `items` (масив товарів)
// - **Методи**:
//   - `addItem(item)` - метод, що приймає товар та додає його до кошика.
//   - `totalCost()` - метод, що підраховує та повертає загальну вартість всіх
//     товарів у кошику.
//   - `listItems()` - метод, що виводить список всіх товарів у кошику.

// ---

// Створити об'єкт **socialNetworkUser**:

// - **Властивості**:
//   - `username` (ім'я користувача)
//   - `friends` (масив друзів)
// - **Методи**:
//   - `addFriend(friendName)` - метод, що приймає ім'я друга та додає його до
//     списку друзів.
//   - `removeFriend(friendName)` - метод, що приймає ім'я друга та видаляє його зі
//     списку друзів.
//   - `listFriends()` - метод, що виводить список всіх друзів.

// ---

// Створити об'єкт **musicPlayer**:

// - **Властивості**:
//   - `songs` (масив пісень)
//   - `currentSong` (індекс або ідентифікатор поточної пісні)
// - **Методи**:
//   - `addSong(song)` - метод, що приймає пісню та додає її до списку пісень.
//   - `play()` - метод, що відтворює поточну пісню.
//   - `pause()` - метод, що ставить відтворення на паузу.
//   - `next()` - метод, що перемикає на наступну пісню.
//   - `previous()` - метод, що перемикає на попередню пісню.

// ---

// Створити об'єкт **myString**:

// - **Методи**:
//   - `reverse(str)` - метод, що приймає рядок та повертає його в перевернутому
//     вигляді.
//   - `ucFirst(str)` - метод, що приймає рядок та повертає цей же рядок, зробивши
//     його першу літеру заголовною.
//   - `ucWords(str)` - метод, що приймає рядок та робить заголовною першу літеру
//     кожного слова цього рядка.

// ---

// Створити об'єкт **validator**:

// - **Методи**:
//   - `isEmail(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     емейлом. Повертає `true` або `false`.
//   - `isDomain(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     доменом. Повертає `true` або `false`.
//   - `isDate(str)` - метод, що приймає рядок та перевіряє, чи є він коректною
//     датою. Повертає `true` або `false`.
//   - `isPhone(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     номером телефону. Повертає `true` або `false`.

// ---
