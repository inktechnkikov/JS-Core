function playing(play) {
    let trackNm = String(play[0]);
    let artNm = String(play[1]);
    let duration = String(play[2]);
    let str = "Now Playing:";
    let output = str + " " + artNm + " " + "-" + " " + trackNm + " [" + duration + "]";
    console.log(output);
}
playing(['Number One','Nelly','4:09']);