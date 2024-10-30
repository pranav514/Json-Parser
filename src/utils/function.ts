
export function isNumber(value: string): boolean {
    return !isNaN(Number(value)) && isFinite(Number(value));
  }
  
  export function isBooleanTrue(value: string): boolean {
    return value === "true";
  }
  
  export function isBooleanFalse(value: string): boolean {
    return value === "false";
  }
  
  export function isNull(value: string): boolean {
    return value === "null";
  }
  