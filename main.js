// user name

let userName = prompt('Enter your name', '').trim();
let firstLetterUserName = userName[0].toUpperCase();
let fullUserNameWithoutFirstLetter = userName.slice(1, userName.length);
let userSurname = prompt('Enter your surname', '').trim();
let firstLetterUserSurname = userSurname[0].toUpperCase();
let fullUserSurnameWithoutFirstLetter = userSurname.slice(1, userSurname.length);
let fullUserName = `${firstLetterUserName}${fullUserNameWithoutFirstLetter}`;
let fullUserSurname = `${firstLetterUserSurname}${fullUserSurnameWithoutFirstLetter}`;
let fullName = `${fullUserName} ${fullUserSurname}`;
console.log('Full name:' + `${fullName}`);

// user email

let userEmail = prompt('Enter your e-mail', '');
let email = userEmail.toLowerCase();
email = email.replaceAll(' ', '').trim();
if (email.includes('@')) {
    if (email.startsWith('@')) {
        email = 'not valid email' + ' ' + email + ' ' + '(symbol @ find in first place)';   
        // console.log('not valid email' + ' ' + email + ' ' + '(symbol @ find in first place)');
    } else if (email.endsWith('@')) {
        email = 'not valid email' + ' ' + email + ' ' + '(symbol @ find in last place';
        // console.log('not valid email' + ' ' + email + ' ' + '(symbol @ find in last place)');
    } else {
        email;
        // console.log('Email:' + ' ' + email);
    }
}
else {
    email = 'not valid email' + ' ' + email + ' ' + '(symbol @ not exist)';
    // console.log('not valid email' + ' ' + email + ' ' + '(symbol @ not exist)');
}

// user age
let yearOfBirth = prompt('Enter your year of birth', '');
yearOfBirth = +(yearOfBirth.replaceAll(' ', '').trim());
let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;
console.log(age);


document.write (`
    <ul>
        <li> Full name: ${fullName}</li>
        <li>Email: ${email}</li>
        <li>Age: ${age}</li>
    </ul> 
`)
