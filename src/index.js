const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '**********') {
            arr[i] = ' ';

        }    
        else {
            arr[i] = arr[i].match(/.{1,2}/g);
            let newArr = arr[i];
            for (let j = 0; j < newArr.length; j++) {

                if (newArr[j] === '00') {
                   newArr[j] = '';
                } else if (newArr[j] === '10') {
                    newArr[j] = '.';
                } else {
                     newArr[j] = '-';
                }
                
            }

            arr[i] = newArr.join('')
        }

    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {

        if (MORSE_TABLE[arr[i]] === undefined) {
            MORSE_TABLE[arr[i]] = " ";
        }

      result.push(MORSE_TABLE[arr[i]]);

    }
    return result.join('');

}

module.exports = {
    decode
}