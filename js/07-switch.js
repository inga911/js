console.clear();
/*
SWITCH (panasus i IF)
*/
console.log('--------SWITCH (BREAK PO KIEKVIENO CASE)-----');

const diena = 5;

switch (diena) {
    case 1:
        console.log('pirmadienis');
        break;

    case 2:
        console.log('antradienis');
        break;

    case 3:
        console.log('treciadienis');
        break;

    case 4:
        console.log('ketvirtadienis');
        break;

    case 5:
        console.log('penktadienis');
        break;

    case 6:
        console.log('sestadienis');
        break;

    case 7:
        console.log('sekmadienis');
        break;

    default:
        console.log('tokios dienos savaiteje nera');
        break;
}

const day = 1

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;

    default:
        console.log('tokios dienos savaiteje nera');
        break;
}

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalis');
} else {
    console.log('tokios dienos savaiteje nera');
}

console.log('----SWITCH  (BREAK TIK TIES TAM TIKRAIS)------');
//KAI ESI KOKIAME NORS ETAPE IR REIKIA SUZINOTI KIEK DAR ETAPU LIKO

const gamybosEtapas = 0;

switch (gamybosEtapas) {
    case 1:
        console.log('pasiimti puodeli');

    case 2:
        console.log('isideti arbatos (pakelis/arbatzoles)');

    case 3:
        console.log('isideti cukru/saldikliu/nieko');

    case 4:
        console.log('isipilti vandens');

    case 5:
        console.log('gerti');
        break;

    default:
        console.log('tokio etapo nera');
        break;
}

console.log('-----CASE VARIANTAS SU ZODZIAIS-----');
const stotele = 'Vasaros';

switch (stotele) {
    case 'Parko':
        console.log('Parko stotele');

    case 'Geniu':
        console.log('Geniu stotele');

    case 'Tremtiniu':
        console.log('Tremtiniu stotele');

    case 'Rudens':
        console.log('Rudens stotele');

    case 'Karaliaus Mindaugo':
        console.log('Karaliaus Mindaugo stotele');

    case 'Zaliasis Tiltas':
        console.log('Zaliasis Tiltas stotele');
        break;

    case 'Lvovo':
        console.log('Lvovo stotele');

    case 'Vasaros':
        console.log('Vasaros stotele');

    case 'Rudens2':
        console.log('Rudens2 stotele');

    case 'Tremtiniu2':
        console.log('Tremtiniu2 stotele');

    case 'Geniu2':
        console.log('Geniu2 stotele');

    case 'Ziedas':
        console.log('Naujosios Vilnios Ziedas stotele');
        break;

    default:
        console.log('tokios stoteles nera');
        break;
}


function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
      case 2:
        name = 'Venus'
      case 3:
        name = 'Earth'
      case 4:
        name = 'Mars'
      case 5:
        name = 'Jupiter'
      case 6:
        name = 'Saturn'
      case 7:
        name = 'Uranus'
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }

  console.log()
  