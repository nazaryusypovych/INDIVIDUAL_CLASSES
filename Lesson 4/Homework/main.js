
const api = async () =>{

    const mainUrl = `https://uakino.me/`;
    const buttonSeriess = document.querySelector(`#seriesss`).innerHTML;
    const request = `${mainUrl}${buttonSeriess}`;
    console.log(request);

}

api()
