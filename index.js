var recipes = new Object({})


function updateObjectWithKeyAndValue(obj,key,value){
  var ob = new Object({})
  ob[key]=value
  var res = Object.assign({},ob)
  return res

}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj=updateObjectWithKeyAndValue(obj,key,value)
  return obj
}

function deleteFromObjectByKey(obj,key){
  var res= new Object({})
  res=obj
  delete res[key]
  return res

}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
