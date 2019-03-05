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

// Say, the implicit conversion from int to string back to int is not present. 
// Finding the solution recursivly using a variable as carry

function sumRecursive(){
    var num1 = numberCreationRecursive(list1);
}

var globalSum = 0;
var numberCreationRecursive = function(list, node){
    if(typeof node == "undefined"){
        var node = list.head;
        var length = list.lengthLinkedListRec()+1;
    }

    if(node.next == null){
        return node.value;
    }else{
        globalSum = globalSum + Math.pow(10,length)*node.value;
        node = node.next;
        length = length-1;
    }

    numberCreationRecursive(null,node.next);
    return globalSum;
}

console.log(sumRecursive());

// Adding elements of an array recursively - digression
var arr = [0,6,5,4,8,7];

function findingSum(index){
    if(index == 0){
        return index;
    }else{
        index = index-1;
        globalSum = globalSum+arr[index];
    }

    findingSum(index);
    return globalSum;
}

//console.log(findingSum(arr.length));