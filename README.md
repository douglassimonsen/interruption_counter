## Purpose

Sometimes you notice that meetings get rambuncious. As folks get excited, sometimes quieter voices get cut off. Oftentimes, the people doing the cutting off don't even recognize what they're doing. The goal of this tool is to log these interruptions, so that by the end of a meeting, people can look and see if they've been a good team player or not. 

## Basic Use
1. Run `python main.py` to run the flask server. It'll run on `127.0.0.1:5000`
2. To add individuals to the meeting, type each name into the textbox below "add another Person". Press Enter or click "Add" to add the individual to the matrix.
  1. Note: If you think you'll use this list again, you can click "save current list" and then next time you load the page, you can choose them in the "Choose a Saved List" textbox.
  2. If you want to remove a saved list, simply click "delete" when you have it selected
3. Once you have at least 2 people entered, you should see a matrix beginning to form.
  1. Left clicking on any of the cells will generate an interruption.
  2. If you make a mistake, simply right click to remove the most recent interruption from that cell.
4. Displays:
  1. As interruptions come in, two other areas will populate.
  2. In the interruptions scoreboard, people will be sorted by  `(interruptions) - (being interrupted)`.
  3. In the Past Interruptions, you'll get timestamped events for each interruption

![Interruption Matrix](https://github.com/douglassimonsen/interruption_counter/blob/main/docs/interruption_matrix.PNG)
![Interruption Scoreboard](https://github.com/douglassimonsen/interruption_counter/blob/main/docs/interruption_scoreboard.PNG)
![Past Interruptions](https://github.com/douglassimonsen/interruption_counter/blob/main/docs/past_interruptions.PNG)
![Name Entry](https://github.com/douglassimonsen/interruption_counter/blob/main/docs/name_entry.PNG)
