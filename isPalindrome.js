function isPalindrome(x) {
    if(x == "") {
       return true;
    } else
    var PlainStr= x.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");
    for(var i=0; i < (PlainStr.length)/2; i++){
    
    if(PlainStr[i] == PlainStr[PlainStr.length-i-1]){
    return true;
    } else
    return false;
    }
    }
 