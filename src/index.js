module.exports = function solveEquation(equation) {
  // your implementation
    var ur = equation;
    var temp = "";
    var a,b,c,d,x1,x2;
    var arr = [];

    for(var i = 0; i<ur.length; i++) {
        temp += ur[i];
        if(ur[i] === ' ' || i == ur.length-1) {
            if(temp.indexOf('x') != -1) {
                if(temp.indexOf('^') != -1)
                    a = 1;
                else
                    b = 1;
                temp = "";
                continue;
            }

            if(ur[i+1] === '+' || ur[i+1] === '-' || i == ur.length-1) {
                c = eval(temp);
                temp = '';
                continue;
            }

            if(ur[i+1] === '*') {
                if (ur[i + 4] === '^') {
                    i += 5;
                    a = eval(temp);
                }
                else {
                    i += 3;
                    b = eval(temp);
                }
                temp = '';
            }
        }
    }

    if( c === undefined )
        c = 0;
    if( a === undefined)
        a = 0;
    if(b === undefined)
        b = 0;

    d = b*b - 4*a*c;

    if(d<0)
        throw new Error("d < 0");

    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);


    arr.push(Math.round(x1));
    arr.push(Math.round(x2));

    arr.sort(fun);
    return arr;
}

function fun(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
