---
toc: True
comments: True
layout: notebook
title: APCSA mcq question 8 loops lesson
description: learn to identify loops faster
courses: {'compsci': {'row': 0}}
type: APCSA
---

# question 

![image]({{site.baseurl}}/images/question8.png)

## question as code


```java
// reference version, does not run
public static int[] operation(int[][] matrix, int r, int c) 
{
    int[] result = new int[matrix.length];

    for int(int j = 0; j < matrix.length; j++)
    {
        result[j] = matrix[r][j] * matrix[j][c];
        return result;
    }
}
int[][] mat = {
    {3,2,1,4},
    {1,2,3,4},
    {2,2,1,2},
    {1,1,1,1}
}
int[] arr = operation(mat, 1, 2);
```


```java
// version that runs
public class question8 {
public static int[] operation(int[][] matrix, int r, int c) 
{
    int[] result = new int[matrix.length];

    for (int j = 0; j < matrix.length; j++)
    {
        result[j] = matrix[r][j] * matrix[j][c];
    }
    
    return result;
}

public static void main(String[] args) {
    int[][] mat = {
        {3, 2, 1, 4},
        {1, 2, 3, 4},
        {2, 2, 1, 2},
        {1, 1, 1, 1}
    };

    int[] arr = operation(mat, 1, 2);
    // Print the result 
    System.out.println(Arrays.toString(arr));
} }


question8.main(null);



```

    [1, 6, 3, 4]


Remember:

Rows: Each row is a horizontal line of elements in the matrix. In the provided code, matrix.length gives the number of rows in the matrix.

Columns: Each column is a vertical line of elements in the matrix. In the provided code, matrix[0].length gives the number of columns. Assuming the matrix is rectangular (all rows have the same number of columns), you can use matrix[0].length to get the number of columns in the first row.

values are accessed in matrix by row and column.


# a smart way to approach the question

1. consider breaking the code into smaller segments, then understand each section first and solve

for this to work efficiently, look for context clues within the code that hint at the functionality, which can lead you towards the right path 
of understanding the code segments.

2. after understanding the code, trace through the example input


## how this applies to the question

1. r and c are static variables and don't change, so you can focus on how j is used in the loop
2.  `result[j] = matrix[r][j] * matrix[j][c];` is PRODUCT of 2 values in matrix. 
3. we have 4 iterations, with each product being a value in our list
4. the for loop iterates from the left, which we can tell by the j++ part.

with this info, we can just solve the problem by tracing through the example input, without sidetracking ourselves.

# answer

![image]({{site.baseurl}}/images/question82.png)

In the first iteration of the for loop, j is 0. The value of result[0] is assigned the product of row 1, column 0, which is 1 and row 0, column 2, which is 1. Therefore, result[0] is assigned the value 1.

the second iteration of the for loop, when j is 1, result[1] is assigned the product of row 1, column 1, which is 2, and row 1, column 2, which is 3. Therefore, result[1] is assigned the value 6. 


The third iteration of the for loop, when j is 2, result[2] is assigned the product of row 1, column 2, which is 3, and row 2, column 2, which is 1. Therefore, result[2] is assigned the value 3. 

The final iteration of the for loop, when j is 3, result[3] is assigned the product of row 1, column 3, which is 4, and row 3, column 2, which is 1. Therefore, result[3] is assigned the value  4.

# hack

identify the context clues in the modified question that help you reach the answer of the output being `[2, 5, 4, 5]`


```java
public class newquestion {
    public static int[] operation(int[][] matrix, int r, int c) 
    {
        int[] result = new int[matrix.length];
    
        for (int j = matrix.length - 1; j >= 0; j--)
        {
            result[j] = matrix[r][j] + matrix[j][c];
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[][] mat = {
            {3, 2, 1, 4},
            {1, 2, 3, 4},
            {2, 2, 1, 2},
            {1, 1, 1, 1}
        };
    
        int[] arr = operation(mat, 1, 2);
        // Print the result 
        System.out.println(Arrays.toString(arr));
    } }
    
    
newquestion.main(null);
    
    
    
```

    [2, 5, 4, 5]

