var a = 5;
var b = 10;
var myName = "Kilian Tennyson";
var email = "enda.lee@it-tallaght.ie";

function addNums(numA, numB){
    return numA + numB;
}

function subNums(numA, numB){
    return numA - numB;
}

function checkNums(numA, numB){
    if(numA > numB){
        return "True";
    }
    else if(numA < numB){
        return 'False';
    }
    else if(numA == numB){
        return "Numbers are equals"
    }

}

function listWords(word1, word2, word3, word4){
    return Stringword1 + "," + word2 + "," + word3 + "," + word4; 
}

function minutes(mins){
    var hours = Math.floor(mins/60);
    var minutes = (mins % 60/100);
    return hours + minutes;
}

function calcArea (radius){
    var area = Math.PI * radius * radius;
    return area;
}

function distanceConvert(distance, unit){
    var convert;
    var conversion = 1.609344;
    if(unit=="km" || unit=="kilometres"){
        return distance/conversion;
    }
    else if(unit=="miles"){
        return distance*conversion;
    }
    else{
        return "invalid unit";
    }
}

function calcBMI(weight, height){
    return weight/(height*height);
}

function date(day, month){
    var year = new Date();
    year = year.getFullYear();

    return  day + "/" + month + "/" + year;
}

function palindrome(word){
    var palindrome = "";

    for(i = word.length; i >= 0; i--){
        palindrome += word.charAt(i);
    }

    if(palindrome == word){
        return true;
    }
    else{
        return false;
    }

}

function calculator(value, value2, operator){
    if(operator == "+"){
        return value + value2;
    }
    else if(operator == "-"){
        return value - value2;
    }
    else if(operator == "*"){
        return value * value2;
    }
    else if(operator == "/"){
        return value / value2;
    }
    else {
        return "invalid value";
    }
}