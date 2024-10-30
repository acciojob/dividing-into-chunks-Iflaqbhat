const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    if (!Array.isArray(arr) || arr.length === 0) return [];
    if (typeof n !== 'number' || n <= 0) return [];

    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentSubarray.push(arr[i]);
            currentSum += arr[i];
        } else {
            if (currentSubarray.length > 0) {
                result.push(currentSubarray);
            }
            currentSubarray = [arr[i]];
            currentSum = arr[i];
        }
    }

    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = parseInt(prompt("Enter n: "), 10);
if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive integer for n.");
} else {
    alert(JSON.stringify(divide(arr, n)));
}

