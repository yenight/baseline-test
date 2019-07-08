'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC = [];
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      if (collectionB[j].indexOf(collectionA[i]) >= 0) {
        collectionC.push(collectionA[i]);
        break;
      }
    }
  }
  console.log(collectionC);
  return collectionC;
}
