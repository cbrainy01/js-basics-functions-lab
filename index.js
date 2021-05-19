// Code your solution in this file!
//a block is 264ft.
function distanceFromHqInBlocks(pickupLocation) {
    let numOfBlocks;
    const headQuarters = 42;
    if (pickupLocation > headQuarters) {
        numOfBlocks = pickupLocation - headQuarters;
    }
    else if(pickupLocation < headQuarters) {
        numOfBlocks = headQuarters - pickupLocation;
    } else {numOfBlocks = 0;}
    return numOfBlocks;
}

//distanceFromHqInBlocks(45);

function distanceFromHqInFeet(pickupSpot) {
    let distanceInFeet;
    distanceInFeet = (distanceFromHqInBlocks(pickupSpot) * 264);
    return distanceInFeet;
}
//distanceFromHqInFeet(distanceFromHqInBlocks);

function distanceTravelledInFeet(startingBlock, endingBlock) {
let numOfBlocks;
let distanceInFeet;
    if(startingBlock > endingBlock) {
numOfBlocks = startingBlock - endingBlock;
}
else if(startingBlock < endingBlock) {
numOfBlocks = endingBlock - startingBlock;
}else {numOfBlocks = 0;}
distanceInFeet = (numOfBlocks * 264);
return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
let price;
   const dist = distanceTravelledInFeet(start, destination);
if (dist > 2500) {
    price = "cannot travel that far";
}
else if(dist < 2500 && dist > 2000) {
    price = 25;
}
else if(dist >= 400) { 
    if (dist <= 2000) {
         price = ((dist - 400) * 0.02);
    }
}
else if(dist < 400) {
    price = 0;
}
 return price;
}

// else if(dist < 2500 && dist > 2000) {
//     price = 25;
// }
// else if(dist < 2500) {
//     if(dist > 2000) {price = 25;}
// }