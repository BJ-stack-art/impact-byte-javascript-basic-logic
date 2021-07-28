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








// 5. palindrome
/* 
    Buatlah sebuah fungsi yang dapat mengecek apakah kata yang dimasukkan adalah palindrome atau tidak
    fungsi ini hanya dapat menerima argument tipe data string dengan minimal 2 karakter, dan mengembalikan tipe data bool ( kembalikan true jika kata tersebut palindrome, kembalikan false jika kata tersebut tidak palindrome atau karakter yang dimasukkan kurang dari 2 karakter )

    "katak" -> return true
    "kasur" -> return false
    "h" -> return false
    "kasur rusak" -> return true
    "erererrerere" -> return true
*/
/* const palindrome = (string) => {
    if( typeof string !== 'string' ) return 'error input bukan string';

    let strReverse = '';
    for(let i = string.length - 1; i >= 0; i--) strReverse += string[i];

    return string.length > 1 && strReverse === string
}

console.log(palindrome("kasur rusak")); */










// 6. Exchange coin
/* 
    buatlah sebuah fungsi yang dapat mengecek pecahan dari input kumpulan coin, pecahan yang tersedia adalah 1000, 500, 200, 100, 50, 20, 10, 5, dan 1.
    fungsi ini hanya menerima argumen berupa tipe data number dan mengembalikan tipe data string

    1752 -> return "1000, 500, 200, 50, 1, 1"
    879 -> return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"
    50 -> return "50"
    0 -> return ""
    5000 -> return "1000, 1000, 1000, 1000, 1000"
*/

/* const exchangeCoin = (number) => {
    let resultCoins = "";
    const coins = [1000,500,200,100,50,20,10,5,1];

    const pecah = (unit) => {
        while(number >= unit) {
            resultCoins += `${unit}, `;
            number -= unit;
        }
    }
    
    for(let i = 0; i <= coins.length ; i++)
        pecah(coins[i]);
    
    return resultCoins;
}

console.log(exchangeCoin(1752)); */












// 7. Asteriks loop
/* 
    buatlah sebuah fungsi yang dapat menampilkan jumlah asterik sesuai perulangan yang dimasukkan, seperti ilustrasi berikut :

    input 4

    *
    **
    ***
    ****
*/

/* const asteriksLoop = (number) => {
    for(let i = 0; i <= number; i++) {
        let simbol = '';
        for(let j = 0; j < i; j++)  simbol += '*';
        console.log(simbol);
    }
}

asteriksLoop(4); */