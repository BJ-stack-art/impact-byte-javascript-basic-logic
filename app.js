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