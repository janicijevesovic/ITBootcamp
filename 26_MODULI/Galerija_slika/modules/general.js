// function generateImage(src) {
//     let novaSlika = document.createElement('img');
//     novaSlika.src = src;
//     novaSlika.alt = "Pejzaz";
//     return novaSlika;
// }

let generateImage = src => {
    let novaSlika = document.createElement('img');
    novaSlika.src = src;
    novaSlika.alt = "Pejzaz";
    return novaSlika;
}
export {generateImage};