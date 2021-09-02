// search books
const searchBook = () =>  {
        // counts results id:
 
  const result = document.getElementById('result');
              // input search fild id:
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    
    
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
  
    // fatch call:
fetch(url)
.then(res => res.json())
.then(data => displaysearchResult(data.docs));
}
//  dusplay results:
const displaysearchResult = books => {
// counts results show:
  result.innerHTML = `<h4 class="text-center text-success">Search Result ${books.length} found</h4>
  `;
   // input search fild result show:
    const searchResult = document.getElementById('search-result');
    // clear dom:
    searchResult.innerHTML = '';
    // call forEach
   books.forEach(book => {
       console.log(book);
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
    <div class="card h-100 p-3 border rounded-3">
       <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Book Title: ${book.title}</h5>
         <h5 class="card-title">Author Name: ${book.author_name}</h5>
         <h5 class="card-title">First Publish Year: ${book.first_publish_year}</h5>
         <h5 class="card-title">Publisher: ${book.publisher}</h5>
       </div>
     </div>`;
    //  call append child:
     searchResult.appendChild(div);
   })
    
}