
// // document.getElementById('a').innerHTML=' '
//         // document.getElementById('a').innerHTML+=
//         // `*<br>`lk 
//         for  (let i=1;i<=5;i++){
//             for (let k=1;k<=5-i;k++)
//             document.write("&nbsp;&nbsp")
//             for (let j=1; j<=i;j++){
//             document.write("*")
//             }
//             document.write("<br>")
//         }



function a() {
    let input1 = parseInt(document.getElementById('inputNumber1').value)
        result='  ';
    for (let i = 1; i <=input1; i++) {
        let row = ' ';
        for (let j =1; j <=input1; j++) {
           row += ' * ';
        }
        result += row + '<br>'
    }
    document.getElementById('result').innerHTML=result
}

// Second condation


function b() {
    let input2 = parseInt(document.getElementById('inputNumber2').value)
        result='  ';
    for (let i = 1; i <=input2; i++) {
        let row = ' ';
        for (let j =1; j <=i; j++) {
           row += ' * ';
        }
        result += row + '<br>'
    }
    document.getElementById('result').innerHTML=result
}


// Third condation


function c() {
    let input3 = parseInt(document.getElementById('inputNumber3').value)
        result='  ';
    for (let i = 1; i <=input3; i++) {
        let row = ' ';
        for (let j =1; j <=input3-i; j++) {
           row += ' * ';
        }
        result += row + '<br>'
    }
    document.getElementById('result').innerHTML=result
}

// Forth condation


function d() {
    let end4 = parseInt(document.getElementById('endingNumber4').value)
    let input4 = parseInt(document.getElementById('inputNumber4').value)
        result='  ';
    for (let i =1; i <=end4; i++) {
        let row = ' * ';
        for (let j =2; j <=input4; j++) {
           row += ' * ';
        }
        result += row + '<br>'
    }
    document.getElementById('result').innerHTML=result
}