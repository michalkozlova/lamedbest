var lastFeedbacks = `
<li class="timeline-inverted">
<div class="timeline-image">
  <img class="rounded-circle img-fluid" src="img/feedback/lipatova.jpg" alt="">
</div>
<div class="timeline-panel">
  <div class="timeline-heading">
    <h4>אנסטסיה ליפטובה
      <a href="https://wa.me/972534737226" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">אפריל, 2021</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
    מורה נהדרת. אנה עזרה לי באישור רשיון הנהיגה. בכמה שיעורים בלבד רעננו את היסודות, עברנו על כל התכונות והדקויות, והצלחתי בקלות במבחן המעשי. תודה רבה!
    </p>
  </div>
</div>
</li>

<li>
<div class="timeline-image">
  <img class="rounded-circle img-fluid" src="img/feedback/nastya_ivanova.jpg" alt="">
</div>
<div class="timeline-panel">
  <div class="timeline-heading">
    <h4>נסטיה איוונובה
      <a href="https://wa.me/972527809498" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">מרץ, 2021</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
    מורה מדהימה!! עם המון ידע, ים של סבלנות והומור שמאד עוזר להוריד את הלחץ! השיעורים באווירה סופר נעימה ורגוע! אין על אנה בעולם! מומלצת בחום!
    </p>
  </div>
</div>
</li>

<li class="timeline-inverted">
<div class="timeline-image">
  <img class="rounded-circle img-fluid" src="img/feedback/galanternik.jpg" alt="">
</div>
<div class="timeline-panel">
  <div class="timeline-heading">
    <h4>אנסטסיה גלנטרניק
      <a href="https://wa.me/972586853301" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">דצמבר, 2020</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
    אני רוצה להגיד תודה ענקית לאנה! בנוסף לעובדה שהיא פשוט אדם נעים, היא מורה קסומה בהחלט: במהלך השיעור היא מסבירה את כל הדקויות ביסודיות, אם יש קשיים בטכניקות מסוימות היא עושה בהן סדר. והדבר הכי חשוב - אנה מחדירה בך ביטחון כנהגת.
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
<li>
<div class="timeline-image">
  <img class="rounded-circle img-fluid" src="img/feedback/anita.jpg" alt="">
</div>
<div class="timeline-panel">
  <div class="timeline-heading">
    <h4>אניטה
      <a href="https://wa.me/972539267027" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">ספטמבר, 2020</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
    אנה היא מורה מהשמיים! היא מסבירה הכל בפשטות, ואם משהו לא ברור אז מספר פעמים. אנשים רבים הפחידו אותי שלא אעבור את זה בפעם הראשונה, אבל עשיתי את זה בזכות אנה 🤗🌸 תודה רבה אנה, הגורל הפגיש אותי איתך. שתזכי לעוד הרבה תלמידים ולהמון הצלחה 🥰🤩💐
    </p>
  </div>
</div>
</li>

<li class="timeline-inverted">
<div class="timeline-image">
  <img class="rounded-circle img-fluid" src="img/feedback/elina.jpg" alt="">
</div>
<div class="timeline-panel">
  <div class="timeline-heading">
    <h4>אלינה פנצ’נקו
      <a href="https://wa.me/972545640350" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">אפריל, 2020</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
    אני רוצה לומר תודה רבה לאנה על שיעורי הנהיגה שלה. היא בטוחה, רגועה וסבלנית, עוזרת להתגבר על החשש והבטחון העצמי בכביש ומסבירה היטב. היא לימדה אותי לנהוג בביטחון, לחנות נכון, לא לפחד וליהנות מהנהיגה. אני ממליצה עליה בחום!
    </p>
  </div>
</div>
</li>
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