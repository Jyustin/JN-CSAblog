---
toc: True
comments: True
layout: notebook
title: APCSA ALGORITHMIC SORTS + REFLECTION
description: coding skill check
courses: {'compsci': {'row': 0}}
type: APCSA
---

# completed code


```java
import java.util.*;

public abstract class Collectable implements Comparable<Collectable> {
    public final String masterType = "Collectable";
    private String type;    // extender should define their data type

    // enumerated interface
    public interface KeyTypes {
        String name();
    }

    protected abstract KeyTypes getKey();    // this method helps force usage of KeyTypes

    // getter
    public String getMasterType() {
        return masterType;
    }

    // getter
    public String getType() {
        return type;
    }

    // setter
    public void setType(String type) {
        this.type = type;
    }

    // this method is used to establish key order
    public abstract String toString();

    // this method is used to compare toString of objects
    public int compareTo(Collectable obj) {
        return this.toString().compareTo(obj.toString());
    }

    // static print method used by extended classes
    public static void print(Collectable[] objs) {
        // print 'Object' properties
        System.out.println(objs.getClass() + " " + objs.length);

        // print 'Collectable' properties
        if (objs.length > 0) {
            Collectable obj = objs[0];    // Look at properties of 1st element
            System.out.println(
                    obj.getMasterType() + ": " +
                            obj.getType() +
                            " listed by " +
                            obj.getKey());
        }

        // print "Collectable: Objects'
        for (Object o : objs)    // observe that type is Opaque
            System.out.println(o);

        System.out.println();
    }
}

public class ChatUsers extends Collectable {
    // Class data
    public static KeyTypes key = KeyType.name;  // static initializer

    public static void setOrder(KeyTypes key) {
        ChatUsers.key = key;
    }

    public enum KeyType implements KeyTypes {
        name, tokens, user_key
    }

    // Instance data
    private final String name;
    private final int tokens;
    private final String user_key;

    // Constructor
    ChatUsers(String name, int tokens, String user_key) {
        this.setType("ChatUser");
        this.name = name;
        this.tokens = tokens;
        this.user_key = user_key;
    }

    /* 'Collectable' requires getKey to help enforce KeyTypes usage */
    @Override
    protected KeyTypes getKey() {
        return ChatUsers.key;
    }

    /* 'Collectable' requires toString override
     * toString provides data based off of Static Key setting
     */
    @Override
    public String toString() {
        String output = "";
        if (KeyType.name.equals(this.getKey())) {
            output += this.name;
        } else if (KeyType.tokens.equals(this.getKey())) {
            output += this.tokens;
        } else if (KeyType.user_key.equals(this.getKey())) {
            output += this.user_key;
        } else {
            output = super.getType() + ": " + this.name + ", " + this.tokens + ", " + this.user_key;
        }
        return output;
    }


// <-----------------------------------------------ALL SORTS--------------------------------------------------------------------------------------->
    // bubbleSort implementation
    public static void bubbleSort(ChatUsers[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j].tokens > arr[j + 1].tokens) {
                    // Swap arr[j] and arr[j+1]
                    ChatUsers temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    // Selection Sort implementation
        public static void selectionSort(ChatUsers[] arr) {
            int n = arr.length;
            for (int i = 0; i < n - 1; i++) {
                int minIndex = i;
                for (int j = i + 1; j < n; j++) {
                    if (arr[j].tokens < arr[minIndex].tokens) {
                        minIndex = j;
                    }
                }
                ChatUsers temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
        }
    // Merge Sort implementation
        public static void mergeSort(ChatUsers[] arr, int l, int r) {
            if (l < r) {
                int m = (l + r) / 2;
                mergeSort(arr, l, m);
                mergeSort(arr, m + 1, r);
                merge(arr, l, m, r);
            }
        }
        private static void merge(ChatUsers[] arr, int l, int m, int r) {
            int n1 = m - l + 1;
            int n2 = r - m;
    
            ChatUsers[] L = new ChatUsers[n1];
            ChatUsers[] R = new ChatUsers[n2];

            for (int i = 0; i < n1; ++i)
                L[i] = arr[l + i];
            for (int j = 0; j < n2; ++j)
                R[j] = arr[m + 1 + j];
            int i = 0, j = 0;
            int k = l;
            while (i < n1 && j < n2) {
                if (L[i].tokens <= R[j].tokens) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }
            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }
    // Insertion Sort implementation
        public static void insertionSort(ChatUsers[] arr) {
            int n = arr.length;
            for (int i = 1; i < n; ++i) {
                ChatUsers key = arr[i];
                int j = i - 1;
    
                while (j >= 0 && arr[j].tokens > key.tokens) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
        }
// Quick Sort implementation
    public static void quickSort(ChatUsers[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(ChatUsers[] arr, int low, int high) {
        int pivot = arr[high].tokens;
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j].tokens < pivot) {
                i++;
                ChatUsers temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        ChatUsers temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
// <-----------------------------------------------ALL SORTS--------------------------------------------------------------------------------------->

    // Test data initializer
    public static ChatUsers[] chatUsers() {
        return new ChatUsers[]{
                new ChatUsers("dash", 100, "xyz123"),
                new ChatUsers("shiny", 29312, "69420"),
                new ChatUsers("derpy", 200, "abc456"),
                new ChatUsers("pinkie", 150, "def789"),
                new ChatUsers("birdie", 4000, "ghi012")

        };
    }

    public static void main(String[] args) {
        // Inheritance Hierarchy
        ChatUsers[] objs = chatUsers();  // Array is reference type only, no methods
        List<ChatUsers> users = new ArrayList<>(Arrays.asList(objs));  // conversion required to make it a Collection
    
        // print with name
        System.out.println("before sorts:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
            System.out.println("SORTING.....");
    
        // Bubble Sort
        long startTimeBubble = System.nanoTime();
        bubbleSort(objs);  // Sort the array using bubble sort
        long endTimeBubble = System.nanoTime();
        long durationBubble = (endTimeBubble - startTimeBubble);  // Calculating duration in nanoseconds
        System.out.println("after bubble sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of bubble sort: " + durationBubble + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Selection Sort
        long startTimeSelection = System.nanoTime();
        selectionSort(objs);  // Sort the array using selection sort
        long endTimeSelection = System.nanoTime();
        long durationSelection = (endTimeSelection - startTimeSelection);  // Calculating duration in nanoseconds
        System.out.println("\nafter selection sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of selection sort: " + durationSelection + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Merge Sort
        long startTimeMerge = System.nanoTime();
        mergeSort(objs, 0, objs.length - 1);  // Sort the array using merge sort
        long endTimeMerge = System.nanoTime();
        long durationMerge = (endTimeMerge - startTimeMerge);  // Calculating duration in nanoseconds
        System.out.println("\nafter merge sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of merge sort: " + durationMerge + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Insertion Sort
        long startTimeInsertion = System.nanoTime();
        insertionSort(objs);  // Sort the array using insertion sort
        long endTimeInsertion = System.nanoTime();
        long durationInsertion = (endTimeInsertion - startTimeInsertion);  // Calculating duration in nanoseconds
        System.out.println("\nafter insertion sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of insertion sort: " + durationInsertion + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Quick Sort
        long startTimeQuick = System.nanoTime();
        quickSort(objs, 0, objs.length - 1);  // Sort the array using quick sort
        long endTimeQuick = System.nanoTime();
        long durationQuick = (endTimeQuick - startTimeQuick);  // Calculating duration in nanoseconds
        System.out.println("\nafter quick sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of quick sort: " + durationQuick + " nanoseconds");
    }
    
}

ChatUsers.main(null);
```

# reflection on performance 

STRENGTHS:

Our idea was simple yet effective and didn't overcomplicate things.

the sorting was well explained and understandable.

The physical performance was pretty good.

I think our idea was most entertaining

WORK ON:

We could have implemented more cool props, like we intended on having a wig for Rachit but forgot.

Audience interaction could have been emphasized, our performance didn't have any audience call outs or any interactions.

I think since a lot of groups had a rap we could have added something like that to make our project feel more "fun".

practice image
![]({{site.baseurl}}/images/practice.jpg)

link to group blog:
[link](https://codemaxxers.github.io/codemaxxerblog/sorts)



# implementation using compareTo within the sorting methods

# compareTo implementation


```java
import java.util.*;

public abstract class Collectable implements Comparable<Collectable> {
    public final String masterType = "Collectable";
    private String type;    // extender should define their data type

    // enumerated interface
    public interface KeyTypes {
        String name();
    }

    protected abstract KeyTypes getKey();    // this method helps force usage of KeyTypes

    // getter
    public String getMasterType() {
        return masterType;
    }

    // getter
    public String getType() {
        return type;
    }

    // setter
    public void setType(String type) {
        this.type = type;
    }

    // this method is used to establish key order
    public abstract String toString();

    // this method is used to compare toString of objects
    public int compareTo(Collectable obj) {
        return this.toString().compareTo(obj.toString());
    }

    // static print method used by extended classes
    public static void print(Collectable[] objs) {
        // print 'Object' properties
        System.out.println(objs.getClass() + " " + objs.length);

        // print 'Collectable' properties
        if (objs.length > 0) {
            Collectable obj = objs[0];    // Look at properties of 1st element
            System.out.println(
                    obj.getMasterType() + ": " +
                            obj.getType() +
                            " listed by " +
                            obj.getKey());
        }

        // print "Collectable: Objects'
        for (Object o : objs)    // observe that type is Opaque
            System.out.println(o);

        System.out.println();
    }
}

public class ChatUsers extends Collectable {
    // Class data
    public static KeyTypes key = KeyType.name;  // static initializer

    public static void setOrder(KeyTypes key) {
        ChatUsers.key = key;
    }

    public enum KeyType implements KeyTypes {
        name, tokens, user_key
    }

    // Instance data
    private final String name;
    private final int tokens;
    private final String user_key;

    // Constructor
    ChatUsers(String name, int tokens, String user_key) {
        this.setType("ChatUser");
        this.name = name;
        this.tokens = tokens;
        this.user_key = user_key;
    }

    /* 'Collectable' requires getKey to help enforce KeyTypes usage */
    @Override
    protected KeyTypes getKey() {
        return ChatUsers.key;
    }

    /* 'Collectable' requires toString override
     * toString provides data based off of Static Key setting
     */
    @Override
    public String toString() {
        String output = "";
        if (KeyType.name.equals(this.getKey())) {
            output += this.name;
        } else if (KeyType.tokens.equals(this.getKey())) {
            output += this.tokens;
        } else if (KeyType.user_key.equals(this.getKey())) {
            output += this.user_key;
        } else {
            output = super.getType() + ": " + this.name + ", " + this.tokens + ", " + this.user_key;
        }
        return output;
    }

    // Test data initializer
    public static ChatUsers[] chatUsers() {
        return new ChatUsers[]{
                new ChatUsers("dash", 100, "xyz123"),
                new ChatUsers("shiny", 29312, "69420"),
                new ChatUsers("derpy", 200, "abc456"),
                new ChatUsers("pinkie", 150, "def789"),
                new ChatUsers("birdie", 4000, "ghi012")
        };
    }

// <-----------------------------------------------ALL SORTS--------------------------------------------------------------------------------------->

    // Bubble Sort implementation
    public static void bubbleSort(ChatUsers[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j].compareTo(arr[j + 1]) > 0) {
                    // Swap arr[j] and arr[j+1]
                    ChatUsers temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // Selection Sort implementation
    public static void selectionSort(ChatUsers[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j].compareTo(arr[minIndex]) < 0) {
                    minIndex = j;
                }
            }
            ChatUsers temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    // Merge Sort implementation (using compareTo)
    public static void mergeSort(ChatUsers[] arr, int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    private static void merge(ChatUsers[] arr, int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        ChatUsers[] L = new ChatUsers[n1];
        ChatUsers[] R = new ChatUsers[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];
        int i = 0, j = 0;
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i].compareTo(R[j]) <= 0) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    // Insertion Sort implementation
    public static void insertionSort(ChatUsers[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            ChatUsers key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j].compareTo(key) > 0) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    // Quick Sort implementation (using compareTo)
    public static void quickSort(ChatUsers[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(ChatUsers[] arr, int low, int high) {
        int pivot = arr[high].tokens;
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j].tokens < pivot) {
                i++;
                ChatUsers temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        ChatUsers temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

// <-----------------------------------------------ALL SORTS--------------------------------------------------------------------------------------->

    public static void main(String[] args) {
        // Inheritance Hierarchy
        ChatUsers[] objs = chatUsers();  // Array is reference type only, no methods
        List<ChatUsers> users = new ArrayList<>(Arrays.asList(objs));  // conversion required to make it a Collection
    
        // print with name
        System.out.println("before sorts:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("SORTING.....");
    
        // Bubble Sort
        long startTimeBubble = System.nanoTime();
        bubbleSort(objs);  // Sort the array using bubble sort
        long endTimeBubble = System.nanoTime();
        long durationBubble = (endTimeBubble - startTimeBubble);  // Calculating duration in nanoseconds
        System.out.println("after bubble sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of bubble sort: " + durationBubble + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Selection Sort
        long startTimeSelection = System.nanoTime();
        selectionSort(objs);  // Sort the array using selection sort
        long endTimeSelection = System.nanoTime();
        long durationSelection = (endTimeSelection - startTimeSelection);  // Calculating duration in nanoseconds
        System.out.println("\nafter selection sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of selection sort: " + durationSelection + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Merge Sort
        long startTimeMerge = System.nanoTime();
        mergeSort(objs, 0, objs.length - 1);  // Sort the array using merge sort
        long endTimeMerge = System.nanoTime();
        long durationMerge = (endTimeMerge - startTimeMerge);  // Calculating duration in nanoseconds
        System.out.println("\nafter merge sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of merge sort: " + durationMerge + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Insertion Sort
        long startTimeInsertion = System.nanoTime();
        insertionSort(objs);  // Sort the array using insertion sort
        long endTimeInsertion = System.nanoTime();
        long durationInsertion = (endTimeInsertion - startTimeInsertion);  // Calculating duration in nanoseconds
        System.out.println("\nafter insertion sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of insertion sort: " + durationInsertion + " nanoseconds");
    
        // Resetting the data
        objs = chatUsers();
    
        // Quick Sort
        long startTimeQuick = System.nanoTime();
        quickSort(objs, 0, objs.length - 1);  // Sort the array using quick sort
        long endTimeQuick = System.nanoTime();
        long durationQuick = (endTimeQuick - startTimeQuick);  // Calculating duration in nanoseconds
        System.out.println("\nafter quick sort:");
        for (ChatUsers user : objs)
            System.out.println("user:" + user + " tokens: " + user.tokens);
        System.out.println("Runtime of quick sort: " + durationQuick + " nanoseconds");
    }
}

ChatUsers.main(null);
```


```java
import java.util.*;
import java.util.Arrays;


public abstract class Collectable implements Comparable<Collectable> {
    public final String masterType = "Collectable";
    private String type;    // extender should define their data type

    // enumerated interface
    public interface KeyTypes {
        String name();
    }

    protected abstract KeyTypes getKey();    // this method helps force usage of KeyTypes

    // getter
    public String getMasterType() {
        return masterType;
    }

    // getter
    public String getType() {
        return type;
    }

    // setter
    public void setType(String type) {
        this.type = type;
    }

    // this method is used to establish key order
    public abstract String toString();

    // this method is used to compare toString of objects
    public int compareTo(Collectable obj) {
        return this.toString().compareTo(obj.toString());
    }

    // static print method used by extended classes
    public static void print(Collectable[] objs) {
        // print 'Object' properties
        System.out.println(objs.getClass() + " " + objs.length);

        // print 'Collectable' properties
        if (objs.length > 0) {
            Collectable obj = objs[0];    // Look at properties of 1st element
            System.out.println(
                    obj.getMasterType() + ": " +
                            obj.getType() +
                            " listed by " +
                            obj.getKey());
        }

        // print "Collectable: Objects'
        for (Object o : objs)    // observe that type is Opaque
            System.out.println(o);

        System.out.println();
    }

}
public class ChatUsers extends Collectable {
    // Class data
    public static KeyTypes key = KeyType.name;  // static initializer

    public static void setOrder(KeyTypes key) {
        ChatUsers.key = key;
    }

    public enum KeyType implements KeyTypes {
        name, tokens, user_key
    }

    // Instance data
    public final String name;
    public final int tokens;
    public final String user_key;

    // Constructor
    ChatUsers(String name, int tokens, String user_key) {
        this.setType("ChatUser");
        this.name = name;
        this.tokens = tokens;
        this.user_key = user_key;
    }

    /* 'Collectable' requires getKey to help enforce KeyTypes usage */
    @Override
    protected KeyTypes getKey() {
        return ChatUsers.key;
    }

    /* 'Collectable' requires toString override
     * toString provides data based off of Static Key setting
     */
    @Override
    public String toString() {
        String output = "";
        if (KeyType.name.equals(this.getKey())) {
            output += this.name;
        } else if (KeyType.tokens.equals(this.getKey())) {
            output += this.tokens;
        } else if (KeyType.user_key.equals(this.getKey())) {
            output += this.user_key;
        } else {
            output = super.getType() + ": " + this.name + ", " + this.tokens + ", " + this.user_key;
        }
        return output;
    }

    // Test data initializer
    public static ChatUsers[] chatUsers() {
        return new ChatUsers[]{
                new ChatUsers("dash", 100, "xyz123"),
                new ChatUsers("shiny", 29312, "69420"),
                new ChatUsers("derpy", 200, "abc456"),
                new ChatUsers("pinkie", 150, "def789"),
                new ChatUsers("birdie", 4000, "ghi012")

        };
    }
    // Method to perform sorting
    public void performSorting() {
        ChatUsers[] objs = chatUsers();  

        // Bubble Sort
        BubbleSort bubbleSort = new BubbleSort();
        long startTimeBubble = System.nanoTime();
        bubbleSort.sort(objs);
        long endTimeBubble = System.nanoTime();
        long durationBubble = (endTimeBubble - startTimeBubble); 
        System.out.println("Runtime of bubble sort: " + durationBubble + " nanoseconds");

        // Selection Sort
        SelectionSort selectionSort = new SelectionSort();
        long startTimeSelection = System.nanoTime();
        selectionSort.sort(objs);
        long endTimeSelection = System.nanoTime();
        long durationSelection = (endTimeSelection - startTimeSelection); 
        System.out.println("Runtime of selection sort: " + durationSelection + " nanoseconds");

        // Merge Sort
        MergeSort mergeSort = new MergeSort();
        long startTimeMerge = System.nanoTime();
        mergeSort.sort(objs, 0, objs.length - 1);
        long endTimeMerge = System.nanoTime();
        long durationMerge = (endTimeMerge - startTimeMerge); 
        System.out.println("Runtime of merge sort: " + durationMerge + " nanoseconds");

        // Insertion Sort
        InsertionSort insertionSort = new InsertionSort();
        long startTimeInsertion = System.nanoTime();
        insertionSort.sort(objs);
        long endTimeInsertion = System.nanoTime();
        long durationInsertion = (endTimeInsertion - startTimeInsertion); 
        System.out.println("Runtime of insertion sort: " + durationInsertion + " nanoseconds");

        // Quick Sort
        QuickSort quickSort = new QuickSort();
        long startTimeQuick = System.nanoTime();
        quickSort.sort(objs, 0, objs.length - 1);
        long endTimeQuick = System.nanoTime();
        long durationQuick = (endTimeQuick - startTimeQuick); 
        System.out.println("Runtime of quick sort: " + durationQuick + " nanoseconds");
    }

    public static void main(String[] args) {
        new ChatUsers().performSorting();
    }
}

// <-----------------------------------------------ALL SORTS--------------------------------------------------------------------------------------->
 // Define the bubble sort class
 
 class BubbleSort {
    public void sort(ChatUsers[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j].tokens > arr[j + 1].tokens) {
                    // Swap arr[j] and arr[j+1]
                    ChatUsers temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}

// Define the selection sort class
class SelectionSort {
    public void sort(ChatUsers[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j].tokens < arr[minIndex].tokens) {
                    minIndex = j;
                }
            }
            ChatUsers temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}

// Define the merge sort class
class MergeSort {
    public void sort(ChatUsers[] arr, int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            sort(arr, l, m);
            sort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    private void merge(ChatUsers[] arr, int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        ChatUsers[] L = new ChatUsers[n1];
        ChatUsers[] R = new ChatUsers[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];
        int i = 0, j = 0;
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i].tokens <= R[j].tokens) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}

// Define the insertion sort class
class InsertionSort {
    public void sort(ChatUsers[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            ChatUsers key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j].tokens > key.tokens) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
}

// Define the quick sort class
class QuickSort {
    public void sort(ChatUsers[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }

    private int partition(ChatUsers[] arr, int low, int high) {
        int pivot = arr[high].tokens;
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j].tokens < pivot) {
                i++;
                ChatUsers temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        ChatUsers temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}
// <-----------------------------------------------ALL SORTS--------------------------------------------------------------------------------------->
ChatUsers.main(null);
```


