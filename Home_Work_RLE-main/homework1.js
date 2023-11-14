let Intext; 
let fs = require('fs');

Intext=fs.readFileSync('input.txt');
Intext=Intext.toString();
let result = '';
let count = 0;
for (let i=0; i < Intext.length; i++){
    count++
    if(Intext.charAt(i) != Intext.charAt(i+1)) { 
        if (count<=3){
            result = result + Intext.charAt(i).repeat(count);
            count = 0;
        }else{
            result = result + Intext.charAt(i) + '#' + String.fromCharCode(count);
            count = 0;}
    }
}

let Decode;
fs.writeFileSync('output.txt', result);
Decode=fs.readFileSync('output.txt');
Decode=Decode.toString();
for(let i = 0; i < 256; i++){
    if (Decode.charAt(i) == '#'){
        Decode=Decode.replace(Decode.charAt(i + 1),
                              Decode.charCodeAt(i + 1));
    }
}

for(let i = 0; i < 256; i++){
    if (Decode.charAt(i) == '#'){
        Decode=Decode.replace(Decode.charAt(i+1),Decode.charAt(i-1).repeat(Number(Decode.charAt(i+1)-1)));
        Decode=Decode.replace("#","");
    }
}
fs.writeFileSync('decode.txt', Decode);
