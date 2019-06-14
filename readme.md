Task: Write a class that implements the ShipmentUpdateListenerInterface for the code below.

Background:
The ShipmentUpdateListenerInterface will get updates passed to it (from some external system, REST interface, Queue system or something similar). It has to update the ShipmentSearchIndex with the new data of the shipment. (In the implementation below it is abstracted away.) The code above should be not modified.
Restrictions:
Ensure that whenever receiveUpdate is called, as a consequence updateShipment of the ShipmentSearchIndex is also called once, with the corresponding data and id passed to it.
Also make sure that the executions of updateShipment with the same id never run concurrently (execution always in order and consecutive). Assume all the code is running in one NodeJS process (or browser window/tab)..

Hint: Think about scalable and maintainable ways to implement the restrictions. You can implement additional classes/interfaces/functions if you need to structure functionality further.
