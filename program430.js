/////////////////////////////////////////////////////////////////////////////////
//
//    File name :       program430.js
//    Description :     Used to count small characters and display on screen.
//    Author :          Sneha Mohane
//    Date :            15/07/2025
//
/////////////////////////////////////////////////////////////////////////////////

function CountSmall(
                        Arr
                   )
{
    let iCount = 0;
    
    for(let i = 0;i < Arr.length; i++ )
    {
        if(Arr[i] >= 'a' && Arr[i] <= 'z')
        {
            iCount++
        }
    }
    return iCount
}
let Ret = 0

Ret = CountSmall("InDiA")

console.log("Number of small character are : "+Ret)