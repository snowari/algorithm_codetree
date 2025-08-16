const toMin = (t) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

class MinHeap {
  constructor() {
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }
  peek() {
    return this.arr[0];
  }
  push(val) {
    const a = this.arr;
    a.push(val);
    let i = a.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (a[p] <= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.arr;
    if (a.length === 0) return undefined;
    if (a.length === 1) return a.pop();
    const top = a[0];
    a[0] = a.pop();
    let i = 0;
    const n = a.length;
    while (true) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      let s = i;
      if (l < n && a[l] < a[s]) s = l;
      if (r < n && a[r] < a[s]) s = r;
      if (s === i) break;
      [a[i], a[s]] = [a[s], a[i]];
      i = s;
    }
    return top;
  }
}

function solution(time) {
  const intervals = time.map(([s, e]) => [toMin(s), toMin(e) + 10]);
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = new MinHeap();
  let maxRooms = 0;
  for (const [start, end] of intervals) {
    if (heap.size() && heap.peek() <= start) {
      heap.pop();
    }
    heap.push(end);
    if (heap.size() > maxRooms) maxRooms = heap.size();
  }
  return maxRooms;
}
