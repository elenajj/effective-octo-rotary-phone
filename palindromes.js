let str = 'ZZZZ car, a man, a maraca.';
const palindromes = function() {
    str = str.toLowerCase().replace(/[\W_]/g, '');
                            //metacharacter [\W] all nonword characters
                            // all characters a-z 0-9
    let halfLength = str.length /2;

    for(let i = 0; i <= halfLength; i++){
        if(str[i] !== str[str.length - i - 1] ){
            return false;
        }
        
    }
    return true;
        //true is outside the for loop beccuase being inside will end the
        //loop after the first TRUE that is returned

}

module.exports = palindromes
