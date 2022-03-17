function cacul() {
    var P = parseInt(document.getElementsByName('_loan')[0].value);
    var n = parseInt(document.getElementsByName('_term')[0].value);
    var i = parseFloat(document.getElementsByName('_rate')[0].value);
    var V= P;
    for (x=0; x<n; x++) {
        V *= (1+ i/100);
    }
    document.getElementById('total').innerHTML=' $ ' + V;
}
function mouseover() {
    document.getElementById("demo").style.color = 'blue';
    document.getElementById("demo").style.backgroundColor ='yellow';
    }
function mouseout() {
    document.getElementById("demo").style.color ='black';
    document.getElementById("demo").style.backgroundColor ='white';
    }