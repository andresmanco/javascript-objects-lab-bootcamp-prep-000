var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newobj = Object.assign({}, object);
  delete newobj[key];
  return newobj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  var n=0;
  console.log("perro marico");
  return object;
}
