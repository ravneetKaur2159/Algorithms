// Implementation of linked lists in JS

function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, next){
    this.value = value;
    this.next = next;
}

LinkedList.prototype.addHeadNode = function(value){
    var newNode = new Node(value, this.head);
    if(this.head == null){
        this.tail = newNode;
    }
    this.head=newNode;
    
}

LinkedList.prototype.addNodesAtTailEnd = function(value){
    var newNode = new Node(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
}

var newList = new LinkedList();
newList.addHeadNode(100);
newList.addHeadNode(200);
newList.addNodesAtTailEnd(50);
newList.addHeadNode(300);

// Add a node at the end of the list without using tail pointer
LinkedList.prototype.addNodeAtEndNoTailPointer = function(value){
    var newNode = new Node(value, null);
    var node = this.head;
    while(node.next!=null){
        node=node.next;
    }
    node.next = newNode;
}

newList.addNodeAtEndNoTailPointer(40);
