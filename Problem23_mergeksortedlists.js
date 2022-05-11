/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if ((lists === null) || (lists.length == 0)){
        return null;
    }
    while(lists.length > 1){
        let mergedList = [];
        for(let i = 0; i < lists.length; i = i+2){
            let list1 = lists[i];
            let list2 = null;
            if((i + 1) < lists.length){
                list2 = lists[i+1];
            }
            mergedList.push(mergeTwoLists(list1, list2));
        }
        lists = mergedList;
    }
    return lists[0];
};

function mergeTwoLists(list1, list2){
    let temp = new ListNode();
    let tail = temp;
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            tail.next = list1;
            list1 = list1.next;
        }
        else{
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    if(list1 === null){
        tail.next = list1;
    }
    if(list2 === null){
        tail.next = list2;
    }
    return temp.next;
}