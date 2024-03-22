---

---

```python
public class Example 
{
    // instance variables
    private String var1;
    private int var2;

    // Constructor
    public Example(String initVar1, int initVar2)
    {
        var1 = initVar1;
        var2 = initVar2;
    }

    // Method to print instance variable values, again NOT 
    public void print()
    {
        System.out.println("Var1: " + var1);
        System.out.println("Var2: " + var2);
    }

    // Main method for testing, NOT NEEDED FOR TEST USUALLY
    public static void main(String[] args)
    {
        // Creating instances of Example class
        Example e1 = new Example("Value1", 10);
        Example e2 = new Example("Value2", 20);

        // Calling print method for each instance
        e1.print();
        e2.print();
    }
}

```
