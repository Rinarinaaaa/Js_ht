let fs = require("fs");

let mem = new Array;


inText = fs.readFileSync('1233.txt');
inText = inText.toString();

mem = inText.split(/ |\r\n/);

let ip = 0;

console.log(mem);


while (mem[ip] != 'exit') {
    switch (mem[ip]) {
        case 'input':                               //присваивание
            mem[(mem[ip + 1])] = (mem[ip + 2]);
            ip += 3;
            break;
        case 'output':                           //вывод
            console.log(mem[(mem[ip + 1])]);
            ip += 2;
            break;
        case 'add':                                                            //сумма
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) + (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'rem':                                                            //разность
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) - (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'mod':                                                             //остаток от деления
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) % (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'div':                                                                      //деление нацело
            mem[(mem[ip + 3])] = Math.floor((mem[(mem[ip + 1])]) / (mem[(mem[ip + 2])]));
            ip += 4;
            break;
        case 'mul':                                                                //умножение
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) * (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'po':                                                     //выполнение команд+присваивание в ячейку
            mem[mem[ip + 1]] = ip + 2;
            while (mem[ip] != 'endpo') { 
                ip += 1;
            }
            break;
        case 'endpo':                                                 //конец команды 'po'
            ip += 1;
            break
        case 'ifb':                                                  //если 1арг>2арг
            if ((mem[(mem[ip + 1])]) > (mem[(mem[ip + 2])])) {
                ip = (mem[(mem[ip + 3])]);
            } else {
                ip += 4;
            }
            break;
        case 'ifm':                                                //если 1арг<2арг
            if ((mem[(mem[ip + 1])]) < (mem[(mem[ip + 2])])) {
                ip = (mem[(mem[ip + 3])]);
            } else {
                ip += 4;
            }
            break;
        case 'ifr':                                               //если 1арг==2арг
            if ((mem[(mem[ip + 1])]) == (mem[(mem[ip + 2])])) {
                ip = (mem[(mem[ip + 3])]);
            } else {
                ip += 4;
            }
            break;
        case NaN:
            ip += 1;
            break;
        default:
            console.log('Error', ip, mem[ip])
            mem[ip] = 'exit';
            break;
    }

}



