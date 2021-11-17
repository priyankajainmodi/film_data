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
    // let tble = document.querySelector('#tb');
    // let row1 = tble.insertRow(0);
    // let cell11 = row1.insertCell(0);
    // let cell12 = row1.insertCell(1);
    // let row2 = tble.insertRow(1);
    // let cell21 = row2.insertCell(0);
    // let cell22 = row2.insertCell(1);
    // let row3 = tble.insertRow(2);
    // let cell31 = row3.insertCell(0);
    // let cell32 = row3.insertCell(1);
    // let row4 = tble.insertRow(3);
    // let cell41 = row4.insertCell(0);
    // let cell42 = row4.insertCell(1);
    // let row5 = tble.insertRow(4);
    // let cell51 = row5.insertCell(0);
    // let cell52 = row5.insertCell(1);
    // let row6 = tble.insertRow(5);
    // let cell61 = row6.insertCell(0);
    // let cell62 = row6.insertCell(1);
    // let video = document.createElement('iframe');
    // video.height = 400;
    // video.width = 900;
    // let img = document.createElement('img');
    // let divi1 = document.querySelector('#leftbox');
    // divi1.appendChild(img);


but.onclick = () => {
    fetch(`https://www.omdbapi.com/?t=${inp.value}&apikey=a5b97ecf`)
        .then((res) => { return res.json(); })
        .then((data) => {

            if (data.Response == 'False') {
                reset();
                let p = document.createElement('h2');
                p.append(data.Error);
                p.style.color = 'white';
                document.querySelector('#leftbox').appendChild(p);

            } else {
                reset();
                let tble = document.querySelector('#tb');
                let row1 = tble.insertRow(0);
                let cell11 = row1.insertCell(0);
                let cell12 = row1.insertCell(1);
                let row2 = tble.insertRow(1);
                let cell21 = row2.insertCell(0);
                let cell22 = row2.insertCell(1);
                let row3 = tble.insertRow(2);
                let cell31 = row3.insertCell(0);
                let cell32 = row3.insertCell(1);
                let row4 = tble.insertRow(3);
                let cell41 = row4.insertCell(0);
                let cell42 = row4.insertCell(1);
                let row5 = tble.insertRow(4);
                let cell51 = row5.insertCell(0);
                let cell52 = row5.insertCell(1);
                let row6 = tble.insertRow(5);
                let cell61 = row6.insertCell(0);
                let cell62 = row6.insertCell(1);
                let video = document.createElement('iframe');
                video.height = 400;
                video.width = 900;
                let img = document.createElement('img');
                let divi1 = document.querySelector('#leftbox');
                divi1.appendChild(img);

                fetch(`https://imdb-api.com/en/API/SearchMovie/k_3pxoshah/${inp.value}`)
                    .then(res => { return res.json(); })
                    .then((data) => { return data.results[0].id })
                    .then((title) => {

                        fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_3pxoshah/${title}`)
                            .then((res) => { console.log(res); return res.json() })
                            .then((data) => {
                                console.log(data);
                                if (data.videoUrl == "") {
                                    let box = document.querySelector("#rightbox");
                                    let h = document.createElement('h2');
                                    h.textContent = "Trailer not available >_<"
                                    h.style.color = 'white';
                                    box.appendChild(h);
                                } else {
                                    let url = `${data.videoUrl.replace('watch?v=', 'embed/')}`;
                                    video.src = `${url}`;
                                    let divi = document.querySelector("#rightbox");
                                    divi.appendChild(video);
                                }



                            })

                    })
                    .catch((err) => { console.log(err); })


                img.src = data.Poster;
                img.style.display = 'block';
                img.alt = "image couldn't load -_-";
                img.style.color = 'white';

                //row for actor details

                row1.style.fontSize = 20;

                cell11.innerHTML = 'Actors';
                cell12.innerHTML = `${data.Actors}`;
                cell11.style.color = 'yellow';
                cell12.style.color = 'white';
                cell11.style.paddingRight = 50;
                cell12.style.width = 700;

                //row for director detail

                row2.style.fontSize = 20;

                cell21.innerHTML = 'Director';
                cell22.innerHTML = `${data.Director}`;
                cell21.style.color = 'yellow';
                cell22.style.color = 'white';
                cell21.style.paddingRight = 50;
                cell22.style.width = 700;

                //row for genre detail

                row3.style.fontSize = 20;

                cell31.innerHTML = 'Genre';
                cell32.innerHTML = `${data.Genre}`;
                cell31.style.color = 'yellow';
                cell32.style.color = 'white';
                cell31.style.paddingRight = 50;
                cell32.style.width = 700;

                //row for plot

                row4.style.fontSize = 20;

                cell41.innerHTML = 'Plot';
                cell42.innerHTML = `${data.Plot}`;
                cell41.style.color = 'yellow';
                cell42.style.color = 'white';
                cell41.style.paddingRight = 50;
                cell42.style.width = 700;

                //row for movie time


                row5.style.fontSize = 20;

                cell51.innerHTML = 'Duration';
                let time = parseInt(data.Runtime);
                cell52.innerHTML = `${Math.floor(time/60)} hr ${time%60} min`;
                cell51.style.color = 'yellow';
                cell52.style.color = 'white';
                cell51.style.paddingRight = 50;
                cell52.style.width = 700;

                //imdb rating


                row6.style.fontSize = 20;

                cell61.innerHTML = 'imdbRating';

                cell62.innerHTML = `${data.imdbRating}/10`;
                cell61.style.color = 'yellow';
                cell62.style.color = 'white';
                cell61.style.paddingRight = 50;
                cell62.style.width = 700;




            }


        })
}