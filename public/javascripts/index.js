var socket = io();
var joke = '';
socket.on('connect', function(){
    console.log('Socket Client Connect')
});

$('.refresh').click(function(){
    socket.emit('refresh');
})

$('.category').click(function(e){
    var og = $(e.target).text();
    var txt = og.toLowerCase();

    socket.emit('category', {category: txt});
})

socket.on('joke',function(data){
    console.log(data.data)
    updateText("data",data.data)
});


function updateText(element, value){
    document.getElementById(element).innerText = value;
}