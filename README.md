#### 1) What is the difference between var, let, and const?

        var → Function scoped, can re-declare & update.

        let → Block scoped, can update but not re-declare.

        const → Block scoped, cannot update or re-declare.

#### 2) What is the difference between map(), forEach(), and filter()?

       map() → Returns new array (modify each item).

       forEach() → Just loops, returns nothing.

       filter() → Returns new array (based on condition).

#### 3) What are arrow functions in ES6?

        Arrow functions in ES6 are defined using the "arrow" => notation,which provides a shorter alternative to traditional function.


        Without Array Function
        const addNumbers = (num1, num2) => {
        const sum = num1 + num2;
        return sum;
        };
        console.log(addNumbers(5, 10));
        Output: 15


        Without Array Function
        const multiply = (x, y) => x * y;
        console.log(multiply(3, 4));
        Output: 12

#### 4) How does destructuring assignment work in ES6?

        It allows us to unpack value from arrays or properties from
        objects directly into distinct variable.

        const user = { name: 'Alice', age: 25 };
        const { name, age } = user;

        Output: name = 'Alice', age = 25

#### 5) Explain template literals in ES6. How are they different from string concatenation?

        Template literals are a feature in ECMAScript 6 (ES6),introduce to provide a more flexible way to work with strings in JavaScript compared to traditional string concatenation.


        Without Templete literals
        const name = 'World';
        console.log('Hello, ' + name + '!');


        Without Templete literals
        const name = 'World';
        console.log(`Hello, ${name}!`);
