// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    fromHQ = 42 - distance;
    return fromHQ;
  }
  else if (distance > 42) {
    fromHQ = distance - 42;
    return fromHQ;
  }
}

function distanceFromHqInFeet(distance) {
  blocks = distanceFromHqInBlocks(distance);
  return blocks * 264
}

function distanceTravelledInFeet(someValue1, someValue2) {
  if (someValue1 > someValue2) {
    someValue3 = someValue1 - someValue2
  }
}
