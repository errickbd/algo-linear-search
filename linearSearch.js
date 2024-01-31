function linearSearch(searchTerm, arr) {
  if (arr.includes(searchTerm)){
    return arr.indexOf(searchTerm)
  }
  
}

function globalLinearSearch(searchTerm, arr) {
  let pushedArr = [];
  for( let i = 0; i < arr.length; i++){
    if (arr[i] === searchTerm){
    pushedArr.push(i)
  } 
  }
  return pushedArr
}




module.exports = { linearSearch, globalLinearSearch };
