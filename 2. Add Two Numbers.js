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
    let total = 0;
    let mult = 0;

    while (a || b) {

        if (mult === 0) {
            mult = 1;
        } else mult *= 10;

        total += a.val*mult + b.val*mult;

    }

    //return a;
};