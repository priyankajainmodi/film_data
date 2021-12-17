function reset() {
    while (document.querySelector('iframe') != null) {
        document.querySelector('iframe').remove();
    }
    while (document.querySelector('img') != null) {
        document.querySelector('img').remove();
    }


    while (document.querySelector('h2') != null) {
        document.querySelector('h2').remove();
    }
    while (document.querySelector('TABLE') != null) {
        document.querySelector('TABLE').remove();
    }
    while (document.querySelector('.search') != null) {
        document.querySelector('.search').remove();
    }

}



let inp = document.querySelector('input');
let but = document.querySelector('button');
but.onclick = () => {

    fetch(`https://imdb-api.com/en/API/SearchTitle/k_3pxoshah/${inp.value}`)
        .then((res) => { console.log("fsfd"); return res.json(); })
        .then((data) => {
            reset();
            console.log(data);
            let div = document.createElement('div');


            document.body.appendChild(div);
            let video = document.createElement('iframe');
            video.height = 400;
            video.width = 900;
            video.style.marginBottom = 40;

            for (let i of data.results) {

                let div1 = document.createElement('div');
                div1.classList.add("search");

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
                p.style.fontFamily = 'Karma'
                p.style.color = '#D8C3A5';
                // p.style.cursor = 'pointer';
                div1.appendChild(p);
                document.body.appendChild(div1)
                p.onclick = () => {
                    reset();

                    let img = document.createElement('img');
                    img.src = i.image;
                    img.style.display = 'block';
                    img.alt = "image couldn't load -_-";
                    img.style.color = 'white';
                    img.height = 455;
                    img.width = 350;
                    img.style.float = 'left';
                    img.style.marginRight = 40;
                    img.style.marginBottom = 40;

                    document.body.appendChild(img);

                    fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_3pxoshah/${i.id}`)
                        .then((res) => { return res.json() })
                        .then((data) => {
                            console.log(data.videoUrl);
                            if (data.videoUrl == "" || data.videoUrl == null) {
                                console.log("not there");
                                let h = document.createElement('h2');
                                h.textContent = "Trailer not available >_<"
                                h.style.color = 'white';
                                document.body.appendChild(h);
                            } else {
                                let url = `${data.videoUrl.replace('watch?v=', 'embed/')}`;
                                video.src = `${url}`;
                                video.height = 455;
                                video.width = 1100;
                                document.body.appendChild(video);
                            }
                            let tble = document.createElement('TABLE');

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
                            document.body.appendChild(tble);

                            fetch(`https://imdb-api.com/en/API/Title/k_3pxoshah/${i.id}`)
                                .then((res) => { return res.json() })
                                .then((data) => {
                                    console.log(data);
                                    //row for actor details

                                    row1.style.fontSize = 20;
                                    row1.style.marginTop = 2
                                    row1.style.fontFamily = 'Karma';
                                    cell11.style.color = '#E85A4F';

                                    cell12.style.color = 'white';
                                    cell11.style.paddingRight = 50;
                                    cell12.style.width = 700;
                                    cell11.innerHTML = 'Actors';
                                    cell12.innerHTML = `${data.stars}`;
                                    if (data.stars == "" || data.stars == null) { cell12.innerHTML = "Actor's name not available" } else
                                        cell22.innerHTML = `${data.directors}`;

                                    //row for director detail

                                    row2.style.fontSize = 20;
                                    row2.style.fontFamily = 'Karma';
                                    cell21.style.color = '#E85A4F';

                                    cell22.style.color = 'white';
                                    cell21.style.paddingRight = 50;
                                    cell22.style.width = 700;
                                    cell21.innerHTML = 'Director';
                                    if (data.directors == "" || data.directors == null) { cell22.innerHTML = "director name not available" } else
                                        cell22.innerHTML = `${data.directors}`;


                                    //row for genre detail

                                    row3.style.fontSize = 20;
                                    row3.style.fontFamily = 'Karma';
                                    cell31.style.color = '#E85A4F';

                                    cell32.style.color = 'white';
                                    cell31.style.paddingRight = 50;
                                    cell32.style.width = 700;
                                    cell31.innerHTML = 'Genre';

                                    if (data.genres == "" || data.genres == null) { cell32.innerHTML = "Genre not available" } else
                                        cell32.innerHTML = `${data.genres}`;



                                    //row for plot

                                    row4.style.fontSize = 20;
                                    row4.style.fontFamily = 'Karma';
                                    cell41.style.color = '#E85A4F';

                                    cell42.style.color = 'white';
                                    cell41.style.paddingRight = 50;
                                    cell42.style.width = 700;
                                    cell41.innerHTML = 'Plot';
                                    if (data.plot == "" || data.plot == null) { cell42.innerHTML = "plot not available" } else
                                        cell42.innerHTML = `${data.plot}`;

                                    //row for movie time
                                    row5.style.fontSize = 20;
                                    row5.style.fontFamily = 'Karma';
                                    cell51.style.color = '#E85A4F';

                                    cell52.style.color = 'white';
                                    cell51.style.paddingRight = 50;
                                    cell52.style.width = 700;
                                    cell51.innerHTML = 'Duration';
                                    if (data.runtimeMins == "" || data.runtimeMins == null) { cell52.innerHTML = "runTime not available" } else {
                                        let time = parseInt(data.runtimeMins);
                                        cell52.innerHTML = `${Math.floor(time/60)} hr ${time%60} min`;
                                    }


                                    //imdb rating
                                    row6.style.fontSize = 20;
                                    row6.style.fontFamily = 'Karma';
                                    cell61.style.color = '#E85A4F';

                                    cell62.style.color = 'white';
                                    cell61.style.paddingRight = 50;
                                    cell62.style.width = 700;
                                    cell61.innerHTML = 'imdbRating';
                                    if (data.imDbRating == "" || data.imDbRating == null) { cell62.innerHTML = "imDb rating not available" } else


                                        cell62.innerHTML = `${data.imDbRating}/10`;


                                })












                        })







                }










            }













        })










}