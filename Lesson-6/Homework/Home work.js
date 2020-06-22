function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
var x = prompt('Введите первое число', 1) ;
var n = prompt('Введите степень', 1);
if (n <=0 ) {
     alert ('Введите коректное число');
} else {
    alert( pow(x, n) );
}
pow(x,n);