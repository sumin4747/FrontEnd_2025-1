function generateLottoNumbers(){

    const set = new Set();
    while (set.size < 6) {
        set.add(Math.floor(Math.random() * 45)+1);
    }
    return Array.from(set).sort((a,b)=>a-b);


}