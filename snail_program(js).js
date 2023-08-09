function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here

let up = 7;
let down = 2;

var distanceDay = up - down;

count = 0
let res, finalResult;

for(var i =1; i <=depth; i++){
    if (i%distanceDay == 0){
        res=count += distanceDay;
        finalResult = res / distanceDay;
    }

}

if (depth %5 == 0) {
    console.log(finalResult);
}

else if (depth % 5 > 0 && depth % 5 < 3){
    console.log(finalResult);
}

else if (depth % 5 >= 3 && depth % 5 <= 5){
    console.log(finalResult+1);
}


}
