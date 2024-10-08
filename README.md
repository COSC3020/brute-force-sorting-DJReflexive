# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


# My Runtime Analysis

In the base case, where the length of the array is 0 or 1, the runtime is constant,
since in these scenarios, the array is already sorted.

However, when the array size is greater than 1, the permutate function is called. This function generates every possible permutation of the array. With an array that a length of $n$, essentially the algorith will walk through array and swap elements to generate a unique permutation. 

We start with the first permutation, so there is $n$ choices. For the second permutation, there is $n-1$ choice, and so on for the third ($n-2$ choices), fourth ($n-3$ choices), fifth ($n-4$ choices), etc... And since every permutation depends on the one before it, we can write this out as:

$$n*(n-1)*(n-2)*(n-3)... = n!$$

In the worst case scenerio, after the permutate function finishes generating all permutations, the list of all permutations is iterated through $n!$ times (assuming the worst case scenerio). During each permutation, the isSorted() method is called which takes a time complexity of $n$ for every individual permutation within the list. Combining these all of these terms, we get $\Theta(n \ast n! + n!)$ as the best case complexity, which can be simplified to $\Theta(n \ast n!)$.

In the best case, all permutations still have to be generated (which still takes a time complexity of $n!$), however, parsing through the permutations and checking if they are sorted, in the best case scenario the sorted permutation will be first. The string still has to be converted into an array, which takes a time complexity of $n$, but then is terminated after this. Combining these terms, we get $\Theta(n + n!)$ as the best case complexity, which can be simplified to $\Theta(n!)$.

If my algorithm were to function by randomly picking permutations without systematically keeping track of permutations, it is possible that the algorithm would run infinitely with no bound. 

# Sources

- developer.mozilla.org: For all the descriptive documentation on string functions

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, including 
the use of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if 
plagiarism is suspected, charges may be filed against me without prior notice.