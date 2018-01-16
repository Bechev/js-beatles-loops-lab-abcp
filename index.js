function theBeatlesPlay(musicians,instruments){
  var whoPlaysWhat=[];
  musicians.forEach(function(element,index)){
      whoPlaysWhat[index]=`${musicians[index]} plays ${instruments[index]}`
  }
  return whoPlaysWhat;
}
