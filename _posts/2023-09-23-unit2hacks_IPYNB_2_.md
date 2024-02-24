---
layout: post
title: Unit 2 Hacks
description: hacks and tricks learned in Unit 2 of Computer Science A
type: APtopics
courses: {'compsci': {'row': 0}}
categories: ['C4.1']
---

# note: the following hacks were done with chatgpt assist. I don't claim to have written every line of code here

# Hack 1: 

Create a void method that takes an integer input and adds it to an ArrayList. Then, add a non-void method that is able to call a certain index from the ArrayList.


```java
import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListTest {

    // Declare ArrayList as a static field to make it accessible across methods
    private static ArrayList<Integer> numbers = new ArrayList<Integer>();

    public static void inputArrlist() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int n = sc.nextInt(); // take input from user
        numbers.add(n); // add input to ArrayList
    }

    // A non-void method to get an element from ArrayList by index
    public static int getElementAtIndex(int index) {
        if (index >= 0 && index < numbers.size()) {
            return numbers.get(index);
        } else {
            System.out.println("Index out of bounds.");
            return -1; // You can choose a different return value or throw an exception if needed
        }
    }

    // Java standard runtime entry point
    public static void main(String[] args) {
        inputArrlist(); // Call the method to add an integer to the ArrayList

        // Print the ArrayList
        System.out.println("ArrayList contents: " + numbers);

        // Example of calling the non-void method to get an element by index
        int indexToAccess = 1; // Change this to the desired index
        int elementAtIndex = getElementAtIndex(indexToAccess);

        if (elementAtIndex != -1) {
            System.out.println("Element at index " + indexToAccess + ": " + elementAtIndex);
        }
    }
}

ArrayListTest.main(null);   // Class prefix allows reference of Static Method
```

    Enter an integer: ArrayList contents: [5, 3]
    Element at index 1: 3


# HACK 2
Create a simple guessing game with random numbers in math, except the random number is taken to a random exponent (also includes roots), and the person has to find out what the root and exponent is (with hints!). Use at least one static and one non-static method in your class.


```java
import java.util.Random;
import java.util.Scanner;

public class ExponentGuessingGame {

    // Static field
    private static Random random = new Random();
    private double base;
    private double exponent;

    // Constructor (non-static)
    public ExponentGuessingGame() {
        generateRandomNumber(); // Initialize the game by generating a random base and exponent.
    }

    // Non-static method
    private void generateRandomNumber() {
        base = random.nextInt(2); // Generate a random base between 1 and 2.
        int exponentChoice = random.nextInt(3); // Choose a random exponent type (0: Square root, 1: Cube root, 2: Random exponent).
        if (exponentChoice == 0) {
            exponent = 0.5; // Set the exponent to 0.5 for a square root.
        } else if (exponentChoice == 1) {
            exponent = 1.0 / 3.0; // Set the exponent to 1/3 for a cube root.
        } else {
            exponent = 2; // Set the exponent to 2 for square.
        }
    }

    // Non-static method
    public void play() {
        Scanner scanner = new Scanner(System.in);
        int attempts = 0;

        System.out.println("Welcome to the Exponent Guessing Game!");
        System.out.println("I've generated a random number, raised it to an exponent,");
        System.out.println("and your task is to guess both the base and the exponent.");
        System.out.println("Let's get started!");

        while (true) {
            attempts++;
            System.out.print("Enter your guess for the base: ");
            double guessedBase = scanner.nextDouble();
            System.out.print("Enter your guess for the exponent: ");
            double guessedExponent = scanner.nextDouble();

            if (guessedBase == base && guessedExponent == exponent) {
                System.out.println("Congratulations! You've guessed it!");
                System.out.println("It took you " + attempts + " attempts.");
                break;
            } else {
                displayHint(base, exponent); // Non-static method call to provide hints.
            }
        }

        scanner.close();
    }

    // Static method
    private static void displayHint(double base, double exponent) {
        if (base < 3) {
            System.out.println("Hint: The base is less than 3.");
        } else {
            System.out.println("Hint: The base is greater than or equal to 3.");
        }

        if (exponent == 0.5) {
            System.out.println("Hint: The exponent is 0.5 (a square root).");
        } else if (exponent == 0.3) {
            System.out.println("Hint: The exponent is 0.3 (a cube root).");
        } else {
            System.out.println("Hint: The exponent is 2.");
        }
    }

    // Static method (entry point of the program)
    public static void main(String[] args) {
        ExponentGuessingGame game = new ExponentGuessingGame();
        game.play(); // Start the game by calling the play method (non-static).
    }
}

ExponentGuessingGame.main(null);

```

    Welcome to the Exponent Guessing Game!
    I've generated a random number, raised it to an exponent,
    and your task is to guess both the base and the exponent.
    Let's get started!
    Enter your guess for the base: Enter your guess for the exponent: Hint: The base is less than 3.
    Hint: The exponent is 0.5 (a square root).
    Enter your guess for the base: Enter your guess for the exponent: Hint: The base is less than 3.
    Hint: The exponent is 0.5 (a square root).
    Enter your guess for the base: Enter your guess for the exponent: Congratulations! You've guessed it!
    It took you 3 attempts.


# HACK 3
Create a class of your choosing that has multiple parameters of different types (int, boolean, String, double) and put 5 data values in that list. Show that you can access the information by givng some samples.


```java
public class Person {
    // Declare private instance variables for a Person
    private int age;
    private boolean isStudent;
    private String name;
    private double height;

    // Constructor to initialize a Person with provided data
    public Person(int age, boolean isStudent, String name, double height) {
        // Initialize the instance variables with the provided values
        this.age = age;
        this.isStudent = isStudent;
        this.name = name;
        this.height = height;
    }

    // Getter method to retrieve the age of the Person
    public int getAge() {
        return age;
    }

    // Getter method to check if the Person is a student
    public boolean isStudent() {
        return isStudent;
    }

    // Getter method to retrieve the name of the Person
    public String getName() {
        return name;
    }

    // Getter method to retrieve the height of the Person
    public double getHeight() {
        return height;
    }

    public static void main(String[] args) {
        // Create five Person instances with sample data
        Person person1 = new Person(25, false, "John", 5.9);
        Person person2 = new Person(18, true, "Alice", 5.5);
        Person person3 = new Person(30, false, "Bob", 6.0);
        Person person4 = new Person(22, true, "Eve", 5.7);
        Person person5 = new Person(28, false, "Charlie", 6.2);

        // Access and print information from the Person instances
        System.out.println("Person 1 - Name: " + person1.getName() + ", Age: " + person1.getAge() + ", Student: " + person1.isStudent() + ", Height: " + person1.getHeight());
        System.out.println("Person 2 - Name: " + person2.getName() + ", Age: " + person2.getAge() + ", Student: " + person2.isStudent() + ", Height: " + person2.getHeight());
        System.out.println("Person 3 - Name: " + person3.getName() + ", Age: " + person3.getAge() + ", Student: " + person3.isStudent() + ", Height: " + person3.getHeight());
        System.out.println("Person 4 - Name: " + person4.getName() + ", Age: " + person4.getAge() + ", Student: " + person4.isStudent() + ", Height: " + person4.getHeight());
        System.out.println("Person 5 - Name: " + person5.getName() + ", Age: " + person5.getAge() + ", Student: " + person5.isStudent() + ", Height: " + person5.getHeight());
    }
}

Person.main(null);
```

    Person 1 - Name: John, Age: 25, Student: false, Height: 5.9
    Person 2 - Name: Alice, Age: 18, Student: true, Height: 5.5
    Person 3 - Name: Bob, Age: 30, Student: false, Height: 6.0
    Person 4 - Name: Eve, Age: 22, Student: true, Height: 5.7
    Person 5 - Name: Charlie, Age: 28, Student: false, Height: 6.2


# HACK 4
Using your preliminary knowlege of loops, use a for loop to iterate through a person’s first and last name, seperated by a space, and create methods to call a person’s first name and a person’s last name by iterating through the string.


```java
public class PersonName {
    private String fullName;

    public PersonName(String fullName) {
        this.fullName = fullName;
    }

    // Method to get the first name
    public String getFirstName() {
        StringBuilder firstName = new StringBuilder();

        // Iterate through each character in the full name
        for (int i = 0; i < fullName.length(); i++) {
            char c = fullName.charAt(i);

            // Check if the current character is not a space
            if (c != ' ') {
                // Append the character to the first name
                firstName.append(c);
            } else {
                // If a space is encountered, stop iterating (we've found the first name)
                break;
            }
        }

        // Convert the StringBuilder to a String and return the first name
        return firstName.toString();
    }

    // Method to get the last name
    public String getLastName() {
        StringBuilder lastName = new StringBuilder();
        boolean foundSpace = false;

        // Iterate through each character in the full name in reverse order
        for (int i = fullName.length() - 1; i >= 0; i--) {
            char c = fullName.charAt(i);

            // Check if the current character is not a space and we haven't found a space yet
            if (c != ' ' && !foundSpace) {
                // Insert the character at the beginning of the last name (to reverse the order)
                lastName.insert(0, c);
            } else {
                // If a space is encountered or we've already found a space, set the flag to true
                foundSpace = true;
            }
        }

        // Convert the StringBuilder to a String and return the last name
        return lastName.toString();
    }

    public static void main(String[] args) {
        PersonName person = new PersonName("John Doe");
        
        // Get and print the first name
        String firstName = person.getFirstName();
        System.out.println("First Name: " + firstName);
        
        // Get and print the last name
        String lastName = person.getLastName();
        System.out.println("Last Name: " + lastName);
    }
}


PersonName.main(null);
```

    First Name: John
    Last Name: Doe


# HACK 4 BUT WITH USER INPUT FOR NAME


```java
import java.util.Scanner;

public class PersonName {
    private String fullName;

    public PersonName(String fullName) {
        this.fullName = fullName;
    }

    // Method to get the first name
    public String getFirstName() {
        StringBuilder firstName = new StringBuilder();

        // Iterate through each character in the full name
        for (int i = 0; i < fullName.length(); i++) {
            char c = fullName.charAt(i);

            // Check if the current character is not a space
            if (c != ' ') {
                // Append the character to the first name
                firstName.append(c);
            } else {
                // If a space is encountered, stop iterating (we've found the first name)
                break;
            }
        }

        // Convert the StringBuilder to a String and return the first name
        return firstName.toString();
    }

    // Method to get the last name
    public String getLastName() {
        StringBuilder lastName = new StringBuilder();
        boolean foundSpace = false;

        // Iterate through each character in the full name in reverse order
        for (int i = fullName.length() - 1; i >= 0; i--) {
            char c = fullName.charAt(i);

            // Check if the current character is not a space and we haven't found a space yet
            if (c != ' ' && !foundSpace) {
                // Insert the character at the beginning of the last name (to reverse the order)
                lastName.insert(0, c);
            } else {
                // If a space is encountered or we've already found a space, set the flag to true
                foundSpace = true;
            }
        }

        // Convert the StringBuilder to a String and return the last name
        return lastName.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for their full name
        System.out.print("Enter your full name: ");
        String fullName = scanner.nextLine();

        // Create a PersonName object with the user's input
        PersonName person = new PersonName(fullName);

        // Get and print the first name
        String firstName = person.getFirstName();
        System.out.println("First Name: " + firstName);

        // Get and print the last name
        String lastName = person.getLastName();
        System.out.println("Last Name: " + lastName);

        // Close the scanner
        scanner.close();
    }
}

PersonName.main(null);
```

    Enter your full name: First Name: engineer
    Last Name: gaming



```java
%maven org.knowm.xchart:xchart:3.5.2

import org.knowm.xchart.*;

public class HeartShapeGraph {

    public static void main(String[] args) throws Exception {
        int numPoints = 100;
        double[] xData = new double[numPoints];
        double[] yData = new double[numPoints];

        plotHeartShape(xData, yData, 0, 0, numPoints - 1);

        // Create Chart
        XYChart chart = QuickChart.getChart("Heart Shape", "X", "Y", "y(x)", xData, yData);

        // Show it
        new SwingWrapper(chart).displayChart();
    }

    private static void plotHeartShape(double[] xData, double[] yData, int index, double t, int maxIndex) {
        if (index > maxIndex) {
            return;
        }

        //Chat GPT Math
        xData[index] = 16 * Math.pow(Math.sin(t), 3);
        yData[index] = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        plotHeartShape(xData, yData, index + 1, t + (2 * Math.PI) / maxIndex, maxIndex);
    }
}

HeartShapeGraph.main(null);
```


```java
%maven org.knowm.xchart:xchart:3.5.2

import org.knowm.xchart.*;

public class CoolGraph {

    public static void main(String[] args) throws Exception {
        int numPoints = 100;
        double[] xData = new double[numPoints];
        double[] yData = new double[numPoints];

        plotHeartShape(xData, yData, 0, 0, numPoints - 1);

        // Create Chart
        XYChart chart = QuickChart.getChart("Heart Shape", "X", "Y", "y(x)", xData, yData);

        // Show it
        new SwingWrapper(chart).displayChart();
    }

    private static void plotHeartShape(double[] xData, double[] yData, int index, double t, int maxIndex) {
        if (index > maxIndex) {
            return;
        }

        //Chat GPT Math
        xData[index] = 16 * Math.pow(Math.cos(t), 3);
        yData[index] = 13 * Math.sin(t) - 5 * Math.sin(2 * t) - 2 * Math.sin(3 * t) - Math.sin(4 * t);

        plotHeartShape(xData, yData, index + 1, t + (2 * Math.PI) / maxIndex, maxIndex);
    }
}

HeartShapeGraph.main(null);
```


    The Kernel crashed while executing code in the the current cell or a previous cell. Please review the code in the cell(s) to identify a possible cause of the failure. Click <a href='https://aka.ms/vscodeJupyterKernelCrash'>here</a> for more info. View Jupyter <a href='command:jupyter.viewOutput'>log</a> for further details.

