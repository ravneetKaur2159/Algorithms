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


// Insert element at a particular index
LinkedList.prototype.insertElementAtIndex = function(value, index){
    var newNode = new Node(value);
    var i=1;
    var node = this.head;
    while(i< index && node.next != null){
        node = node.next;
        i++;
    }
    newNode.next = node.next;
    node.next=newNode;
}

newList.insertElementAtIndex(250,1);

// Find length of a linked list recursively
LinkedList.prototype.lengthLinkedListRec = function(node){
    if(typeof node == "undefined"){
        node = this.head;
    }

    if(node.next == null){
        return 1;
    }
    return 1 + LinkedList.prototype.lengthLinkedListRec(node.next);
}

//Find length of linked list iteratively
LinkedList.prototype.lengthLinkedListIterative = function(){
    var length = 1;
    var node = this.head;
    while(node.next != null){
        length++;
        node = node.next;
    }
    return length;
}

//console.log(newList.lengthLinkedListIterative());
//console.log(newList.lengthLinkedListRec());

if(typeof exports !== 'undefined') {
    exports.LinkedList = LinkedList;
}
