/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

const listItems = document.querySelectorAll(".student-item"); //Stores the student list items from the student list 
const itemsPerPage = 10; //Stores the number of items to show per page which is set to 10 


//The showPage Function-hides all the items in the list except the ten you want to show                           
const showPage = (list, page) => { 
   //A local variable: (page number-10)-10 = the first item shown
   const startIndex = (page * itemsPerPage) - itemsPerPage; 
   //A local variable : page number-10 = the last item shown
   const endIndex = page * itemsPerPage;  
   //For loop to to display any list item with an index greater than or equal to the startIndex variable and less than the endIndex variable                    
   for (let i = 0; i < list.length; i++) {   
      //The if statment produces 10 items per page      
      if (i >= startIndex && i < endIndex) {      
         //Shows the desired items on the page. The CSS list-style-type property is used to define the style of the list item marker
         list[i].style.display = "block";                  
      } else {
         //Hides the unwanted items from the page. The CSS list-style-type property is used to define the style of the list item marker
         list[i].style.display = "none";                    
      }
   }
} 
 //Calling the showPage function carries the listItems function as a parameter. 1  is for the first page.
showPage(listItems, 1);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
//const showPage = (list, page) => { 
//Loop over items in the list parameter 
//-- If the index of a list item is >= the index of the first item that should be shown on the page -- && the list item index is <= the index of the last item 
//	that should be shown on the page, show it */ } 
   



