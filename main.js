//switch-case

let numValue=2;
switch(numValue)
{
    case 1:
        console.log("monday");
    case 2:
        console.log("tuesday");
    case 3:
        console.log("wednesday");
    case 4:
        console.log("thursday");
    default:
        console.log("not valid");
}
/* output:
tuesday
wednesday
thursday
not valid
*/


switch(numValue)
{
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    default:
        console.log("not valid");
        break;
}

/*output:
tuesday
*/

////////////////////////////////////////////////////////////////////////////////////////////
let message;
switch(numValue)
{
    case 1:
        message="monday";
    case 2:
        message="tuesday";
    case 3:
        message="wednesday";
    case 4:
        message="thursday";
    default:
        message="not valid";
}
console.log(message);// not valid

//here because there is no break it will go from case 2 to default
//as each time message gets override by the next msg at last msg has value
// not valid, which is printed

/////////////////////////////////////////////////////////////////////////////////////////////////
switch(numValue)
{
    case 1:
        message="monday";
        break;
    case 2:
        message="tuesday";
        break;
    case 3:
        message="wednesday";
        break;
    case 4:
        message="thursday";
        break;
    default:
        message="not valid";
        break;
}
console.log(message);//tuesday