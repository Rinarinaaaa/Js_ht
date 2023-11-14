let fs = require("fs");

let mem = new Array;


inText = fs.readFileSync('1233.txt');
inText = inText.toString();

mem = inText.split(/ |\r\n/);

let ip = 0;

console.log(mem);


while (mem[ip] != 'exit') {
    switch (mem[ip]) {
        case 'input':                               //������������
            mem[(mem[ip + 1])] = (mem[ip + 2]);
            ip += 3;
            break;
        case 'output':                           //�����
            console.log(mem[(mem[ip + 1])]);
            ip += 2;
            break;
        case 'add':                                                            //�����
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) + (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'rem':                                                            //��������
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) - (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'mod':                                                             //������� �� �������
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) % (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'div':                                                                      //������� ������
            mem[(mem[ip + 3])] = Math.floor((mem[(mem[ip + 1])]) / (mem[(mem[ip + 2])]));
            ip += 4;
            break;
        case 'mul':                                                                //���������
            mem[(mem[ip + 3])] = (mem[(mem[ip + 1])]) * (mem[(mem[ip + 2])]);
            ip += 4;
            break;
        case 'po':                                                     //���������� ������+������������ � ������
            mem[mem[ip + 1]] = ip + 2;
            while (mem[ip] != 'endpo') { 
                ip += 1;
            }
            break;
        case 'endpo':                                                 //����� ������� 'po'
            ip += 1;
            break
        case 'ifb':                                                  //���� 1���>2���
            if ((mem[(mem[ip + 1])]) > (mem[(mem[ip + 2])])) {
                ip = (mem[(mem[ip + 3])]);
            } else {
                ip += 4;
            }
            break;
        case 'ifm':                                                //���� 1���<2���
            if ((mem[(mem[ip + 1])]) < (mem[(mem[ip + 2])])) {
                ip = (mem[(mem[ip + 3])]);
            } else {
                ip += 4;
            }
            break;
        case 'ifr':                                               //���� 1���==2���
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



