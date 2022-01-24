class Blocks{
    constructor({
        title,
        artitle,
        button,
    }){
        this.title= title;
        this.artitle= artitle;
        this.button= button;
    }
    
};

class Ui{
    addBlock(data){
        let blockArtitle= document.querySelectorAll('.block__artitle');
        blockArtitle[0].insertAdjacentHTML("beforebegin",`
        <artitle class="block__artitle">
        <h3>${data.title}</h3>
        <p class="fw-bold">${data.artitle.textTitle}</p>
        <p class="clas">${data.artitle.text1}</p>
        <p>${data.artitle.text2}</p>
        <p class="fw-bold">${data.artitle.text3}</p>
            <a href="${data.button}" class="btn btn__go ">Find out more <span></span></a>
        </artitle>
        `)
    }
    removeBlock(){
        let blockArtitle= document.querySelectorAll('.block__artitle')[1];
        console.log(blockArtitle);
        blockArtitle.remove();
    }
}

