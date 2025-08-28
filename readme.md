1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
I can select an element by its id using getElementById. Using getElementsByClassName, I can select multiple elements by their class name. With querySelector, I can select either an id or a class. Using querySelectorAll, I can select all elements with a specific id or class and work with them in JavaScript.


2.How do you create and insert a new element into the DOM?
Ans:
Inside the DOM, a new element can be created using document.createElement()

3.What is Event Bubbling and how does it work?
Ans:
When I click on any element in the DOM, the event is passed directly up to its parent element and works there… this is called Event Bubbling.\

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation is a concept in JavaScript where an event listener is attached to a parent element. It is very useful because it makes the code easier to read, more understandable, and easier to maintain. It doesn’t use much memory and is a simple yet powerful concept. Using event listeners in this way is very good for the quality of the code.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault()  Stops the default behavior of the event.and stopPropagation() Prevents the event from reaching parent elements during the capturing or bubbling phase.
