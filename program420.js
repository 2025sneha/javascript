/////////////////////////////////////////////////////////////////////////////////
//
//    File name :       program420.js
//    Description :     Used to calculate summation of factors
//    Author :          Sneha Mohane
//    Date :            15/07/2025
//
/////////////////////////////////////////////////////////////////////////////////

function SumFactors(
                        No
                    )
{
    let iSum = 0
    
   for(let i = 1; i <= (Noo/2); i++)
   {
       if(No % i == 0)
       {
           iSum = iSum + i
       }
   }
   return iSum
}

let Value = 12
let iRet = 0

iRet = SumFactors(Value)

console.log("Summation of factors is : "+iRet)