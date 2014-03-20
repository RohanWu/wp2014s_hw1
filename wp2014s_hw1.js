

function lists_set()
{
    if( document.getElementById("ready").style.display == "block" )
        document.getElementById("ready").style.display = "none";
    else
        document.getElementById("ready").style.display = "block";
}


function show( id )
{
    document.getElementById(id).style.display = "block";
}


function hide( id )
{
    document.getElementById(id).style.display = "none";
}

