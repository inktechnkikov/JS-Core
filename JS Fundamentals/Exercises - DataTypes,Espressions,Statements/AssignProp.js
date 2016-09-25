function assign(inp) {
    let object = {};
    let name = String(inp[0]);
    object[name] = inp[1];
    let age = String(inp[2]);
    object[age] = inp[3];
    let gender = String(inp[4]);
    object[gender] = inp[5];
    console.log(object);
}
assign(['name', 'Pesho','age','23','gender','male']);