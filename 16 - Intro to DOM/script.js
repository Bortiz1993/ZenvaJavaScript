//Select or target the element in html
let sign = document.getElementById('sign')
console.log('sign');

//2 modify text
console.log(sign.textContent);
sign.textContent = 'Welcome, travelers!';

//Modify Option;
sing.innerHTML = '<p>hello</p>';

//3. change style, access to CSS properties
sing.style.color = 'blue';
