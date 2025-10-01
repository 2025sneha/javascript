/////////////////////////////////////////////////////////////////////////////////
//
//    File name :       program411.js
//    Description :     Used to perfrom addition of two numbers
//    Author :          Sneha Mohane
//    Date :            15/07/2025
//
/////////////////////////////////////////////////////////////////////////////////

function Addition(
                    No1,
                    No2
                 )
{
    let Ans = 0
    Ans = No1 + No2 
    return Ans
}

let Value1 = 10
let Value2 = 11
let iRet  = 0

iRet = Addition(Value1, Value2)

console.log("Addition is : "+iRet)