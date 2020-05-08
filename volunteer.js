class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    } 
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    } 
    isEmpty() {
        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
} 



let grid = { x: 7, y: 7 };
let src = 0;
let dest = 1;
let route = [];
let queue = new Queue();
let perm = [{ x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: 2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: 1 }, { x: -2, y: -1 }]


function crawl() {
    while (!queue.isEmpty()) {
        let ele = queue.dequeue();
        let counter = ele.level;
        console.log(ele);
        if (calcNext(ele.pos) == dest){
            return counter;
        }
        for (let i = 0; i < perm.length; i++) {
            let item = perm[i], flag = false;
            route.map(r => {
                if (r.x == item.x && r.y == item.y)
                    flag = true;
            })
            if (validate(item, ele) && !flag) { 
                route.push({pos:{x:ele.pos.x+item.x, y: ele.pos.y + item.y}, level:counter+1});
                queue.enqueue({pos:{x:ele.pos.x+item.x, y: ele.pos.y + item.y}, level:counter+1})
            }
        }
        counter++;
    }
}
function main() {
    let start_pos = findPos(src);
    queue.enqueue({pos: start_pos, level: 0});
    console.log(crawl());
}
function findPos(source) {
    return { x: Math.floor(source / 8), y: source % 8 };
}

function calcNext(pos) {
    return 8 * pos.x + pos.y;
}

function validate(item, pos) {
    if (pos.x == grid.x && item.x > 0) {
        return false;
    }
    if (pos.x == grid.x && item.x == 2) {
        return false;
    }
    if (pos.y == grid.y && item.y > 0) {
        return false;
    }
    if (pos.y == grid.y && item.y == 2) {
        return false;
    }
    if (pos.x == 0 && item.x < 0) {
        return false;
    }
    if (pos.x == 1 && item.x == -2) {
        return false;
    }
    if (pos.y == 0 && item.y < 0) {
        return false;
    }
    if (pos.y == 1 && item.y == -2) {
        return false;
    }
    else {
        return true;
    }
}
(()=>{
    main();
})();