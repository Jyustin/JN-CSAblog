---
toc: True
comments: True
layout: notebook
title: APCSA FRQ QUESTION 4
description: java skill check
courses: {'compsci': {'row': 0}}
type: APCSA
---

# QUESTION 4

(a) A number group represents a group of integers defined in some way. It could be empty, or it could contain one or more integers.

Write an interface named NumberGroup that represents a group of integers. The interface should have a single contains method that determines if a given integer is in the group. For example, if group1 is of type NumberGroup, and it contains only the two numbers -5 and 3, then group1.contains(-5) would return true, and group1.contains(2) would return false.
Write the complete NumberGroup interface. It must have exactly one method.


```Java
public class NumberGroup {
    public int[] group = new int[];
    public int contains(int[] groups) {
        for (i = 0; i < groups.length; i++) {
            if groups[i] == NumberGroup[i] {
                return true;
            }


    }
}
}
```

(b) A range represents a number group that contains all (and only) the integers between a minimum value and a maximum value, inclusive.
Write the Range class, which is a NumberGroup. The Range class represents the group of int values that range from a given minimum value up through a given maximum value, inclusive. For example,the declaration

NumberGroup range1 = new Range(-3, 2);

represents the group of integer values -3, -2, -1, 0, 1, 2.

Write the complete Range class. Include all necessary instance variables and methods as well as a constructor that takes two int parameters. The first parameter represents the minimum value, and the second parameter represents the maximum value of the range. You may assume that the minimum is less than or equal to the maximum.


```Java
public class Range {
    public int start = 0;
    public int end = 10;

    public rangeGroup(int start, int end) {
        new int[] group = new int[];
        for(int i = start; i <= end; i++) {
            group.add(i);
        }
    }
}
```

(c) The MultipleGroups class (not shown) represents a collection of NumberGroup objects and is a NumberGroup. The MultipleGroups class stores the number groups in the instance variable groupList (shown below), which is initialized in the constructor.

private List<NumberGroup> groupList;

Write the MultipleGroups method contains. The method takes an integer and returns true if and only if the integer is contained in one or more of the number groups in groupList.

For example, suppose multiple1 has been declared as an instance of MultipleGroups and consists of the three ranges created by the calls new Range(5, 8), new Range(10, 12), and new Range(1, 6). The following table shows the results of several calls to contains.

Complete method contains below



```Java
public boolean contains(int num) {

    int rangeMin = NumberGroup[0];
    int rangeMax = NumberGroup[1];
    for (int i = rangeMin; i < rangeMax(); i++) {
        if i == num {
            return true;
    }
    else {
        return false;
    }
    
    }
}
```

# actual answer compiled into running code:


```Java
import java.util.ArrayList;

// Part (a): Define the NumberGroup interface
public interface NumberGroup {
    boolean contains(int num); // Method to check if a number is contained within the group
}

// Part (b): Implement the Range class that implements the NumberGroup interface
public class Range implements NumberGroup {
    private int min;
    private int max;

    // Constructor to initialize the range with minimum and maximum values
    public Range(int min, int max) {
        this.min = min;
        this.max = max;
    }

    // Method to check if a number is within the range
    public boolean contains(int num) {
        return num >= min && num <= max;
    }
}

// Part (c): Extend functionality to check if a number is contained in any group in a list of groups
public class GroupList {
    private ArrayList<NumberGroup> groupList; // ArrayList to store NumberGroup objects

    // Constructor to initialize the groupList
    public GroupList() {
        groupList = new ArrayList<>();
    }

    // Method to add a NumberGroup to the groupList
    public void addGroup(NumberGroup group) {
        groupList.add(group);
    }

    // Method to check if a number is contained in any group within the groupList
    public boolean contains(int num) {
        for (NumberGroup group : groupList) { // Iterate through each group in the list
            if (group.contains(num)) { // Check if the number is contained in the current group
                return true; // If found in any group, return true
            }
        }
        return false; // If not found in any group, return false
    }
}

```