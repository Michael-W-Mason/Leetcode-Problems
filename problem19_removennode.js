/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head.next === null) {
        return null;
    }
    if (head.next.next === null) {
        if (n == 1) {
            head.next = null;
            return head;
        }
        else {
            return head.next;
        }
    }
    let end = findEnd(head);
    if (end === n) {
        return head.next;
    }
    let runner = head;
    for (let i = 0; i < (end - n - 1); i++) {
        runner = runner.next;
    }
    let temp = runner.next;
    console.log(temp.val);
    runner.next = temp.next;
    return head;
};

function findEnd(head) {
    let count = 0;
    let runner = head;
    while (runner.next !== null) {
        count++;
        runner = runner.next;
    }
    return count + 1;
}


// hare solution
var removeNthFromEnd = function(head, n) {
    let hare = head, curr = head;
    while (n--) {
        hare = hare.next;
    }
    while (hare && hare.next) {
        curr = curr.next;
        hare = hare.next;
    }
    if (!hare) {
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};