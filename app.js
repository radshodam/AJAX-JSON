// // Ajax
// document.querySelector('#button').addEventListener('click', loadData)

// function loadData(){
//     const xhr = new XMLHttpRequest()

//     xhr.open('GET', './data.txt', true)

//     xhr.onload = function(){
//         if (this.status === 200) {
//             document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     xhr.send()
// }

// Ajax RadshodaM

//01dastresi be oun event amalgar

document.querySelector("#button").addEventListener("click", loadData);

// 02 sakht yek sheii jadid az jens XMLHttpRequest

function loadData() {

    const xhr = new XMLHttpRequest();

    //02 open kardan xhr

    xhr.open('Get', 'employees.json', true);

    //03 onload() kon hala xhr ro ba sharti baraie dorosti yek function

    xhr.onload = function() {

        //agar status===200 va ya readyState=== 4 bood doroste. (yekish kafie)

        if (this.status === 200) {

            //chizi ke baiad namiesh dade shavad dar #outpu inja tarif mishavad
      // ghesmatie ke dar inja json mored estefade gharar migirad ta dar output namayesh dade shavad
    //   document.querySelector("#output").innerHTML = `khanevadeye man: ${this.responseText}`;
    // besoratbala minevisim besorate string barmigardanad ma bayad string ra be arraye
     //va bad peymayesh arrayebta tak tak  object beresim

     const response = JSON.parse(this.responseText)
    //  console.log(response);
    // bad az tabdil be arraye hala foreach mikonim
    //ta har araye ma yek object joda bedahad
    //dar output berize 
    
    let output=''
    response.forEach(khanevade => {
        output +=`
        <ul>
            <li>id:${khanevade.id}</li>
            <li>Name:${khanevade.Name}</li>
            <li>job:${khanevade.job}</li>
            <li>nesbat:${khanevade.nesbat}</li>
            <li>farzandan:${khanevade.farzandan}</li>
        </ul>`
    });
    document.querySelector("#output").innerHTML=output


    }
  };
  xhr.send();
}
