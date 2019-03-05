var creation = require("./01")

// creation of 2 empty linked lists
var list1 = new creation.LinkedList();
var list2 = new creation.LinkedList();

list1.addHeadNode(3);
list1.addHeadNode(4)
list1.addHeadNode(2);

list2.addHeadNode(4);
list2.addHeadNode(6);
list2.addHeadNode(5);


// Brute Force 
// Time complexity - O(n)
// Creating integers through traversal (here 2 traversals) and adding the resultant int variables

function sumTravel(){
    var revNum1 = numberCreation(list1);
    var revNum2 = numberCreation(list2);

    console.log(revNum1+revNum2);

}
// This takes advantage of the JS's loosely typed language paradigm
var numberCreation = function(list){
    var num = "";
    var node = list.head;
    while(node != null){
        num = num+node.value;
        node = node.next;
    }
    return parseInt(num);
}

sumTravel()