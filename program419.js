/////////////////////////////////////////////////////////////////////////////////
//
//    File name :       program419.js
//    Description :     Used to calculate maximum number
//    Author :          Sneha Mohane
//    Date :            15/07/2025
//
/////////////////////////////////////////////////////////////////////////////////

function Maximum(
                    Brr
                )
{
    let iMax = Brr[0]

   for(let i = 0; i <= Brr.length ; i++)
   {
      if(Brr[i] > iMax)
      {
          iMax = Brr[i]
      }
   }
   return iMax
}

Arr = [11,21,51,101,111,121]

let iRet = 0

iRet = Maximum(Arr)

console.log("Maximum elements is : "+iRet)