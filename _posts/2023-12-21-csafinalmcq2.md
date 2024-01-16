---
toc: true
comments: true
layout: post
title: CSA MCQ review DECEMBER
description: NOOO
categories: [C1.0]
courses: { compsci: {row: 0} }
type: APCSA
---

# CSA MCQ SCORE

![]({{site.baseurl}}/images/mcq3.png)

# questions wrong 


question 9: 

I got this one wrong because I forgot that math.random is not inclusive of the top number in the range. 

`int(Math.random * 6)` IS NOT 1-6, ITS 1-5.

for 2 number cubes we need `2 + int(Math.random * 6) + int(Math.random * 6)`

the + 2 makes it simulate the 1-6 inclusive

question 11:

Ok I just didn't understand what the method was even supposed to do. I was legit not thinking right looking at this. the method was reversing the string and testing whether or not the string was still equal to the original string.

`for (int k = str.length(); k > 0; k--)` indicates that we are traversing backwards. NOTICE THAT WE INITIALIZED K FIRST AND WE GO DOWN, NOT UP.

question 13:

I did not see we were calling mystery(3), I thought we were doing 1. I think I needed to trace through the code with more thought.

Not much to learn from this other than when testing calls of functions in mcq, ensure you know exactly whats being put in as variables.

question 28:

I didn't see in the for loop that we were starting at the value of `j + 1` in our for loop.
the original array was {1,2,3,4,5,6} but since we start 1 element later my values needed to be shifted down by 1

LOOK AT WHATS INSIDE THE FOR LOOPS THEY HELP OUT A LOT

question 30:

I didn't see that the 1st statement was all IF statements, not if else, meaning a value of 10 would run everything below it as well.

COMPARE ANSWERS TO EACH OTHER IN MULTIPLE OPTION QUESTIONS

question 31:

I was distracted by the 1st for loop too much to focus on the 2nd for loop. I also misread the grid and thought that the last column was supposed 
to be 5 even though it was only 4. 

`(if val % 2 == 1)` should have indicated that we were dealing with odd numbers, so I should have easily been able to narrow down my options 
to only odd numbers. 

question 33: 

Idk why I messed this one up to be honest. I think I thought the first one wouldn't compile, cause I didn't know what `Integer.MIN_VALUE` did.

question 34: 

I didn't realize that `listOfWords.size()` wouldn't start at 0, which I should have known considering its finding total size of the list. 

WHEN FINDING TOTAL SIZE OF LISTS, WE DON'T START AT 0, BUT WE START AT 0 FOR FINDING ARRAY INDICES.

question 35:

this one I think I just guessed because I had no energy to look into a binary search, so I just picked the most reasonable option,

WHEN LOOKING AT BINARY SEARCHES CHECK TO SEE WHAT EXACTLY THE BINARY SEARCH IS RETURNING. IN THIS CASE IT RETURNED THE INDEX, WHICH WAS 5. IT IS NOT 
RETURNING THE VALUE ITSELF.

question 38:

this one I didn't realize the function called upon itself recursively. I was actually tripped up by the first if statement which made me think we had to 
be dealing with the last term in our list, but I should have seen the recursive call to know I was dealing with recursion.

LOOK FOR RECURSION WHEN DETERMINING CODE FUNCTION SOMETIMES.

# what I should learn from this

WHAT TO REMEMBER:

LOOK FOR HINTS WITHIN THE CODE TO PUSH YOURSELF CLOSER TO THE CORRECT ANSWER.

example hints: 

- the `%` or modulus can help us narrow down to odd and even which can help if our choices differentiate based on odd or even.

- the direction the for loop travels from `k++ or k--` determines how we traverse the array and can help narrow down our options

ALSO ALWAYS LOOK AT THE FULL PICTURE. LOOKING AT INDIVIDUAL CODE SEGMENTS ONLY CONFUSES YOU.


# reflection

this quiz I kind of threw because I was kinda tired that day and also kept getting distracted so I made mistakes I wouldn't have usually made. 
I kind of winged some of the questions as a result, when I could have probably done better on a good day. Also for some problems my understanding might
have been flawed though so it might still be a fault in actual knowledge.

I also probably needed to take my time on some questions because I was mad rushing towards the end because I really wanted to just be done. I guess managing energy might honestly need to be considered on actual tests cause I can only tolerate these kinds of tests for so long before I just give up and answer whatever or rush for answers I think sound right.

29/39 is pretty bad tbh but I probably just needed to be more focused.
keeping a consistent line of thought is also really important for this test as losing your thought when tracing through methods leads to having to retrace all over again which wastes a ton of time and energy. I definetly ran into issues where my concentration broke and I had to relook at the entire problem again to get back to where I was.

This really isn't like math where I solve a bunch of big problems on a test. Its small problems that eat up lots of concentration and focus which I lack. I think if I apply the hints I picked up on though, I can shorten how much focus I need to expend on my work and thus save energy which is kind of a big importance on this test which is really weird now that im typing it out on this reflection.


