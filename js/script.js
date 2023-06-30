const txtElement = ['Mahasiswa Teknik Informatika', 'front end developer'];
let count =  0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function text(){

    if(count == txtElement.length){
        count = 0;
    }
    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(text, 500);
})();