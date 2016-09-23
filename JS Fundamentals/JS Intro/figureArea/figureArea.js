function figure([w,h,W,H]) {
   let [s1,s2,s3] = [w*h,W*H,Math.min(w,W) * Math.min(h,H)];
    let res =  s1 + s2 - s3;
    console.log(res);
}
figure(['2','4','5','3']);