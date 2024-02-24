---
toc: True
comments: True
layout: notebook
title: APCSA FRQ QUESTION 1
description: java skill check
courses: {'compsci': {'row': 0}}
type: APCSA
---

# QUESTION 1

You will write three static methods, all of which are in a single enclosing class, named DiverseArray (not shown). The first method returns the sum of the values of a one-dimensional array; the second method returns an array that represents the sums of the rows of a two-dimensional array; and the third method analyzes row sums.


(a) Write a static method arraySum that calculates and returns the sum of the entries in a specified one-dimensional array. The following example shows an array arr1 and the value returned by a call to arraySum.

### my ans to A:


```java
// Returns the sum of the entries in the one-dimensional array arr.

public static int arraySum (int [ ] arr) {
    int sum = 0;
    for (int i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

```

(b) Write a static method rowSums that calculates the sums of each of the rows in a given two-dimensional array and returns these sums in a one-dimensional array. The method has one parameter, a two-dimensional array arr2D of int values. The array is in row-major order: arr2D [ r ] [ c ] is the entry at row r and column c. The method returns a one-dimensional array with one entry for each row of arr2D such that each entry is the sum of the corresponding row in arr2D. As a reminder, each row of a two-dimensional array is a one-dimensional array.

### my ans to B:


```java
// Returns a one-dimensional array in which the entry at index k is the sum of
// the entries of row k of the two-dimensional array arr2D.

public static int [] rowSums(int [a] [b] arr2D) {
    int [] arrSum = new int [];
    for (int j = 0; j < arr2D[].length; j++) {
        arr2d[i] = arr2D[i][k];
    } 
}
return rowSums;
    

```

(c) A two-dimensional array is diverse if no two of its rows have entries that sum to the same value. In the following examples, the array mat1 is diverse because each row sum is different, but the array mat2 is not diverse because the first and last rows have the same sum.

Write a static method isDiverse that determines whether or not a given two-dimensional array is diverse. The method has one parameter: a two-dimensional array arr2D of int values. The method should return true if all the row sums in the given array are unique; otherwise, it should return false. In the arrays shown above, the call isDiverse (mat1) returns true and the call isDiverse(mat2) returns false.

Assume that arraySum and rowSums work as specified, regardless of what you wrote in parts (a) and(b). You must use rowSums appropriately to receive full credit.
Complete method isDiverse below.

### my ans to C:


```java
// Returns true if all rows in arr2D have different row sums;
//false otherwise.

public static boolean isDiverse(int [ ] [ ] arr2D) {
    int 
    for (int i = 0; i < arr2D.length; i++) {
        for (int j = 0; j < arr2D[i].length; j++) {
        int [] newRow = rowSums[i][j]; //wtf do i do  
    }
    if newRow == newRow {
        return false;
    }
}
}
```

# FRQ reflection

This FRQ is a Array and 2d array FRQ, as it sees if you know how to summate rows in an array and a 2d array, with the 3rd question needing both skills.

Key algorithm: The key algorithms are the for loops required for traversal of arrays. Without these, you cannot solve the problem.

this connects to the skill the FRQ tests, which is using traversal of arrays to find sums. 
