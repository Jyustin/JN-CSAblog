---
layout: post
title: Unit 6 Lesson
toc: True
comments: True
description: Lesson for APCSA Unit 6. Authors are Sreeja, Tanisha, Vivian, and Isabelle
courses: {'compsci': {'row': 0}}
type: APtopics
---

# Hello! wget this notebook `RIGHT NOW` 
> (Find the link in 'coding' on SLACK)

# Topic 6.1 - Array Creation and Access (Sreeja)

## Vocabulary
- Array: a data strucutre used to implement a collection of object referance data
- Element: a single value within an array
- Index of an element: position of an element in the array
(In java, the first element of an array is at index 0)
- Length of an array: number of elements in the array

## Declaring an Array
Defines the array variable, specifying its data type and name.


```java
// Syntax: dataType[] arrayName;
int[] numbers; // Declare an integer array
String[] names; // Declare a string array
```

## Creating an Array
Gives memory for the array and specifies its size.


```java
// Syntax: arrayName = new dataType[size];
numbers = new int[5]; // Create an integer array with 5 elements
names = new String[3]; // Create a string array with 3 elements
```

## Initializing an Array
Populates the array with initial values.


```java
// Syntax: arrayName = new dataType[size];
numbers = new int[5]; // Create an integer array with 5 elements
names = new String[3]; // Create a string array with 3 elements
```

## Accessing Array Elements
Retrieves a specific element's value from the array using its index.


```java
int[] numbers = {10, 20, 30, 40, 50};
int element = numbers[2]; // Access the third element (30) using index 2
System.out.println(element); // Output: 30

```

    30


## Array Length
Obtains and displays the number of elements in the array.


```java
int[] numbers = {10, 20, 30, 40, 50};
int length = numbers.length; // Get the length of the array
System.out.println("Array length: " + length); // Output: Array length: 5
```

    Array length: 5


## Modifying Array Elements
Updates the value of a specific element in the array.


```java
int[] numbers = {10, 20, 30, 40, 50};
numbers[2] = 35; // Change the third element to 35
```




    35



## Iterating Through an Array
Loops through the array, printing each element.


```java
int[] numbers = {10, 20, 30, 40, 50};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

## Enhanced For Loop (For-each)
Iterates through the array using a simplified loop structure, printing each element.


```java
int[] numbers = {10, 20, 30, 40, 50};
for (int number : numbers) {
    System.out.println(number);
}
```

# Topic 6.2 - Traversing Array (1D) (Tanisha)
> Using iteration statements (standard for loops and while loops) to access each element in an array. 


## Standard For Loop
- An array in java is indexed from _0_ to the number of elements - 1_. 

**Review on For Loops**
- init: The init expression is used for initializing a variable, and it is executed only once.
- condition: It executes the condition statement for every iteration
- incr/decr: It is the increment or decrement statement applied to the variable, updates the initial expression.

![image](https://github.com/tanishapatil1234/student/assets/111611921/ec109b9d-f3be-451f-9d87-6488a1c96e2b)



```java
import java.util.Random;

/*  public class RandomArray {
    public static void main(String[] args){
    int [] list = new int[6];
    Random rand = new Random(); 
*/
    // FOR LOOP 1
    for (int i = 0; i < list.length; i++){
        list[i] = rand.nextInt(4);
    }

    // FOR LOOP 2
   for(int element: list){
        System.out.println(element);
    }

/*   }

   }

  RandomArray.main(null);
*/
```

**Class Discussion-Take Notes, these will count for points in your hacks!**

1. What do the for loops accomplish? 
the for loop 1 populates the array with random values. the for loop 2 prints the array using an enhanced for loop
________________________
2. What is the difference between how elements of the array list are accessed? 
the enhanced for loop is used to access the array list. A normal for loop is only used for populate array.
________________________
3. BONUS: When the array list of ints was first created, what was each int in the list initialized to? 
the array list was initialized to 0.
_________________________

![download](https://github.com/tanishapatil1234/student/assets/111611921/39e2f50d-6eca-4dcd-9d57-489662a26391)


# For loop : Accessing Some Elements of a List

**Class Discussion-Take Notes, these will count for points in your hacks!**

4. If I only wanted to access the elements at even indices of the list (0, 2, 4), what could I change in the statement below to accomplish that?  

change the index to increase by 2

5. What about odd?  

change the index inital value to 1, change to index += 2 in for loop


```java
// EVEN
int[] list = {0, 1, 2, 3, 4, 5};
System.out.println("Even Index");
for(int index = 0; index < list.length; index += 2){
    System.out.println(list[index]);
}

// ODD
int[] list = {0, 1, 2, 3, 4, 5};
System.out.println("Odd Index");
for(int index = 1; index < list.length; index += 2){
    System.out.println(list[index]);
}
```

    Even Index
    0
    2
    4
    Odd Index
    1
    3
    5


**Note: These are NOT traversals, even though these are for loops. This is because not every element in the array is accessed.**

## Standard While Loop


6. Does the following loop accomplish traversing the array? 

since we go to each value, the loop accomplishes traversing the array.



```java
int [] list = new int[5];
int index = 0; 

while (index < list.length) 
{
    // Do something
    index ++; 
}
```

7. This while loop and the for loop we used earlier accomplish the same task. The main difference is that after the loop is completed, the variable 'index' in the while loop will still exist. The variable 'i' in the for loop will not. Why? 

the i variable was defined inside loop, so it won't be used outside of the loop.

__________________________________

## Bounds Errors

When traversing an array, we need to be careful with the indices to avoid an ArrayIndexOutOfBoundsException being thrown. 

**ATTENTION: MOST COMMON MISTAKE:**
8. What is wrong with the for loop and while loop below? Why does this produce an ArrayIndexOutOfBoundsException error? ____

the loops are going out of bounds of our set arrays, the for loop is going 1 back the set limit of for loops. while loop is going 1 back the set limit of while loops.


```java
for(int i = 0; i <= list.length; i ++)
```


    Incomplete input:

    |   for(int i = 0; i <= list.length; i ++)



```java
int index = 0; 
while (index <= list.length)
```


    Incomplete input:

    |   while (index <= list.length)


**Off by One Error** : missing the first or last element of an array when trying to traverse


```java
[0, 1, 2, 3, 4]
```


```java
// This won't access the last element in the list
for(int i = 0; i < list.length - 1; i ++)
```


    Incomplete input:

    |   // This won't access the last element in the list

    |   for(int i = 0; i <= list.length - 1; i ++)



```java
// This won't access the first element in the list
int index = 1; 
while (index <= list.length)
```

## Developing Methods Using Arrays
Reviewing common methods asked on AP Exam FRQs

### Average Value

Complete the popcorn hack below in order to return the average value of the elements in the list numbers. 


```java
public class ArrayAverage {
    public static void main(String[] args) {
        int[] numbers = {5, 10, 15, 20, 25};
        int sum = 0;
        double average;
        
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i]; 
        }
        
       
        average = (double) sum / numbers.length; /* missing code */
        
        System.out.println("The average of the numbers is: " + average);
    }
}

ArrayAverage.main(null);
```

    The average of the numbers is: 15.0


# 6.3 Enhanced for loop for Arrays (Vivian)
- the enhanced for loop is also known as the “for each” loop
- provides a simplified way to loop through elements in an array, collection, or other iterable data structures.


```java
//syntax for enhanced for loop
for (dataType element : array) {
    // code to process 'element'
}
```

- the data type in the loop must match the array’s element data type.


```java
//array of int matches element int
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```

    1
    2
    3
    4
    5


## Comparing a regular for loop with the enhanced for loop



Popcorn Hack: Rewrite this code to use an enhanced for loop instead. make comments explaining what you added/changed


```java
import java.util.List;

class Quote {
    private List<String> quotes;
    private List<String> emotions;

    public Quote(List<String> quotes, List<String> emotions) {
        this.quotes = quotes;
        this.emotions = emotions;
    }
    int i = 0;
    public void printQuotesWithEmotions() {
        // Make a change in the code here! 
        
        for (String emotion : emotions) {
            String quote = quotes.get(i);
            
            System.out.println("Quote: \"" + quote + "\"");
            System.out.println("Emotion: " + emotion);
            System.out.println("---------------------------");
        }
    }

    public static void main(String[] args) {
        List<String> quotes = List.of(
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "The only way to do great work is to love what you do.",
            "The best way to predict the future is to create it."
        );

        List<String> emotions = List.of(
            "Courageous",
            "Passionate",
            "Innovative"
        );

        Quote quotePrinter = new Quote(quotes, emotions);
        quotePrinter.printQuotesWithEmotions();
    }
}

Quote.main(null);
```

    Quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    Emotion: Courageous
    ---------------------------
    Quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    Emotion: Passionate
    ---------------------------
    Quote: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    Emotion: Innovative
    ---------------------------


What are some of the benefits of using an enhanced for loop in this case versus a regular for loop?

a regular for loop allows you to access indices but an enchanced for loop cannot. Enchanced for loops are useful when you want to iterate through an array but not access the index. 

## Limitations to enhanced for loop
- it does not provide access to the index of the current element.
    - This means you cannot easily determine the position of the element in the array or collection.
    - But when you want to search for a specific element in a collection and you don’t necessarily need to access the index
    - If you need to work with indices, you should use a traditional for loop instead.
- read-only access to elements.
    - You cannot modify the elements within the loop
    - Thus, when you need to modify a collection based on a condition. You should use a regular for loop

For the next two code blocks, decide whether or not its better to use a regular for loop or an enhanced one, explain why. write the code for them

1. Searching for an Element in an ArrayList


```java
ArrayList<String> names = new ArrayList<>();
String searchName = "Vivian";

//code goes here
for (String name : names) {
    if (name.equals(searchName)) {
        System.out.println("Found " + searchName);
        break;
    }
}
```

2. Removing Even Numbers from an ArrayList


```java
ArrayList<Integer> numbers = new ArrayList<>();
// use normal for loop
//code goes here
for (int i = 0; i < numbers.size(); i++) {
    System.out.println(numbers.get(i));
    
}
```

# 6.4: Developing Algorithms Using Arrays (Isabelle)
## How to identify the maximum or minimum value in an array

It is a common task to determine what the largest or smallest value stored is inside an array. In order to do this, we need a method that can take a parameter of an array of primitve values (`int` or `double`) and return the item that is at the appropriate extreme.

Inside the method a local variable is needed to store the current max or min value that will be compared against all the values in the array. You can assign the current value to be either the opposite extreme or the first item you would be looking at.

You can use either a standard `for` loop or an enhanced `for` loop to determine the max or min. Assign the temporary variable a starting value based on what extreme you are searching for.

Inside the `for` loop, compare the current value against the local variable; if the current value is better, assign it to the temporary variable. When the loop is over, the local variable will contain the appropriate value and is still available and within scope and can be returned from the method.

## Find max in an array of `double` values


```java
private double findMax(double [] values) {
    double max = values[0];

    for (int index = 1; index < values.length; index++) {
        if (values[index] > max) {
            max = values[index];
        }
    }
    return max;
}
```

## Find min in an array of `int` values


```java
private int findMin(int [] values) {
    int min = Integer.MAX_VALUE;

    for (int currentValue: values) {
        if (currentValue < min) {
            min = currentValue;
        }
    }
    return min;
}
```

## Let's Practice!

**Popcorn hack #1**


```java
// What needs to be changed to find the index of the max value? (write correct code in cell below)
private int findMax(double [] values) {
    double max = values[0];
    int maxIndex = 0; 

    for (int index = 1; index < values.length; index++) {
        if (values[index] > max) { 
            max = values[index];
            maxIndex = index;
        }
    }
    return maxIndex;
}
```

## How to calculate the average value from objects in an array

It is a common task to determine what is the average value returned from items stored inside an array. In order to do this, we need a method that can take a parameter of an array of Objects (DebugDuck) and calculate and return the average value that each instance of DebugDuck returns from the method.

Inside the method; a local double variable is needed to store the accumulated values. Then we use a for loop to traverse the array and add the current total to the variable. After accumulating all the values we need to divide the total by the number of items stored in the array.

## Using a standard `for` loop



```java
private double calculateAverage(DebugDuck [] ducks) {
    double average = 0.0;

    for (int index = 0; index < ducks.length; index++) {
        average += ducks[index].getQuestionCount();
    }
    average = average / ducks.length;

    return average;
}
```

## Using a standard `enhanced` loop



```java
private double calculateAverage(DebugDuck [] ducks) {
    double average = 0.0;

    for (DebugDuck currentDuck: ducks) {
        average += currentDuck.getQuestionCount();
    }
    average = average / ducks.length;

    return average;
}
```

**Does the order of accumulation matter?**

no, because we accumulate all of the values at the end, regardless of change in order. we only need sum, not specific value, and changing order doesn't change sum.

**Can you declare the variable inside the loop?**

no, then we won't be able to access the variable outside the loop.

## Shfiting Array contents to the right

The contents of an array often need to be shifted as part of a solution to using the data inside.

We need to know how much to shift the array by. This will need to be an int obviously.

In order to move the contents we next need to make an empty array of the same size and then iterate over the original array and properly copy the values to the adjusted index in the new array.

We then need to assign the new array back into the original variable.



**What kind of for loop should we use? Why?**

use a normal for loop because we need to access specific indices.


```java
int [] numbers = {1,2,3,4,5};
int [] shifted = new int [numbers.length];
int shift = 8;
for (int index = 0; index < numbers.length; index++) {
    shifted [Math.abs((index + shift) % numbers.length)] = numbers[index];
}
numbers = shifted;
for (int num : numbers) {
    System.out.println(num + " ");
}
```

    3 
    4 
    5 
    1 
    2 


**Why are we using the % operator?**

we use this to prevent our index going out of bounds, and it creates the shift 

**Popcorn hack #2**

How would we code a left shift? Write a left shift using the variables below




```java
String[] words = {"alpha", "beta", "gamma", "delta"};

String[] wordShift = new String[words.length];
int shiftWord = 2;
for (int index = 0; index < words.length; index++) {
    wordShift[index] = words[((index + shiftWord) % words.length)];
    System.out.println(wordShift[index]);

}

```

    gamma
    delta
    alpha
    beta


**Why should the array index be wrapped in a call to Math.abs?**

Math.abs returns absolute value, so we probably use this to make sure our array index doesn't go out of bounds.

# Hacks

Scoring Guidelines: 
- 0.2 for completeing each of the sub-unit hacks mentioned below. 
    - FRQ/PopCorn hacks will be graded AP Style
- 0.1 for having organized notebook with note taking when appropriate. 
- Extra 0.1 for going above expectations for the hacks (being creative!)


### 6.1 HACK 1 FRQ (<5 min)

Follow the steps in the lesson to just make an array that has some relation to your project. Feel free to use the code examples we provided in your hack if you would like.


```java
// HACK 1 FRQ
import java.util.Scanner;

String[] Users = {"name", "id", "credit card"};
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("type in your name");
    String name = scanner.nextLine();
    Users[1] = (name);
    System.out.println("name: " + Users[1]);
    String id = "123456789";
    Users[2] = (id);
    System.out.println("id: " + (Users[2]));
    break;
}
```

    Type in your name:
    Type in your id:
    User Information:
    Name: ooo
    ID: 88



```java
// Experiment with hashmaps to accomplish similar task 
```


```java
import java.util.Scanner;
import java.util.HashMap;

public class UserInformation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        HashMap<String, String> userMap = new HashMap<>();

        System.out.println("Type in your name:");
        String name = scanner.nextLine();
        userMap.put("name", name);

        System.out.println("Type in your id:");
        String id = scanner.nextLine();
        userMap.put("id", id);

        System.out.println("User Information:");
        System.out.println("Name: " + userMap.get("name"));
        System.out.println("ID: " + userMap.get("id"));
    }
}
UserInformation.main(null);

```

    Type in your name:
    Type in your id:
    User Information:
    Name: test
    ID: 342342


### 6.2 HACK 1 FRQ (<10 min)

**Prime Numbers in an Array (5-10 min)**

Create a loop to identify and print the prime numbers from an array of integers. Your loop MUST traverse through the given list. Some things to consider: 
> BONUS: Do this with a for loop AND a while loop 

- Understand prime numbers and how to check for primality.
- Implement a loop and conditional statements to iterate through the array.
- Consider data storage (either displaying prime numbers immediately or storing them for later display)


```java
int[] numbers = {1, 17, 4, 23};

for (int i = 0; i < numbers.length; i++) {
    int num = numbers[i];
    boolean isPrime = true;
    
    if (num <= 1) {
        isPrime = false;
    } else {
        for (int j = 2; j <= Math.sqrt(num); j++) {
            if (num % j == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        System.out.println(num);
    }
}

```

    17
    23



```java
//rewrite with while loop 

int[] numbers = {1, 17, 4, 23};

int i = 0;

while (i < numbers.length) {
    int num = numbers[i];
    boolean isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        int j = 2;
        while (j * j <= num) {
            if (num % j == 0) {
                isPrime = false;
                break;
            }
            j++;
        }
    }

    if (isPrime) {
        System.out.println(num);
    }

    i++;
}

```

    17
    23


### 6.2 HACK 2 MCQ (<5 min)

**Multiple Choice Questions**


Do NOT Run the code cells. Try to do this on your own.

1. What will be displayed as the output? 


```java
String [] list = {"red", "yellow", "blue"}; 
for (int i = 0; i <= list.length; i++)
{
    System.out.print(list[i].length()+ "-" )
}
```

- A. red-yellow-blue
- B. 3-3-3-
- C. 3-6-4-
- D. 3-6-
- E. 3-6-4

Write why you chose that answer! 

B because the print statement just prints out the length of the list, and the statement runs 3 times, also the array never changes.
______________________

2. The code below is meant to display every other number in the list numbers. Which of the following should replace the missing code in order to do this? 


```java
int [] numbers = {3, -4, 6, -7, 2}; 
for(/*missing code*/)
{
    System.out.println(numbers[i]);
}
```

- A. int i = 0; i < numbers.length/2; i++
- B. int i = 1; i < numbers.length; i++
- C. int i = 1; i < numbers.length; i+=2
- D. int i = 0; i < numbers.length; i++
- E. int i = 0; i < numbers.length; i+=2

Write why you chose that answer! 

E, because then we print out the 1st, 3rd, and 5th elements of the array, skipping 2nd and 4th since we go by 2 in the loop.
______________________

3. (This one is a little hard) Which of the following would fix the code so that the elements in arr are reversed. Hint: try creating a list in your head and trace the code to see if the code accomplishes its goal.


```java
public static void reverseArray(double [] arr)
{
    for(int = 0; i< arr.length; i++)
    {
        double temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp; 
    }
}
```

- A. Change loop condition to: i < arr.length - 1
- B. Change loop condition to: i < arr.length/2
- C. Change loop condition to: i < arr.length/2 - 1

In case you are having trouble with question 3 the answer is B. Write about why! 

the Answer is B but I think its because dividing the array length my 2 would let us start somewhere else where the code would thus reverse the items for our goal.

_______________________________

### 6.3 HACK 
- Just finish the popcorn hacks throughout the lesson! 

### 6.4 HACK 
- Just finish the 2 popcorn hacks in the lesson! 
