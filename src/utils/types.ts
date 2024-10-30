export type TokenType = 
 | "BraceOpen"
 | "BraceClose"
 | "BracketOpen"
 | "BracketClose"
 | "String"
 | "Number"
 | "Comma"
 | "Colon"
 | "True"
 | "False"
 | "Null";

 export interface Token {
    type: TokenType;
    value: string;
 }
 //types.ts
export type ASTNode =
| { type: "Object"; value: { [key: string]: ASTNode } }
| { type: "Array"; value: ASTNode[] }
| { type: "String"; value: string }
| { type: "Number"; value: number }
| { type: "Boolean"; value: boolean }
| { type: "Null" };
