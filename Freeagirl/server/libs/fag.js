/*This is the full page scroller. It works on the basis of the jquery plug in function onepage_scroll.
This is the control function, where you can set certain settings which can be read in the comments on
the right of it. Make sure that sectionContainer is section, the direction vertical, and pagination is
true. Also, the class the function works in has to be the div that stores the pages. In this case, the
class name is .main. DO NOT TOUCH THE OTHER JQUERY FILES.

the pagination is the diamonds on the side of the page, on the sidebar. These have automatically 
generated buttons, so if you add a section, it will update a new button. The CSS is styled to be both
horizontally and vertically centered, so it will automatically adjust itself. These buttons are clickable
and will link to its corresponding section. On scroll, the button's class will change to class on 
whichever section is visible in the window, so if you're on the Support page, the 4th diamond's class
is active. This works in correspondance with the next function.
*/

$(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 500,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                         // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                         // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


/*This code is a continuous loop to check what page your on. for example, if you're on page
2, the side bar will display the 2nd chapter name. PSD files have been used to generate the 
text in PNG form, so bear that in mind. The jquery function works as follows:

setInterval function (repeats every 500 milliseconds)
    if active class has attribute value dataindex = 1 (check right navigation menu)
        change page-title image src to chapter1 text .png
*/
window.setInterval(function(){
    if ($('.active').attr('data-index') == 1){
        $('.page-title').attr('src', 'img/chapter1.png');
    }
    else if ($('.active').attr('data-index') == 2){
        $('.page-title').attr('src', 'img/chapter2.png');
    }   
    else if ($('.active').attr('data-index') == 3){
        $('.page-title').attr('src', 'img/chapter3.png');
    }  
    else if ($('.active').attr('data-index') == 4){
        $('.page-title').attr('src', 'img/chapter4.png');
    }     
    else if ($('.active').attr('data-index') == 5){
        $('.page-title').attr('src', 'img/chapter5.png');
    } 
}, 500);