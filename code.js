
// Returns the number of permutations it took to find a sorted array
function permutationSort(a) {
    let allPermutations = [];

    // If len = 0 or 1, array is already sorted
    if (a.length == 0) { return 0; }
    if (a.length == 1) { return 1; }
    
    permutate(0, a.length-1, a, allPermutations);

    for (let count = 0; count < allPermutations.length; count++) {
        if (isSorted(allPermutations[count], a)) { 
            return count + 1; 
        }
    }

    return -1;
}

// Recursively permutates through a and stores them to allPermutations
function permutate(lowIndex, highIndex, a, allPermutations) {
    for (let i = lowIndex; i <= highIndex; i++) {
        
        // Store current permutation
        if (lowIndex == highIndex) {
            let str = "";

            // Build permutation as strings, and store with format "x,x,x,x,x"
            for (let j = 0; j < a.length; j++) {
                str += a[j];
                if (j != a.length-1) { str += ","; }
            }

            allPermutations.push(str);
        } 
        
        // Generate new permutation
        else {
            // swap i value and lowIndex value
            swap(a, lowIndex, i);

            // recursive call to generate next permutation
            permutate(lowIndex+1, highIndex, a, allPermutations);

            // swap back
            swap(a, lowIndex, i);
        }
    }
}

// Checks if the current permutation is sorted or not, returns boolean
// Uses "x,x,x,x,x" as a format for each permutation, comas as seperators
function isSorted(perm, a) {
    let lowIndex = 0;
    let j = 0;

    // Convert str into array and throw it into a
    for (let i = 0; i < perm.length; i++) {
        let ch = perm.charAt(i);

        // Parse through string and convert to float
        if (ch == ",") {
            a[j] = parseFloat(perm.substring(lowIndex, i));
            j++;
            lowIndex = i + 1;
        }

        // Add the last element
        if (i == perm.length-1) {
            a[j] = parseFloat(perm.substring(lowIndex, i+1));
        }
    }

    // Check if current permutation is sorted
    for (let i = 0; i < a.length-1; i++) {
        if (a[i] > a[i+1]) {
            return false;
        }
    }

    return true;
}

// Swaps two array elements
function swap(a, i, j) {
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}
