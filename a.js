1
2
-------------------
    222222
const sharedPropertyDefinition = {
    enumerable:true,
    configurable:true,
    get: noop,
    set: noop
}
function a(vm,sourceKey, key){
    sharedPropertyDefinition.get = function(){
        this[sourceKey][key]


    }
    sharedPropertyDefinition.set = function(val){
       this[sourceKey][key] =val
    }
    Object.defineProperty(vm, key,sharedPropertyDefinition)


}