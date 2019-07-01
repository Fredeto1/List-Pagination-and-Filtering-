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
//Calling the showPage function carries the listItems function as an argument. 1 is for the first page.
showPage(listItems, 1);


//The appendPageLinksFunction-creates and appends functioning pagination links
const appendPageLinks = (list) => { 
//determines the number of pages needed
   const totalNumberOfPages = Math.ceil(list.length/itemsPerPage);
//Creates a div using the createDiv variable
   const createDiv = document.createElement("div");
//Gives the createDiv variable the class name "pagination"
      createDiv.className = "pagination";
//Appends the div just created to the .page div   
      document.querySelector(".page").appendChild(createDiv);
 //Uses the createElement method to append a ul to the div to store the pagination links     
   const ul = document.createElement("ul");
      createDiv.appendChild(ul);
//for loop adds li and a tags with the page number for each page  
      for (let x = 1; x <= totalNumberOfPages; x++) {  
//Creates the li element using the createElement method                         
         const li = document.createElement("li");
//Creates the a element using the createElement method               
         const aTag= document.createElement("a");
//adds numbers to the buttons        
         aTag.textContent= x;
//finds the correct link         
         aTag.href="#";
//adds the active class nme to the first pagination link         
        if (x===1) {
         aTag.className = "active";
        }
//Using the appendChild method to append the a to the li to the ul                 
         ul.appendChild(li);
         li.appendChild(aTag); 
      }
//Adds an event listener to each a tag that when clicked calls the showPage function to display the approprate page     
      ul.addEventListener("click",(event) => {
//holds the clicked link value         
         const linkClink= event.target;
//targets the correct link         
         const pageNumber= event.target.textContent;
//calls the showPage function and passes the global variable listItems (student info) and the local variable pageNumber (the correct link)
         showPage(listItems,pageNumber);
         const allLinks= document.querySelectorAll("a");
 //Loops over the pagination links to remove the active class from all the links        
      for (let y=0; y < allLinks.length; y++) {  
         allLinks[y].className = "none";
      }
//adds the active class to the clicked link
      linkClink.className = "active";
      });   
}
//Calling the appendPageLinks function and passes the listItems variable as an argument.
appendPageLinks(listItems); 