<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Decoding the Code | Dyslexia Literacy Intervention Course</title>
<style>
  :root {
    --primary: #2C5F8A;
    --primary-light: #EAF3FB;
    --primary-mid: #5B9FD4;
    --accent: #FF8C42;
    --accent-light: #FFF3E8;
    --green: #2E7D32;
    --green-light: #E8F5E9;
    --red: #C62828;
    --red-light: #FFEBEE;
    --yellow: #F4C542;
    --yellow-light: #FFFDE7;
    --purple: #6A1B9A;
    --purple-light: #F3E5F5;
    --gray: #555;
    --gray-light: #F5F5F5;
    --border: #DDD;
    --white: #FFFFFF;
    --text: #1A1A1A;
    --text-muted: #666;
    --radius: 12px;
    --shadow: 0 2px 12px rgba(0,0,0,0.08);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #F0F4F8; color: var(--text); line-height: 1.7; }

  /* NAV */
  .top-nav { background: var(--primary); color: #fff; padding: 0; position: sticky; top: 0; z-index: 200; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
  .nav-inner { max-width: 900px; margin: 0 auto; display: flex; align-items: center; gap: 12px; padding: 14px 20px; }
  .course-logo { font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
  .course-logo span { color: var(--yellow); }
  .nav-progress { flex: 1; }
  .progress-bar { height: 6px; background: rgba(255,255,255,0.25); border-radius: 3px; overflow: hidden; }
  .progress-fill { height: 100%; background: var(--yellow); border-radius: 3px; transition: width 0.4s ease; }
  .progress-label { font-size: 12px; color: rgba(255,255,255,0.8); margin-top: 4px; }

  /* LAYOUT */
  .wrapper { max-width: 900px; margin: 0 auto; padding: 24px 16px 80px; }

  /* SIDEBAR MENU */
  .course-layout { display: grid; grid-template-columns: 220px 1fr; gap: 24px; align-items: start; }
  @media (max-width: 680px) { .course-layout { grid-template-columns: 1fr; } .sidebar { display: none; } }

  .sidebar { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; position: sticky; top: 72px; }
  .sidebar-title { background: var(--primary); color: #fff; padding: 12px 16px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
  .sidebar-item { display: flex; align-items: center; gap: 10px; padding: 10px 16px; font-size: 14px; cursor: pointer; border-bottom: 1px solid var(--border); transition: background 0.15s; color: var(--text); }
  .sidebar-item:hover { background: var(--primary-light); }
  .sidebar-item.active { background: var(--primary-light); color: var(--primary); font-weight: 600; border-left: 3px solid var(--primary); }
  .sidebar-item.completed .s-icon { background: var(--green); color: #fff; }
  .sidebar-item.locked { opacity: 0.45; cursor: not-allowed; }
  .s-icon { width: 26px; height: 26px; border-radius: 50%; background: var(--gray-light); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; color: var(--primary); border: 1.5px solid var(--border); }
  .sidebar-item.active .s-icon { background: var(--primary); color: #fff; border-color: var(--primary); }

  /* MAIN CONTENT */
  .main-content { display: flex; flex-direction: column; gap: 20px; }

  .section-card { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; display: none; }
  .section-card.active { display: block; }

  .section-header { padding: 24px 28px 18px; border-bottom: 2px solid var(--primary-light); }
  .section-tag { display: inline-block; background: var(--primary-light); color: var(--primary); font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
  .section-title { font-size: 22px; font-weight: 700; color: var(--primary); margin-bottom: 6px; }
  .section-subtitle { font-size: 14px; color: var(--text-muted); }
  .section-body { padding: 24px 28px; }

  /* CONTENT ELEMENTS */
  .content-block { margin-bottom: 20px; }
  .content-block p { font-size: 15px; line-height: 1.75; color: var(--text); margin-bottom: 12px; }
  .content-block h3 { font-size: 17px; font-weight: 600; color: var(--primary); margin: 20px 0 8px; }

  .info-box { background: var(--primary-light); border-left: 4px solid var(--primary); border-radius: 0 8px 8px 0; padding: 14px 18px; margin: 16px 0; font-size: 14px; line-height: 1.6; }
  .info-box strong { color: var(--primary); display: block; margin-bottom: 4px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.04em; }

  .highlight-box { background: var(--yellow-light); border: 2px solid var(--yellow); border-radius: 8px; padding: 14px 18px; margin: 16px 0; font-size: 14px; line-height: 1.6; }
  .highlight-box strong { color: #5C4A00; display: block; margin-bottom: 6px; }

  .skill-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin: 16px 0; }
  .skill-tile { background: var(--gray-light); border-radius: 10px; padding: 16px; border: 2px solid var(--border); }
  .skill-tile.blue { background: var(--primary-light); border-color: var(--primary-mid); }
  .skill-tile.green { background: var(--green-light); border-color: #66BB6A; }
  .skill-tile.orange { background: var(--accent-light); border-color: var(--accent); }
  .skill-tile .tile-num { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; color: var(--text-muted); }
  .skill-tile .tile-title { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .skill-tile .tile-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; }
  .skill-tile.blue .tile-title { color: var(--primary); }
  .skill-tile.green .tile-title { color: var(--green); }
  .skill-tile.orange .tile-title { color: #C05A00; }

  .steps-list { display: flex; flex-direction: column; gap: 12px; margin: 16px 0; }
  .step-row { display: flex; gap: 14px; align-items: flex-start; background: var(--gray-light); border-radius: 10px; padding: 14px 16px; border: 1px solid var(--border); }
  .step-badge { min-width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: #fff; flex-shrink: 0; }
  .step-badge.b1 { background: var(--accent); }
  .step-badge.b2 { background: var(--purple); }
  .step-badge.b3 { background: var(--green); }
  .step-text { font-size: 14px; line-height: 1.6; padding-top: 6px; }
  .step-text strong { display: block; font-size: 15px; margin-bottom: 2px; }

  .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin: 16px 0; }
  .team-card { background: var(--gray-light); border-radius: 10px; padding: 14px 12px; text-align: center; border: 2px solid var(--border); }
  .team-avatar { font-size: 30px; margin-bottom: 8px; }
  .team-name { font-size: 14px; font-weight: 700; color: var(--primary); margin-bottom: 3px; }
  .team-role { font-size: 12px; color: var(--text-muted); line-height: 1.4; }

  /* QUIZ */
  .quiz-section { background: var(--primary-light); border-radius: 10px; padding: 22px; margin-top: 24px; border: 2px solid var(--primary-mid); }
  .quiz-header { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
  .quiz-badge { background: var(--primary); color: #fff; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.06em; }
  .quiz-title { font-size: 16px; font-weight: 700; color: var(--primary); }
  .quiz-score-display { font-size: 13px; color: var(--text-muted); margin-left: auto; }

  .question-block { background: var(--white); border-radius: 8px; padding: 18px; margin-bottom: 14px; border: 1.5px solid var(--border); }
  .question-block.correct { border-color: var(--green); background: var(--green-light); }
  .question-block.incorrect { border-color: var(--red); background: var(--red-light); }
  .q-num { font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-bottom: 6px; }
  .q-text { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 14px; line-height: 1.5; }

  .options { display: flex; flex-direction: column; gap: 8px; }
  .option-btn { background: var(--white); border: 1.5px solid var(--border); border-radius: 8px; padding: 10px 14px; font-size: 14px; text-align: left; cursor: pointer; transition: all 0.15s; color: var(--text); font-family: inherit; line-height: 1.4; }
  .option-btn:hover:not(:disabled) { border-color: var(--primary); background: var(--primary-light); color: var(--primary); }
  .option-btn.selected-correct { background: var(--green-light); border-color: var(--green); color: var(--green); font-weight: 600; }
  .option-btn.selected-wrong { background: var(--red-light); border-color: var(--red); color: var(--red); font-weight: 600; }
  .option-btn.reveal-correct { background: var(--green-light); border-color: var(--green); color: var(--green); }
  .option-btn:disabled { cursor: default; }

  .feedback-box { margin-top: 10px; padding: 10px 14px; border-radius: 6px; font-size: 13px; line-height: 1.5; display: none; }
  .feedback-box.show { display: block; }
  .feedback-box.correct { background: var(--green-light); color: var(--green); border-left: 3px solid var(--green); }
  .feedback-box.incorrect { background: var(--red-light); color: var(--red); border-left: 3px solid var(--red); }

  .quiz-result { background: var(--white); border-radius: 8px; padding: 18px; text-align: center; display: none; border: 2px solid var(--border); margin-top: 4px; }
  .quiz-result.show { display: block; }
  .result-score { font-size: 36px; font-weight: 700; margin-bottom: 4px; }
  .result-score.perfect { color: var(--green); }
  .result-score.good { color: var(--accent); }
  .result-score.retry { color: var(--red); }
  .result-msg { font-size: 15px; color: var(--text-muted); margin-bottom: 14px; }

  /* BUTTONS */
  .btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; font-family: inherit; transition: all 0.15s; }
  .btn-primary { background: var(--primary); color: #fff; }
  .btn-primary:hover { background: #1A4A70; }
  .btn-accent { background: var(--accent); color: #fff; }
  .btn-accent:hover { background: #E5732E; }
  .btn-outline { background: transparent; color: var(--primary); border: 2px solid var(--primary); }
  .btn-outline:hover { background: var(--primary-light); }
  .btn-sm { padding: 7px 16px; font-size: 13px; }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .nav-btns { display: flex; gap: 12px; justify-content: space-between; margin-top: 24px; flex-wrap: wrap; }

  /* WELCOME */
  .welcome-card { background: linear-gradient(135deg, var(--primary) 0%, #1A4A70 100%); color: #fff; border-radius: var(--radius); padding: 32px 28px; margin-bottom: 24px; }
  .welcome-card h1 { font-size: 26px; font-weight: 700; margin-bottom: 8px; }
  .welcome-card p { font-size: 15px; opacity: 0.9; line-height: 1.6; margin-bottom: 16px; }
  .welcome-meta { display: flex; gap: 20px; flex-wrap: wrap; }
  .meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; background: rgba(255,255,255,0.15); padding: 5px 12px; border-radius: 20px; }

  /* COMPLETION */
  .completion-card { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); padding: 40px 28px; text-align: center; display: none; }
  .completion-card.show { display: block; }
  .completion-icon { font-size: 56px; margin-bottom: 16px; }
  .completion-title { font-size: 26px; font-weight: 700; color: var(--primary); margin-bottom: 8px; }
  .completion-msg { font-size: 15px; color: var(--text-muted); max-width: 480px; margin: 0 auto 24px; line-height: 1.7; }
  .score-summary { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
  .score-pill { background: var(--primary-light); color: var(--primary); font-weight: 700; font-size: 15px; padding: 10px 20px; border-radius: 30px; border: 2px solid var(--primary-mid); }

  /* CERTIFICATE PREVIEW */
  .cert-preview { background: var(--yellow-light); border: 3px solid var(--yellow); border-radius: 12px; padding: 20px; max-width: 480px; margin: 0 auto 20px; }
  .cert-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #5C4A00; margin-bottom: 6px; }
  .cert-name { font-size: 22px; font-weight: 700; color: var(--primary); margin-bottom: 4px; }
  .cert-course { font-size: 14px; color: var(--text-muted); }

  /* TOOLTIP */
  .tooltip-wrap { position: relative; display: inline; }
  .tooltip-word { color: var(--primary); text-decoration: underline dotted; cursor: help; font-weight: 600; }
  .tooltip-box { display: none; position: absolute; bottom: 125%; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; font-size: 12px; padding: 8px 12px; border-radius: 6px; width: 200px; text-align: center; line-height: 1.4; z-index: 50; }
  .tooltip-wrap:hover .tooltip-box { display: block; }

  .divider { height: 1px; background: var(--border); margin: 20px 0; }
</style>
</head>
<body>

<nav class="top-nav">
  <div class="nav-inner">
    <div class="course-logo">Decoding the <span>Code</span></div>
    <div class="nav-progress">
      <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
      <div class="progress-label" id="progressLabel">0% Complete</div>
    </div>
  </div>
</nav>

<div class="wrapper">

  <div class="welcome-card">
    <h1>📚 Decoding the Code</h1>
    <p>Understanding and Supporting Dyslexia in the Classroom — An online professional development course grounded in constructivist learning theory.</p>
    <div class="welcome-meta">
      <div class="meta-item">📖 4 Sections</div>
      <div class="meta-item">✅ 12 Check-for-Understanding Questions</div>
      <div class="meta-item">⏱ ~45 min</div>
      <div class="meta-item">🎓 Certificate on Completion</div>
    </div>
  </div>

  <div class="course-layout">

    <!-- SIDEBAR -->
    <div class="sidebar">
      <div class="sidebar-title">Course Modules</div>
      <div class="sidebar-item active" onclick="goToSection(0)" id="nav-0">
        <div class="s-icon">1</div><span>Scenario Creation</span>
      </div>
      <div class="sidebar-item locked" onclick="goToSection(1)" id="nav-1">
        <div class="s-icon">2</div><span>ZPD Skills</span>
      </div>
      <div class="sidebar-item locked" onclick="goToSection(2)" id="nav-2">
        <div class="s-icon">3</div><span>Scaffolding Strategies</span>
      </div>
      <div class="sidebar-item locked" onclick="goToSection(3)" id="nav-3">
        <div class="s-icon">4</div><span>Reflection</span>
      </div>
    </div>

    <!-- SECTIONS -->
    <div class="main-content">

      <!-- ══ SECTION 1 ══ -->
      <div class="section-card active" id="sec-0">
        <div class="section-header">
          <div class="section-tag">Section 1 of 4</div>
          <div class="section-title">Scenario Creation</div>
          <div class="section-subtitle">Discover how constructivism shapes the learning experience</div>
        </div>
        <div class="section-body">
          <div class="content-block">
            <h3>Chosen Topic: Dyslexia Literacy Intervention</h3>
            <p>This course centers on an evidence-based, structured literacy approach to dyslexia support, grounded in the Science of Reading and Orton-Gillingham methodology. It is designed for K–12 educational settings and is built around active learning through case-based problem-solving, diagnostic experimentation, and reflective practice.</p>

            <div class="info-box">
              <strong>🔎 What Is Constructivism?</strong>
              <span class="tooltip-wrap"><span class="tooltip-word">Constructivism</span><span class="tooltip-box">A learning theory stating that learners actively build knowledge through experience — not through passive reception of information.</span></span> is a learning theory that positions learners as active builders of knowledge. Instead of absorbing information passively, learners construct understanding through discovery, problem-solving, and connecting new ideas to what they already know.
            </div>

            <h3>Meet Houston — Our Case Study</h3>
            <p>In this course, you will follow <strong>Houston</strong>, a fictional 4th-grade student who is creative, articulate, and full of great ideas — but struggles significantly with reading. His reading assessment data, classroom observation notes, and work samples are embedded throughout the course.</p>
            <p>Your job as a learner is to <em>build</em> your understanding of Houston's literacy needs through analysis and problem-solving — not simply read about it.</p>

            <div class="highlight-box">
              <strong>🧠 The Central Learning Challenge</strong>
              At each module checkpoint, you will receive new data about Houston and make diagnostic decisions. You'll adjust your thinking as new information arrives — just like real educators do in IEP meetings and intervention team consultations.
            </div>

            <h3>The Learning Environment</h3>
            <p>This online course leverages:</p>
            <div class="skill-grid">
              <div class="skill-tile blue">
                <div class="tile-num">Tool 1</div>
                <div class="tile-title">Case Studies</div>
                <div class="tile-desc">Multimedia data about Houston across all modules</div>
              </div>
              <div class="skill-tile green">
                <div class="tile-num">Tool 2</div>
                <div class="tile-title">Phoneme Activities</div>
                <div class="tile-desc">Drag-and-drop sorting and manipulation tasks</div>
              </div>
              <div class="skill-tile orange">
                <div class="tile-num">Tool 3</div>
                <div class="tile-title">Discussion Forums</div>
                <div class="tile-desc">Collaborative knowledge construction with peers</div>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- QUIZ 1 -->
          <div class="quiz-section" id="quiz-0">
            <div class="quiz-header">
              <div class="quiz-badge">✏️ Check for Understanding</div>
              <div class="quiz-title">Section 1 — 3 Questions</div>
              <div class="quiz-score-display" id="qs-0">0/3</div>
            </div>

            <div class="question-block" id="q0-block">
              <div class="q-num">Question 1 of 3</div>
              <div class="q-text">Which of the following best describes the constructivist approach used in this course?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(0,0,0,'wrong')">A. Learners watch videos and memorize key facts about dyslexia</button>
                <button class="option-btn" onclick="answer(0,0,1,'correct')">B. Learners actively diagnose a student case and build understanding through problem-solving</button>
                <button class="option-btn" onclick="answer(0,0,2,'wrong')">C. Learners take a final exam to demonstrate knowledge of dyslexia definitions</button>
                <button class="option-btn" onclick="answer(0,0,3,'wrong')">D. Learners read research articles and submit summaries</button>
              </div>
              <div class="feedback-box" id="fb-0-0"></div>
            </div>

            <div class="question-block" id="q1-block">
              <div class="q-num">Question 2 of 3</div>
              <div class="q-text">Houston is used as a central case study in this course primarily because:</div>
              <div class="options">
                <button class="option-btn" onclick="answer(0,1,0,'wrong')">A. His story is well-known and documented in research literature</button>
                <button class="option-btn" onclick="answer(0,1,1,'wrong')">B. He is an example of a student who does not need intervention</button>
                <button class="option-btn" onclick="answer(0,1,2,'correct')">C. He activates prior knowledge and creates authentic diagnostic problem-solving experiences</button>
                <button class="option-btn" onclick="answer(0,1,3,'wrong')">D. His case is simpler than real dyslexia profiles</button>
              </div>
              <div class="feedback-box" id="fb-0-1"></div>
            </div>

            <div class="question-block" id="q2-block">
              <div class="q-num">Question 3 of 3</div>
              <div class="q-text">According to constructivist learning theory, knowledge is best built when:</div>
              <div class="options">
                <button class="option-btn" onclick="answer(0,2,0,'wrong')">A. An expert delivers all information clearly and efficiently</button>
                <button class="option-btn" onclick="answer(0,2,1,'wrong')">B. Learners repeat content until it is memorized</button>
                <button class="option-btn" onclick="answer(0,2,2,'wrong')">C. Learners read independently without distraction</button>
                <button class="option-btn" onclick="answer(0,2,3,'correct')">D. Learners actively connect new information to prior knowledge through experience and reflection</button>
              </div>
              <div class="feedback-box" id="fb-0-2"></div>
            </div>

            <div class="quiz-result" id="qr-0">
              <div class="result-score" id="qr-score-0"></div>
              <div class="result-msg" id="qr-msg-0"></div>
              <button class="btn btn-outline btn-sm" onclick="retryQuiz(0)" id="retry-0" style="display:none">↺ Retry Quiz</button>
            </div>
          </div>

          <div class="nav-btns">
            <span></span>
            <button class="btn btn-accent" onclick="nextSection(0)" id="next-0" disabled>Next: ZPD Skills →</button>
          </div>
        </div>
      </div>

      <!-- ══ SECTION 2 ══ -->
      <div class="section-card" id="sec-1">
        <div class="section-header">
          <div class="section-tag">Section 2 of 4</div>
          <div class="section-title">Zone of Proximal Development (ZPD) Skills</div>
          <div class="section-subtitle">Identify what learners can achieve with the right guidance</div>
        </div>
        <div class="section-body">
          <div class="content-block">
            <div class="info-box">
              <strong>🎯 What Is the ZPD?</strong>
              Vygotsky's <span class="tooltip-wrap"><span class="tooltip-word">Zone of Proximal Development</span><span class="tooltip-box">The ZPD is the distance between what a learner can do independently and what they can achieve with guidance from a more knowledgeable other.</span></span> (ZPD) describes the space between what a learner can do independently and what they can achieve with guidance. The most effective instruction targets this zone — not too easy, not too hard.
            </div>

            <h3>Three ZPD Skill Areas</h3>
            <p>The following skills are within the ZPD for most educators enrolled in this course — attainable with structured support but beyond current independent capability:</p>

            <div class="skill-grid">
              <div class="skill-tile blue">
                <div class="tile-num">Skill 1</div>
                <div class="tile-title">Diagnostic Interpretation</div>
                <div class="tile-desc">Reading and interpreting multi-dimensional literacy data: phonological awareness scores, rapid automatized naming, phoneme segmentation fluency</div>
              </div>
              <div class="skill-tile green">
                <div class="tile-num">Skill 2</div>
                <div class="tile-title">Strategy Selection & Sequencing</div>
                <div class="tile-desc">Choosing and ordering Orton-Gillingham-aligned strategies based on a student's specific deficit profile</div>
              </div>
              <div class="skill-tile orange">
                <div class="tile-num">Skill 3</div>
                <div class="tile-title">Differentiated Planning</div>
                <div class="tile-desc">Designing dyslexia-specific accommodations: multisensory techniques, explicit phonics progressions, reduced visual clutter</div>
              </div>
            </div>

            <h3>Why These Skills Are in the ZPD</h3>
            <p><strong>Skill 1</strong> requires more than reading a number — it demands pattern recognition across multiple data points. Most educators can read a fluency benchmark but cannot yet synthesize phonological profiles without guidance.</p>
            <p><strong>Skill 2</strong> builds on general awareness that a student "struggles with decoding" — but knowing <em>which specific strategy sequence</em> to deploy requires expert modeling and scaffolded practice.</p>
            <p><strong>Skill 3</strong> moves beyond general differentiation into research-aligned, dyslexia-specific instructional design — a skill that requires collaborative modeling before independent execution.</p>

            <div class="highlight-box">
              <strong>💡 Key Insight</strong>
              These are not skills educators lack entirely — they are skills sitting just beyond the edge of independent capability. With the right support structure, every learner in this course can reach them.
            </div>
          </div>

          <div class="divider"></div>

          <!-- QUIZ 2 -->
          <div class="quiz-section" id="quiz-1">
            <div class="quiz-header">
              <div class="quiz-badge">✏️ Check for Understanding</div>
              <div class="quiz-title">Section 2 — 3 Questions</div>
              <div class="quiz-score-display" id="qs-1">0/3</div>
            </div>

            <div class="question-block" id="q3-block">
              <div class="q-num">Question 1 of 3</div>
              <div class="q-text">Vygotsky's Zone of Proximal Development (ZPD) refers to:</div>
              <div class="options">
                <button class="option-btn" onclick="answer(1,0,0,'correct')">A. The gap between what a learner can do independently and what they can do with guidance</button>
                <button class="option-btn" onclick="answer(1,0,1,'wrong')">B. The highest level of skill a learner has already mastered</button>
                <button class="option-btn" onclick="answer(1,0,2,'wrong')">C. The amount of time it takes to learn a new skill</button>
                <button class="option-btn" onclick="answer(1,0,3,'wrong')">D. A test used to measure phonological awareness</button>
              </div>
              <div class="feedback-box" id="fb-1-0"></div>
            </div>

            <div class="question-block" id="q4-block">
              <div class="q-num">Question 2 of 3</div>
              <div class="q-text">Which of the following skills is correctly identified as lying within the ZPD for this course's learners?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(1,1,0,'wrong')">A. Reading a student's name on a class roster</button>
                <button class="option-btn" onclick="answer(1,1,1,'wrong')">B. Conducting an independent IEP meeting with no training</button>
                <button class="option-btn" onclick="answer(1,1,2,'correct')">C. Interpreting phonological awareness scores to identify dyslexia-specific patterns with guided support</button>
                <button class="option-btn" onclick="answer(1,1,3,'wrong')">D. Writing a dissertation on neuroscience</button>
              </div>
              <div class="feedback-box" id="fb-1-1"></div>
            </div>

            <div class="question-block" id="q5-block">
              <div class="q-num">Question 3 of 3</div>
              <div class="q-text">Why is "selecting and sequencing structured literacy strategies" considered a ZPD skill for most educators?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(1,2,0,'wrong')">A. Most educators have never heard of structured literacy</button>
                <button class="option-btn" onclick="answer(1,2,1,'correct')">B. While educators can identify a decoding struggle, choosing the right strategy sequence for a specific deficit profile requires scaffolded practice and expert feedback</button>
                <button class="option-btn" onclick="answer(1,2,2,'wrong')">C. The skill is too advanced for educators to ever learn</button>
                <button class="option-btn" onclick="answer(1,2,3,'wrong')">D. It is fully covered in most teacher prep programs</button>
              </div>
              <div class="feedback-box" id="fb-1-2"></div>
            </div>

            <div class="quiz-result" id="qr-1">
              <div class="result-score" id="qr-score-1"></div>
              <div class="result-msg" id="qr-msg-1"></div>
              <button class="btn btn-outline btn-sm" onclick="retryQuiz(1)" id="retry-1" style="display:none">↺ Retry Quiz</button>
            </div>
          </div>

          <div class="nav-btns">
            <button class="btn btn-outline" onclick="prevSection(1)">← Back</button>
            <button class="btn btn-accent" onclick="nextSection(1)" id="next-1" disabled>Next: Scaffolding →</button>
          </div>
        </div>
      </div>

      <!-- ══ SECTION 3 ══ -->
      <div class="section-card" id="sec-2">
        <div class="section-header">
          <div class="section-tag">Section 3 of 4</div>
          <div class="section-title">Scaffolding & Social Constructivism Strategies</div>
          <div class="section-subtitle">How do we build the bridge from guided to independent?</div>
        </div>
        <div class="section-body">
          <div class="content-block">
            <h3>Scaffolding Strategy: Gradual Release of Responsibility</h3>
            <p>To support learners through the complex skill of interpreting reading data, this course uses a <strong>Gradual Release of Responsibility (GRR)</strong> model — embedded directly into the Houston case study.</p>

            <div class="steps-list">
              <div class="step-row">
                <div class="step-badge b1">1</div>
                <div class="step-text">
                  <strong>I Do — Expert Modeling</strong>
                  An instructional coach walks through Houston's reading data on video, narrating their diagnostic thinking aloud. Embedded comprehension checks ask learners to identify key reasoning moves.
                </div>
              </div>
              <div class="step-row">
                <div class="step-badge b2">2</div>
                <div class="step-text">
                  <strong>We Do — Guided Practice</strong>
                  Learners receive a partially completed diagnostic framework. A virtual mentor prompt system asks guiding questions (e.g., "What does this phoneme segmentation score tell you?"). Hints fade as proficiency grows.
                </div>
              </div>
              <div class="step-row">
                <div class="step-badge b3">3</div>
                <div class="step-text">
                  <strong>You Do — Independent Application</strong>
                  Learners independently complete a new student profile using a blank diagnostic tool — no hints, no coaching. They submit for peer review and instructor feedback.
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <h3>Social Constructivist Approach: Case Conference Forum</h3>
            <p>Drawing from Vygotsky's social constructivism, the course includes a <strong>Collaborative Case Conference Forum</strong> at the end of each module. Participants post their diagnostic reasoning, then respond to two peers whose approaches differ from their own.</p>
            <p>The forum is designed to surface <em>productive disagreement</em>. Participants must defend or revise their position with evidence — mirroring the professional practice of IEP meetings and intervention team consultations.</p>

            <div class="divider"></div>

            <h3>Differentiation for Diverse Learners</h3>
            <div class="team-grid">
              <div class="team-card">
                <div class="team-avatar">🎯</div>
                <div class="team-name">Tiered Entry</div>
                <div class="team-role">Pre-course survey routes learners to foundational or advanced modules</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">🌍</div>
                <div class="team-name">Cultural Design</div>
                <div class="team-role">Readings address dyslexia across languages and literacy systems</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">🎧</div>
                <div class="team-name">Flexible Modality</div>
                <div class="team-role">All videos include captions, transcripts, and audio-only versions</div>
              </div>
              <div class="team-card">
                <div class="team-avatar">🤝</div>
                <div class="team-name">Mentor Check-Ins</div>
                <div class="team-role">Confused learners get a 15-min virtual office hours prompt</div>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- QUIZ 3 -->
          <div class="quiz-section" id="quiz-2">
            <div class="quiz-header">
              <div class="quiz-badge">✏️ Check for Understanding</div>
              <div class="quiz-title">Section 3 — 3 Questions</div>
              <div class="quiz-score-display" id="qs-2">0/3</div>
            </div>

            <div class="question-block" id="q6-block">
              <div class="q-num">Question 1 of 3</div>
              <div class="q-text">In the Gradual Release of Responsibility model, what happens during the "We Do" phase?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(2,0,0,'wrong')">A. The instructor delivers all content via lecture with no learner interaction</button>
                <button class="option-btn" onclick="answer(2,0,1,'wrong')">B. Learners independently complete a full diagnostic assessment with no support</button>
                <button class="option-btn" onclick="answer(2,0,2,'correct')">C. Learners practice with guided prompts and hints that gradually fade as proficiency grows</button>
                <button class="option-btn" onclick="answer(2,0,3,'wrong')">D. Learners watch a peer complete the task while taking notes</button>
              </div>
              <div class="feedback-box" id="fb-2-0"></div>
            </div>

            <div class="question-block" id="q7-block">
              <div class="q-num">Question 2 of 3</div>
              <div class="q-text">The Collaborative Case Conference Forum in this course is primarily designed to:</div>
              <div class="options">
                <button class="option-btn" onclick="answer(2,1,0,'wrong')">A. Allow the instructor to deliver feedback to each learner privately</button>
                <button class="option-btn" onclick="answer(2,1,1,'correct')">B. Surface productive disagreement so learners co-construct knowledge through dialogue</button>
                <button class="option-btn" onclick="answer(2,1,2,'wrong')">C. Provide a space for learners to share personal experiences with dyslexia</button>
                <button class="option-btn" onclick="answer(2,1,3,'wrong')">D. Replace all other course assessments with peer grading</button>
              </div>
              <div class="feedback-box" id="fb-2-1"></div>
            </div>

            <div class="question-block" id="q8-block">
              <div class="q-num">Question 3 of 3</div>
              <div class="q-text">Which differentiation strategy addresses learners who process information better through reading than watching video?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(2,2,0,'wrong')">A. Tiered entry points based on a pre-course survey</button>
                <button class="option-btn" onclick="answer(2,2,1,'wrong')">B. The Collaborative Case Conference Forum</button>
                <button class="option-btn" onclick="answer(2,2,2,'correct')">C. Flexible modality options — captions, transcripts, and audio-only versions of all videos</button>
                <button class="option-btn" onclick="answer(2,2,3,'wrong')">D. The Gradual Release of Responsibility model</button>
              </div>
              <div class="feedback-box" id="fb-2-2"></div>
            </div>

            <div class="quiz-result" id="qr-2">
              <div class="result-score" id="qr-score-2"></div>
              <div class="result-msg" id="qr-msg-2"></div>
              <button class="btn btn-outline btn-sm" onclick="retryQuiz(2)" id="retry-2" style="display:none">↺ Retry Quiz</button>
            </div>
          </div>

          <div class="nav-btns">
            <button class="btn btn-outline" onclick="prevSection(2)">← Back</button>
            <button class="btn btn-accent" onclick="nextSection(2)" id="next-2" disabled>Next: Reflection →</button>
          </div>
        </div>
      </div>

      <!-- ══ SECTION 4 ══ -->
      <div class="section-card" id="sec-3">
        <div class="section-header">
          <div class="section-tag">Section 4 of 4</div>
          <div class="section-title">Reflective Analysis</div>
          <div class="section-subtitle">How do constructivism principles shape design and outcomes?</div>
        </div>
        <div class="section-body">
          <div class="content-block">
            <p>Designing this learning scenario through the lens of constructivism — and specifically Vygotsky's ZPD and scaffolding theory — reinforced how critical it is to understand not just <em>what</em> learners need to learn, but the gap between what they can do now and what they can reach with the right support.</p>

            <div class="info-box">
              <strong>💡 The Core Constructivist Insight</strong>
              Telling educators about dyslexia is far less powerful than positioning them inside a diagnostic challenge. The Houston case study activates prior knowledge and disrupts it — moving learners from surface-level awareness toward deeper instructional thinking.
            </div>

            <h3>ZPD → Design Decision</h3>
            <p>Identifying the three ZPD skills pushed the course design away from content delivery and toward <em>performance-based learning</em>. Rather than asking learners to recall definitions, every module puts them inside a real professional task — forcing authentic engagement with the material.</p>

            <h3>Scaffolding → Gradual Release</h3>
            <p>The GRR model reflects a belief that expertise should be visible before it is expected. The cognitive load of diagnosing reading disabilities is significant — without visible expert modeling first, novice educators cannot know what "good thinking" looks like in this domain.</p>

            <h3>Social Constructivism → Productive Dialogue</h3>
            <p>The Case Conference Forum addresses something critically underrepresented in online PD: the absence of professional dialogue. Most asynchronous courses isolate learners. This course intentionally creates the conditions for productive disagreement — the kind of conversation that actually changes instructional practice.</p>

            <div class="highlight-box">
              <strong>🤖 AI Tool Disclosure</strong>
              Claude (Anthropic) was used as a thought partner throughout the development of this course — to stress-test ZPD skill identification, push back on scaffold design, and surface alternative framings for differentiation. The AI did not produce the instructional content — it helped interrogate and sharpen ideas. Professional knowledge (structured literacy framework, OG sequence logic, IEP dynamics) came from the designer's own practice as a Texas-certified Special Education teacher and Reading By Design dyslexia intervention specialist.
            </div>
          </div>

          <div class="divider"></div>

          <!-- QUIZ 4 -->
          <div class="quiz-section" id="quiz-3">
            <div class="quiz-header">
              <div class="quiz-badge">✏️ Check for Understanding</div>
              <div class="quiz-title">Section 4 — 3 Questions</div>
              <div class="quiz-score-display" id="qs-3">0/3</div>
            </div>

            <div class="question-block" id="q9-block">
              <div class="q-num">Question 1 of 3</div>
              <div class="q-text">Why does the course use a case study (Houston) rather than lectures about dyslexia?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(3,0,0,'wrong')">A. Case studies are easier to grade than written assessments</button>
                <button class="option-btn" onclick="answer(3,0,1,'correct')">B. Positioning learners inside a diagnostic challenge is more powerful than passive content delivery — it activates and disrupts prior knowledge</button>
                <button class="option-btn" onclick="answer(3,0,2,'wrong')">C. Houston is a real student whose story is publicly documented</button>
                <button class="option-btn" onclick="answer(3,0,3,'wrong')">D. Lectures about dyslexia are legally prohibited in PD settings</button>
              </div>
              <div class="feedback-box" id="fb-3-0"></div>
            </div>

            <div class="question-block" id="q10-block">
              <div class="q-num">Question 2 of 3</div>
              <div class="q-text">What does the Gradual Release of Responsibility model reflect about expertise development?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(3,1,0,'wrong')">A. Expertise is innate and cannot be taught through scaffolding</button>
                <button class="option-btn" onclick="answer(3,1,1,'wrong')">B. Learners should attempt difficult tasks completely on their own first</button>
                <button class="option-btn" onclick="answer(3,1,2,'correct')">C. Expertise should be visible before it is expected — expert modeling reduces cognitive load and shows learners what good thinking looks like</button>
                <button class="option-btn" onclick="answer(3,1,3,'wrong')">D. All learners progress at the same rate through skill development</button>
              </div>
              <div class="feedback-box" id="fb-3-1"></div>
            </div>

            <div class="question-block" id="q11-block">
              <div class="q-num">Question 3 of 3</div>
              <div class="q-text">According to the reflective analysis, what makes the Collaborative Case Conference Forum especially valuable for online PD?</div>
              <div class="options">
                <button class="option-btn" onclick="answer(3,2,0,'wrong')">A. It replaces the need for instructor feedback entirely</button>
                <button class="option-btn" onclick="answer(3,2,1,'wrong')">B. It is required by accreditation standards for professional development</button>
                <button class="option-btn" onclick="answer(3,2,2,'wrong')">C. It allows learners to earn points toward licensure renewal</button>
                <button class="option-btn" onclick="answer(3,2,3,'correct')">D. It creates conditions for productive disagreement — the kind of professional dialogue that most asynchronous courses fail to include and that actually changes instructional practice</button>
              </div>
              <div class="feedback-box" id="fb-3-2"></div>
            </div>

            <div class="quiz-result" id="qr-3">
              <div class="result-score" id="qr-score-3"></div>
              <div class="result-msg" id="qr-msg-3"></div>
              <button class="btn btn-outline btn-sm" onclick="retryQuiz(3)" id="retry-3" style="display:none">↺ Retry Quiz</button>
            </div>
          </div>

          <div class="nav-btns">
            <button class="btn btn-outline" onclick="prevSection(3)">← Back</button>
            <button class="btn btn-accent" onclick="completeCourse()" id="next-3" disabled>🎓 Complete Course</button>
          </div>
        </div>
      </div>

      <!-- COMPLETION -->
      <div class="completion-card" id="completion">
        <div class="completion-icon">🎉</div>
        <div class="completion-title">Course Complete!</div>
        <div class="completion-msg">You have successfully completed <em>Decoding the Code: Understanding and Supporting Dyslexia in the Classroom</em>. Excellent work building your constructivist knowledge!</div>
        <div class="score-summary" id="finalScoreSummary"></div>
        <div class="cert-preview">
          <div class="cert-title">🏆 Certificate of Completion</div>
          <div class="cert-name">Decoding the Code</div>
          <div class="cert-course">Understanding and Supporting Dyslexia in the Classroom<br>LDT Program · UMGC · June 2026</div>
        </div>
        <button class="btn btn-primary" onclick="window.print()">🖨 Print Certificate</button>
      </div>

    </div><!-- /main-content -->
  </div><!-- /course-layout -->
</div><!-- /wrapper -->

<script>
  const TOTAL_SECTIONS = 4;
  const QUESTIONS_PER_SECTION = 3;

  const feedback = {
    correct: [
      "✅ Correct! Constructivism centers on active knowledge construction through experience.",
      "✅ Right! Houston provides an authentic, discovery-based problem-solving context.",
      "✅ Excellent! Connecting new information to prior knowledge through experience is the constructivist core.",
      "✅ Correct! The ZPD is that productive zone between independent ability and guided potential.",
      "✅ Right! This is a classic ZPD skill — attainable with guided support but beyond independent reach.",
      "✅ Exactly! The ZPD requires skills that are challenging but achievable with structured guidance.",
      "✅ Correct! The 'We Do' phase uses fading prompts and hints to support guided practice.",
      "✅ Right! Productive disagreement is the engine of social constructivist learning.",
      "✅ Correct! Flexible modality options serve learners with different processing preferences.",
      "✅ Exactly! Positioning learners inside the challenge is the constructivist design principle.",
      "✅ Correct! Making expertise visible through modeling is the foundation of the GRR approach.",
      "✅ Right! Productive professional dialogue is the key outcome of the case conference design."
    ],
    wrong: [
      "❌ Not quite. Constructivism is about active construction of knowledge — not passive reception. Try again!",
      "❌ Incorrect. Houston is used because he creates authentic diagnostic problem-solving opportunities.",
      "❌ Not quite. Think about what constructivism emphasizes about the learner's role.",
      "❌ Incorrect. The ZPD is about the gap between independent ability and guided potential.",
      "❌ Not quite. Think about which skill genuinely requires expert guidance to reach.",
      "❌ Incorrect. Consider what makes something truly within the ZPD vs. fully mastered.",
      "❌ Not quite. Think about what distinguishes the 'We Do' phase from the others.",
      "❌ Incorrect. The forum's primary purpose is collaborative knowledge construction.",
      "❌ Not quite. Which differentiation strategy specifically addresses modality preferences?",
      "❌ Incorrect. Think about the constructivist principle behind the case study design choice.",
      "❌ Not quite. Consider what the GRR model says about showing expertise before expecting it.",
      "❌ Incorrect. Think about what's uniquely missing from most asynchronous PD courses."
    ]
  };

  let sectionScores = [0, 0, 0, 0];
  let sectionAnswered = [0, 0, 0, 0];
  let sectionUnlocked = [true, false, false, false];
  let qFeedbackIdx = 0;

  function answer(sectionIdx, qIdx, optionIdx, result) {
    const globalQ = sectionIdx * 3 + qIdx;
    const blockId = `q${globalQ}-block`;
    const block = document.getElementById(blockId);
    if (!block) return;
    const btns = block.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);

    const fbEl = document.getElementById(`fb-${sectionIdx}-${qIdx}`);
    const isCorrect = result === 'correct';

    btns[optionIdx].classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
    if (!isCorrect) {
      btns.forEach((b, i) => {
        if (b.textContent.trim() === getCorrectText(sectionIdx, qIdx)) {
          b.classList.add('reveal-correct');
        }
      });
      // find correct by scanning
      findAndRevealCorrect(sectionIdx, qIdx, btns);
    }
    block.classList.add(isCorrect ? 'correct' : 'incorrect');

    fbEl.textContent = isCorrect ? feedback.correct[globalQ] : feedback.wrong[globalQ];
    fbEl.className = `feedback-box show ${isCorrect ? 'correct' : 'incorrect'}`;

    if (isCorrect) sectionScores[sectionIdx]++;
    sectionAnswered[sectionIdx]++;

    document.getElementById(`qs-${sectionIdx}`).textContent = `${sectionScores[sectionIdx]}/${sectionAnswered[sectionIdx]}`;

    if (sectionAnswered[sectionIdx] === QUESTIONS_PER_SECTION) {
      showQuizResult(sectionIdx);
    }
  }

  function findAndRevealCorrect(si, qi, btns) {
    const correctMap = {
      '0-0': 1, '0-1': 2, '0-2': 3,
      '1-0': 0, '1-1': 2, '1-2': 1,
      '2-0': 2, '2-1': 1, '2-2': 2,
      '3-0': 1, '3-1': 2, '3-2': 3
    };
    const key = `${si}-${qi}`;
    const correctIdx = correctMap[key];
    if (correctIdx !== undefined) btns[correctIdx].classList.add('reveal-correct');
  }

  function showQuizResult(si) {
    const score = sectionScores[si];
    const el = document.getElementById(`qr-${si}`);
    const scoreEl = document.getElementById(`qr-score-${si}`);
    const msgEl = document.getElementById(`qr-msg-${si}`);
    const retryBtn = document.getElementById(`retry-${si}`);
    const nextBtn = document.getElementById(`next-${si}`);

    el.classList.add('show');
    scoreEl.textContent = `${score}/3`;

    if (score === 3) {
      scoreEl.className = 'result-score perfect';
      msgEl.textContent = '🌟 Perfect score! You\'ve mastered this section. Move on to the next!';
      nextBtn.disabled = false;
    } else if (score === 2) {
      scoreEl.className = 'result-score good';
      msgEl.textContent = '👍 Good work! 2 out of 3 — review the feedback above and try again or continue.';
      retryBtn.style.display = 'inline-flex';
      nextBtn.disabled = false;
    } else {
      scoreEl.className = 'result-score retry';
      msgEl.textContent = '📖 Review the section content and try again to strengthen your understanding.';
      retryBtn.style.display = 'inline-flex';
    }

    updateProgress();
  }

  function retryQuiz(si) {
    sectionScores[si] = 0;
    sectionAnswered[si] = 0;
    document.getElementById(`qs-${si}`).textContent = '0/3';
    document.getElementById(`qr-${si}`).classList.remove('show');
    document.getElementById(`retry-${si}`).style.display = 'none';
    document.getElementById(`next-${si}`).disabled = true;

    const start = si * 3;
    for (let q = start; q < start + 3; q++) {
      const block = document.getElementById(`q${q}-block`);
      if (!block) continue;
      block.className = 'question-block';
      const btns = block.querySelectorAll('.option-btn');
      btns.forEach(b => {
        b.disabled = false;
        b.className = 'option-btn';
      });
      const qi = q - start;
      const fb = document.getElementById(`fb-${si}-${qi}`);
      if (fb) { fb.className = 'feedback-box'; fb.textContent = ''; }
    }
  }

  function nextSection(si) {
    goToSection(si + 1);
  }
  function prevSection(si) {
    goToSection(si - 1);
  }

  function goToSection(idx) {
    if (!sectionUnlocked[idx] && idx > 0) return;
    document.querySelectorAll('.section-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.sidebar-item').forEach(n => n.classList.remove('active'));

    const card = document.getElementById(`sec-${idx}`);
    const nav = document.getElementById(`nav-${idx}`);
    if (card) card.classList.add('active');
    if (nav) {
      nav.classList.add('active');
      nav.classList.remove('locked');
    }
    sectionUnlocked[idx] = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateProgress() {
    const answered = sectionAnswered.reduce((a, b) => a + b, 0);
    const pct = Math.round((answered / 12) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = pct + '% Complete';
  }

  function completeCourse() {
    document.querySelectorAll('.section-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.sidebar-item').forEach(n => {
      n.classList.remove('active');
      n.classList.add('completed');
      n.querySelector('.s-icon').textContent = '✓';
    });
    const comp = document.getElementById('completion');
    comp.classList.add('show');

    const total = sectionScores.reduce((a, b) => a + b, 0);
    const summary = document.getElementById('finalScoreSummary');
    const labels = ['Scenario Creation', 'ZPD Skills', 'Scaffolding', 'Reflection'];
    summary.innerHTML = sectionScores.map((s, i) =>
      `<div class="score-pill">${labels[i]}: ${s}/3</div>`
    ).join('') + `<div class="score-pill" style="background:#E8F5E9;color:#2E7D32;border-color:#66BB6A;">Total: ${total}/12</div>`;

    document.getElementById('progressFill').style.width = '100%';
    document.getElementById('progressLabel').textContent = '100% Complete 🎉';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

</body>
</html>