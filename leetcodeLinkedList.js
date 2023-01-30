/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let dummyHead = new ListNode(0)
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
      let x = list1.val;
      let y = list2.val;
      if (x<y) {
          current.next = new ListNode(x)
          list1 = list1.next
      } else {
          current.next = new ListNode(y)
          list2 = list2.next
      }
      current = current.next
  }
  while (list1 !== null) {
      let x = list1.val
      current.next = new ListNode(x)
      list1 = list1.next
      current = current.next
  }
  while (list2 !== null) {
      let y = list2.val
      current.next = new ListNode(y)
      list2 = list2.next
      current = current.next
  }
  return dummyHead.next
};