let btn = document.getElementById("btn");
let quote = document.getElementById("quote");
let writer = document.getElementById("writer");

//Logic

btn.addEventListener("click", async function(){
       try{
            let url = "https://type.fit/api/quotes"
            let result = await fetch(url);
            result = await result.json();

            //console.log(result.length);

            let x = Math.floor(Math.random() * 1000);
            //console.log(x);

            quote.innerText = `"${result[x].text}"`;
            writer.innerText = `-${result[x].author}`;

       }catch(error){
            document.write("Error : Check Internet Connection");
       }
        
        // console.log(result[i].text);
        // console.log(result[i].author);
        //console.log(result);
    });


