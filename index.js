var recipes = new Object({})
function updateObjectWithKeyAndValue(obj,key,value){
  var ob = new Object({})
  ob[key]=value
  var res = Object.assign({},ob)
  return res

}
