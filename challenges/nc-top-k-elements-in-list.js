const topFrequent = (nums, k) => {
    const map = {};
    const frequency = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
        map[n] = (map[n] || 0) + 1;
    }

    for (const n in map) {
        frequency[map[n]].push(parseInt(n));
    }

    const answer = [];
    for (let i = frequency.length - 1; i > 0; i--) {
        for (const n of frequency[i]) {
            answer.push(n);
            if (answer.length === k) return answer;
        }
    }
};

const input = [1, 2, 2, 3, 3, 3, 4, 4, 4];
const topMost = 2;
const result = topFrequent(input, topMost);
console.log(result);
