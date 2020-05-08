class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class BinaryTree {
    constructor(height) {
        this.root = null;
        this.counter = 0;
        this.height = height;
        this.list = [];
        for(let i=Math.pow(2,height)-1;i>0; i--)
            this.list.push(i);
    }
    insertNode(i = 0, parent) {
        let node = new Node(this.list[this.counter++]);
        node.parent = parent;
        if (i < this.height-1) {
            node.right = this.insertNode(i + 1, node);
            node.left = this.insertNode(i + 1, node);
        }
        return node;
    }
    postorder(node, value) {
        if (node !== null) {
            this.postorder(node.left, value);
            this.postorder(node.right, value);
            if(value == node.data){
                console.log(node.parent.data?node.parent.data: -1)   
            }
        }
    }
}
(() => {
    let query = [7, 3, 5, 1]
    let binarySearch = new BinaryTree(3);
    let root = binarySearch.insertNode(0,new Node(null));
    query.map(item=>{
        binarySearch.postorder(root, item);
    })
})();