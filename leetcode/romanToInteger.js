var romanToInt = function(s) {
    switch(s){
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            let sum = 0;
            for(let i = 0; i < s.length; i++){
                switch(s[i]){
                    case "I":
                        if(s[i+1] == "V" || s[i+1] == "X"){
                            sum += -1
                        }else{
                            sum += 1;
                        }
                        break;
                    case "V":
                        sum += 5;
                        break;
                    case "X":
                        if(s[i+1] == "L"|| s[i+1] =="C"){
                            sum += -10
                        }else{
                            sum += 10;
                        }
                        break;
                    case "L":
                        sum += 50;
                        break;
                    case "C":
                        if(s[i+1] == "D"|| s[i+1] == "M"){
                            sum += -100
                        }else{
                            sum += 100;
                        }
                        break;
                    case "D":
                        sum += 500;
                        break;
                    case "M":
                        sum += 1000;
                        break;
                    default:
                        sum += 0;
                        break;
                }
            }
            return sum
    }
};

s = "MCMXCIV"
res = romanToInt(s)
console.log(res)