// keyof gurd...

type Alphaneumeric = string | number

function add(param1:Alphaneumeric, param2:Alphaneumeric):Alphaneumeric {
    if (typeof param1 == 'number' && typeof param1 == 'number') {
        return param1 + param1;
    }else{
        return param1.toString() + param1.toString()
    }
}