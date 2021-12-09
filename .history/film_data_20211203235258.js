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



but.onclick = () => {
    fetch(`https://www.omdbapi.com/?t=${inp.value}&apikey=a5b97ecf`)
        .then((res) => { return res.json(); })
        .then((data) => {

            if (data.Response == 'False') {
                reset();
                let p = document.createElement('h2');
                p.append(`${data.Error} \n Check the spelling once`);
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
                                console.log(data.videoUrl);
                                if (data.videoUrl == null) {
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


                cell11.innerHTML = 'Actors';
                cell12.innerHTML = `${data.Actors}`;






                //row for director detail


                cell21.innerHTML = 'Director';
                cell22.innerHTML = `${data.Director}`;


                //row for genre detail


                cell31.innerHTML = 'Genre';
                cell32.innerHTML = `${data.Genre}`;


                //row for plot


                cell41.innerHTML = 'Plot';
                cell42.innerHTML = `${data.Plot}`;

                //row for movie time

                cell51.innerHTML = 'Duration';
                let time = parseInt(data.Runtime);
                cell52.innerHTML = `${Math.floor(time/60)} hr ${time%60} min`;


                //imdb rating

                cell61.innerHTML = 'imdbRating';

                cell62.innerHTML = `${data.imdbRating}/10`;

                for (let i = 1; i <= 6; i++) {
                    `row${i}`.style.fontSize = 20;
                    `row${i}`.style.fontFamily = 'Karma';
                    `cell${i}1`.style.color = '#E85A4F';



                    `cell${i}2`.style.color = 'white';
                    `cell${i}1`.style.paddingRight = 50;
                    `cell${i}2`.style.width = 700;
                }




            }


        })
}