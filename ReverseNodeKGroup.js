function reverseKGroup(head, k) {
    const nodeList = [];
    let node = head;

    while (node) {
        nodeList.push(node);
        node = node.next;
    }

    const reversedGroups = nodeList.reduce((acc, _, index) => {
        if (index % k === 0) {
            const group = nodeList.slice(index, index + k);
            if (group.length === k) {
                acc.push(...group.reverse());
            } else {
                acc.push(...group);
            }
        }
        return acc;
    }, []);

    reversedGroups.reduce((prev, current) => {
        prev.next = current;
        return current;
    });

    return reversedGroups[0] || head;
}

function printLinkedList(head) {
    let current = head;
    const values = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const k = 2; 

console.log('Original linked list:');
printLinkedList(node1);

const newHead = reverseKGroup(node1, k);

console.log('Linked list after reversing every', k, 'nodes:');
printLinkedList(newHead);