function ConreVolumeSurface(input) {
    let [r,h] = input.map(Number);
    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * Math.pow(r,2) * h / 3;
    console.log("volume = " + volume.toPrecision(6));
    let area = Math.PI * r * (r + s);
    console.log("area = " + area.toPrecision(6));
}
ConreVolumeSurface(['3','5']);