let capitals = ['Berlin','Sofia','Paris','Pekin'];
for(let c of capitals){
    console.log(c);
}
for(let cap in capitals){
    console.log(cap + " " + capitals[cap]);
}
for(let i = 0; i < capitals.length;i++){
    console.log(capitals[i] + " " + i);
}
capitals.push('Washington');
capitals.forEach(ok => console.log(ok));
capitals.forEach((n,index) => console.log(n + " " +  "at position" + " " +  index));