function theBeatlesPlay(musicians,instruments){
  var whoPlaysWhat=[];
  musicians.forEach(function(element,index){
      whoPlaysWhat[index]=`${musicians[index]} plays ${instruments[index]}`;
  })
  return whoPlaysWhat;
}

function johnLennonFacts(facts){
var i = 0
  while(i<facts.length){
    facts[i]= `${facts[i]}!!!`;
    i++;
    }
  return facts;
}


function iLoveTheBeatles(n){
  var array=[];
  do{
    array.push("I love the Beatles!");
    n++
  }while(n < 15)
  return "";
}
