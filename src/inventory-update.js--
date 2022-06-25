// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1).
// If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.

import inquirer from 'inquirer';

function sortByAlphabet(a, b) {
    if (a[1] === b[1]) {
        return 0;
    } else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

function getPosi(arr1, val) {
    // console.log(val)
    let index = undefined;
    arr1.map((val1, i) => {
        if (val1[1] === val) {
            index = i
        }
    })
    // console.log(index)
    return index;
}

function updateInventory(arr1, arr2) {
    // console.log(arr1, 'Old Inv')
    // console.log(arr2, 'New Inv')

    arr2.map((val, index) => {
        const posi = getPosi(arr1, val[1])
        // console.log(posi)

        if (posi === undefined) {
            arr1.push(val)
        } else {
            arr1[posi][0] += val[0]
        }
    })

    console.log(arr1.sort(sortByAlphabet), 'finArr')
    return arr1.sort(sortByAlphabet);
}

// Example inventory lists
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"],
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

// updateInventory(curInv, newInv);
