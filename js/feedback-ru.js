var lastFeedbacks = `
<li class="timeline-inverted">
<div class="timeline-image">
  <img class="rounded-circle img-fluid" src="img/feedback/elina.jpg" alt="">
</div>
<div class="timeline-panel">
  <div class="timeline-heading">
    <h4>Элина Панченко
      <a href="https://wa.me/972545640350" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">Апрель, 2020</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
    Хочу сказать большое спасибо Анне за уроки вождения. Она уверенная, спокойная и терпеливая. Помогает преодолеть страх на дороге и неуверенность в себе. Хорошо обьясняет, учит уверенно ездить, правильно парковаться, при этом не бояться и получать удовольствие от вождения. Рекомендую!!!
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
    <h4>Кристина Соленова
      <a href="https://wa.me/972527505273" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">Февраль, 2020</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
      Очень благодарна Анне, благодаря ей я уверенно чувствую себя на дороге! Ни разу не пожалела, что выбрала ее, как учителя! Она профессиональна и очень ответственна к своей работе! Спасибо Большое!
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
    <h4>Таня Калина
      <a href="https://wa.me/972558836775" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">Февраль, 2020</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
      Огромное спасибо за уроки! Аня очень хороший инструктор, уверенная и спокойная. За несколько занятий она подготовила меня к езде + я получила от неё полезные lifehacks по ориентировки в городе. Рекомендую!
    </p>
  </div>
</div>
</li>
<li id="readMore">
  <div class="timeline-image" id="readMore-circle">
    <h4>Показать
      <br>все</h4>
  </div>
</li>
`


var oldFeedbacks = `
<li>
<div class="timeline-image">
  <img class="rounded-circle img-fluid" src="img/feedback/valentina.jpg" alt="">
</div>
<div class="timeline-panel">
  <div class="timeline-heading">
    <h4>Валентина Щелокова
      <a href="https://wa.me/972527351499" class="whatsapp rounded-circle" target="_blank">
        <i class="fa fa-whatsapp my-whatsapp"></i>
      </a>
    </h4>
    <h6 class="subheading">Январь, 2020</h6>
  </div>
  <div class="timeline-body">
    <p class="text-muted text-justify">
      Чудесная и очень приятная преподаватель. Объясняет все отлично и очень доступно. Помогает обрести уверенность в себе. Горячо  рекомендую!
    </p>
  </div>
</div>
</li>
<li class="timeline-inverted old-feedback">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/feedback/gili.jpeg" alt="">
                 <!-- <i class="fas fa-female fa-inverse"></i> -->
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Гили Сушенко
                    <a href="https://wa.me/972545755625" class="whatsapp rounded-circle" target="_blank">
                      <i class="fa fa-whatsapp my-whatsapp"></i>
                    </a>
                  </h4>
                  <h6 class="subheading">Декабрь, 2019</h6>
                </div>
                <div class="timeline-body">
                  <p class="text-muted text-justify">
                    Очень благодарна учителю вождения Анне Кликштейн. Прошло несколько лет между получением прав на вождение и покупкой машины и я решила взять несколько уроков. Анна сразу поняла, что мне надо, помогла восстановить навыки, вернула уверенность в себя. Она приятный в общении, уважающий ученика преподаватель. Теперь знаю, кого советовать друзьям и знакомым.
                  </p>
                </div>
              </div>
            </li>
`


$('#feedbackList').append(lastFeedbacks)


$('#readMore').click(function(){

    $('#readMore').hide();

    $('#feedbackList').append(oldFeedbacks);
    
    $('.old-feedback').animate({
      opacity: "1",
    }, 1500);

});