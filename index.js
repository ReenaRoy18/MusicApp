window.addEventListener(`load`,()=>{
    const sounds=document.querySelectorAll(`.sound`);
    const pads=document.querySelectorAll(`.pads div`);
    const visual=document.querySelector(`.visual`);
    const colors=[
        '#BF343F',
        '#D95970',
        '#A3BABF',
        '#34BF8C',
        '#A66658',
        '#0CABA8',
    ];
    pads.forEach((pad,index)=>{
        pad.addEventListener(`click`, function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createbubble(index)
        });
    });
    function createbubble(index){
        const bubble=document.createElement(`div`);
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation=`bubbleburst 1s ease`;
        bubble.addEventListener(`animationend`,function (){
            visual.removeChild(this);
        } );
    }

});
