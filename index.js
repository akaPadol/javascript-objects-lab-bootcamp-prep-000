var recipes = new Object({})


function updateObjectWithKeyAndValue(obj,key,value){
  var ob = new Object({})
  ob[key]=value
  var res = Object.assign({},ob)
  return res

}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj.assign(obj,{key,value})
  return obj
}
