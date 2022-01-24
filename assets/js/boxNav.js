addEventListener('click', e =>{
    let target= e.target;
    let datTarget= target.parentElement;
    let blockNav= document.getElementById('block__nav');
    if(datTarget == blockNav){
        // console.log(target);
        if(e.target.text == "OpenFinance"){
            console.log(openF);
            let ui= new Ui();
            ui.addBlock(openF);
            ui.removeBlock();
        }else if(e.target.text == "DataEnrichment"){
            console.log(dataE);
            let ui= new Ui();
            ui.addBlock(dataE);
            ui.removeBlock();
        }else if(e.target.text == "UserExperience"){
            console.log(userE);
            let ui= new Ui();
            ui.addBlock(userE);
            ui.removeBlock();
        }else if(e.target.text == "SupportImplementation"){
            console.log(sopportI);
            let ui= new Ui();
            ui.addBlock(sopportI);
            ui.removeBlock();
        }
    }
})