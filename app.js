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