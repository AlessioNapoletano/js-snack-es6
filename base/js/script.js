// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI


const animals =
    [
        {
            name: "tigre",
            family: "felidi",
            classe: "mammiferi"
        },
        {
            name: "leopardo",
            family: "felidi",
            classe: "mammiferi"
        },
        {
            name: "leone",
            family: "felidi",
            classe: "mammiferi"
        },
        {
            name: "piccione",
            family: "volatile",
            classe: "onnifero"
        },
        {
            name: "aquila",
            family: "volatile",
            classe: "onnifero"
        },
        {
            name: "rondine",
            family: "volatile",
            classe: "onnifero"
        },
        {
            name: "alessio",
            family: "umano",
            classe: "mammiferi"
        }

    ];

const mammiferi = animals.filter((animal) => animal.classe === "mammiferi");

//SALVO nella nuova varibile
const nuoviMammiferi = mammiferi.map((mammifero) => {
    mammifero.name = mammifero.name.charAt(0) + mammifero.name.substring(1).toUpperCase();

    return mammifero;
});

console.log(nuoviMammiferi);


console.log("Esercizio 2");
/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const persone =
    [
        {
            name: "Alessio",
            surname: "Napoletano",
            age: 24
        },
        {
            name: "Sebastiano",
            surname: "Polito",
            age: 28
        },
        {
            name: "Cristian",
            surname: "Bevilaqua",
            age: 16
        },
        {
            name: "Axel",
            surname: "Berti",
            age: 18
        },
        {
            name: "Gabriel",
            surname: "Cantalicio",
            age: 16
        },
        {
            name: "Renato",
            surname: "Zenga",
            age: 30
        },
        {
            name: "Tiziano",
            surname: "Ferro",
            age: 87
        },
        {
            name: "Maggio",
            surname: "Capatonda",
            age: 12
        },
        {
            name: "Sandro",
            surname: "Tonali",
            age: 19
        },
        {
            name: "Uku",
            surname: "Efratere",
            age: 21
        },
    ];

const maggiorenni = persone.filter((persona) => {
    if(persona.age >=18 ){
        return persona
    } 
    return false;

});

console.log(maggiorenni);

maggiorenni.forEach((maggiorenne) => {
    console.log(`Nome: ${maggiorenne.name} Cognome: ${maggiorenne.surname} può guidare in Italia in quanto ha ${maggiorenne.age} anni`)
});

const minorenni = persone.filter((persona) => persona.age<18);

minorenni.forEach((minorenne) => {
    console.log(`La guida non è resa possibile ai minorenni ${minorenne.name}`)
});


