var recipes = new Object({})
function updateObjectWithKeyAndValue(obj,key,value){
  var res = new Object({})
  res = Object.assign(obj,{key,value})
  return res

}
