let body = document.body;

const trailMaker = function () {
    let theDiv = document.createElement('div');
    theDiv.style.backgroundColor = 'white';
    theDiv.style.height = '10px';
    theDiv.style.width = '10px';
    theDiv.style.borderRadius = '50%';
    theDiv.style.position = 'absolute';
    theDiv.style.top = event.clientY + 'px';
    theDiv.style.left = event.clientX + 'px';
    body.appendChild(theDiv);
    let createdDiv = body.lastChild;
    setTimeout(
        () => createdDiv.remove(),
        2000
    )
        

    console.log('its going');
}

window.addEventListener('mousemove', trailMaker);

