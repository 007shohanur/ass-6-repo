
const error = document.getElementById('error');
const result = document.getElementById('result');
const searchField = document.getElementById('search-field');
const searchBook = () =>  {
  error.innerHTML = '';
    const searchText = searchField.value;
    if(searchField.value === ''){
      error.innerHTML = `<p>File is emty</p>`;
      return;
    }

    
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
  
    // fatch call:
fetch(url)
.then(res => res.json())
.then(data => displaysearchResult(data.docs));
searchField.value = '';
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
    // error message
    if(books.length === 0){
    error.innerHTML = `<p">No Results Found</p>`;
    }
    
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
  
