let filterInput=document.getElementById('filterInput');
filterInput.addEventListener('keyup',filterNames);

function filterNames(){
    const filterValue= document.getElementById('filterInput').value.toUpperCase();
    

    //ul name
    let ul=document.getElementById('names');

    //get items from ul

    let li=ul.querySelectorAll('li.collection-item');

    //loop through collection item

    for (let i=0;i<li.length;i++){
        let a =li[i].getElementsByTagName('a')[0];

        //check matches

        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            li[i].style.display='';
        }else{
            li[i].style.display='none';
        }
    }
};