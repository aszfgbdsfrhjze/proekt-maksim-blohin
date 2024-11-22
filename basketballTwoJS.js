/*let but=document.getElementById('b1');
let verno=document.querySelector('.verno');
let neverno=document.querySelector('.neverno');
but.addEventListener('click', function(){
neverno.style.display='none';
verno.style.color='green';


});*/
$(document).ready(function(){
$('#b1').on('click', function(){
    if ($("input[type=radio].verno1").is(":checked")) {
        $(this).css("background-color", "LawnGreen").attr("value", "верно");
        $(this).css("color", "black");
    } else if ($("input[type=radio].neverno1").is(":checked")) {
        $(this).css("background-color", "FireBrick").attr("value", "неверно");
        $(this).css("color", "white");
    }
$('.verno1').css("color", "green");
$('.neverno1').css('display', 'none')

});
$('#b2').on('click', function(){
 
        if ($("input[type=radio].verno2").is(":checked")) {
            $(this).css("background-color", "LawnGreen").attr("value", "верно");
            $(this).css("color", "black");
        } else if ($("input[type=radio].neverno2").is(":checked")) {
            $(this).css("background-color", "FireBrick").attr("value", "неверно");
            $(this).css("color", "white");
        }
    $('.verno1').css("color", "green");
    $('.neverno1').css('display', 'none')
    
 
    $('.verno2').css("color", "green");
    $('.neverno2').css('display', 'none')
    
    });
    $('#b3').on('click', function(){
        
            if ($("input[type=radio].verno3").is(":checked")) {
                $(this).css("background-color", "LawnGreen").attr("value", "верно");
                $(this).css("color", "black");
            } else if ($("input[type=radio].neverno3").is(":checked")) {
                $(this).css("background-color", "FireBrick").attr("value", "неверно");
                $(this).css("color", "white");
            }
        $('.verno1').css("color", "green");
        $('.neverno1').css('display', 'none')
        
   
        $('.verno3').css("color", "green");
        $('.neverno3').css('display', 'none')
        
        });
        $('#b4').on('click', function(){
           
                if ($("input[type=radio].verno4").is(":checked")) {
                    $(this).css("background-color", "LawnGreen").attr("value", "верно");
                    $(this).css("color", "black");
                } else if ($("input[type=radio].neverno4").is(":checked")) {
                    $(this).css("background-color", "FireBrick").attr("value", "неверно");
                    $(this).css("color", "white");
                }
            $('.verno1').css("color", "green");
            $('.neverno1').css('display', 'none')
            
          
            $('.verno4').css("color", "green");
            $('.neverno4').css('display', 'none')
            
            });
            $('#b5').on('click', function(){
               
                    if ($("input[type=radio].verno5").is(":checked")) {
                        $(this).css("background-color", "LawnGreen").attr("value", "верно");
                        $(this).css("color", "black");
                    } else if ($("input[type=radio].neverno5").is(":checked")) {
                        $(this).css("background-color", "FireBrick").attr("value", "неверно");
                        $(this).css("color", "white");
                    }
                $('.verno1').css("color", "green");
                $('.neverno1').css('display', 'none')
                
               
                $('.verno5').css("color", "green");
                $('.neverno5').css('display', 'none')
                
                
                });
                $('#b6').on('click', function(){
               
                    if ($("input[type=radio].verno6").is(":checked")) {
                        $(this).css("background-color", "LawnGreen").attr("value", "верно");
                        $(this).css("color", "black");
                    } else if ($("input[type=radio].neverno6").is(":checked")) {
                        $(this).css("background-color", "FireBrick").attr("value", "неверно");
                        $(this).css("color", "white");
                    }
                $('.verno1').css("color", "green");
                $('.neverno1').css('display', 'none')
                
               
                $('.verno6').css("color", "green");
                $('.neverno6').css('display', 'none')
                
                
                });
                $('#b7').on('click', function(){
               
                    if ($("input[type=radio].verno7").is(":checked")) {
                        $(this).css("background-color", "LawnGreen").attr("value", "верно");
                        $(this).css("color", "black");
                    } else if ($("input[type=radio].neverno7").is(":checked")) {
                        $(this).css("background-color", "FireBrick").attr("value", "неверно");
                        $(this).css("color", "white");
                    }
                $('.verno1').css("color", "green");
                $('.neverno1').css('display', 'none')
                
               
                $('.verno7').css("color", "green");
                $('.neverno7').css('display', 'none')
                
                
                });
                
});