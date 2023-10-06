var merge = function(intervals) {
    const res = [];
    intervals.sort((a,b) => a[0] - b[0])
    console.log(intervals)

    let prev = intervals[0];
    for(let i=1; i<intervals.length; i++){
        let curr = intervals[i];
        if(prev[1] >= curr[0]){
            prev[1] = Math.max(prev[1], curr[1]);
        }else{
            res.push(prev);
            prev = curr;
        }
    };
    res.push(prev);
    return res;
};

console.log(merge([[1,4],[0,4]]));