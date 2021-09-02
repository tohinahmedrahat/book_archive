// get element from html file 
const searchBtn = document.getElementById("search-btn");
const inputField = document.getElementById("input-field");

// searchBook function declear
const searchBook = () =>{
    const input = inputField.value;
    inputField.value = "";
    if(input === ""){
      console.log("input your name")
    }else{
       const url = `https://openlibrary.org/search.json?q=${input}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchBookToApi (data.docs))
    }
    
   
}
// declear searchBooktoapi function to show search result userinteface 
const searchBookToApi = (data) => {
    const searchResult = document.getElementById("search-result-section");
    const resultCount = document.getElementById("result-count");
    const showCount = document.getElementById("show-count");
    // how many result fund
    const count = data.length;

    // take 9 result from api 
    const book=data.slice(0 , 9);
    searchResult.innerText="";
    book.forEach(books => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML= `
            <div class="card">
            
              <div class="card-body">
                <h5 class="card-title">${books.title}</h5>
                <p class="card-text">
                  Author-Name:${books.author_name}
                </p>
                <p> publisher : ${books.publisher} </p>
                <p>first-publish-year:${books.first_publish_year}</p>
                <a href="" onclick="bookImg()" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            `
            searchResult.appendChild(div);

            // show find result count 
            showCount.classList.remove("d-none");
            resultCount.innerText = count;
        
    });
}
// add searchBtn function 
searchBtn.addEventListener("click",searchBook)



