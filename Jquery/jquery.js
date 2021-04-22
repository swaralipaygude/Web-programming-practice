$('#para').html('This is done using jquery');
$('#para').css({'color':'midnightblue',
                'background-color':'limegreen',
                'font-family':'sans-serif'
});

$('#change').click(function() {$('.changeBg').css('background-color','lightgreen') } );

$('.anim').animate({'height':'150px','width':'300px','opacity':1},2000);    //3000 ms

$('#anim3').hover(function() {$(this).animate({'left':'500px',
'top':'50px',
'height':'100px',
'width':'100px'
},3000) } );

$('#anim4').click(function() {$(this).animate({'left':'300px',
'height':'80px',
'width':'100px'
},3000) } );
