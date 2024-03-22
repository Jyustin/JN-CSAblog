---
toc: True
comments: True
layout: notebook
title: data types hacks
description: done
courses: {'compsci': {'row': 0}}
type: APCSA
---

Question 1: Primitive Types vs Reference Types (Unit 1)

Answer the following questions based on the code above:
* a) What kind of types are person1 and person2? 
* Answer: reference type
* b) Do person1 and person3 point to the same value in memory?
* Answer: yes
* c) Is the integer "number" stored in the heap or in the stack?
* Answer: heap
* d) Is the value that "person1" points to stored in the heap or in the stack?
* Answer: stack

### Part 2
Question 1: Primitive Types vs Reference Types (Unit 1)

Situation: You are developing a banking application where you need to represent customer information. You have decided to use both primitive types and reference types for this purpose.

(a) Define primitive types and reference types in Java. Provide examples of each.

ANS: 
primitive types are just predefined types in java like boolean, double, int. main feature is these are built into java.

(b) Explain the differences between primitive types and reference types in terms of memory allocation and usage in Java programs.
For primitive types, memory is allocated directly to the stack, and said memor

(c) Code:

You have a method `calculateInterest` that takes a primitive `double` type representing the principal amount and a reference type `Customer` representing the customer information. Write the method signature and the method implementation. Include comments to explain your code.


```Java
public class Customer {

    String name; 
    // 'String' is a reference type in Java, it refers to an object that holds a sequence of characters.

    int age; // Primitive type: 'int'

    double money; // Primitive type: 'double'

    public Customer(String name, int age, double money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }

    public static void calculateInterest(double money) {
        double interest = (double) (money * 1.03); // Primitive type: 'double'
        System.out.println(interest);
    }

    public static void main(String[] args) {
        Customer firstPerson = new Customer("sam", 25, 165.0);
        System.out.println(firstPerson.name); // Accessing reference type 'String'

        calculateInterest(firstPerson.money); // Passing primitive type 'double' as argument
    }
}

Customer.main(null);
```

Question 2: Iteration over 2D arrays (Unit 4)

Situation: You are developing a game where you need to track player scores on a 2D grid representing levels and attempts.

(a) Explain the concept of iteration over a 2D array in Java. Provide an example scenario where iterating over a 2D array is useful in a programming task.

ANS: iteration over 2d arrays in java requies you to use for loops to iterate through each row and column. For example, in a game where you track player scores on a grid representing player position, you could use a 2d array as the grid. if you wanted to detect where the player is, you could use a loop to iterate through the array to see where the player is, then execute a method to effect the player in some way.

(b) Code:

You need to implement a method `calculateTotalScore` that takes a 2D array `scores` of integers representing player scores and returns the sum of all the elements in the array. Write the method signature and the method implementation. Include comments to explain your code.


```Java
public class Game {
    public static int calculateTotalScore(int[][] scores) {
        // Variable to store the total score
        int totalScore = 0;
        
        // Loop through each row in the 2D array
        for (int i = 0; i < scores.length; i++) {
            // Loop through each element in the current row
            for (int j = 0; j < scores[i].length; j++) {
                // Add the current element to the total score
                totalScore += scores[i][j];
            }
        }
        
        // Return the total score
        return totalScore;
    }
    
    public static void main(String[] args) {
        // Sample runtime
        // there should be a sample 2d array of scores here but it keeps breaking so i removed it. imagine one 
        int totalScore = calculateTotalScore(exampleScores);
        System.out.println("Total score: " + totalScore);
    }
}

Game.main(null);

```


Question 3: ArrayList (Unit 6)

Situation: You are developing a student management system where you need to store and analyze the grades of students in a class.

(a) Define an arrayList in Java. Explain its significance and usefulness in programming.

ANS: an arraylist in java is just a mutable array, which is defined using `ArrayList<(type goes here)> name = new ArrayList<>();`. An arraylist's mutability can be more useful in situations where the amount of objects we store is changing, meaning we would want an arraylist to keep things easier. However, arraylists are pretty bad in terms of resource efficiency, so arrays are usually better.

(b) Code:

You need to implement a method `calculateAverageGrade` that takes an arrayList `grades` of integers representing student grades and returns the average of all the elements in the arrayList. Write the method signature and the method implementation. Include comments to explain your code.


```Java
import java.util.ArrayList;

public class classGrades {

    public int calculateAverageGrade(ArrayList<Integer> grades) {
        int total = 0;
        for (int grade : grades) {
            total += grade;
        }
        return total / grades.size();
    }

    public static void main(String[] args) {
        // Create an instance of classGrades
        classGrades gradesCalculator = new classGrades();

        // Create an ArrayList of grades
        ArrayList<Integer> studentGrades = new ArrayList<>();
        studentGrades.add(85);
        studentGrades.add(90);
        studentGrades.add(75);
        studentGrades.add(95);

        // Calculate the average grade
        long startTime = System.nanoTime();
        int averageGrade = gradesCalculator.calculateAverageGrade(studentGrades);
        long endTime = System.nanoTime();
        long duration = (endTime - startTime);  // Calculating duration in nanoseconds

        // Print the result and runtime, to show the speed of arraylists. (its not that good i think)
        System.out.println("Average Grade: " + averageGrade);
        System.out.println("Runtime: " + duration + " nanoseconds");
    }
}

classGrades.main(null);
```

    Average Grade: 86
    Runtime: 32685 nanoseconds

