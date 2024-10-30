import { Token } from './types';
// @ts-ignore
import { isNumber, isBooleanTrue, isBooleanFalse, isNull } from './function';


export const tokenizer = (input : string) : Token[] => {
    let current = 0;
    const tokens : Token[] = [];
    while(current < input.length){
        let char = input[current];
        if(char === "{"){
            tokens.push({type : "BraceOpen" , value : char});
            current++;
            continue;
        }
        if(char === "}"){
            tokens.push({type : "BraceClose" , value : char});
            current++;
            continue;
        }
        if(char === "[" ){
            tokens.push({type : "BracketOpen" , value : char});
                current++;
                continue;
            }
        
        if (char === "]") {
            tokens.push({ type: "BracketClose", value: char });
            current++;
            continue;
          }
        if(char === ":"){
            tokens.push({type : "Colon" , value : char});
            current++;
            continue;
        }
        if(char === ","){
            tokens.push({type : "Comma" , value : char});
            current++;
            continue;
        }
        if(char === '"'){
            let str = "";
            char = input[++current];
            while(char != '"'){
                str = str + char;
                char  = input[++current];
            }
            tokens.push({type : "String" , value : str});
            current++;
            continue;
        }
        
        if(/[\d\w]/.test(char)){
            let str = "";
            while(/[\d\w]/.test(char)){
                str = str + char;
                char  = input[++current];
            }
            if(isNumber(str)){
                tokens.push({type : "Number" , value :str});

            }
            else if(isBooleanTrue(str)){
                tokens.push({type : "True" , value : str})
            }
            else if (isBooleanFalse(str)){
                tokens.push({type : "False" , value : str});
            }
            else if (isNull(str)){
                tokens.push({type : "Null" , value : str});
            }
            else{
                throw new Error("Unexpected value" + str);

            }
            continue;
        }
        if(/\s/.test(char)){
            current++;
            continue;
        }
        throw new Error("Unexpected character: " + char);


    }
    return tokens
};


