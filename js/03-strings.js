console.clear();
/*
STRINGS (tekstas)

Iniciavimo tipai: ' (vienguba), " (dviguba), ` (backtick)
*/

const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

// Petras Petraitis
const pilnasVardas = vardas + ' ' + pavarde;
console.log(pilnasVardas);

// Sveiki, as Petras!
const sveiki = 'Sveiki, as ' + vardas + '!';
console.log(sveiki);

// Vienguba (') kabute.
const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dviguba (") kabute.
const kabute2 = 'Dviguba (") kabute.';

// Vienguba (') ir dviguba (") kabutes.
const priekis = "Vienguba (') ir ";
const galas = 'dviguba (") kabutes.';
const kabute12_0 = priekis + galas;
console.log(priekis);
console.log(galas);
console.log(kabute12_0);

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12_1);

const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12_2);

const kabute12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute12_3);

const kabute12_4 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12_4);

const spec = '\\as\d\*fdf\\';
console.log(spec);

console.log('--------------');

/*
<header>
    <img src="#">
    <nav></nav>
</header>
*/

const HTML = "<header>\r\n\
    <img src=\"#\">\r\n\
    <nav></nav>\r\n\
</header>";
console.log(HTML);

const HTML2 = `<header>
    <img src="#">
    <nav>backtick (\`)</nav>
</header>`;
console.log(HTML2);

const name = 'Ona';
const age = 77;
const city = 'Kaimelis';

// Sveiki, mano vardas [vardas], man yra [amzius] metai ir as esu is [vietovardis].

const sms = 'Sveiki, mano vardas ' + name + ', man yra ' + age + ' metai ir as esu is ' + city + '.';
console.log(sms);

const sms2 = `Sveiki, mano vardas ${name}, man yra ${age} metai ir as esu is ${city}.`;
console.log(sms2);