function findMatching(array, name) {
    return array.filter(drivers => drivers.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array,name){
  return array.filter(array => array[0][0] === name[0][0])
 }


   
function matchName(drivers, string){
    return drivers.filter(drivers => drivers.name === string )
}
