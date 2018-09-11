var recipes = {
  milk: '2 cups',
  
}

function updateObjectWithKeyAndValue (object, key, value){
   return Object.assign({}, object, {[key]: value});
  
}

function destructivelyUpdateObjectWIthKeyAndValue (object, key, value) {
  object.key = value;
  return object;
}