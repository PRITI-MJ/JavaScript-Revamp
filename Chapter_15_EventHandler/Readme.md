Event: Mouse move, click. double click
Event Listner: Listening the event(click)
Event Action: Strike is coming



3 phases of EVENT LISTENER:-
Capture Phase
Target Phase
Bubling Phase

Capture Phase => If its true, then it will print while going down the DOM tree.
If it is false, then it will print during the bubling phase.
(By default it is set to false during event)


Target Phase => Once it reach the target phase, bubling phase starts

Bubling phase => It will start executing the event as soon as it does up in the DOM tree.

