/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if(head.next === null || head === null || head.next.next === null){
        return head;
    }

    let fast = head.next;
    let slow = head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    const otherHalf = slow.next;
    slow.next = null;

    let curr = otherHalf;
    let prev = null;
    let temp;

    while(curr !== null){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let first = head;
    let second = prev;
    while(second !== null){
        temp = first.next;
        first.next = second;
        second = second.next;
        first.next.next = temp;
        first = temp;
    }
};