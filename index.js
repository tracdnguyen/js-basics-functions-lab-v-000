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
  feet = blocks * 264;
  return feet
}
