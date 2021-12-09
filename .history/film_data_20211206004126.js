function reset() {
    while (document.querySelector('iframe') != null) {
        document.querySelector('iframe').remove();
    }
    while (document.querySelector('img') != null) {
        document.querySelector('img').remove();
    }

    let tble = document.querySelector('#tb');
    tble.innerHTML = "";
    while (document.querySelector('h2') != null) {
        document.querySelector('h2').remove();
    }

}
let inp = document.querySelector('input');
let but = document.querySelector('button')



// but.onclick = () => {
//     fetch(`https://www.omdbapi.com/?t=${inp.value}&apikey=a5b97ecf`)
//         .then((res) => { return res.json(); })
//         .then((data) => {

//             if (data.Response == 'False') {
//                 reset();
//                 let p = document.createElement('h2');
//                 p.append(`${data.Error} \n Check the spelling once`);
//                 p.style.color = 'white';
//                 document.querySelector('#leftbox').appendChild(p);

//             } else {
//                 reset();
//                 let tble = document.querySelector('#tb');
//                 let row1 = tble.insertRow(0);
//                 let cell11 = row1.insertCell(0);
//                 let cell12 = row1.insertCell(1);
//                 let row2 = tble.insertRow(1);
//                 let cell21 = row2.insertCell(0);
//                 let cell22 = row2.insertCell(1);
//                 let row3 = tble.insertRow(2);
//                 let cell31 = row3.insertCell(0);
//                 let cell32 = row3.insertCell(1);
//                 let row4 = tble.insertRow(3);
//                 let cell41 = row4.insertCell(0);
//                 let cell42 = row4.insertCell(1);
//                 let row5 = tble.insertRow(4);
//                 let cell51 = row5.insertCell(0);
//                 let cell52 = row5.insertCell(1);
//                 let row6 = tble.insertRow(5);
//                 let cell61 = row6.insertCell(0);
//                 let cell62 = row6.insertCell(1);
//                 let video = document.createElement('iframe');
//                 video.height = 400;
//                 video.width = 900;
//                 let img = document.createElement('img');
//                 let divi1 = document.querySelector('#leftbox');
//                 divi1.appendChild(img);

//                 fetch(`https://imdb-api.com/en/API/SearchMovie/k_3pxoshah/${inp.value}`)
//                     .then(res => { return res.json(); })
//                     .then((data) => { return data.results[0].id })
//                     .then((title) => {

//                         fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_3pxoshah/${title}`)
//                             .then((res) => { console.log(res); return res.json() })
//                             .then((data) => {
//                                 console.log(data.videoUrl);
//                                 if (data.videoUrl == null) {
//                                     let box = document.querySelector("#rightbox");
//                                     let h = document.createElement('h2');
//                                     h.textContent = "Trailer not available >_<"
//                                     h.style.color = 'white';
//                                     box.appendChild(h);
//                                 } else {
//                                     let url = `${data.videoUrl.replace('watch?v=', 'embed/')}`;
//                                     video.src = `${url}`;
//                                     let divi = document.querySelector("#rightbox");
//                                     divi.appendChild(video);
//                                 }



//                             })

//                     })
//                     .catch((err) => { console.log(err); })


//                 img.src = data.Poster;
//                 img.style.display = 'block';
//                 img.alt = "image couldn't load -_-";
//                 img.style.color = 'white';

//                 //row for actor details

//                 row1.style.fontSize = 20;
//                 row1.style.fontFamily = 'Karma';
//                 cell11.style.color = '#E85A4F';

//                 cell12.style.color = 'white';
//                 cell11.style.paddingRight = 50;
//                 cell12.style.width = 700;
//                 cell11.innerHTML = 'Actors';
//                 cell12.innerHTML = `${data.Actors}`;






//                 //row for director detail

//                 row2.style.fontSize = 20;
//                 row2.style.fontFamily = 'Karma';
//                 cell21.style.color = '#E85A4F';

//                 cell22.style.color = 'white';
//                 cell21.style.paddingRight = 50;
//                 cell22.style.width = 700;
//                 cell21.innerHTML = 'Director';
//                 cell22.innerHTML = `${data.Director}`;


//                 //row for genre detail

//                 row3.style.fontSize = 20;
//                 row3.style.fontFamily = 'Karma';
//                 cell31.style.color = '#E85A4F';

//                 cell32.style.color = 'white';
//                 cell31.style.paddingRight = 50;
//                 cell32.style.width = 700;
//                 cell31.innerHTML = 'Genre';
//                 cell32.innerHTML = `${data.Genre}`;


//                 //row for plot

//                 row4.style.fontSize = 20;
//                 row4.style.fontFamily = 'Karma';
//                 cell41.style.color = '#E85A4F';

//                 cell42.style.color = 'white';
//                 cell41.style.paddingRight = 50;
//                 cell42.style.width = 700;
//                 cell41.innerHTML = 'Plot';
//                 cell42.innerHTML = `${data.Plot}`;

//                 //row for movie time
//                 row5.style.fontSize = 20;
//                 row5.style.fontFamily = 'Karma';
//                 cell51.style.color = '#E85A4F';

//                 cell52.style.color = 'white';
//                 cell51.style.paddingRight = 50;
//                 cell52.style.width = 700;
//                 cell51.innerHTML = 'Duration';
//                 let time = parseInt(data.Runtime);
//                 cell52.innerHTML = `${Math.floor(time/60)} hr ${time%60} min`;


//                 //imdb rating
//                 row6.style.fontSize = 20;
//                 row6.style.fontFamily = 'Karma';
//                 cell61.style.color = '#E85A4F';

//                 cell62.style.color = 'white';
//                 cell61.style.paddingRight = 50;
//                 cell62.style.width = 700;
//                 cell61.innerHTML = 'imdbRating';

//                 cell62.innerHTML = `${data.imdbRating}/10`;









//             }


//         })
// }

but.onclick = () => {
    fetch(`https://imdb-api.com/en/API/SearchTitle/k_3pxoshah/${inp.value}`)
        .then((res) => { return res.json(); })
        .then((data) => {
            let div = document.createElement('div');


            document.body.appendChild(div);

            for (let i of data.results) {
                // console.log(i);
                // let img = document.createElement('img');
                // img.src = i.image;
                // img.style.display = 'block';
                // img.alt = "image couldn't load -_-";
                // img.style.color = 'white';
                // img.height = 455;
                // img.width = 350;
                // let divi1 = document.querySelector('#leftbox');
                // divi1.appendChild(img);

                // let div1 = document.createElement('div');
                // div1.setAttribute('class', "card");
                // let img = document.createElement('img');
                // img.setAttribute('class', 'card-img-top');
                // img.src = i.image;
                // img.style.display = 'block';
                // img.height = 455;
                // img.width = 350;
                // img.style.float = 'left';
                // img.style.marginLeft = 20;
                // div1.appendChild(img);
                // let div2 = document.createElement('div');
                // div2.setAttribute('class', 'card-body');
                // let head = document.createElement('h5');
                // head.setAttribute('class', 'card-title');
                // head.innerText = i.title;
                // head.style.color = 'white';
                // div1.appendChild(div2);
                // document.body.appendChild(div1);

                let div1 = document.createElement('div');

                let img = document.createElement('img');
                img.src = i.image;
                img.style.display = 'block';
                img.height = 455;
                img.width = 350;
                div1.style.float = 'left';
                img.style.marginLeft = 20;

                div1.style.marginTop = 20;
                div1.appendChild(img);
                let p = document.createElement('h3');
                p.innerText = i.title;
                p.style.textAlign = 'center';
                p.style.color = '#D8C3A5';
                div1.appendChild(p);
                div.appendChild(div1);







            }













        })










}