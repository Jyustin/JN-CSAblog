---
toc: true
comments: true
layout: post
title: CSA MCQ review TRI 1
description: what should I review?
categories: [C1.0]
courses: { compsci: {week: 0} }
type: hacks
---

# CSA MCQ SCORE

![]({{site.baseurl}}/images/mcq1.png)

# questions wrong 



question 1:


I got this one wrong because I didn't realize that we were using an enhanced for loop, which means we don't need to access the specific index. 

 college board reason:
 The getMileage method does not have any parameters, so v.getMileage() will return the mileage for v. Please note that interface is no longer a part of the AP CSA exam. 


question 2:


I got this one wrong because I put a while loop that doesn't update. I should have paid more attention, cause i'm sure I only got it wrong b/c I rushed.


question 3:


This one I got wrong because I just went with the 1st iteration and didn't really care too much about tracing through completely. honestly, the college board
answer says it all

college board reason:

Correct. The modulus operator (%) evaluates to the remainder when the first operand is divided by the second operand. For example, 2574 % 10 evaluates to 4 the remainder when 2574 is divided by 10. In the first iteration of the loop, result is assigned 0 * 10 + 2574 % 10 or 0 + 4 or 4. The value of num is updated to 257 since the division is integer division between two int values. In the second iteration, result is assigned 4 * 10 + 257 % 10 or 40 + 7 or 47 and num is assigned 25. In the third iteration, result is assigned 47 * 10 + 25 % 10 or 470 + 5 or 475 and num is assigned 2. In the fourth iteration, result is assigned 475 * 10 + 2 % 10 or 4750 + 2 or 4752 and num is assigned 0. At this point the loop will terminate and 4752 will be printed to the screen.


I really need to work on tracing...


# final revision 

1. pay careful attention when answering while loops

2. honestly just use paper for tracing problems because theres lots of margin for error

3. understand that enchanced for loops don't need to access specific indexes.

