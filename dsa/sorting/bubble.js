export default function bubble(arr) {
    let size = arr.length; 
    for (let i = 0; i < size; ++i) {
        let isSwaped = false;
        for (let j = 0; j < size - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwaped = true;
            }
        }
        if (!isSwaped) return arr;
    }
    return arr;
}