var recipes = {
  milk: '2 cups',
  
}

function updateObjectWithKeyAndValue (object, key, value){
   return Object.assign({}, object, {[key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  var newObject = object;
  delete newObject[key];
  return newObject;
}


