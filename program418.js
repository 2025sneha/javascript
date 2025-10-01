/////////////////////////////////////////////////////////////////////////////////
//
//    File name :       program418.js
//    Description :     Used to perfrom addition of two numbers
//    Author :          Sneha Mohane
//    Date :            15/07/2025
//
/////////////////////////////////////////////////////////////////////////////////

function Summation(
                     Brr
                  )
{
   let iSum = 0

   for(let i = 0; i <= Brr.length ; i++)
   {
      iSum = iSum + Brr[i]
   }
   return iSum
}

Arr = [11,21,51,101,111,121]

let iRet = 0

iRet = Summation(Arr)

console.log("Summation of all elements is : "+iRet)