import { Node } from "../Node/index.js";

export class Queue {
    first = null;
    last = null;
    size = 0;

    get isNotEmpty() {
        return !!this.size;
    }

    enqueue = (value) => {
        const node = new Node(value);
        this.size += 1;

        if (!this.last) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            node.prev = this.last;
            this.last = node;
        }
    }

    dequeue = () => {
        if (!this.first) {
            return;
        }

        const value = this.first.value;
        this.size -= 1;
        this.first = this.first.next;

        if (this.first) {
            this.first.prev = null;
        } else {
            this.last = null;
        }

        return value;
    }
}
