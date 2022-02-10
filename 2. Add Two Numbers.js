/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//class ListNode {
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    //}
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let a = l1;
    let b = l2;
    let resultHead;

    let previousNode;
    let partialResult;
    let carry = 0;

    while (a || b) {

        partialResult = ((a) ? a.val : 0) + ((b) ? b.val : 0) + carry;

        const resultNode = new ListNode();

        if (partialResult < 10) {
            resultNode.val = partialResult;
            carry = 0
        } else {
            resultNode.val = partialResult - 10;
            carry = 1;
        }

        if (!previousNode) {
            resultHead = resultNode;
        } else previousNode.next = resultNode;

        previousNode = resultNode;
        a = (a) ? a.next : null;
        b = (b) ? b.next : null;
    }

    return resultHead;
};