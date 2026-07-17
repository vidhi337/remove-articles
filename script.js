const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// function removeArticle(bands) {
//     return bands.map(band => {
//         return band.replace(/^(The|A|An)\s+/i,'');
//     });
// }

// const newBands = removeArticle(bands);

function strip(bandName) {
    return bandName.replace(/^(a |the |an)/i,'').trim();
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.log(sortedBands);