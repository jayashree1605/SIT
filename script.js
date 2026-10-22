"use strict";
    const courses = [
      { id:"data-science", title:"Data Science with AI", category:"AI & Data", duration:"3–4 Months", level:"Beginner friendly", art:"chart", visualTags:["Python","Machine learning"], preview:["Python Programming","Statistics & Data Analysis","Machine Learning","Model Evaluation & Projects"], description:"Turn raw data into useful questions, models and clear explanations. Build a foundation in analysis and applied machine learning.", modules:["Python and data foundations","Exploratory analysis and visualisation","Machine learning workflows","Capstone: an end-to-end model"] },
      { id:"data-analytics", title:"Data Analytics", category:"AI & Data", duration:"3–4 Months", level:"Start with the basics", art:"pie", visualTags:["SQL","Dashboards"], preview:["SQL & Database Queries","Excel & Data Cleaning","Power BI & Dashboards","Business Insights & Reporting"], description:"Learn to find patterns, communicate metrics and support better decisions with practical analysis workflows.", modules:["Spreadsheets and data quality","SQL for everyday questions","Dashboards and visual storytelling","Capstone: an insight report"] },
      { id:"generative-ai", title:"Generative AI", category:"AI & Data", duration:"3–4 Months", level:"No coding required", art:"neural", visualTags:["Prompt design","AI workflows"], preview:["Generative AI Fundamentals","Prompt Engineering","AI Tools & Applications","Responsible AI Workflows"], description:"Explore generative AI tools and concepts, then prototype responsible workflows for real tasks.", modules:["How generative models work","Prompt design and evaluation","AI workflow prototyping","Capstone: a useful assistant"] },
      { id:"full-stack", title:"Full Stack Development", category:"Development", duration:"3–4 Months", level:"Beginner friendly", art:"browser", visualTags:["JavaScript","APIs · UI"], preview:["HTML, CSS & JavaScript","Frontend Development","Backend & REST APIs","Databases & Deployment"], description:"Build responsive web experiences and the services behind them, with a focus on clean fundamentals.", modules:["HTML, CSS and interface craft","JavaScript and modern frontend","APIs, databases and backend","Capstone: a deployed web app"] },
      { id:"cloud-aws", title:"Cloud with AWS", category:"Cloud & DevOps", duration:"3–4 Months", level:"Some IT familiarity", art:"cloud", visualTags:["AWS","Cloud services"], preview:["Cloud Computing Fundamentals","AWS Core Services","IAM, VPC & Security","Hosting & Cloud Monitoring"], description:"Understand core cloud services and practice designing, securing and operating simple cloud workloads.", modules:["Cloud concepts and IAM","Compute, storage and networking","Monitoring and security","Capstone: a cloud architecture"] },
      { id:"devops", title:"DevOps Engineering", category:"Cloud & DevOps", duration:"3–4 Months", level:"Some IT familiarity", art:"infinity", visualTags:["CI/CD","Containers"], preview:["Linux & Git","Docker & Containers","Jenkins & CI/CD Pipelines","Kubernetes & Terraform"], description:"Connect development and operations through automation, repeatable delivery and observable systems.", modules:["Linux, Git and collaboration","CI/CD pipelines","Containers and orchestration","Capstone: automated delivery"] },
      { id:"cyber-security", title:"Cyber Security", category:"Cloud & DevOps", duration:"3–4 Months", level:"Foundational IT", art:"shield", visualTags:["Threat analysis","Defense"], preview:["Security Fundamentals","Networking & Threat Analysis","Vulnerability Assessment","Defensive Security Labs"], description:"Develop a defensive mindset and learn core security practices through controlled lab exercises.", modules:["Security concepts and threat models","Network and system fundamentals","Detection and incident response","Capstone: a security assessment"] },
      { id:"ui-ux", title:"UI/UX Design", category:"Design", duration:"3–4 Months", level:"No experience needed", art:"wireframe", visualTags:["User research","Prototyping"], preview:["Design Principles","User Research & Personas","Wireframes & Prototypes","Usability Testing"], description:"Research user needs, shape interfaces and test design decisions with thoughtful prototypes.", modules:["Research and problem framing","Information architecture","Interface systems and prototyping","Capstone: a tested product flow"] },
      { id:"digital-marketing", title:"Digital Marketing", category:"Marketing", duration:"3–4 Months", level:"No experience needed", art:"chart", visualTags:["SEO","Campaign analytics"], preview:["SEO & Search Marketing","Social Media Marketing","Content & Campaign Planning","Analytics & Performance Tracking"], description:"Plan digital campaigns, reach the right audiences and measure what works across search, social and content.", modules:["Audience research and marketing strategy","Content and social media campaigns","Search and paid advertising fundamentals","Capstone: a measurable campaign plan"] }
    ];
    const syllabusDetails = {
      "data-science": [
        { topics: ["Python syntax, notebooks and core data structures", "Tabular data with pandas and NumPy"], practice: "Load, clean and summarise a small dataset." },
        { topics: ["Exploratory analysis and descriptive statistics", "Charts, distributions and communicating uncertainty"], practice: "Create a short visual data story from a chosen dataset." },
        { topics: ["Supervised and unsupervised learning concepts", "Feature preparation, model evaluation and responsible use"], practice: "Compare baseline models and explain their limitations." },
        { topics: ["Problem framing, data preparation and modelling", "Reproducible workflow and presentation of findings"], practice: "Build and present an end-to-end analysis and model." }
      ],
      "data-analytics": [
        { topics: ["Spreadsheet formulas, tables and data quality", "Sorting, filtering and basic descriptive measures"], practice: "Clean a sample business dataset and document assumptions." },
        { topics: ["SQL SELECT, filtering and sorting", "Joins, aggregation and grouping"], practice: "Answer a set of stakeholder questions with SQL queries." },
        { topics: ["Choosing chart types and defining useful metrics", "Dashboard layout and clear written summaries"], practice: "Design a dashboard and explain its key findings." },
        { topics: ["Turning a business question into an analysis", "Checking results and communicating recommendations"], practice: "Deliver an insight report with supporting queries and visuals." }
      ],
      "generative-ai": [
        { topics: ["What generative models do and how to use them", "Strengths, limitations, privacy and responsible use"], practice: "Evaluate outputs from a model against a simple task." },
        { topics: ["Writing clear prompts with context and constraints", "Iterative refinement and output evaluation"], practice: "Create and compare prompts for a repeatable task." },
        { topics: ["Mapping a workflow and selecting appropriate tools", "Human review, safeguards and quality checks"], practice: "Prototype a small AI-assisted workflow with a review step." },
        { topics: ["Defining user needs and success criteria", "Testing, documenting and presenting an AI assistant"], practice: "Present a useful assistant prototype and its limitations." }
      ],
      "full-stack": [
        { topics: ["Semantic HTML, page structure and accessibility", "CSS layout, responsive design and visual hierarchy"], practice: "Build a responsive multi-section web page." },
        { topics: ["JavaScript fundamentals, DOM and events", "Components, state and working with browser APIs"], practice: "Create an interactive interface with form validation." },
        { topics: ["HTTP, REST API concepts and server-side basics", "Data modelling, persistence and input validation"], practice: "Connect a user interface to a simple data-backed service." },
        { topics: ["Planning and building a complete application", "Testing, accessibility checks and deployment basics"], practice: "Present a deployed web app and explain its architecture." }
      ],
      "cloud-aws": [
        { topics: ["Cloud service models and shared responsibility", "Identity, access policies and account safety"], practice: "Map access needs for a sample cloud workload." },
        { topics: ["Compute and storage service concepts", "Networking, regions and availability fundamentals"], practice: "Draft an architecture for a small web workload." },
        { topics: ["Monitoring, logs and cost awareness", "Security controls, backups and reliability basics"], practice: "Review a sample architecture for security and operations." },
        { topics: ["Requirements, service selection and architecture diagrams", "Trade-offs, security and cost considerations"], practice: "Present a cloud architecture with operational considerations." }
      ],
      "devops": [
        { topics: ["Linux command line and file permissions", "Git workflows, branching and collaboration"], practice: "Use version control to manage a small team project." },
        { topics: ["Build and test automation concepts", "Pipeline stages, artifacts and deployment checks"], practice: "Design a CI workflow for a sample application." },
        { topics: ["Containers, images and registries", "Orchestration concepts and configuration"], practice: "Package an app and describe how it would be deployed." },
        { topics: ["Automating a repeatable delivery workflow", "Observability, rollback planning and documentation"], practice: "Demonstrate an automated delivery pipeline design." }
      ],
      "cyber-security": [
        { topics: ["Confidentiality, integrity and availability", "Threat modelling, risk and security ethics"], practice: "Create a threat model for a fictional service." },
        { topics: ["Networking and operating system fundamentals", "Authentication, access control and secure configuration"], practice: "Review a controlled lab setup using a defensive checklist." },
        { topics: ["Security logs and alert triage", "Incident response lifecycle and evidence handling"], practice: "Work through a simulated incident scenario." },
        { topics: ["Scoping and documenting a defensive assessment", "Prioritising findings and recommending mitigations"], practice: "Present a security assessment using an authorised lab scenario." }
      ],
      "ui-ux": [
        { topics: ["User needs, interview planning and observation", "Problem framing, personas and task journeys"], practice: "Summarise research into a clear design problem." },
        { topics: ["Content structure and navigation models", "User flows, wireframes and usability principles"], practice: "Map a user flow and sketch key screens." },
        { topics: ["Visual hierarchy, typography and interface patterns", "Interactive prototyping and design consistency"], practice: "Build a clickable prototype for a core task." },
        { topics: ["Usability test planning and note taking", "Iteration, rationale and design presentation"], practice: "Test and refine a prototype, then present the findings." }
      ],
      "digital-marketing": [
        { topics: ["Audience research and customer journeys", "Goals, positioning and campaign planning"], practice: "Write a brief for a clearly defined audience." },
        { topics: ["Content planning and channel selection", "Social publishing and campaign coordination"], practice: "Create a short content calendar tied to a campaign goal." },
        { topics: ["Search intent, SEO fundamentals and paid search concepts", "Campaign metrics, attribution and budget basics"], practice: "Draft a search campaign structure and measurement plan." },
        { topics: ["Defining KPIs and interpreting campaign results", "Optimisation, reporting and ethical communication"], practice: "Present a measurable campaign plan with success criteria." }
      ]
    };
    const courseKnowledgeChecks = {
      "data-science": [
        ["Which Python library is commonly used to work with table-shaped data?", ["pandas", "Turtle", "Pygame"], 0, "pandas provides tools for working with labelled, table-shaped data."],
        ["What is a common first step when a dataset has missing values?", ["Ignore every missing value automatically", "Inspect how much is missing and why", "Replace all values with zero"], 1, "Inspecting missingness helps choose an appropriate treatment."],
        ["Why keep a separate test set when evaluating a model?", ["To estimate performance on unseen data", "To make the training set larger", "To remove the need for evaluation"], 0, "A held-out test set gives a more honest estimate of generalisation."],
        ["Which task predicts a category such as spam or not spam?", ["Regression", "Classification", "Sorting"], 1, "Classification predicts a discrete label or category."],
        ["What does data leakage usually mean in machine learning?", ["The model uses information it would not have at prediction time", "The dataset has too many rows", "A chart was exported incorrectly"], 0, "Leakage can make evaluation look better than real-world performance."]
      ],
      "data-analytics": [
        ["Which SQL clause filters rows before grouping?", ["WHERE", "HAVING", "ORDER BY"], 0, "WHERE filters rows before aggregation and grouping."],
        ["Which SQL function counts rows?", ["COUNT()", "ROUND()", "LOWER()"], 0, "COUNT() returns the number of rows or non-null values, depending on its argument."],
        ["What is a dashboard KPI?", ["A key measure tied to an objective", "A type of database join", "A chart colour setting"], 0, "A KPI is a meaningful measure used to track progress toward a goal."],
        ["What does an INNER JOIN return?", ["Rows with matching keys in both tables", "Every possible row combination", "Only rows without a match"], 0, "An INNER JOIN keeps records that match the join condition in both sources."],
        ["What should you do before sharing an analytical conclusion?", ["Check the data, assumptions and context", "Remove any results that seem unusual", "Choose the most colourful chart"], 0, "Validate the evidence and context before communicating a finding."]
      ],
      "generative-ai": [
        ["What is a useful prompt likely to include?", ["A clear task and relevant context", "Only a request to be creative", "Private data unrelated to the task"], 0, "Clear instructions and relevant context make outputs easier to evaluate."],
        ["Can a generative AI response contain incorrect information?", ["Yes; outputs need checking", "No, if the answer sounds confident", "Only when asked for code"], 0, "Generated content can be plausible but incorrect, so verify important claims."],
        ["What is a good way to improve a prompt?", ["Change one instruction and compare outputs", "Make it longer without a goal", "Remove all context"], 0, "Iterative changes make it easier to understand which prompt details help."],
        ["What should you avoid entering into an unapproved AI tool?", ["Sensitive or confidential information", "A public general question", "A fictional example"], 0, "Follow privacy rules and do not share sensitive data with unapproved tools."],
        ["What should happen before using AI-generated work in an important decision?", ["Human review and verification", "Automatic publication", "Assume it is unbiased"], 0, "Human oversight helps catch mistakes, bias and missing context."]
      ],
      "full-stack": [
        ["What is semantic HTML primarily for?", ["Giving page content meaningful structure", "Adding database records", "Running server processes"], 0, "Semantic elements describe the purpose and structure of page content."],
        ["Which technology is mainly used to style a web page?", ["CSS", "SQL", "DNS"], 0, "CSS controls presentation, layout and responsive styling."],
        ["What does JavaScript commonly add to a web page?", ["Interactive behaviour", "A network address", "A database schema"], 0, "JavaScript can respond to user actions and update interface behaviour."],
        ["What is an API commonly used for in a web application?", ["Letting software systems exchange data or actions", "Choosing font sizes", "Compressing images only"], 0, "An API defines a way for clients and services to communicate."],
        ["Why validate user input on the server as well as the browser?", ["Browser checks can be bypassed", "It makes the site load without HTML", "It replaces authentication"], 0, "Server-side validation is essential because clients are not trusted."]
      ],
      "cloud-aws": [
        ["What is IAM used for in cloud environments?", ["Managing identities and permissions", "Drawing interface wireframes", "Compressing images"], 0, "Identity and access management controls who can access which resources."],
        ["What does the principle of least privilege mean?", ["Grant only the access needed for a task", "Give everyone administrator access", "Disable all audit logs"], 0, "Least privilege reduces risk by limiting unnecessary permissions."],
        ["Why use more than one availability zone for some workloads?", ["To improve resilience to a zone-level failure", "To remove the need for backups", "To make credentials public"], 0, "Separating resources can help a service remain available during local disruptions."],
        ["What is cloud monitoring useful for?", ["Observing health, performance and events", "Replacing access controls", "Writing application requirements"], 0, "Monitoring helps teams detect issues and understand system behaviour."],
        ["What should be considered when choosing a cloud service?", ["Requirements, security, cost and operations", "Only the service name", "How many icons it has"], 0, "Good architecture considers fit, security, reliability, cost and maintenance."]
      ],
      "devops": [
        ["What is version control used for?", ["Tracking and coordinating changes to files", "Monitoring room temperature", "Replacing automated tests"], 0, "Version control records changes and supports collaboration."],
        ["What is a CI pipeline commonly designed to do?", ["Build and test changes automatically", "Grant every user production access", "Remove source history"], 0, "Continuous integration helps validate changes regularly through automation."],
        ["What is a container image?", ["A packaged template used to run a container", "A screenshot of a dashboard", "A cloud billing invoice"], 0, "An image packages an application and its required components for execution."],
        ["Why are automated tests useful in delivery pipelines?", ["They catch regressions consistently", "They prove software has no bugs", "They replace code review in every case"], 0, "Tests provide repeatable checks, though they cannot prove the absence of all defects."],
        ["What is observability intended to help teams do?", ["Understand system behaviour from its outputs", "Increase password reuse", "Avoid collecting any operational data"], 0, "Logs, metrics and traces help explain what a system is doing."]
      ],
      "cyber-security": [
        ["What does multi-factor authentication add?", ["An additional proof of identity", "A public password list", "A replacement for software updates"], 0, "MFA requires more than one type of verification to sign in."],
        ["What is phishing?", ["A deceptive attempt to obtain information or access", "A method of compressing files", "A normal database backup"], 0, "Phishing uses misleading messages or pages to trick people."],
        ["What is a safer response to a suspected security incident?", ["Follow the response process and report it promptly", "Delete all evidence immediately", "Post account details publicly"], 0, "Prompt reporting and preserving evidence support a safer incident response."],
        ["Why apply security updates?", ["To address known weaknesses and defects", "To make passwords easier to guess", "To disable monitoring"], 0, "Updates often include fixes for vulnerabilities and reliability issues."],
        ["What should a security test be performed against?", ["Systems you own or have explicit permission to test", "Any public system you can reach", "A stranger's personal account"], 0, "Security testing must be authorised and scoped."]
      ],
      "ui-ux": [
        ["What is user research used for?", ["Understanding users, needs and context", "Choosing a server region", "Measuring code execution speed only"], 0, "Research informs design decisions with evidence about people and tasks."],
        ["What is a wireframe?", ["A simplified layout showing structure and content", "A finished production database", "A marketing invoice"], 0, "Wireframes help explore page structure before detailed visual design."],
        ["What does usability testing observe?", ["How people attempt tasks with a design", "How fast a server compiles code", "How many colours a brand uses"], 0, "Usability testing reveals where people succeed or struggle with a design."],
        ["Why consider accessibility in interface design?", ["So more people can use the product", "To make text harder to read", "To remove keyboard support"], 0, "Accessible design helps people with different abilities and ways of interacting."],
        ["What is a prototype useful for?", ["Trying and communicating an interaction before building", "Guaranteeing a design is correct", "Replacing feedback from users"], 0, "Prototypes make ideas testable, but still need feedback and iteration."]
      ],
      "digital-marketing": [
        ["What does SEO mainly aim to improve?", ["Visibility in unpaid search results", "A website's server memory", "The number of database tables"], 0, "Search engine optimisation helps relevant pages appear in organic search."],
        ["What is a conversion in a campaign?", ["A desired action completed by a user", "Any page colour change", "A social post draft"], 0, "A conversion is an action aligned with the campaign objective."],
        ["Why define an audience before planning content?", ["To make messaging more relevant", "To avoid setting goals", "To guarantee every post goes viral"], 0, "Audience needs help shape useful messages and channel choices."],
        ["What is a call to action?", ["A prompt that invites the next step", "A search engine ranking", "A type of image file"], 0, "A call to action tells people what to do next."],
        ["What should a campaign report compare?", ["Results against goals and relevant context", "Only the number of colours used", "Unrelated metrics without a question"], 0, "Measurement is useful when tied to objectives and interpreted in context."]
      ]
    };
    let activeCourseKnowledgeCheck = null;
    let courseKnowledgeQuestionIndex = 0;
    let courseKnowledgeScore = 0;
    let courseKnowledgeAnswered = false;
    const quizQuestions = [
      { prompt:"Which problem would you most enjoy solving?", answers:[
        { label:"Finding a useful pattern in a lot of information", scores:{"data-science":2,"data-analytics":2} },
        { label:"Making a helpful online tool", scores:{"full-stack":2,"generative-ai":1} },
        { label:"Making a confusing screen easier to use", scores:{"ui-ux":2,"full-stack":1} },
        { label:"Working out why a system is not running properly", scores:{"cyber-security":2,"cloud-aws":1,"devops":1} },
        { label:"Helping more people discover a product or service", scores:{"digital-marketing":2,"data-analytics":1} }
      ] },
      { prompt:"Which activity sounds most satisfying?", answers:[
        { label:"Turning figures into a clear story", scores:{"data-analytics":2,"data-science":1} },
        { label:"Writing instructions that help a computer do a task", scores:{"full-stack":2,"generative-ai":1,"devops":1} },
        { label:"Sketching how an app or website should work", scores:{"ui-ux":2,"full-stack":1} },
        { label:"Setting up services so people can use them reliably", scores:{"cloud-aws":2,"devops":2} },
        { label:"Planning useful posts for different audiences", scores:{"digital-marketing":2,"ui-ux":1} }
      ] },
      { prompt:"When something goes wrong, what do you tend to do first?", answers:[
        { label:"Look for clues and compare what has changed", scores:{"data-science":1,"data-analytics":1,"cyber-security":1} },
        { label:"Try a fix and see what happens", scores:{"full-stack":2,"devops":1} },
        { label:"Ask people where they got stuck", scores:{"ui-ux":2,"digital-marketing":1} },
        { label:"Check the setup, access and connections", scores:{"cloud-aws":1,"devops":2,"cyber-security":2} }
      ] },
      { prompt:"Which project would you be proud to finish?", answers:[
        { label:"A report that helps someone make a better decision", scores:{"data-analytics":2,"data-science":1} },
        { label:"A working website or app", scores:{"full-stack":2,"ui-ux":1} },
        { label:"A simple AI helper for a real task", scores:{"generative-ai":2,"data-science":1} },
        { label:"A safer, more dependable online service", scores:{"cyber-security":2,"cloud-aws":1,"devops":1} },
        { label:"A campaign that reaches the right people", scores:{"digital-marketing":2,"data-analytics":1} }
      ] },
      { prompt:"Which detail are you most likely to notice?", answers:[
        { label:"Numbers that do not seem to add up", scores:{"data-science":1,"data-analytics":2} },
        { label:"A button or feature that does not work", scores:{"full-stack":2,"devops":1} },
        { label:"A page that feels hard to follow", scores:{"ui-ux":2} },
        { label:"A strange message or access request", scores:{"cyber-security":2,"cloud-aws":1} },
        { label:"A message that does not connect with its audience", scores:{"digital-marketing":2,"ui-ux":1} }
      ] },
      { prompt:"What would you like to understand better?", answers:[
        { label:"How information can answer useful questions", scores:{"data-analytics":2,"data-science":2} },
        { label:"How websites and apps are made", scores:{"full-stack":2} },
        { label:"How people use and respond to digital products", scores:{"ui-ux":2,"digital-marketing":1} },
        { label:"How online services stay secure and available", scores:{"cyber-security":1,"cloud-aws":2,"devops":1} },
        { label:"How AI tools can support everyday work", scores:{"generative-ai":2,"data-science":1} }
      ] },
      { prompt:"Which way of thinking suits you best?", answers:[
        { label:"Testing ideas and learning from evidence", scores:{"data-science":2,"data-analytics":1} },
        { label:"Breaking a big task into small steps", scores:{"full-stack":1,"devops":2,"cloud-aws":1} },
        { label:"Considering different people's needs", scores:{"ui-ux":2,"digital-marketing":1} },
        { label:"Checking details and looking for risks", scores:{"cyber-security":2,"data-analytics":1} },
        { label:"Trying new ways to share an idea", scores:{"digital-marketing":2,"generative-ai":1} }
      ] },
      { prompt:"What would you most like to take away from a course?", answers:[
        { label:"Confidence working with data", scores:{"data-analytics":2,"data-science":1} },
        { label:"A website or app I have built", scores:{"full-stack":2} },
        { label:"A useful design or prototype", scores:{"ui-ux":2} },
        { label:"Skills to manage or protect online systems", scores:{"cloud-aws":1,"devops":1,"cyber-security":2} },
        { label:"A plan for reaching and measuring an audience", scores:{"digital-marketing":2,"data-analytics":1} },
        { label:"A practical AI project", scores:{"generative-ai":2,"data-science":1} }
      ] }
    ];
    const techStack = ["PYTHON","JAVASCRIPT","AWS","FIGMA","SQL","DOCKER","REACT","GIT","MACHINE LEARNING","LINUX"];
    const supportServices = ["APTITUDE CLASSES","SPOKEN ENGLISH","SOFT SKILLS TRAINING","RESUME BUILDING","MOCK INTERVIEWS","CAREER GUIDANCE","INTERNSHIP OPPORTUNITIES","HANDS-ON PROJECTS","INDUSTRY TOOLS TRAINING","PORTFOLIO DEVELOPMENT","TECH WORKSHOPS","CAREER PREPARATION","GITHUB GUIDANCE","PLACEMENT PREPARATION"];
    const courseCategories = ["All","AI & Data","Development","Cloud & DevOps","Design","Marketing"];
    const $ = (selector, root=document) => root.querySelector(selector);
    const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

    // Course artwork uses original SVG scenes tied to each course syllabus.
    function illustration(type, courseId) {
      const courseScenes = {
        "data-science":'<rect x="78" y="39" width="164" height="125" rx="9" fill="#102d57"/><path d="M101 139h136M109 128v-23m28 23V92m28 36V77m28 51V99m28 29V67" stroke="#8fc8f3" stroke-width="8"/><path d="m106 85 30-17 27 8 28-27 31 9" stroke="#65dfc4" stroke-width="3"/><circle cx="136" cy="68" r="5" fill="#65dfc4"/><circle cx="191" cy="49" r="5" fill="#ffc83d"/><circle cx="230" cy="58" r="5" fill="#c796ff"/><path d="M96 51h28m-28 10h18" stroke="#dcecff" stroke-width="3"/>',
        "data-analytics":'<rect x="76" y="39" width="168" height="125" rx="9" fill="#102d57"/><path d="M76 68h168M92 53h29" stroke="#dcecff" stroke-width="3"/><circle cx="124" cy="111" r="25" fill="#397ec4"/><path d="M124 86a25 25 0 0 1 24 31l-24-6Z" fill="#65dfc4"/><path d="m124 111 24 6a25 25 0 0 1-41 13Z" fill="#ffc83d"/><path d="M165 141v-16h12v16m8 0V99h12v42m8 0v-29h12v29" fill="#8fc8f3"/><path d="M165 91h50" stroke="#dcecff" stroke-width="3"/>',
        "generative-ai":'<rect x="74" y="43" width="172" height="118" rx="10" fill="#102d57"/><path d="M74 70h172M91 56h28" stroke="#dcecff" stroke-width="3"/><rect x="91" y="84" width="119" height="20" rx="7" fill="#274d7d"/><circle cx="101" cy="94" r="4" fill="#65dfc4"/><path d="M111 94h86" stroke="#b9d7f5" stroke-width="3"/><rect x="110" y="115" width="119" height="20" rx="7" fill="#3b3875"/><path d="M124 125h91" stroke="#d8c9ff" stroke-width="3"/><path d="m224 79 5 11 11 5-11 5-5 11-5-11-11-5 11-5Z" fill="#ffc83d" stroke="none"/>',
        "full-stack":'<rect x="66" y="43" width="145" height="112" rx="9" fill="#102d57"/><path d="M66 70h145m-130-14h3m11 0h3" stroke="#dcecff" stroke-width="3"/><path d="m102 91-13 12 13 12m27-24 13 12-13 12m19-27-8 30" stroke="#65dfc4" stroke-width="4"/><ellipse cx="236" cy="108" rx="29" ry="12" fill="#3967a0"/><path d="M207 108v33c0 7 13 12 29 12s29-5 29-12v-33m-58 16c0 7 13 12 29 12s29-5 29-12" stroke="#a4c9f0" stroke-width="3"/><ellipse cx="236" cy="108" rx="29" ry="12" stroke="#a4c9f0" stroke-width="3"/>',
        "cloud-aws":'<path d="M110 108a30 30 0 0 1 6-59 45 45 0 0 1 82 11 27 27 0 0 1 4 53h-92Z" fill="#275b91"/><path d="M156 84v46m-35-2h71m-59-22-12 12m59-12 12 12" stroke="#65dfc4" stroke-width="4"/><rect x="110" y="137" width="30" height="20" rx="4" fill="#4176ae"/><rect x="145" y="137" width="30" height="20" rx="4" fill="#4176ae"/><rect x="180" y="137" width="30" height="20" rx="4" fill="#4176ae"/><circle cx="125" cy="147" r="3" fill="#ffc83d"/><circle cx="160" cy="147" r="3" fill="#ffc83d"/><circle cx="195" cy="147" r="3" fill="#ffc83d"/>',
        "devops":'<path d="M103 86a55 55 0 0 1 98-14l12 16m0 0-22-2m22 2-1-21M217 119a55 55 0 0 1-98 14l-12-16m0 0 22 2m-22-2 1 21" stroke="#65dfc4" stroke-width="4"/><circle cx="104" cy="104" r="20" fill="#24517f"/><circle cx="216" cy="104" r="20" fill="#24517f"/><rect x="143" y="81" width="34" height="46" rx="7" fill="#315f94"/><path d="M153 93h14m-14 11h14m-14 11h9" stroke="#e1efff" stroke-width="3"/><circle cx="104" cy="104" r="6" fill="#ffc83d"/><circle cx="216" cy="104" r="6" fill="#c796ff"/>',
        "cyber-security":'<path d="M157 37 219 60v43c0 36-26 60-62 78-36-18-62-42-62-78V60l62-23Z" fill="#274c7a"/><path d="M157 53 204 70v33c0 27-18 45-47 61-29-16-47-34-47-61V70l47-17Z" stroke="#65dfc4" stroke-width="3"/><rect x="136" y="91" width="42" height="34" rx="7" fill="#8fc8f3"/><path d="M145 91v-9a12 12 0 0 1 24 0v9" stroke="#dcecff" stroke-width="4"/><circle cx="157" cy="106" r="4" fill="#17345b" stroke="none"/><path d="M157 110v7" stroke="#17345b" stroke-width="3"/>',
        "ui-ux":'<rect x="111" y="31" width="91" height="142" rx="15" fill="#274c7a"/><rect x="119" y="43" width="75" height="116" rx="7" fill="#f2f7ff"/><rect x="127" y="52" width="58" height="32" rx="5" fill="#8fc8f3"/><circle cx="139" cy="67" r="7" fill="#65dfc4"/><path d="M151 63h25m-25 7h19" stroke="#17345b" stroke-width="3"/><rect x="127" y="92" width="58" height="7" rx="3" fill="#bdd2e9"/><rect x="127" y="105" width="42" height="7" rx="3" fill="#bdd2e9"/><rect x="127" y="121" width="58" height="22" rx="6" fill="#4c72d8"/><path d="m220 91 25 29-13-2-6 13Z" fill="#ffc83d" stroke="#102d57" stroke-width="3"/>',
        "digital-marketing":'<rect x="75" y="44" width="133" height="110" rx="9" fill="#102d57"/><path d="M75 69h133m-116-13h3m11 0h3" stroke="#dcecff" stroke-width="3"/><rect x="91" y="86" width="47" height="51" rx="5" fill="#275b91"/><path d="M101 124v-13h7v13m7 0V99h7v25" fill="#65dfc4"/><path d="M151 91h42m-42 12h32m-32 12h38" stroke="#dcecff" stroke-width="4"/><path d="m232 82 33 11v31l-33 11V82Zm0 9-18 10v17l18 9m-6 7 6 16h11l-5-19" fill="#c796ff" stroke="#e7dcff" stroke-width="3"/><circle cx="255" cy="68" r="5" fill="#ffc83d"/><path d="M269 62h13m-11 13 9 5" stroke="#ffc83d" stroke-width="3"/>'
      };
      const scene = courseScenes[courseId];
      const drawings = {
        chart:'<path d="M90 155V83h28v72M137 155V56h28v99M184 155V91h28v64"/><path d="m88 68 48-20 43 12 49-34"/><circle cx="228" cy="26" r="5" fill="#ffc83d"/><path d="M78 164h160"/>',
        pie:'<circle cx="154" cy="94" r="54"/><path d="M154 40v54l47 27A54 54 0 0 0 154 40Z" fill="#bcdcff"/><path d="M154 94 115 132a54 54 0 0 0 86-11Z" fill="#ffc83d"/><path d="M154 94h54M91 163h112"/><rect x="91" y="145" width="12" height="18" rx="2"/><rect x="111" y="135" width="12" height="28" rx="2" fill="#bcdcff"/><rect x="131" y="150" width="12" height="13" rx="2"/>',
        neural:'<path d="M91 77 145 54l53 26-52 38-55-41Zm0 0 2 63 53 30 53-35-1-55M145 54l1 64m0 52v-52"/><circle cx="91" cy="77" r="9"/><circle cx="145" cy="54" r="9" fill="#bcdcff"/><circle cx="198" cy="80" r="9"/><circle cx="146" cy="118" r="10" fill="#ffc83d"/><circle cx="93" cy="140" r="9"/><circle cx="146" cy="171" r="9" fill="#bcdcff"/><circle cx="199" cy="136" r="9"/><path d="m228 48 5 11 11 5-11 5-5 11-5-11-11-5 11-5Z" fill="#ffc83d" stroke="none"/>',
        browser:'<rect x="75" y="39" width="170" height="124" rx="8"/><path d="M75 66h170"/><circle cx="91" cy="53" r="3" fill="#ffc83d"/><circle cx="103" cy="53" r="3"/><circle cx="115" cy="53" r="3"/><path d="m112 91-14 13 14 13m38-26 14 13-14 13m25-34-12 42"/><path d="M93 140h104" stroke="#bcdcff"/>',
        cloud:'<path d="M105 114a30 30 0 0 1 5-59 45 45 0 0 1 83 9 27 27 0 0 1 5 53h-93Z"/><rect x="111" y="127" width="76" height="15" rx="4"/><rect x="111" y="149" width="76" height="15" rx="4" fill="#bcdcff"/><circle cx="174" cy="134" r="3" fill="#ffc83d"/><circle cx="174" cy="156" r="3" fill="#ffc83d"/><path d="M94 141h-14m124-1h18"/>',
        infinity:'<path d="M154 102c-26-40-62-42-73-16-12 28 16 57 43 43 18-9 40-48 60-53 28-8 49 19 37 43-13 26-47 22-67-17Z"/><circle cx="82" cy="83" r="5" fill="#ffc83d"/><circle cx="221" cy="83" r="5" fill="#bcdcff"/><path d="M89 154h130"/>',
        shield:'<path d="M155 38 212 59v43c0 37-24 61-57 77-33-16-57-40-57-77V59l57-21Z"/><rect x="135" y="91" width="40" height="32" rx="5" fill="#bcdcff"/><path d="M143 91v-9a12 12 0 0 1 24 0v9"/><circle cx="155" cy="106" r="3" fill="#10204b" stroke="none"/><path d="M155 109v7" stroke="#10204b"/>',
        wireframe:'<rect x="77" y="42" width="164" height="121" rx="7"/><path d="M77 69h164M92 55h2m10 0h2m10 0h2"/><rect x="96" y="88" width="55" height="58" rx="3"/><path d="M163 91h58m-58 13h48m-48 13h53m-53 13h34"/><path d="m171 134 9 9 19-23" stroke="#ffc83d"/>',
      };
      const courseTitle = courses.find(course => course.id === courseId)?.title;
      return `<svg viewBox="0 0 320 200" role="img" aria-label="${courseTitle ? `${courseTitle} course topic illustration` : `Original ${type} course illustration`}" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#dcecff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${scene || drawings[type] || drawings.chart}</g><circle cx="48" cy="39" r="2" fill="#ffc83d"/><circle cx="270" cy="158" r="2" fill="#bcdcff"/><path d="M37 168h16m-8-8v16M272 38h15m-7-7v15" stroke="#8fb7f0" stroke-width="1" opacity=".55"/></svg>`;
    }
    function courseIcon(type) {
      const icons = {
        chart:'<path d="M5 18V9m7 9V5m7 13v-6"/><path d="m4 7 5-3 5 2 6-4"/><circle cx="20" cy="2" r="1.5"/>',
        pie:'<path d="M11 3a8 8 0 1 0 8 8h-8Z"/><path d="M13 2v7h7a8 8 0 0 0-7-7Z"/>',
        neural:'<circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="6" r="1.7"/><circle cx="19" cy="6" r="1.7"/><circle cx="5" cy="18" r="1.7"/><circle cx="19" cy="18" r="1.7"/><path d="m7 7.5 3.3 3m3.4 0 3.3-3m-10 9 3.3-3m3.4 0 3.3 3"/>',
        browser:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18m-12 4-2 2 2 2m6-4 2 2-2 2"/>',
        cloud:'<path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4-1.4A4.7 4.7 0 0 0 7 18Z"/><path d="M9 21h8m-6-3v3m4-3v3"/>',
        infinity:'<path d="M3 12c0-3 4-5 7-2l4 4c3 3 7 1 7-2s-4-5-7-2l-4 4c-3 3-7 1-7-2Z"/>',
        shield:'<path d="M12 3 20 6v5c0 5-3.3 8-8 10-4.7-2-8-5-8-10V6Z"/><rect x="9" y="10" width="6" height="5" rx="1"/><path d="M10 10V8a2 2 0 0 1 4 0v2"/>',
        wireframe:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18m-14 4h5v5H7zm8 0h3m-3 3h3"/>'
      };
      return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[type] || icons.chart}</svg>`;
    }
    function renderCourses() {
      const category = $('#courseFilters .active')?.dataset.filter || 'All';
      const term = $('#courseSearch').value.trim().toLowerCase();
      const filtered = courses.filter(course => (category === 'All' || course.category === category) && `${course.title} ${course.category} ${course.description} ${course.modules.join(' ')}`.toLowerCase().includes(term));
      const sort = $('#courseSort').value;
      if (sort === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title));
      if (sort === 'shortest') filtered.sort((a, b) => parseInt(a.duration, 10) - parseInt(b.duration, 10));
      if (sort === 'longest') filtered.sort((a, b) => parseInt(b.duration, 10) - parseInt(a.duration, 10));
      $('#courseResultCount').textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'course' : 'courses'}`;
      $('#courseGrid').innerHTML = filtered.length ? filtered.map(course => `<article class="course-card" tabindex="0" role="button" aria-label="View ${course.title} course details" data-course="${course.id}"><div class="course-art" data-art="${course.art}" data-course-art="${course.id}">${illustration(course.art, course.id)}<div class="course-syllabus" aria-label="Key syllabus for ${course.title}"><div class="course-syllabus-top"><span>KEY SYLLABUS</span><span>${course.duration}</span></div><h4>${course.title}</h4><ul>${course.preview.map(item => `<li>${item}</li>`).join('')}</ul></div></div><div class="course-info"><div class="course-meta"><span>${course.category}</span><span>${course.duration}</span></div><div class="course-title-row"><span class="course-icon course-icon--${course.art}">${courseIcon(course.art)}</span><h3>${course.title}</h3></div><p>${course.description}</p><div class="course-foot"><span>${course.level}</span><strong>Explore course <i aria-hidden="true">↗</i></strong></div></div></article>`).join('') : '<div class="empty-state">No courses match that search. Try another keyword or category.</div>';
      $$('.course-card').forEach(card => {
        card.addEventListener('click', () => openCourse(card.dataset.course));
        card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openCourse(card.dataset.course); } });
        card.addEventListener('pointermove', event => { const box = card.getBoundingClientRect(); const x = (event.clientX - box.left) / box.width - .5; const y = (event.clientY - box.top) / box.height - .5; card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-2px)`; });
        card.addEventListener('pointerleave', () => { card.style.transform = ''; });
      });
    }
    function openCourse(id) {
      const course = courses.find(item => item.id === id); if (!course) return;
      $('#dialogCourseTitle').textContent = course.title; $('#dialogCategory').textContent = `${course.category} · ${course.duration}`; $('#dialogDescription').textContent = course.description;
      $('#dialogArt').innerHTML = illustration(course.art, course.id);
      const syllabus = syllabusDetails[course.id];
      if (!syllabus) throw new Error(`Missing syllabus details for course: ${course.id}`);
      $('#moduleList').innerHTML = course.modules.map((module, index) => {
        const detail = syllabus[index];
        return `<details ${index === 0 ? 'open' : ''}><summary><span>Module ${String(index + 1).padStart(2, '0')}</span>${module}</summary><div class="module-detail"><strong>Topics covered</strong><ul>${detail.topics.map(topic => `<li>${topic}</li>`).join('')}</ul><p><strong>Practice:</strong> ${detail.practice}</p></div></details>`;
      }).join('');
      activeCourseKnowledgeCheck = courseKnowledgeChecks[course.id];
      if (!activeCourseKnowledgeCheck || activeCourseKnowledgeCheck.length !== 5) throw new Error(`Course knowledge check must have five questions: ${course.id}`);
      courseKnowledgeQuestionIndex = 0; courseKnowledgeScore = 0; courseKnowledgeAnswered = false;
      renderCourseKnowledgeCheck();
      $('#dialogEnquire').dataset.course = course.title; $('#courseDialog').showModal();
    }
    function renderCourseKnowledgeCheck() {
      const content = $('#courseQuizContent');
      if (courseKnowledgeQuestionIndex >= activeCourseKnowledgeCheck.length) {
        const total = activeCourseKnowledgeCheck.length;
        content.innerHTML = `<div class="course-quiz-result"><strong>${courseKnowledgeScore} / ${total}</strong><p>You got ${courseKnowledgeScore} of ${total} correct. Use this as a guide to what you already know, not a placement result.</p><button class="btn btn-dark" type="button" data-course-quiz-restart>Try again</button></div>`;
        return;
      }
      const [question, options] = activeCourseKnowledgeCheck[courseKnowledgeQuestionIndex];
      content.innerHTML = `<div class="course-quiz-progress"><span>Question ${courseKnowledgeQuestionIndex + 1} of ${activeCourseKnowledgeCheck.length}</span><span>${Math.round(courseKnowledgeQuestionIndex / activeCourseKnowledgeCheck.length * 100)}% complete</span></div><div class="course-quiz-track" role="progressbar" aria-label="Knowledge check progress" aria-valuemin="0" aria-valuemax="${activeCourseKnowledgeCheck.length}" aria-valuenow="${courseKnowledgeQuestionIndex}"><span style="width:${courseKnowledgeQuestionIndex / activeCourseKnowledgeCheck.length * 100}%"></span></div><h4 class="course-quiz-question">${question}</h4><div class="course-quiz-options">${options.map((option, index) => `<button type="button" class="course-quiz-option" data-course-quiz-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${option}</button>`).join('')}</div><div class="course-quiz-feedback" data-course-quiz-feedback role="status"></div>`;
      courseKnowledgeAnswered = false;
    }
    function answerCourseKnowledgeCheck(selectedIndex) {
      if (courseKnowledgeAnswered) return;
      const [question, options, correctIndex, explanation] = activeCourseKnowledgeCheck[courseKnowledgeQuestionIndex];
      if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= options.length) return;
      courseKnowledgeAnswered = true;
      const correct = selectedIndex === correctIndex;
      if (correct) courseKnowledgeScore += 1;
      $$('.course-quiz-option', $('#courseQuizContent')).forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) button.classList.add('is-correct');
        if (index === selectedIndex && !correct) button.classList.add('is-incorrect');
      });
      const feedback = $('[data-course-quiz-feedback]', $('#courseQuizContent'));
      feedback.classList.add(correct ? 'is-correct' : 'is-incorrect');
      feedback.innerHTML = `<strong>${correct ? 'That’s right.' : `Not quite. The correct answer is ${String.fromCharCode(65 + correctIndex)}.`}</strong><p>${explanation}</p><button class="btn btn-dark" type="button" data-course-quiz-next>${courseKnowledgeQuestionIndex === activeCourseKnowledgeCheck.length - 1 ? 'See my score' : 'Next question'} <span aria-hidden="true">→</span></button>`;
    }
    function validateCourseKnowledgeChecks() {
      courses.forEach(course => {
        const questions = courseKnowledgeChecks[course.id];
        if (!questions || questions.length !== 5 || questions.some(([prompt, options, answer, explanation]) => !prompt || options?.length !== 3 || !Number.isInteger(answer) || answer < 0 || answer >= options.length || !explanation)) {
          throw new Error(`Invalid five-question knowledge check for course: ${course.id}`);
        }
      });
    }
    function renderFilters() {
      $('#courseFilters').innerHTML = courseCategories.map((item, index) => `<button type="button" class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${item}" aria-pressed="${index === 0}">${item}</button>`).join('');
      $('#courseFilters').addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; $$('#courseFilters .filter-btn').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', item === button); }); renderCourses(); });
    }
    function renderQuiz() {
      $('#quizQuestions').hidden = false; $('#quizResult').classList.remove('show');
      const step = quizAnswers.length, total = quizQuestions.length, progress = Math.round((step + 1) / total * 100); $('#quizStepLabel').textContent = `Question ${step + 1} of ${total}`; $('#quizProgressText').textContent = `${progress}%`; $('#quizProgress').style.width = `${progress}%`;$('#quizBack').hidden=step===0;
      const content=$('#quizContent');content.classList.remove('quiz-enter');void content.offsetWidth;content.classList.add('quiz-enter');
      $('#quizQuestion').textContent = quizQuestions[step].prompt;
      $('#quizOptions').innerHTML = quizQuestions[step].answers.map((answer, index) => `<button class="quiz-option" type="button" data-answer="${index}"><span class="quiz-option-mark" aria-hidden="true">${String.fromCharCode(65+index)}</span><span>${answer.label}</span><span class="quiz-option-arrow" aria-hidden="true">→</span></button>`).join('');
      $$('#quizOptions button').forEach(button => button.addEventListener('click', () => { quizAnswers[step]=quizQuestions[step].answers[Number(button.dataset.answer)]; if (quizAnswers.length < quizQuestions.length) renderQuiz(); else showQuizResult(); }));
    }
    let quizAnswers = [];
    function showQuizResult() {
      const scores=Object.fromEntries(courses.map(course=>[course.id,0]));
      quizAnswers.forEach(answer=>Object.entries(answer.scores).forEach(([id,score])=>{scores[id]+=score;}));
      const matched=courses.filter(course=>scores[course.id]>0).sort((a,b)=>scores[b.id]-scores[a.id]||a.title.localeCompare(b.title)).slice(0,2);$('#quizQuestions').hidden = true;
      $('#quizMatches').innerHTML = matched.map((course,index) => `<article class="match-row"><div class="match-rank">${index===0?'Best fit':'Also explore'}</div><strong>${course.title}</strong><small>${course.category} · ${course.duration}</small><p>${course.description}</p></article>`).join('');
      $('#syllabusButton').dataset.course = matched[0].id; $('#quizResult').classList.add('show');
    }
    function goToEnquiry(courseName='') {
      const select = $('#heroCourseSelect'); if (courseName) select.value = courseName;
      $('#heroEnquiryForm').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'center' });
      window.setTimeout(() => $('#heroStudentName').focus({ preventScroll:true }), 500);
    }
    function setupPalette() {
      const dialog = $('#commandDialog'), input = $('#paletteInput'), list = $('#paletteList'); let selected = 0, entries = [];
      function buildEntries(query='') {
        const q = query.trim().toLowerCase();
        entries = [...courses.map(course => ({ label:course.title, kind:`Course · ${course.category}`, action:() => openCourse(course.id) })), ...$$('main section[id]').map(section => ({ label:section.querySelector('h2')?.textContent || section.id, kind:'Section', action:() => document.getElementById(section.id)?.scrollIntoView({behavior:'smooth'}) }))].filter(entry => !q || `${entry.label} ${entry.kind}`.toLowerCase().includes(q));
        selected = 0; list.innerHTML = entries.length ? entries.map((entry, index) => `<button class="palette-item" role="option" aria-selected="${index === selected}" data-index="${index}"><span>${entry.label}</span><small>${entry.kind}</small></button>`).join('') : '<p style="padding:12px;color:#9db2d6;font-size:12px">No matching courses or sections.</p>';
        $$('.palette-item', list).forEach(button => button.addEventListener('click', () => choose(Number(button.dataset.index))));
      }
      function choose(index) { const entry = entries[index]; if (!entry) return; dialog.close(); entry.action(); }
      function open() { buildEntries(input.value); dialog.showModal(); input.focus(); }
      $('#openPalette').addEventListener('click', open);
      document.addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); if (!dialog.open) open(); } if (!dialog.open) return; if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); selected = (selected + (event.key === 'ArrowDown' ? 1 : -1) + entries.length) % entries.length; $$('.palette-item', list).forEach((button, index) => button.setAttribute('aria-selected', index === selected)); } if (event.key === 'Enter' && entries.length) { event.preventDefault(); choose(selected); } });
      input.addEventListener('input', () => buildEntries(input.value));
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    }
    function setupCounters() {
      const counters = $$('[data-count]'); const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting || entry.target.dataset.counted) return; entry.target.dataset.counted = 'true'; const el=entry.target, end=Number(el.dataset.count), suffix=el.dataset.suffix||'', decimals=Number(el.dataset.decimals||0), start=performance.now(), duration=1300; function step(now){const progress=Math.min(1,(now-start)/duration), eased=1-Math.pow(1-progress,3), value=end*eased;el.textContent=`${value.toFixed(decimals)}${suffix}`;if(progress<1)requestAnimationFrame(step);}requestAnimationFrame(step); } ), {threshold:.35}); counters.forEach(counter => observer.observe(counter));
    }
    function setupRoadmap() {
      const items=[
        ['Discover','We will help you choose the right course based on your interests and career goals.','Course Guidance','<circle cx="12" cy="12" r="8"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z"/>'],
        ['Learn','SIT staff will provide structured training to help you understand the concepts and technologies.','Expert-Led Training','<path d="M3 5.5c3.4-.9 6.4-.3 9 1.8v12c-2.6-2.1-5.6-2.7-9-1.8zm18 0c-3.4-.9-6.4-.3-9 1.8v12c2.6-2.1 5.6-2.7 9-1.8z"/>'],
        ['Practise','Guidance will be provided to improve your technical skills through practical exercises and lab sessions.','Hands-On Practice','<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4m-3-10 2 2 4-4"/>'],
        ['Build','SIT mentors will support you in developing projects using the technologies you learn.','Project-Based Learning','<path d="M4 5h16v14H4zM4 9h16M8 7h.01M11 7h.01"/><path d="m8 14 2 2 5-5"/>'],
        ['Prepare','We will provide support with resume preparation, interview practice, and project presentation.','Career Preparation','<path d="M4 5h16v12H9l-5 4z"/><path d="M8 10h8m-8 3h5"/>'],
        ['Launch','SIT will guide you in exploring suitable internship and job opportunities based on your skills and eligibility.','Career Guidance & Opportunities','<path d="M5 19 19 5M8 5h11v11"/><path d="M4 12v7h7"/>']
      ];
      $('#roadmapSteps').insertAdjacentHTML('beforeend',items.map((item,index)=>`<article class="road-step"><span class="road-node" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${item[3]}</svg></span><h3>${item[0]}</h3><p>${item[1]}</p><small>${item[2]}</small></article>`).join(''));
      const section=$('#roadmap'), roadmap=$('#roadmapSteps'), fill=$('#roadmapFill'), steps=$$('.road-step');
      const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver.unobserve(entry.target);}}),{threshold:.15});
      steps.forEach(step=>revealObserver.observe(step));
      function update(){
        const rect=section.getBoundingClientRect(), progress=Math.min(1,Math.max(0,(innerHeight*.72-rect.top)/(rect.height-innerHeight*.3)));
        if(innerWidth<=760){
          const roadRect=roadmap.getBoundingClientRect(), first=steps[0].querySelector('.road-node').getBoundingClientRect(), last=steps[steps.length-1].querySelector('.road-node').getBoundingClientRect();
          const start=first.top+first.height/2-roadRect.top, length=Math.max(0,last.top+last.height/2-roadRect.top-start);
          roadmap.style.setProperty('--road-start',`${start}px`);roadmap.style.setProperty('--road-length',`${length}px`);fill.style.top=`${start}px`;fill.style.height=`${length*progress}px`;fill.style.width='3px';
        }else{fill.style.top='';fill.style.height='';fill.style.width=`${progress*80}%`;}
        steps.forEach((step,index)=>step.classList.toggle('active',progress>=index/(steps.length-1)*.85));
      }
      window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
    }
    function setupGeneral() {
      $('#courseSearch').addEventListener('input',renderCourses);
      $('#courseSort').addEventListener('change',renderCourses);
      $('#heroCourseSelect').innerHTML += courses.map(course=>`<option value="${course.title}">${course.title}</option>`).join('');
      const courseMenu=$('#courseMenu'), courseMenuToggle=$('#courseMenuToggle'), courseNav=$('.nav-courses');
      const internshipMenu=$('#internshipMenu'), internshipMenuToggle=$('#internshipMenuToggle'), internshipNav=$('.nav-internships');
      courseMenu.innerHTML=courses.map(course=>`<button class="course-menu-item" type="button" data-course="${course.id}"><strong>${course.title}</strong><small>${course.category} · ${course.duration}</small><span>${course.description}</span></button>`).join('');
      function closeCourseMenu(returnFocus=false){courseMenu.hidden=true;courseMenuToggle.setAttribute('aria-expanded','false');if(returnFocus)courseMenuToggle.focus();}
      function closeInternshipMenu(returnFocus=false){internshipMenu.hidden=true;internshipMenuToggle.setAttribute('aria-expanded','false');if(returnFocus)internshipMenuToggle.focus();}
      courseMenuToggle.addEventListener('click',()=>{const opening=courseMenu.hidden;closeInternshipMenu();courseMenu.hidden=!opening;courseMenuToggle.setAttribute('aria-expanded',String(opening));});
      internshipMenuToggle.addEventListener('click',()=>{const opening=internshipMenu.hidden;closeCourseMenu();internshipMenu.hidden=!opening;internshipMenuToggle.setAttribute('aria-expanded',String(opening));});
      courseMenu.addEventListener('click',event=>{const button=event.target.closest('[data-course]');if(!button)return;const id=button.dataset.course;closeCourseMenu();$('#navLinks').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');$('#menuToggle').setAttribute('aria-label','Open navigation');openCourse(id);});
      internshipMenu.addEventListener('click',event=>{if(!event.target.closest('a'))return;closeInternshipMenu();});
      document.addEventListener('click',event=>{if(!courseNav.contains(event.target))closeCourseMenu();if(!internshipNav.contains(event.target))closeInternshipMenu();});
      document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!courseMenu.hidden)closeCourseMenu(true);if(event.key==='Escape'&&!internshipMenu.hidden)closeInternshipMenu(true);});
      // Demo only: replace this handler with an admissions backend submission.
      $('#heroEnquiryForm').addEventListener('submit',event=>{event.preventDefault();const name=$('#heroStudentName').value.trim();$('#heroFormMessage').textContent=`Thanks, ${name}! We'll contact you soon.`;$('#heroFormMessage').style.color='#34528c';event.currentTarget.reset();});
      $('#dialogEnquire').addEventListener('click',()=>{const course=$('#dialogEnquire').dataset.course;$('#courseDialog').close();goToEnquiry(course);});
      $('#courseQuizContent').addEventListener('click', event => {
        const answer = event.target.closest('[data-course-quiz-answer]');
        if (answer) { answerCourseKnowledgeCheck(Number(answer.dataset.courseQuizAnswer)); return; }
        if (event.target.closest('[data-course-quiz-next]')) { courseKnowledgeQuestionIndex += 1; renderCourseKnowledgeCheck(); return; }
        if (event.target.closest('[data-course-quiz-restart]')) { courseKnowledgeQuestionIndex = 0; courseKnowledgeScore = 0; courseKnowledgeAnswered = false; renderCourseKnowledgeCheck(); }
      });
      $('[data-corporate-enquiry]').addEventListener('click', () => { $('#heroCourseSelect').value = 'Corporate training enquiry'; });
      $$('.internship-course-content button').forEach(button=>button.addEventListener('click',()=>goToEnquiry(button.dataset.internshipCourse)));
      $('#syllabusButton').addEventListener('click',()=>openCourse($('#syllabusButton').dataset.course));$('#restartQuiz').addEventListener('click',()=>{quizAnswers=[];renderQuiz();});
      $('#quizBack').addEventListener('click',()=>{quizAnswers.pop();renderQuiz();});
      $$('[data-close]').forEach(button=>button.addEventListener('click',()=>document.getElementById(button.dataset.close).close()));
      [$('#courseDialog')].forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();}));
      $('#floatingEnquire').addEventListener('click',()=>goToEnquiry());$('#backTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
      const menu=$('#menuToggle'), links=$('#navLinks');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');links.classList.toggle('open',open);});$$('#navLinks a').forEach(link=>link.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}));
      window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;$('#scrollProgress').style.width=`${max>0?scrollY/max*100:0}%`;$('#backTop').classList.toggle('visible',scrollY>500);},{passive:true});
      $('#yearNow').textContent=new Date().getFullYear();
      const tickerMarkup=items=>[...items,...items].map((name,index)=>`<span class="tech-word">${name}${index<items.length*2-1?'<i aria-hidden="true"></i>':''}</span>`).join('');
      $('#techTrackNav').innerHTML=tickerMarkup(supportServices);
      $('#techTrack').innerHTML=tickerMarkup(techStack);
    }
    function setupHeroCareerCarousel() {
      const role=$('#heroCareerRole');
      const careers=['Cloud Engineer','Data Analytics Professional','Data Scientist','Full Stack Developer','DevOps Engineer','Cybersecurity Analyst','UI/UX Designer','Generative AI Practitioner','Digital Marketer'];
      if(!role||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      let index=0;
      window.setInterval(()=>{
        if(document.hidden)return;
        role.classList.add('is-changing');
        window.setTimeout(()=>{
          index=(index+1)%careers.length;
          role.textContent=careers[index];
          role.classList.remove('is-changing');
        },240);
      },2800);
    }
    validateCourseKnowledgeChecks();renderFilters();renderCourses();renderQuiz();setupGeneral();setupCounters();setupRoadmap();setupPalette();setupHeroCareerCarousel();