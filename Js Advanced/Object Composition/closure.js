function counter() {
    let count = 1;
    function getNextCount() {
        console.log(++count);
    }
    return getNextCount();
}
counter();