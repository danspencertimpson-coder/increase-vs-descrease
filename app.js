(function () {
  'use strict';

  /* ── State ──────────────────────────────────────────────────── */
  var quizState = { chapterId: null, index: 0, score: 0 };

  /* ── DOM refs ───────────────────────────────────────────────── */
  var main       = document.getElementById('main');
  var chapterNav = document.getElementById('chapter-nav');
  var modal      = document.getElementById('quiz-modal');
  var quizBox    = document.getElementById('quiz-content');
  var closeBtn   = document.getElementById('modal-close-btn');

  /* ── Build sidebar ──────────────────────────────────────────── */
  function buildSidebar() {
    HISTORY_DATA.chapters.forEach(function (ch) {
      var li = document.createElement('li');
      li.dataset.id = ch.id;
      li.innerHTML =
        '<a href="#' + ch.id + '" class="nav-link">' +
          '<span class="ch-num">' + ch.num + '</span>' +
          ch.title +
        '</a>';
      chapterNav.appendChild(li);
    });
  }

  /* ── Active nav state ───────────────────────────────────────── */
  function setActive(hash) {
    document.querySelectorAll('#sidebar li, .nav-extra li').forEach(function (li) {
      li.classList.remove('active');
    });
    var view = hash.replace('#', '');
    if (view === 'timeline') {
      var tlLi = document.querySelector('.nav-extra li');
      if (tlLi) tlLi.classList.add('active');
    } else {
      var target = chapterNav.querySelector('[data-id="' + view + '"]');
      if (target) target.classList.add('active');
    }
  }

  /* ── Router ─────────────────────────────────────────────────── */
  function route() {
    var hash = window.location.hash || '#home';
    setActive(hash);

    if (hash === '#timeline') {
      renderTimeline();
      return;
    }

    if (hash === '#home' || hash === '') {
      renderHome();
      return;
    }

    var id = hash.replace('#', '');
    var ch = HISTORY_DATA.chapters.find(function (c) { return c.id === id; });
    if (ch) {
      renderChapter(ch);
    } else {
      renderHome();
    }
  }

  /* ── Render: Home ───────────────────────────────────────────── */
  function renderHome() {
    var cards = HISTORY_DATA.chapters.map(function (ch) {
      return (
        '<a href="#' + ch.id + '" class="home-card">' +
          '<div class="home-card-num">Chapter ' + ch.num + '</div>' +
          '<h3>' + ch.title + '</h3>' +
          '<p>' + ch.summary + '</p>' +
          '<span class="home-card-era">' + ch.era + '</span>' +
        '</a>'
      );
    }).join('');

    main.innerHTML =
      '<div class="home-hero">' +
        '<div class="home-hero-cross">&#9768;</div>' +
        '<h2>American History<br/><em>Under Providence</em></h2>' +
        '<p>Discover the true story of America — a covenant land prepared by God, ' +
        'as foretold in the Book of Mormon and confirmed by the most authoritative ' +
        'historical biographies available today.</p>' +
        '<a href="#ch1" class="home-start-btn">Begin Chapter 1 &rarr;</a>' +
      '</div>' +
      '<div class="home-grid">' + cards + '</div>';

    scrollTop();
  }

  /* ── Render: Chapter ────────────────────────────────────────── */
  function renderChapter(ch) {
    var idx = HISTORY_DATA.chapters.indexOf(ch);
    var next = HISTORY_DATA.chapters[idx + 1];

    var nextBtn = next
      ? '<a href="#' + next.id + '" class="next-chapter-btn">Next: ' + next.title + ' &rarr;</a>'
      : '<a href="#timeline" class="next-chapter-btn">View Full Timeline &rarr;</a>';

    main.innerHTML =
      '<div class="hero">' +
        '<div class="hero-era">Chapter ' + ch.num + ' &nbsp;&bull;&nbsp; ' + ch.era + '</div>' +
        '<h2>' + ch.title + '</h2>' +
        '<div class="hero-meta">' +
          '<div class="hero-divider"></div>' +
          '<p class="hero-desc">' + ch.summary + '</p>' +
        '</div>' +
      '</div>' +

      '<div class="chapter-body">' +
        ch.body +
        '<div class="pull-quote">' +
          '<p>&ldquo;' + ch.quote.text + '&rdquo;</p>' +
          '<cite>&mdash; ' + ch.quote.attribution + '</cite>' +
        '</div>' +
      '</div>' +

      '<div class="chapter-actions">' +
        '<button class="quiz-launch-btn" data-action="open-quiz" data-chapter="' + ch.id + '">' +
          '<span class="btn-icon">&#9998;</span> Take the Quiz' +
        '</button>' +
        nextBtn +
      '</div>';

    scrollTop();
  }

  /* ── Render: Timeline ───────────────────────────────────────── */
  function renderTimeline() {
    var items = HISTORY_DATA.chapters.map(function (ch) {
      return (
        '<div class="timeline-item">' +
          '<div class="timeline-dot"></div>' +
          '<div class="timeline-content">' +
            '<div class="timeline-era">' + ch.era + '</div>' +
            '<h3>' + ch.title + '</h3>' +
            '<p>' + ch.summary + '</p>' +
            '<a href="#' + ch.id + '" class="timeline-link">Read Chapter ' + ch.num + ' &rarr;</a>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    main.innerHTML =
      '<div class="timeline-header">' +
        '<h2>&#9768; Full Timeline of Providence</h2>' +
        '<p>Nine chapters spanning 1492 to the present — America\'s story through the lens of covenant and faith.</p>' +
      '</div>' +
      '<div class="timeline">' + items + '</div>';

    scrollTop();
  }

  /* ── Quiz: open ─────────────────────────────────────────────── */
  function openQuiz(chapterId) {
    var ch = HISTORY_DATA.chapters.find(function (c) { return c.id === chapterId; });
    if (!ch) return;
    quizState.chapterId = chapterId;
    quizState.index = 0;
    quizState.score = 0;
    modal.classList.remove('hidden');
    renderQuestion(ch);
  }

  /* ── Quiz: render question ──────────────────────────────────── */
  function renderQuestion(ch) {
    var q = ch.quiz[quizState.index];
    var total = ch.quiz.length;
    var current = quizState.index + 1;

    var options = q.options.map(function (opt, i) {
      return (
        '<button class="quiz-option" data-action="answer" data-index="' + i + '">' +
          opt +
        '</button>'
      );
    }).join('');

    quizBox.innerHTML =
      '<div class="quiz-title">Chapter ' + ch.num + ' Quiz</div>' +
      '<div class="quiz-progress">Question ' + current + ' of ' + total + '</div>' +
      '<div class="quiz-question-text">' + q.q + '</div>' +
      '<div class="quiz-options">' + options + '</div>';
  }

  /* ── Quiz: handle answer ────────────────────────────────────── */
  function handleAnswer(selectedIndex) {
    var ch = HISTORY_DATA.chapters.find(function (c) { return c.id === quizState.chapterId; });
    var q = ch.quiz[quizState.index];
    var correct = q.answer === selectedIndex;

    if (correct) quizState.score++;

    // Mark options
    var opts = quizBox.querySelectorAll('.quiz-option');
    opts.forEach(function (btn, i) {
      btn.removeAttribute('data-action');
      if (i === q.answer) {
        btn.dataset.state = correct ? 'correct' : 'missed';
      } else if (i === selectedIndex && !correct) {
        btn.dataset.state = 'wrong';
      }
    });

    // Add feedback
    var feedback = document.createElement('div');
    feedback.className = 'quiz-feedback ' + (correct ? 'correct' : 'wrong');
    feedback.textContent = correct
      ? '&#10003; Correct! ' + q.explanation
      : '&#10007; ' + q.explanation;
    feedback.innerHTML = (correct ? '&#10003; ' : '&#10007; ') + q.explanation;

    var nextBtn = document.createElement('button');
    nextBtn.className = 'quiz-next-btn';
    nextBtn.dataset.action = quizState.index + 1 < ch.quiz.length ? 'next' : 'finish';
    nextBtn.textContent = quizState.index + 1 < ch.quiz.length ? 'Next Question' : 'See Results';

    quizBox.appendChild(feedback);
    quizBox.appendChild(nextBtn);
  }

  /* ── Quiz: score screen ─────────────────────────────────────── */
  function renderScore() {
    var ch = HISTORY_DATA.chapters.find(function (c) { return c.id === quizState.chapterId; });
    var total = ch.quiz.length;
    var pct = Math.round((quizState.score / total) * 100);

    var verses = [
      { text: '"Study to show thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."', ref: '2 Timothy 2:15' },
      { text: '"And by the power of the Holy Ghost ye may know the truth of all things."', ref: 'Moroni 10:5, Book of Mormon' },
      { text: '"Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me."', ref: 'John 5:39' }
    ];
    var verse = verses[quizState.score % verses.length];

    quizBox.innerHTML =
      '<div class="quiz-score">' +
        '<div class="score-cross">&#9768;</div>' +
        '<div class="score-num">' + quizState.score + '/' + total + '</div>' +
        '<div class="score-label">' + pct + '% &mdash; ' +
          (pct >= 80 ? 'Well done! You know this history.' :
           pct >= 50 ? 'Good effort — keep studying.' :
           'Keep pressing forward in your studies.') +
        '</div>' +
        '<div class="score-verse">' +
          verse.text + '<br/><strong>' + verse.ref + '</strong>' +
        '</div>' +
        '<div class="score-actions">' +
          '<button class="score-retry-btn" data-action="retry">Try Again</button>' +
          '<button class="score-close-btn" data-action="close-quiz">Close</button>' +
        '</div>' +
      '</div>';
  }

  /* ── Event delegation ───────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action]');
    if (!btn) return;
    var action = btn.dataset.action;

    if (action === 'open-quiz') {
      openQuiz(btn.dataset.chapter);
      return;
    }

    if (action === 'answer') {
      handleAnswer(parseInt(btn.dataset.index, 10));
      return;
    }

    if (action === 'next') {
      var ch = HISTORY_DATA.chapters.find(function (c) { return c.id === quizState.chapterId; });
      quizState.index++;
      renderQuestion(ch);
      return;
    }

    if (action === 'finish') {
      renderScore();
      return;
    }

    if (action === 'retry') {
      openQuiz(quizState.chapterId);
      return;
    }

    if (action === 'close-quiz') {
      closeModal();
      return;
    }
  });

  closeBtn.addEventListener('click', closeModal);

  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  function closeModal() {
    modal.classList.add('hidden');
  }

  /* ── Util ───────────────────────────────────────────────────── */
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── Init ───────────────────────────────────────────────────── */
  window.addEventListener('hashchange', route);

  buildSidebar();
  route();

})();
