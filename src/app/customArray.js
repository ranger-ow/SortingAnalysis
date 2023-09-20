import { useTransition, useState, useEffect } from "react";

export default function useArray(defval) {
    const [arr, setArr] = useState(defval);
    const [ispending, startTransition] = useTransition();
    const [size,setSize]=useState(6)

    useEffect(() => {
        setArr(arr);
    }, [arr])

    function changeSize()
    {
       return size===6? setSize(4):setSize(6);

    }
    //Function to generate New Random array
    function handleArr() {
        const newarr = [];
        for (let i = 0; i < 20; i++) {
            newarr.push(Math.floor(Math.random() * 100) + 1);
        }
        setArr(newarr);
    }
    //QuickSort Function
    function quickSort(array) {
        if (array.length < 2) {
            return array;
        }

        const pivot = array[0];
        const left = [];
        const right = [];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);

            } else {
                right.push(array[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];

    }
    // Handle for QuickSort
    function handlequick() {
        const newar = quickSort(arr)
        setArr(newar)
    }
    // Function InsertionSort
    function insertionSort() {
        startTransition(() => {
            for (let i = 1; i < arr.length; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;

            }
        })
        return arr;
    }
    //  Function Bubble Sort
    function bubbleSort() {
        startTransition(() => {
            for (let i = arr.length; i > 0; i--) {
                for (let j = 0; j < i - 1; j++) {
                    if (arr[j] > arr[j + 1])
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
        })
    }
    //  Function Shell Sort
    function shellSort(e) {
        e.preventDefault();
        startTransition(() => {
            var inc = arr.length / 2;
            while (inc > 0) {
                for (let i = inc; i < arr.length; i++) {
                    var j = i;
                    var temp = arr[i];

                    while (j >= inc && arr[j - inc] > temp) {
                        arr[j] = arr[j - inc];
                        j = j - inc;
                    }

                    arr[j] = temp;
                }

                if (inc == 2) {
                    inc = 1;
                } else {
                    inc = parseInt(inc * 5 / 11);
                }
            }
        })

    }

    //  Function Selection Sort
    function selectionSort() {
        startTransition(() => {
            for (let i = 0; i < arr.length - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                // Swap elements
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        })
    }
    //  Function Merge Sort
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        let res = [];
        let lIndex = 0;
        let rIndex = 0;

        while (lIndex < left.length && rIndex < right.length) {
            if (left[lIndex] < right[rIndex]) {
                res.push(left[lIndex]);
                lIndex++;
            } else {
                res.push(right[rIndex]);
                rIndex++;
            }
        }

        return res.concat(left.slice(lIndex), right.slice(rIndex));
    }
    function handleMerge() {
        const newar = mergeSort(arr);
        setArr(newar);
    }


    // Returning CustomHook functionalities
    return { arr, ispending,changeSize,size, shellSort, bubbleSort, handleArr, selectionSort, insertionSort, quickSort, setArr, merge, mergeSort, handleMerge, handlequick }


}



