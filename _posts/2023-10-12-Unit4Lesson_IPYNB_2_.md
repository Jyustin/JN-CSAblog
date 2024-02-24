---
layout: post
title: Unit 4 Lesson
toc: True
comments: True
description: Lesson for APCSA Unit 4
courses: {'compsci': {'row': 0}}
type: APtopics
---

# Iteration
According to CollegeBoard, **Iteration** is a way to simplify code that would otherwise be repeated many times in succession. Using loops, we can finally implement complex algorithms and solutions to common problems that we weren't able to before.

Iteration is repeating sequences to simplify code of advanced algorithms

Iteration accounts for **17.5%-22.5%** of the APCSA AP Exam

# 4.1: WHILE LOOPS
**Learning Objective**: Represent Iterative Processes using a <code>while</code> loop

Question: What is a loop and what are some real life examples of this (Setting a Song to repeat on your music player)

You know the <code>i</code> variable that you use for while/for loops? It actually has a name, loop control variable


```java
int i = 0; // initialize loop control variable
while (i < 10)  // checks the loop control variable
{
    System.out.println("Doing some code");
    i++;  // update the loop control variable
}
```


```java
// Popcorn Hack: Simplify the code segment below
int i = 0;
System.out.println(i);
i++;
System.out.println(i);
i++;
System.out.println(i);
i++;
System.out.println(i);
i++;
System.out.println(i);
i++;

while (i < 5) {
    System.out.println(i);
    i++;    
}

for (int j = 0; j < 5; j++) {
    System.out.println(j);
}
```

    0
    1
    2
    3
    4
    0
    1
    2
    3
    4



```java
int i = 0;
while (i < 5) { System.out.println(i);
i++;
}
```

## Infinite loop  
An infinite loop is when a while loop always evaluates to true. avoid this when you can because it's probably not good for your computer. if this happens by accident, I recommend copying all code in the block and deleting the block. After you delete the code block, close and reopen the tab that the code block was in.

**What's wrong with this code block?**


```java
while (true)
{
    System.out.print("CONTROL ");
}
// DO NOT RUN THE CODE
```

## Do While loop
  
**What will this code block output?**


```java
// Quite shrimple
int i = 0;
do 
{
    System.out.print("Quite shrimple. ");
    i++;
}
while (i < -5);
```

    Quite shrimple. 

In a do while loop, it will run the "do" once before it reaches the "while", and at that point it will start to act like a while loop.

## For loop
this is the standard structure of a for loop


```java
for (initialization; Boolean expression; update)
{
    System.out.println("Doing some code");
}
```


    |   for (initialization; Boolean expression; update)

    not a statement

    

    |   for (initialization; Boolean expression; update)

    ';' expected

    

    |   for (initialization; Boolean expression; update)

    not a statement

    

    |   for (initialization; Boolean expression; update)

    ')' expected

    


Initialization will run at the start of the loop, boolean expression will get checked with every loop, and update runs after every loop.

**How many times will this code print "Doing some code?"**


```java
for (int num = 1; num <= 5; num++)
{
    System.out.println("Doing some code");
}
```

    Doing some code
    Doing some code
    Doing some code
    Doing some code
    Doing some code


In this code, it creates the variable *num* at the start of the loop, it checks if *num* is less than or equal to 5 after each loop, and it adds 1 to *num* after each loop.

## Enhanced for loop  
this is essentially a javascript for loop, as it will iterate through a list and run code in the loop to each variable inside the list


```java
int[] list = {1, 4, 6, 2};
for (int j : list)
{
    System.out.print(j);
    System.out.print(" ");
}
```

    1 4 6 2 

## Break and Continue
In java there are breaks, but there are also continues.

### Break  
Breaks, as you likely already know, end a loop. They tend to be used with an *if* statement

**How many times will this code print "Big guy?"**


```java
int i = 0; 
while (i < 10) 
{
    System.out.println("Big guy");
    i++;  
    if (i == 5) {
        break;
    }
}
```

    Big guy
    Big guy
    Big guy
    Big guy
    Big guy


### Continue  
Continue will skip code for an iteration, but will still keep the loop running


```java
int i = 0; 
while (i < 10) 
{
    if (i == 5) {
        i++; // don't forget this, it creates an error similar to an infinite loop
        System.out.println("");
        continue;
    }
    System.out.println(i);
    i++;  
}
```

    0
    1
    2
    3
    4
    
    6
    7
    8
    9


# 4.3: Developing Algorithms Using Strings
**Learning Objective**: For algorithms in the context of a particular specification that involves <code>String</code> objects:

### Methods in Java that help to MANIPULATE STRINGS
- String.substring - Retrieves a particular portion of a String
- String.equals - Comparees the content of two strings
- String.length - Returns the length of a String


```java
public class Compare {
    public static void main(String[] args) {
        String string1 = "Coding is cool!";
        String string2 = "Coding is coding!";

        int minLength = Math.min(string1.length(), string2.length());

        for (int i = 0; i < minLength; i++) {
            String subString1 = string1.substring(0, i + 1);
            String subString2 = string2.substring(0, i + 1);

            if (subString1.equals(subString2)) {
                System.out.println("Common Prefix: " + subString2);
            }
        }
    }
}
Compare.main(null)
```

    Common Prefix: C
    Common Prefix: Co
    Common Prefix: Cod
    Common Prefix: Codi
    Common Prefix: Codin
    Common Prefix: Coding
    Common Prefix: Coding 
    Common Prefix: Coding i
    Common Prefix: Coding is
    Common Prefix: Coding is 
    Common Prefix: Coding is c
    Common Prefix: Coding is co


**Where are the 3 methods in the above Java Cell and how do they contribute to the program's functionality?**

# answer
string.length() is used to determine the length of the string, for use with the math.min

string.substring is used to return a substring of the string, here its used for the common prefix

math.min is used to return the smaller of two numbers, here its used to determine the length of the 2 strings and then determine the common prefix


```java
String word = "supercalifragilisticexpialidocious";
int count = 0;

for (int i = 0; i < word.length(); i++) {
    char letter = word.charAt(i);
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        count++;
    }
}

System.out.println("The Number of vowels in \"" + word + "\" is " + count);

```

    The Number of vowels in "supercalifragilisticexpialidocious" is 16


**What does word.length() do and how do we use it above?**  

### Answer:

word.length() returns the length of the word. its 1 based counting.

**What Boolean Operator is used?**

### Answer:

we use && for and and || for or.


```java
public class Main {
    public static void main(String[] args) {
        String word = "Scooby Doo";
        String sub = "Doo";
        boolean found = false;

        for (int i = 0; i <= word.length() - sub.length(); i++) {
            String portion = word.substring(i, i + sub.length());
            if (portion.equals(sub)) {
                found = true;
            }
        }
        if (found) {
            System.out.println("We found the Smaller String!");
        } else {
            System.out.println("We did not find the Smaller String! \t Ruh Roh!");
        }
    }
}
Main.main(null)
```

    We found the Smaller String!


### String concatenation
String concatenation is when you want to add to strings together


```java
String original = "String";
String reversed = "";
for (int i = 0; i < original.length(); i++)
{
    String single = original.substring(i,i+1);
    reversed = single + reversed;
}
System.out.println("Original String: " + original);
System.out.println("Reversed String: " + reversed);

```

    Original String: String
    Reversed String: gnirtS


# 4.4: Nested Iteration
**Learning Objective**: Represent nested iteration processes

Essential Knowledge:
- Nested iteration is when an iteration statement appears inside the body of another iteration statement
- The inner loop must complete all of its iterations before the outer loop can continue. 

**Before uncommenting the code, guess what the output will look like:**


we print 1 and 2, 4 times 


```java
public class NestedLoops{

    public static void main(String[] args){

        for (int outer = 1; outer < 5; outer++){

             for (int inner = 1; inner < 3; inner++){
                
                 System.out.print(inner + " ");
             }

             System.out.println();

         } 

    }
}

NestedLoops.main(null)
```

    1 2 
    1 2 
    1 2 
    1 2 



```java
public class NestedLoops{

    public static void main(String[] args){
        for ( int inner = 1; inner < 3; inner++){

             for (int outer = 1; outer < 5; outer++){
                
                 System.out.print(inner + " ");
             }

             System.out.println();

         } 

    }
}

NestedLoops.main(null)
```

    1 1 1 1 
    2 2 2 2 


**What will the output of the code above be if we switch the loop headers (the stuff inside of the for loop)?**

we print 4, 5 instead, 4 times 

**After making a prediction actually switch the loop headers for yourself. What do you notice about the output compared to the output before the change?**

I was wrong, its instead printing it 1 4 times then 2 4 times, instead of 1 and 2 4 times.

# 4.5: Informal Code Analysis

Essential Knowledge:
- A statement exectution count indicates the number of times a statement is executed by the program




```java
for (int outer = 0; outer < 3; outer++){
    for (int inner = 0; inner < 4; inner++){
        // statement #1
    }
}
```

**In the code above, how many times will the inner loop execute when outer = 0?** __3__

**In the code above, how many times will the inner loop execute when outer = 1?** __2__  

**In the code above, how many times will the inner loop execute when outer = 2?** __1__  

**In the code above, how many times will the inner loop execute in total?** __4___



```java
for (int outer = 5; outer > 0; outer--){
    for (int inner = 0; inner < outer; inner++){
        // statement #1
    }
}
```

**In the code above, how many times will the inner loop execute when outer = 5?** __5__  

**In the code above, how many times will the inner loop execute when outer = 4?** __4__  

**In the code above, how many times will the inner loop execute when outer = 3?** __3__  

**In the code above, how many times will the inner loop execute in total?** __15__


```java
int k = 0;
while (k < 5){
    int x = (int)(Math.random()*6) + 1;
    while (x != 6){
        //statement #1
        x = (int)(Math.random()*6) + 1;
    }
    k++;
}
```

**In the code above, how many times will the statement #1 execute?** __random b/c math.random__


```java
for (int k = 0; k < 135; k++){
    if (k % 5 == 0){ // Statement #1
        System.out.print(k); // Statement #2
    }
}
```

    05101520253035404550556065707580859095100105110115120125130

**In the code above, how many times will the statement #1 execute?** __135__  

**In the code above, how many times will the statement #2 execute?** __27__

Rewrite the code above to be more effecient based on execution count. 



```java
for (int k = 0; k < 135; k+= 5){ //+= 5 optimizes code 
    if (k % 5 == 0){ // Statement #1
        System.out.print(k); // Statement #2
    }
}
```

    0055101015152020252530303535404045455050555560606565707075758080858590909595100100105105110110115115120120125125130130

# HACKS
These hacks will be due on Monday (October 16th) before class

### Hacks
- Finish the popcorn hacks (0.2)
- Rewrite the for loop (0.25)
- Complete the Ceaser Cipher Code (0.45)



```java
for (int k = 0; k < 40; k++){
    if (k % 4 == 0){
        System.out.println(k); 
    }
}
```

Rewrite the code above 3 different times
- Your code should be more efficient based execution count
- Your code should use 3 different types of loops that you learned above (Hint: You may need to use a list)



# TOP CODE REWRITE 1



```java

for (int k = 0; k < 40; k+= 4){ // adding += 4 instead of k++ to reduce the number of times the loop runs
    if (k % 4 == 0){
        System.out.println(k); 
    }
}
```

    0
    4
    8
    12
    16
    20
    24
    28
    32
    36


# TOP CODE REWRITE 2


```java
int k = 0;

// this time we use a while loop instead of a for loop
while (k < 40) {
    if (k % 4 == 0){
        System.out.println(k);
    }
    k+= 4;
}

```

    0
    4
    8
    12
    16
    20
    24
    28
    32
    36


# TOP CODE REWRITE 3


```java
int[] multiplesOfFour = new int[10]; // Array size is adjusted to fit multiples of 4 up to 36.

int value = 0;
for (int i = 0; i < multiplesOfFour.length; i++) {
    multiplesOfFour[i] = value;
    value += 4;
}

for (int multiple : multiplesOfFour) {
    System.out.print(multiple + " ");
}

```

    0 4 8 12 16 20 24 28 32 36 

# TOP CODE REWRITE 4


```java
int k = 0; // this time we use a do while loop instead of a while loop or a for loop
do {
    if (k % 4 == 0) {
        System.out.println(k);
    }
    k += 4;
} while (k < 40);

```

    0
    4
    8
    12
    16
    20
    24
    28
    32
    36


#### Ceaser Cipher Hacks
Try to write a cipher program that shifts each letter in a message 3 letters forward. Use any of the methods you learned today. Use it to decode the 3 messages we've given you!


```java
public class CaesarCipher {

    public static void main(String[] args) {

        String[] letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
        String message1 = "Kfzb gly!";
        String message2 = "zlab zlab zlab";
        String message3 = "prmbozxifcoxdfifpqfzbumfxifalzflrp";

        String msg1mod ="";

}
}



CaesarCipher.main(null);
```

# ANSWER


```java
public class CaesarCipher {

    public static void main(String[] args) {

        String message1 = "Kfzb gly!";
        String msg1mod = "";
        String message2 = "zlab zlab zlab";
        String msg2mod = "";
        String message3 = "prmbozxifcoxdfifpqfzbumfxifalzflrp";
        String msg3mod = "";

        for (int i = 0; i < message1.length(); i++) {
            char letter = message1.charAt(i);

            if (Character.isLetter(letter)) {
                char baseChar = Character.isUpperCase(letter) ? 'A' : 'a'; // Determine the base character ('A' for uppercase, 'a' for lowercase)
                char shiftedLetter = (char) (((letter - baseChar + 3) % 26) + baseChar); // Shift the letter by 3 positions
                msg1mod += shiftedLetter;
            } else {
                msg1mod += letter; // Keep non-letter characters as they are
            }
        }

        for (int i = 0; i < message2.length(); i++) {
            char letter2 = message2.charAt(i);

            if (Character.isLetter(letter2)) {
                char baseChar = Character.isUpperCase(letter2) ? 'A' : 'a'; // Determine the base character ('A' for uppercase, 'a' for lowercase)
                char shiftedLetter = (char) (((letter2 - baseChar + 3) % 26) + baseChar); // Shift the letter by 3 positions
                msg2mod += shiftedLetter;
            } else {
                msg2mod += letter2; // Keep non-letter characters as they are
            }
        }

        
        for (int i = 0; i < message3.length(); i++) {
            char letter = message3.charAt(i);

            if (Character.isLetter(letter)) {
                char baseChar = Character.isUpperCase(letter) ? 'A' : 'a'; // Determine the base character ('A' for uppercase, 'a' for lowercase)
                char shiftedLetter = (char) (((letter - baseChar + 3) % 26) + baseChar); // Shift the letter by 3 positions
                msg3mod += shiftedLetter;
            } else {
                msg3mod += letter; // Keep non-letter characters as they are
            }
        }

        System.out.println(msg1mod);
        System.out.println(msg2mod);
        System.out.println(msg3mod);

    }
}

CaesarCipher.main(null);
```

    Nice job!
    code code code
    supercalifragilisticexpialidocious

