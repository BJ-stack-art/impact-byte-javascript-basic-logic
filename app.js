// 1. Even character
/* 
    Buatlah sebuah fungsi yang dapat mengembalikan ( return ) kumpulan karakter di urutan genap.
    fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string

    "pratama" -> return "rtm"
    "hellohello" -> return "elhlo"
    "hello hello hello" -> return "el el el"
    "" -> return ""
    123434 -> return "error input bukan string"
 */

   
    
/* const evenCharacter = (string) => {
    // check tipe data
    if(typeof string !== 'string') return 'error input bukan string';

    let result = "";
    for(let i = 0; i < string.length; i++) {
        i % 2 === 1 ? result += string[i] : "";
    }

    return result;
}

console.log(evenCharacter("pratama")); */











// 2. Count Word
/* 
    Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah kata yang ada di dalam kalimat,
    fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data number

    "pratama" -> return 1
    "hellohello" -> return 1
    "hello hello hello" -> return 3
    "" -> return 0
    "hore yeay ahaaa" -> return 3
    123434 -> return "error input bukan string"
 */


/* const countWord = (string) => {
    if( typeof string !== 'string' ) return 'error input bukan string';
    
    let space = 0;
    for(let i = 0; i < string.length; i++) {
        string[i] === " " ? space += 1 : "";
    }
    
    return string.length ? space + 1 : 0;
} 

console.log(countWord("hello hello hello")) */










// 3. Count Vowel And Consonant
/* 
    Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah huruf karakter vokal dan karakter konsonan ( huruf mati ),
    fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string

    "pratama" -> return "jumlah vokal : 3 , jumlah konsonan : 4"
    "hellohello" -> return "jumlah vokal : 4, jumlah konsonan : 6"
    "" -> return "jumlah vokal : 0 , jumlah konsonan 0"
    123434 -> return "error input bukan string"
*/

/* const countVowelConsonant = (string) => {
    if( typeof string !== 'string' ) return 'error input bukan string';
    
    let vowel = 0;
    let consonant = 0;

    const listVowel = ['a','i','u','e','o'];
    const checkVowel = (character) => {
        for(let i = 0; i < listVowel.length; i++) {
            if(listVowel[i] === character) return true;
        }
        return false;
    }

    for(let i = 0; i < string.length; i++) {
        console.log(string[i] , checkVowel(string[i]));
        checkVowel(string[i]) ? vowel++ : consonant++;
    }

    return `jumlah vokal : ${vowel} , jumlah konsonan : ${consonant}`; 
}

console.log(countVowelConsonant("")); */











// 4. reverse word
/* 
    buatlah sebuah fungsi yang dapat membalikkan tipe data string.
    fungsi ini hanya dapat menerima tipe data string, dan mengembalikan hasil dengan tipe data string juga

    "hello" -> return "olleh"
    "world!" -> return "!dlrow"
    "asikasikasik" -> return "kisakisakisa"
    "" -> return ""
*/

/* const reverseWord = (string) => {
    if( typeof string !== 'string' ) return 'error input bukan string';
    
    let result = '';
    for(let i = string.length -1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

console.log(reverseWord("asikasikasik")); */