'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionC = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (objectB.value.indexOf(collectionA[i].key) >= 0) {
      collectionC.push(collectionA[i].key);
    }
  }
  return collectionC;
}
