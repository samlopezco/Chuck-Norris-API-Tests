var socket = io();
var joke = '';
socket.on('connect', function(){
    console.log('Socket Client Connect')
});

$('.refresh').click(function(){
    socket.emit('refresh');
})

socket.on('joke',function(data){
    updateText("data",data.data)
});


function updateText(element, value){
    document.getElementById(element).innerText = value;
}