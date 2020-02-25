var lastFeedbacks = `
<li>
  <div class="timeline-image">
    <img class="rounded-circle img-fluid" src="img/feedback/kristina.jpg" alt="">
  </div>
  <div class="timeline-panel">
    <div class="timeline-heading">
      <h4>קריסטינה
        <a href="https://wa.me/972527505273" class="whatsapp rounded-circle" target="_blank">
          <i class="fa fa-whatsapp my-whatsapp"></i>
        </a>
      </h4>
      <h6 class="subheading">פברואר, 2020</h6>
    </div>
    <div class="timeline-body">
      <p class="text-muted text-justify">
        אני ממש אסירת תודה לאנה, בזכותה אני מרגישה בטוחה בדרך!
        מעולם לא הצטערתי שבחרתי בה כמורה!
        היא מקצועית ואחראית מאוד!
        תודה רבה!
      </p>
    </div>
  </div>
</li>
<li class="timeline-inverted">
  <div class="timeline-image">
    <img class="rounded-circle img-fluid" src="img/feedback/tanya.jpg" alt="">
  </div>
  <div class="timeline-panel">
    <div class="timeline-heading">
      <h4>טניה
        <a href="https://wa.me/972558836775" class="whatsapp rounded-circle" target="_blank">
          <i class="fa fa-whatsapp my-whatsapp"></i>
        </a>
      </h4>
      <h6 class="subheading">פברואר, 2020</h6>
    </div>
    <div class="timeline-body">
      <p class="text-muted text-justify">
        תודה, תודה על שיעורי הנהיגה! אנה – מורה מצוינת, משרה ביטחון עצמי ורוגע. כעבור מספר שיעורים היא הכינה אותי לנהיגה עצמאית. מה גם, קיבלתי ממנה טיפים בניווט בעיר. ממליצה בחום!
      </p>
    </div>
  </div>
</li>
<li>
  <div class="timeline-image">
    <img class="rounded-circle img-fluid" src="img/feedback/valentina.jpg" alt="">
    <!-- <i class="fas fa-female fa-inverse"></i> -->
  </div>
  <div class="timeline-panel">
    <div class="timeline-heading">
      <h4>וולנטינה
        <a href="https://wa.me/972527351499" class="whatsapp rounded-circle" target="_blank">
          <i class="fa fa-whatsapp my-whatsapp"></i>
        </a>
      </h4>
      <h6 class="subheading">ינואר, 2020</h6>
    </div>
    <div class="timeline-body">
      <p class="text-muted text-justify">
        מורה נפלאה ונעימה, מסבירה הכול מצוין והיא מאוד ברורה. מסייעת בתחושת ביטחון עצמי. ממליצה עליה בחום!
      </p>
    </div>
  </div>
</li>
<li id="readMore">
  <div class="timeline-image" id="readMore-circle">
    <h4>קרא
      <br>עוד</h4>
  </div>
</li>
`;


var oldFeedbacks = `
<li class="timeline-inverted old-feedback">
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
`;


$('#feedbackList').append(lastFeedbacks)

$('#readMore').click(function(){

    $('#readMore').hide();

    $('#feedbackList').append(oldFeedbacks);
    
    $('.old-feedback').animate({
      opacity: "1",
    }, 1500);

});