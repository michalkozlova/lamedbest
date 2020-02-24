$('#readMore').click(function(){
    // alert('im here');

    $('#readMore').hide();

    $('#feedbackList').append(`
    <li class="timeline-inverted">
        <div class="timeline-image">
        <img class="rounded-circle img-fluid" class="animated bounce infinite" src="img/feedback/gili.jpeg" alt="">
        </div>
        <div class="timeline-panel">
        <div class="timeline-heading">
            <h4>גילי
            <a href="https://wa.me/972545755625" class="whatsapp rounded-circle" target="_blank">
                <i class="fa fa-whatsapp my-whatsapp"></i>
            </a>
            </h4>
            <h6 class="subheading">דצמבר, 2019</h6>
        </div>
        <div class="timeline-body">
            <p class="text-muted text-justify">
            ממליצה בחום ללמוד אצל אנה. מורה מקצועית מאוד ויחד עם זאת נעימה ואנושית. מצליחה לגרום להאמין ביכולת של כל אחד להצליח!
            </p>
        </div>
        </div>
    </li>
`);

});