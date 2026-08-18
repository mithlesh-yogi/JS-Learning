function reverseofarry(arr){
    const n = arr.length
    for (let i = 0; i <n/2; i++) {
       let temp = arr[i]
       arr[i] =arr[n-i-1]
       arr[n-i-1] =temp ;
    }
    return arr;
}
const array = [1,2,3,4,5]
const heros = ['a','b','c']
// console.log(reverseofarry(array));
// console.log(reverseofarry(heros));

class node{
    constructor(data){
        this.data = data;
        this.next =null;
    }
}
class list{
    constructor(){
        this.head = null
        this.tail = null
    }
}

function insertatend(val){
    const newnode =new node(val)
    
    if(this.head===null){
        this.head=this.tail= newnode
    }
    else{
       this.tail.next = newnode
       this.tail = newnode 
    }
}

function print(){
    let temp = this.head
    while(temp!== null){
        console.log(temp.data);
        temp = this.temp.next
    }
}
const linklist = new list();
linklist.insertatend(1);
linklist.insertatend(2);
linklist.insertatend(3);
linklist.insertatend(4);

list.print()
