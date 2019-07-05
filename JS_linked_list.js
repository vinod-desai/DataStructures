// Construct Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    //  If index is out of range, insert element at last
    if (index > 0 && index > this.size) {
      insertLast(data);
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.log("No Element at Specified Index");
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst("KL Rahul");
ll.insertFirst("Rohit Sharma");
ll.insertFirst("Virat Kohli");
ll.insertLast("MS Dhoni");
ll.insertFirst("Ravi Jadeja");
ll.insertAt("Hardik Pandya", 4);
ll.insertAt("Rishab Pant", 5);
ll.insertAt("J Bumhra", 6);

// ll.clearList();
ll.getAt(7);

// ll.printListData();
