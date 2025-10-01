/////////////////////////////////////////////////////////////////////////////////
//
//    File name :       program422.js
//    Description :     Used to check perfect numbers.
//    Author :          Sneha Mohane
//    Date :            15/07/2025
//
/////////////////////////////////////////////////////////////////////////////////

function CheckPerfect(
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
    if(iSum == No)
    {
       return true
    }
    else
    {
       return false
    }
}

let Value = 28
let bRet = false

bRet = CheckPerfect(Value)

if(bRet == true)
{
    console.log(Value +" : is a perfect number")
}
else
{
    console.log(Value+": is not a perfect number")
}