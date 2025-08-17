function solution(k, tangerine) {
  const count = new Map();
  for (const size of tangerine) {
    count.set(size, (count.get(size) || 0) + 1);
  }

  const sortedCounts = Array.from(count.values()).sort((a, b) => b - a);

  let sum = 0;
  let kinds = 0;
  for (const c of sortedCounts) {
    sum += c;
    kinds += 1;
    if (sum >= k) break;
  }

  return kinds;
}
