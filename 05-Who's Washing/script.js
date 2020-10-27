let name=["Ben", "Jenny", "Michael", "Chloe" ,"Timmy"];
let neighbor=["Patrick", "AnnMarie", "Alisol" , "Walton"];
function whoIsWashing(order){
  let clct=order.length;
  let num=Math.floor(Math.random()*clct);
  console.log(order[num]+ " is going to wash dishes today.")
}

whoIsWashing(name);

name.push("Max");

whoIsWashing(name);
whoIsWashing(neighbor);