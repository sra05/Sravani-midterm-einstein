const url = 'https://upadhayay.github.io/db.json'
async function researchTitle(){
    const response = await fetch(url);
    const jsonData = await response.json();

    let placeholder = document.querySelector("#row1");
    let out = "";
    for(let book of jsonData.books){
        if(book.published == true){
            out += `
            <a id="research-redirection" href="https://einsteinpapers.press.princeton.edu/" target="_blank">
            <div id="rw1">
            
            <img class="research-image" src="images/research-cover.jpg">
                <div class="research-title"><p style="margin: 0;">${book.title}</p> </div>
            </div>
            </a>
            

        `;
        }
        
    }
    
    placeholder.innerHTML = out;

}
researchTitle();
