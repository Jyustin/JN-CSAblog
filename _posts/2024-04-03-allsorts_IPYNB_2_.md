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

# reflection on performance 

STRENGTHS:

Our idea was simple yet effective and didn't overcomplicate things.

the sorting was well explained and understandable.

The physical performance was pretty good.

I think our idea was most entertaining out of all other groups, especially in thanks to the script we had.

WORK ON:

We could have implemented more cool props, like we intended on having a wig for Rachit but forgot.

Audience interaction could have been emphasized, our performance didn't have any audience call outs or any interactions.

I think since a lot of groups had a rap we could have added something like that to make our project feel more "fun".

I have musical skill so I could have accomplished this but I didn't really have any ideas that would be better than using professional music.

Reflection:

Good planning and having a strong script was ultimately what carried us and even gave us the chance to win. we definetly wouldn't have succeeded if we hadn't had a strong script and a strong plan before we even started practicing. I also had an idea at the time for our performance but I threw it away in preference for our teams's script because I realized it was more suitable for the audience, so I learned that sometimes you need to put away pride and do what is best for the team in the end.

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

    before sorts:
    user:dash tokens: 100
    user:shiny tokens: 29312
    user:derpy tokens: 200
    user:pinkie tokens: 150
    user:birdie tokens: 4000
    SORTING.....
    after bubble sort:
    user:birdie tokens: 4000
    user:dash tokens: 100
    user:derpy tokens: 200
    user:pinkie tokens: 150
    user:shiny tokens: 29312
    Runtime of bubble sort: 66315 nanoseconds
    
    after selection sort:
    user:birdie tokens: 4000
    user:dash tokens: 100
    user:derpy tokens: 200
    user:pinkie tokens: 150
    user:shiny tokens: 29312
    Runtime of selection sort: 32805 nanoseconds
    
    after merge sort:
    user:birdie tokens: 4000
    user:dash tokens: 100
    user:derpy tokens: 200
    user:pinkie tokens: 150
    user:shiny tokens: 29312
    Runtime of merge sort: 25330 nanoseconds
    
    after insertion sort:
    user:birdie tokens: 4000
    user:dash tokens: 100
    user:derpy tokens: 200
    user:pinkie tokens: 150
    user:shiny tokens: 29312
    Runtime of insertion sort: 14508 nanoseconds
    
    after quick sort:
    user:dash tokens: 100
    user:pinkie tokens: 150
    user:derpy tokens: 200
    user:birdie tokens: 4000
    user:shiny tokens: 29312
    Runtime of quick sort: 12169 nanoseconds


# to do
make it so instead of sort(obj) it should be obj.sort;

How?



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

    public int getTokens() {
        return tokens;
    }

    public static void main(String[] args) {
        // Create a linked list and add ChatUsers to it
        //LinkedList<ChatUsers> users = new LinkedList<>();
        CustomLinkedList<ChatUsers> users = new CustomLinkedList<>();

        users.add(new ChatUsers("dash", 100, "xyz123"));
        users.add(new ChatUsers("shiny", 29312, "69420"));
        users.add(new ChatUsers("derpy", 200, "abc456"));
        users.add(new ChatUsers("pinkie", 150, "def789"));
        users.add(new ChatUsers("birdie", 4000, "ghi012"));

        // Print the users before sorting
        System.out.println("Before sort:");
        printer.printList(users);

        // Sort the users by tokens
        //InsertionSort.sort(users);
        users.insertionSort(users);

        // Print the users after sorting
        System.out.println("After sort:");
        printer.printList(users);
    }
}

public class printer {
    public static void printList(List<ChatUsers> list) {
        for (ChatUsers c : list) {
            System.out.println(c.toString() + " - Tokens: " + c.getTokens());
        }
    }
}

public class CustomLinkedList<T> extends LinkedList<T> {
    
    public CustomLinkedList(){
        super();
    }

    public void insertionSort(CustomLinkedList<ChatUsers> list) {
        for (int i = 1; i < list.size(); i++) {
            ChatUsers key = list.get(i);
            int j = i - 1;

            // Move elements of list[0..i-1] that are greater than key, to one position ahead
            // of their current position
            while (j >= 0 && list.get(j).getTokens() > key.getTokens()) {
                list.set(j + 1, list.get(j));
                j = j - 1;
            }
            list.set(j + 1, key);
        }
    }
}
ChatUsers.main(null);

```

    Before sort:
    dash - Tokens: 100
    shiny - Tokens: 29312
    derpy - Tokens: 200
    pinkie - Tokens: 150
    birdie - Tokens: 4000
    After sort:
    dash - Tokens: 100
    pinkie - Tokens: 150
    derpy - Tokens: 200
    birdie - Tokens: 4000
    shiny - Tokens: 29312

