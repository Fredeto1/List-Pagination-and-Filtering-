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
const appendPageLinks = (list) => { 
   const totalNumberOfPages = Math.ceil(list.length/itemsPerPage);
   const createDiv = document.createElement("div");
      createDiv.className = "pagination";
      document.querySelector(".page").appendChild(createDiv);
   const ul = document.createElement("ul");
      createDiv.appendChild(ul);
      for (let x = 1; x <= totalNumberOfPages; x++) {  
         const li = document.createElement("li");
         const aTag= document.createElement("a");
         aTag.textContent= x;
         aTag.href="#";
        if (x===1) {
         aTag.className = "active";
        }
         ul.appendChild(li);
         li.appendChild(aTag); 
      }
      

      ul.addEventListener("click",(event) => {

         const linkClink= event.target;
         const pageNumber= event.target.textContent;
         showPage(listItems,pageNumber);
         const allLinks= document.querySelectorAll("a");
      for (let y=0; y < allLinks.length; y++) {  
         allLinks[y].className = "none";
      }
      linkClink.className = "active";
      });   
}
appendPageLinks(listItems); 