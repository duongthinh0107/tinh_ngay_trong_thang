let button = document.getElementById('button');
button.onclick = function (){
    let input = document.getElementById('input').value;
    let result = document.getElementById('result').innerText = 'Có 31 ngày'
    let result2 = document.getElementById('result').innerText = 'Có 30 ngày'
    let result4 = document.getElementById('result').innerText = 'Xin hãy nhập tháng'
    let result3 = document.getElementById('result').innerText = 'Có 28 hoặc 29 ngày'
    switch(input){
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            document.getElementById('result').innerText = 'Tháng ' + input + ' có 31 ngày'
            break
        case '2':
            return document.getElementById('result').innerText = 'Tháng ' + input + ' có 28 hoặc 29 ngày'
        case '4':
        case '6':
        case '9':
        case '11':
            document.getElementById('result').innerText = ' Tháng ' + input + ' có 30 ngày'
            break
        default:
            document.getElementById('result').innerText = 'Xin hãy nhập tháng'
    }
}



