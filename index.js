var recipes = new Object({})

 console.log(updateObjectWithKeyAndValue(recipes,"lol",123))
function updateObjectWithKeyAndValue(obj,key,value){
  var ob = new Object({})
  ob[key]=value
  var res = Object.assign({},ob)
  return res

}
