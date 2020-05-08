let l = ["1.1.2", "1.0", "1.3.3", "1.0.12", "1.0.2"];

main();

function arr_val(str){
    let arr = [0,0,0,0];
    str.split('.').map((item,i) => {
        arr[i] = item;
    });
    arr[3] = str.split(".").length;
    return arr;
}

function sort(){
    let temp;
    for(let i=0; i< l.length; i++){
        for(let j=0; j<l.length - i -1; j++){
            let swap = false;
            let a = arr_val(l[j]);
            let b = arr_val(l[j+1]);
            if(a[0] > b[0]){
                swap = true;
            }
            else if(a[0] == b[0]){
                if(a[1]>b[1]){
                    swap = true;
                }
                else if(a[1] == b[1]){
                    if(a[3]>b[3]){
                        swap=true;
                    }
                    else if(a[2]>b[2] && a[3]>b[3]){
                        swap = true;
                    }
                }
            }
            if(swap == true){
                temp = l[j];
                l[j] = l[j+1];
                l[j+1] = temp;
            }
        }
    }
}

function main(){
    sort();
    console.log(l);
}