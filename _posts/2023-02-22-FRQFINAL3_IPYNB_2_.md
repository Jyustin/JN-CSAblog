---
toc: True
comments: True
layout: notebook
title: APCSA FRQ QUESTION 3
description: java skill check
courses: {'compsci': {'row': 0}}
type: APCSA
---

# QUESTION 3

A two-dimensional array of integers in which most elements are zero is called a sparse array. Because most elements have a value of zero, memory can be saved by storing only the non-zero values along with their row and column indexes. The following complete SparseArrayEntry class is used to represent non-zero elements in a sparse array. A SparseArrayEntry object cannot be modified after it has been constructed.


```Java
public class SparseArrayEntry
{
 /** The row index and column index for this entry in the sparse array */
 private int row;
 private int col;
 /** The value of this entry in the sparse array */
 private int value;
 /** Constructs a SparseArrayEntry object that represents a sparse array element
* with row index r and column index c, containing value v.
 */
 public SparseArrayEntry(int r, int c, int v)
 {
 row = r;
 col = c;
 value = v;
 }
 /** Returns the row index of this sparse array element. */
 public int getRow()
 { return row; }
 /** Returns the column index of this sparse array element. */
 public int getCol()
 { return col; }
 /** Returns the value of this sparse array element. */
 public int getValue()
 { return value; }
} 
```

 The SparseArray class represents a sparse array. It contains a list of SparseArrayEntry objects, each
of which represents one of the non-zero elements in the array. The entries representing the non-zero elements are
stored in the list in no particular order. Each non-zero element is represented by exactly one entry in the list.


```Java
public class SparseArray
{
 /** The number of rows and columns in the sparse array. */
 private int numRows;
 private int numCols;
 /** The list of entries representing the non-zero elements of the sparse array. Entries are stored in the
* list in no particular order. Each non-zero element is represented by exactly one entry in the list.
 */
 private List<SparseArrayEntry> entries;
 /** Constructs an empty SparseArray. */
 public SparseArray()
 { entries = new ArrayList<SparseArrayEntry>(); }
 /** Returns the number of rows in the sparse array. */
 public int getNumRows()
 { return numRows; }
 /** Returns the number of columns in the sparse array. */
 public int getNumCols()
 { return numCols; }
 /** Returns the value of the element at row index row and column index col in the sparse array.
* Precondition: 0  row < getNumRows()
 * 0  col < getNumCols()
 */
 public int getValueAt(int row, int col)
 { /* to be implemented in part (a) */ }
 /** Removes the column col from the sparse array.
* Precondition: 0  col < getNumCols()
 */
 public void removeColumn(int col)
 { /* to be implemented in part (b) */ }
 // There may be instance variables, constructors, and methods that are not shown.
} 
```

(a) Write the SparseArray method getValueAt. The method returns the value of the sparse array element at a given row and column in the sparse array. If the list entries contains an entry with the specified row and column, the value associated with the entry is returned. If there is no entry in entries corresponding to the specified row and column, 0 is returned.
In the example above, the call sparse.getValueAt(3, 1) would return -9, and sparse.getValueAt(3, 3) would return 0.

Complete method getValueAt below.

# my ans


```Java
public int getValueAt(int row, int col)
 { 
    return entries[row][col];
}


```

(b) Write the SparseArray method removeColumn. After removing a specified column from a sparsearray:

All entries in the list entries with column indexes matching col are removed from the list.

All entries in the list entries with column indexes greater than col are replaced by entries with column indexes that are decremented by one (moved one column to the left).

The number of columns in the sparse array is adjusted to reflect the column removed.

The sample object sparse from the beginning of the question is repeated for your convenience.

# my ans


```Java
 /** Removes the column col from the sparse array.
* Precondition: 0  col < getNumCols()
 */
public void removeColumn(int col)
{
    for (int i = 0; i < numRows; i++){
        remove(i, col); 
    }
    for (int i = 0; i < numRows; i++){
    (i, col) = (i, col + 1)    
}
}
```

# actual answer compiled into running code:


```Java
import java.util.ArrayList;
import java.util.List;

public class SparseArrayExample {

    public static void main(String[] args) {
        // Example run
        SparseArray sparseArray = new SparseArray(3, 4);
        sparseArray.setValueAt(0, 1, 5);
        sparseArray.setValueAt(1, 2, 3);
        sparseArray.setValueAt(2, 3, 7);

        System.out.println("Value at (0, 1): " + sparseArray.getValueAt(0, 1)); // Output: 5
        System.out.println("Value at (1, 2): " + sparseArray.getValueAt(1, 2)); // Output: 3
        System.out.println("Value at (2, 3): " + sparseArray.getValueAt(2, 3)); // Output: 7

        sparseArray.removeColumn(2);

        System.out.println("After removing column 2:");
        System.out.println("Value at (0, 1): " + sparseArray.getValueAt(0, 1)); // Output: 5
        // Column 2 is removed, so this should return 0
        System.out.println("Value at (1, 2): " + sparseArray.getValueAt(1, 2)); // Output: 0
        System.out.println("Value at (2, 2): " + sparseArray.getValueAt(2, 2)); // Output: 7
    }
}

class SparseArrayEntry {
    private int row;
    private int col;
    private int value;

    public SparseArrayEntry(int r, int c, int v) {
        row = r;
        col = c;
        value = v;
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }

    public int getValue() {
        return value;
    }
}

class SparseArray {
    private int numRows;
    private int numCols;
    private List<SparseArrayEntry> entries;

    public SparseArray(int rows, int cols) {
        numRows = rows;
        numCols = cols;
        entries = new ArrayList<>();
    }

    public int getNumRows() {
        return numRows;
    }

    public int getNumCols() {
        return numCols;
    }

    public int getValueAt(int row, int col) {
        for (SparseArrayEntry e : entries) {
            if (e.getRow() == row && e.getCol() == col) {
                return e.getValue();
            }
        }
        return 0;
    }

    public void setValueAt(int row, int col, int value) {
        entries.add(new SparseArrayEntry(row, col, value));
    }

    public void removeColumn(int col) {
        int i = 0;
        while (i < entries.size()) {
            SparseArrayEntry e = entries.get(i);
            if (e.getCol() == col) {
                entries.remove(i);
            } else if (e.getCol() > col) {
                entries.set(i, new SparseArrayEntry(e.getRow(), e.getCol() - 1, e.getValue()));
                i++;
            } else {
                i++;
            }
        }
        numCols--;
    }
}

SparseArrayExample.main(null);
```

    Value at (0, 1): 5
    Value at (1, 2): 3
    Value at (2, 3): 7
    After removing column 2:
    Value at (0, 1): 5
    Value at (1, 2): 0
    Value at (2, 2): 7


# reflection

ok I had no idea what to make of this tbh but I will try.

I know that this frq was testing knowledge of 2d array traversal, but after looking at the answer and doing some looking around I think this is more testing
knowledge of objects in java. 

we have  `public int getValue()` and other get methods which let us return our objects, as well as `public int getValueAt(int row, int col)` which gets a value using a row and col value which we got from getrow and getcol methods.

remove column method looks like a key algorithm, and has parallels to delete methods within backend of project.
