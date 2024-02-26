---
toc: True
comments: True
layout: notebook
title: APCSA FRQ QUESTION 2
description: java skill check
courses: {'compsci': {'row': 0}}
type: APCSA
---

# QUESTION 2

Consider a guessing game in which a player tries to guess a hidden word. The hidden word contains only capital letters and has a length known to the player. A guess contains only capital letters and has the same length as the hidden word.

After a guess is made, the player is given a hint that is based on a comparison between the hidden word and the guess. Each position in the hint contains a character that corresponds to the letter in the same position in the guess. The following rules determine the characters that appear in the hint.

The HiddenWord class will be used to represent the hidden word in the game. The hidden word is passed to the constructor. The class contains a method, getHint, that takes a guess and produces a hint.

For example, suppose the variable puzzle is declared as follows.

HiddenWord puzzle = new HiddenWord("HARPS");

The following table shows several guesses and the hints that would be produced.

Write the complete HiddenWord class, including any necessary instance variables, its constructor, and the method, getHint, described above. You may assume that the length of the guess is the same as the length of the hidden word.

### my attempt at the problem:


```java
public class HiddenWord(String puzzle) {
    public String puzzle = "test";

    public static String getHint(String puzzle, String guess) {
        for (int i = 0; i < puzzle.length(); i++) {
            if (puzzle.charAt(i) == guess.charAt(i)) {
                return puzzle.charAt(i);
                else {
                    if (puzzle.contains(guess)) {
                        return "+";
                        else {
                            return "*";
                        }
                }
            }
        }
    }
}
}
```

# actual answer compiled into running code:


```java
public class HiddenWord {
    private String word;

    // Constructor to initialize the hidden word
    public HiddenWord(String hWord) {
        word = hWord;
    }

    // Method to generate a hint based on the guess
    public String getHint(String guess) {
        String hint = "";

        // Loop through each character in the guess
        for (int i = 0; i < guess.length(); i++) {
            // Check if the character in the guess matches the character in the same position in the hidden word
            if (guess.substring(i, i + 1).equals(word.substring(i, i + 1))) {
                hint += guess.substring(i, i + 1); // If match, append the character to hint
            } else if (word.indexOf(guess.substring(i, i + 1)) != -1) {
                hint += "+"; // If the character exists in the hidden word but not in the correct position, append '+'
            } else {
                hint += "*"; // If the character doesn't exist in the hidden word, append '*'
            }
        }

        return hint;
    }
}

```

# FRQ reflection

This frq relies on analyzing strings and characters in each string, then comparing those characters in one string to another string. 

The frq also tests your ability to use constructors in classes and pass them to methods.

Key algorithm: using .substring and if else statements to determine if character at index is present in puzzle word.

