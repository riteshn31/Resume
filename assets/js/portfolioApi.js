const portfolioImagePath = `../img/portfolio/portfolio-`;
const r1CompanyOverview = `R1 is a leading provider of technology-driven solutions that transform the patient experience and financial performance of healthcare providers. <br><br>`;
const tsCompanyOverview = `TripStack is a leading B2B travel technology company that provides unique flight content through Virtual Interlining, enabling customers to travel with multiple carriers in a single itinerary. <br><br>`;
const data =
{
    wfm: {
        portfolioImage: `${portfolioImagePath}wfm.png`,
        companyName: `R1 RCM`,
        portfolioName: `Work Flow Management Acute and Physician Business (R1 WFM)`,
        portfolioCategory: `Web Product`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `7`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} Work Flow Management (WFM) is an advanced inventory management solution tailored for both Acute and Physician business domains. With dedicated modules for each sector, WFM efficiently handles incoming accounts and claims, ensuring seamless integration and prioritization based on predefined logics. From Retro file ingestion for Acute business to four distinct file types for Physician business, WFM meticulously organizes data to optimize workflow efficiency. <br><br> Within WFM, accounts progress through a structured workflow, from initial data receipt to closure. Analysts are empowered with role-based access and dynamic prioritization, enabling them to efficiently process accounts and track activities with precision. Advanced features such as flagging critical accounts, bulk uploads, and on-hold capabilities further enhance operational agility and control, ensuring comprehensive management of accounts throughout their lifecycle. <br><br> With its user-centric design and robust functionality, WFM stands as a cornerstone in efficient workflow management. By providing customers with equal control, visibility, and productivity across Acute and Physician business domains, WFM streamlines operations, fosters accountability, and drives business success.`,
        achievements: `<ul> <li><b>Created SSIS packages</b> to streamline the loading of <b>Retro</b>, <b>ATB</b>, <b>Recon</b>, <b>Update</b>, <b>Invoice</b>, <b>Zero Balance</b>, <b>Valid files</b>, and <b>custom client files</b>, optimizing file processing and enabling efficient <b>account creation</b>, <b>updating account details</b> received in the file, <b>reopening accounts</b>, <b>note addition on accounts</b>, and <b>account closure</b> upon completion.</li> <li>Developed and optimized <strong>stored procedures</strong> to enhance performance and efficiency in account-related activities, facilitating smoother data processing and retrieval.</li> <li>Designed and implemented new <strong>ASP.NET pages</strong> to support critical functionalities including <b>special rights page</b>, <b>activity code management</b>, <b>user administration</b>, <b>worklist management</b>, and <b>production reporting</b>, improving overall system usability and functionality.</li> <li><b>Spearheaded</b> the end-to-end onboarding process for <b>Northside</b>, <b>Kaweah</b>, <b>Archwell</b>, and <b>Intuitive Health</b> clients in physician workflow management, as well as <b>Triity Mediquant</b>, <b>AMG Antrim Lab</b>, <b>Kaiser</b>, <b>CarePoint</b>, and <b>St. Claire Medical Group</b> clients in acute workflow management, including <b>gathering client requirements</b>, <b>addressing onboarding challenges</b>, and successfully <b>transitioning clients to live status</b>.</li> <li>Addressed clients pain points by transitioning from manual Excel-based processes to automated <strong>Workforce Management (WFM) system</strong>, eliminating errors and delays in account management and production reporting.</li> <li>Delivered significant cost and time savings for clients through the implementation of <strong>WFM</strong>, resulting in increased productivity for analysts and supervisors, and ensuring accurate and timely production reporting for finance teams.</li> </ul>`,
        techStack: [`JavaScript`, `HTML/CSS/Bootstrap`, `Microsoft SQL Server`, `.NET Framework`, `C#`, `ASP.NET`, `Selenium`, `SQL Server Integration Services (SSIS)`, `Microsoft SQL Server Agent Jobs`, `Cucumber`, `SpecFlow`],
    },
    decision: {
        portfolioImage: `${portfolioImagePath}decision.png`,
        companyName: `R1 RCM`,
        portfolioName: `R1 Decision DotNetNuke (DNN) Dependency Removal (R1 D)`,
        portfolioCategory: `Web Product`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `3`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} The R1-Decision DNN Dependency Removal project addresses critical challenges within the DotNetNuke (DNN) platform, enhancing its efficiency and compatibility with modern technologies. DotNetNuke, integral to R1D for user access, roles, and page management, posed significant obstacles such as limited support for new frameworks, performance inefficiencies, and complex cache management. <br><br> Our proposal focuses on transitioning away from DNN while decoupling the monolithic solution. This strategic move enables the modernization of R1D through the adoption of cutting-edge technologies like Angular, .NET Core, Microservices, and event-driven architecture. Additionally, implementing a centralized cache system addresses memory management challenges and streamlines cache administration across web farm environments. <br><br> Aligned with the company's strategic goals, the R1-Decision DNN Dependency Removal project promises significant enhancements in performance, scalability, and maintainability. By addressing immediate challenges and paving the way for future advancements, this initiative positions the organization to thrive in an ever-evolving technological landscape while delivering exceptional user experiences.`,
        achievements: `<ul> <li><strong>Led</strong> the successful Proof of Concept (POC) and subsequent <strong>implementation</strong> to <strong>decouple</strong> the DNN architecture for the R1 Hub Enterprise Solution application.</li> <li>Navigated a complex technical overhaul, <strong>overcoming</strong> DNN architecture constraints to initiate a <strong>transformative shift</strong> in product flow, <strong>streamlining</strong> future <strong>development efforts</strong>.</li> <li><strong>Eliminated</strong> tight <strong>coupling</strong> within DNN architecture, <strong>facilitating agile changes</strong> and <strong>enhancing adaptability</strong> for future updates.</li> <li>Secured <strong>recognition</strong> for <strong>innovative solution approach</strong> and <strong>effective implementation</strong>, <strong>paving the way</strong> for continued modernization efforts within the organization.</li> <li>Reduced <strong>change cycle duration</strong> from quarterly to twice a month by <strong>streamlining release process</strong>, <strong>enhancing agility</strong> and <strong>responsiveness</strong> within development cycles, resulting in <strong>increase</strong> in <strong>feature delivery rate</strong> and <strong>improved customer satisfaction</strong>.</li> </ul>`,
        techStack: ['JavaScript', 'Microsoft SQL Server', '.NET Core', 'C#', 'HTML5/CSS3/Bootstrap', 'AJAX', 'Redis Cache', 'Web API', 'Selenium', 'Repository & Generic Repository Design Pattern', 'XUnit', 'Cucumber', 'SpecFlow'],
    },
    summary: {
        portfolioImage: `${portfolioImagePath}notes-summary.png`,
        companyName: `R1 RCM`,
        portfolioName: `Account’s Notes History Summarization using Azure OpenAI`,
        portfolioCategory: `Web Product`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `2`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} Our product offers sophisticated account notes history summarization powered by Azure OpenAI. By leveraging cutting-edge AI technology, we transform extensive notes into concise summaries effortlessly. With Azure OpenAI, we ensure accuracy, efficiency, and scalability, delivering insightful summaries in real-time. <br><br> Unlocking the power of Azure OpenAI, our solution streamlines the review process, saving time and resources for businesses. Our product enhances user experience, allowing for intuitive navigation through historical account notes by date. Seamlessly integrating into existing workflows, it enhances productivity while maintaining data integrity. <br><br> Gain a competitive edge with our product's ability to extract meaningful patterns and trends from vast amounts of data. Utilizing Azure OpenAI, we offer a comprehensive solution for businesses to make informed decisions swiftly. Enhance strategic planning and optimize operations with our precise and insightful actionable summary.`,
        achievements: `<ul> <li> <strong>Implemented</strong> <strong>Account Summarization feature</strong> in R1-Decision and WFM applications, <strong>enhancing</strong> operational workflows and generating significant cost savings.</li> <li> <strong>Engineered</strong> and <strong>deployed advanced algorithms</strong> for account note filtering and processing, integrated REST APIs, and conducted comprehensive testing for reliability assurance.</li> <li> Achieved a notable <strong>125,000 minutes per week reduction</strong> in account review time, leading to an estimated annual cost savings of <strong>$560k</strong>.</li> <li> <strong>Improved operational efficiency</strong>, <strong>user productivity</strong>, and <strong>satisfaction</strong>.</li> <li> Additionally, introduced <strong>date-based navigation</strong> for historical account notes.</li> </ul>`,
        techStack: ['Microsoft Azure Cloud', 'C#', 'Microsoft SQL Server', '.NET Core', 'REST API', 'XUnit'],
    },
    archival: {
        portfolioImage: `${portfolioImagePath}archival.png`,
        companyName: `R1 RCM`,
        portfolioName: `Data Archival for Work Flow Management Acute and Physician Business`,
        portfolioCategory: `Data Management`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `1`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} Our Data Archival solution efficiently manages and stores large volumes of data while ensuring regulatory compliance and optimizing system performance. With traditional storage solutions becoming inadequate as data volumes grow, our comprehensive archival strategy addresses this challenge by systematically identifying and transferring inactive or less frequently accessed data to secondary storage tiers. <br><br> Through automated archival processes and robust data lifecycle management policies, our solution streamlines data identification, categorization, and migration across the organization. Leveraging industry-leading archival technologies and best practices, we maintain data integrity, accessibility, and security throughout the archival lifecycle. <br><br> Developed to align with organizational objectives, our Data Archival project delivers significant benefits, including cost reduction, risk mitigation, and operational agility. By optimizing storage resources and enhancing data accessibility, our solution empowers organizations to effectively manage data growth and maximize the value of their data assets.`,
        achievements: `<ul><li> <strong>Led</strong> the implementation of data archiving for the Acute and Physician Work Flow Management (WFM) system, optimizing storage utilization and enhancing system efficiency.</li> <li> <strong>Identified</strong> the inventory and defined data archiving procedures to transfer unused data from production systems to longterm storage, ensuring improved data security and reduced storage costs.</li> <li> Successfully <strong>developed SQL procedures and jobs</strong> for archival and purging, facilitating easy retrieval of information and compliance with data retention policies.</li> <li> Achieved <strong>recognition</strong> for implementing <strong>configurable archival and purging processes</strong> tailored to meet clients’ diverse data retention requirements.</li> </ul>`,
        techStack: ['Transactions in SQL', 'Microsoft SQL Server', 'Stored Procedures', 'Batching in SQL', 'Microsoft SQL Server Agent Jobs'],
    },
    scrubbing: {
        portfolioImage: `${portfolioImagePath}scrubbing.png`,
        companyName: `R1 RCM`,
        portfolioName: `PHI & PII Data Scrubbing from Lower Environments`,
        portfolioCategory: `Data Security and Compliance`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `1`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} The Scrubbing PHI and PII data from Lower Environments project addresses critical compliance and security challenges related to the handling of sensitive healthcare information (PHI) and personally identifiable information (PII) within lower environments. With data privacy regulations becoming increasingly stringent, it is imperative for our organization to implement robust measures to safeguard sensitive data and ensure compliance with regulatory requirements. By systematically identifying and removing PHI and PII data from lower environments, we mitigate the risk of unauthorized access, data breaches, and regulatory non-compliance, thereby safeguarding the confidentiality and integrity of sensitive information. <br><br> Our solution focuses on the automated data scrubbing processes and data masking techniques to anonymize or de-identify sensitive information within lower environments. Leveraging advanced data scrubbing algorithms and encryption technologies, we ensure that PHI and PII data are rendered unreadable and unusable to unauthorized users, while preserving data integrity and usability for testing and development purposes. <br><br> Aligned with the organization's commitment to data privacy and security, the Scrubbing PHI and PII data from Lower Environments project delivers tangible benefits in terms of regulatory compliance, risk mitigation, and stakeholder trust. By implementing proactive measures to identify, protect, and manage sensitive data, the organization demonstrates its dedication to upholding the highest standards of data privacy and security. With robust data scrubbing processes in place, lower environments become safer and more secure environments for testing and development activities, fostering innovation and collaboration while safeguarding sensitive information from unauthorized access or disclosure.`,
        achievements: `<ul> <li><strong>Led</strong> the initiative to scrub Protected Health Information (PHI) and Personally Identifiable Information (PII) data from lower environments after backups, ensuring <strong>compliance</strong> with data security regulations.</li> <li><strong>Identified</strong> tables and columns containing PHI & PII data, devised a <strong>robust approach</strong> for data scrubbing, and developed a script to maintain data <strong>consistency</strong> across tables.</li> <li>Leveraged <strong>MS SQL Server</strong> along with <strong>SQL Procedures</strong> and <strong>Jobs</strong> to implement the scrubbing process effectively.</li> </ul>`,
        techStack: ['Transactions in SQL', 'Microsoft SQL Server', 'Stored Procedures', 'Batching in SQL', 'Microsoft SQL Server Agent Jobs'],
    },
    post: {
        portfolioImage: `${portfolioImagePath}post.png`,
        companyName: `R1 RCM`,
        portfolioName: `Cash Posting Reconciliation Solution (R1 Post)`,
        portfolioCategory: `Web Product`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `9`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} R1 Post is a robust Cash Posting Reconciliation solution designed to efficiently reconcile hospital bank accounts, ensuring comprehensive financial accuracy. As the final step in the verification process, R1 Post guarantees that all funds are accurately matched and accounted for, minimizing discrepancies and streamlining financial operations. <br><br> The solution addresses historical challenges in cash posting processes, offering opportunities for automation and standardization across existing and prospective customer bases. By effectively handling payment data flow, including Remit 835 and payment files, R1 Post facilitates seamless reconciliation between payer remittance information and hospital systems, enhancing efficiency and accuracy. <br><br> With intuitive matched and unmatched files logic, R1 Post empowers users to effortlessly identify and reconcile deposits, reducing manual intervention and optimizing workflow efficiency. Through features like exception worklists and category exceptions, the solution ensures meticulous handling of unmatched payments and deposits, driving financial integrity and operational excellence.`,
        achievements: `<ul> <li><strong>Developed and tested Admin Settings functionality</strong>, enabling <strong>users with admin roles</strong> to <strong>seamlessly add category exceptions</strong>, <strong>facilities</strong>, <strong>facility groups</strong>, and <strong>facility systems</strong> through a <strong>user-friendly interface</strong>.</li> <li>Utilized expertise in <strong>REST APIs</strong> and <strong>React Components and Hooks</strong> to <strong>enhance functionality</strong> and <strong>user experience</strong>.</li> <li><strong>Streamlined administrative processes</strong>, resulting in a <strong>reduction in time spent</strong> on <strong>category exception</strong>, <strong>facility</strong>, <strong>facility group</strong>, and <strong>facility system management tasks</strong>.</li> <li>Contributed to the <strong>enhancement of system efficiency</strong>, leading to an <strong>increase in user satisfaction ratings</strong>.</li> </ul>`,
        techStack: [`React`, `.NET Core`, `Typescript`, `C#`, `HTML5/CSS3`, `Web API`, `Microsoft SQL Server`, `Entity Framework (EF) Core`, `Azure AD Authentication`, `REST API`, `Microsoft Integration Services`, `MediatR & CQRS Design Pattern`, `XUnit`, `SpecFlow`, `Selenium`],
    },
    wci: {
        portfolioImage: `${portfolioImagePath}webcontent.png`,
        companyName: `TripStack`,
        portfolioName: `Web Content Integration`,
        portfolioCategory: `Web Product`,
        portfolioClient: `GO TO GATE, Flight Network, Alternative Airlines, eSky, Smart Fares, LBF Travel`,
        portfolioURL: `<a href='https://efoe.tripstack.com/swagger/index.html' target='_blank'>Flight Api</a>`,
        teamSize: `8`,
        role: `Software Engineer II`,
        productOverview: `${tsCompanyOverview} Tripstack Web Content Integration is a pioneering product designed to redefine the digital content landscape. It offers a robust platform for integrating diverse web content, making it accessible and manageable from a single point. Its key feature is the consolidation of various web content sources into a unified interface known as the TripStack Flight API. <br><br> The benefits of this product are manifold. It not only enhances the user experience by providing comprehensive flight information but also streamlines the process of searching and booking flights. This integration tool is a game-changer, offering unparalleled efficiency and convenience to its users. <br><br> The value proposition of the Tripstack Web Content Integration lies in its capability to transform the way users interact with flight data. By leveraging the power of the TripStack Flight API, it offers a unique, integrated, and enriched flight search experience, setting a new standard in the travel industry.`,
        achievements: `<ul> <li> <b>Spearheaded</b> the integration of public fares from multiple airlines, including AmericanAirlines, AegeanAir, OlympicAir, EasyJet, Ryanair, Spirit, Volaris, and others, into a single API using REST and Contractual APIs. </li> <li> <b>Enhanced</b> the TripStack Virtual Interlining, TripStack API, Self-Connect for Airlines, and FareShare Caching product's flight content offering, <b>providing comprehensive flight content access, enhancing travel options,</b> and <b>enabling efficient retailing</b> of Virtual Interlining fares for airlines. </li> <li><strong>Led</strong> the implementation of solutions to <strong>effectively manage</strong> and <strong>consolidate diverse API endpoints</strong>, ensuring <strong>smooth data retrieval</strong> and <strong>exchange processes</strong>.</li> <li><strong>Enhanced user experience</strong> by ensuring <strong>consistent</strong> and <strong>accurate fare information</strong> across <strong>multiple airline integrations</strong>, contributing to <strong>increased customer satisfaction</strong> and <strong>Look-To-Book Ratio</strong>.</li> </ul>`,
        techStack: [`.NET Core`, `C#`, `Middleware`, `Builder Design Pattern`, `XUnit`, `Elasticsearch`],
    },
    fbv: {
        portfolioImage: `${portfolioImagePath}booking-verification.jpeg`,
        companyName: `TripStack`,
        portfolioName: `Process Automation For Updating Flight Booking Status Verification`,
        portfolioCategory: `Process Automation`,
        portfolioClient: `TripStack, GO TO GATE, Flight Network, Alternative Airlines, eSky, Smart Fares, LBF Travel`,
        portfolioURL: `<a href='https://efoe.tripstack.com/swagger/index.html' target='_blank'>Flight Api</a>`,
        teamSize: `3`,
        role: `Software Engineer II`,
        productOverview: `${tsCompanyOverview} Tripstack Flight Booking Status Verification is a trailblazing tool that brings clarity and trust to the flight reservation process. Its standout feature is the real-time verification and updating of flight booking statuses, ensuring users always have the latest information. <br><br> This product offers considerable advantages. It instills confidence in users by keeping them updated about their reservation statuses and simplifies flight management, thereby saving time and reducing effort. <br><br> The unique selling point of Tripstack Flight Booking Status Verification lies in its capability to enhance the post-flight reservation experience. By providing real-time updates, it ensures users are never out of the loop regarding their bookings.`,
        achievements: `<ul> <li>Developed Slack bots utilizing <strong>C#</strong> and <strong>Slack API</strong> methods to automate the updating of flight booking statuses.</li> <li>Implemented functionality to mark the verification status of bookings directly on <strong>Slack</strong>, reducing manual effort.</li> <li>Achieved a <strong>~70% decrease</strong> in time spent on manually updating flight booking statuses <em>per booking</em>.</li> <li>Enhanced call center team productivity by enabling <strong>real-time verification feedback</strong>, resulting in <strong>~75% faster</strong> response times.</li> </ul>`,
        techStack: [`.NET Core`, `C#`, `Middleware`, `Slack API`, `XUnit`, `Elasticsearch`],
    },
    routes: {
        portfolioImage: `${portfolioImagePath}routes.jpeg`,
        companyName: `TripStack`,
        portfolioName: `Force-list generation for airline routes validation`,
        portfolioCategory: `Process Automation`, // Route Management
        portfolioClient: `TripStack`,
        portfolioURL: `-- NA --`,
        teamSize: `3`,
        role: `Software Engineer II`,
        productOverview: `${tsCompanyOverview} Airlines Routes List Generation and Validation is a state-of-the-art tool that revolutionizes route planning and optimization in the airline industry. It generates exhaustive lists of airline routes and validates their operational status, providing users with up-to-date and accurate information. <br><br> The advantages of this tool are significant. It offers valuable insights for route planning and optimization, thereby enhancing operational efficiency and reducing costs. By validating the operational status of routes, it ensures that users have the most current and reliable information at their disposal.`,
        achievements: `<ul> <li><strong>Spearheaded development of</strong> Airlines Routes List Generation and Validation tool, transforming <strong>route planning</strong> and <strong>optimization</strong> in <strong>aviation</strong>.</li> <li><strong>Produced exhaustive airline route lists</strong>, integrating <strong>validation mechanisms</strong> for enhanced <strong>accuracy</strong> and <strong>reliability</strong>.</li> <li>Verified <strong>operational status</strong> of routes, ensuring users access the <strong>most current</strong> and <strong>dependable information</strong>.</li> <li>Implemented <strong>White-List</strong> and <strong>Forced-List YAML files</strong> for efficient <strong>route management</strong>.</li> <li>Introduced customizable <strong>Black-List option</strong> in YAML files, enabling <strong>exclusion of specific routes</strong> for airlines.</li> <li>Enhanced <strong>compatibility</strong> and <strong>ease of use</strong> by utilizing YAML format across all <strong>route lists</strong> for seamless integration.</li> </ul>`,
        techStack: [`.NET Core`, `C#`, `Middleware`, `XUnit`, `Elasticsearch`],
    },
    ffa: {
        portfolioImage: `${portfolioImagePath}fare-availability.jpeg`,
        companyName: `TripStack`,
        portfolioName: `Calendar Project for checking flight fares availability`,
        portfolioCategory: `Process Automation`, // Flight Fare Management
        portfolioClient: `TripStack`,
        portfolioURL: `-- NA --`,
        teamSize: `3`,
        role: `Software Engineer II`,
        productOverview: `${tsCompanyOverview} The Flight Fare Availability is a dynamic tool designed to simplify the process of checking flight fares on specific dates. Crafted using C# programming language, this innovative project prioritizes cache performance optimization and cost reduction for Innovata. <br><br> With its user-friendly interface and robust functionality, the Flight Fare Availability Calendar offers a seamless experience for users to effortlessly access real-time flight fare information. By integrating with airline websites, it ensures accuracy and reliability, while also contributing to significant cost savings for Innovata. <br><br> Experience the convenience and efficiency of the Flight Fare Availability Calendar as it revolutionizes the way flight fares are checked and managed.`,
        achievements: `<ul> <li><strong>Implemented</strong> C# code to <strong>optimize cache performance</strong> by checking flight fare availability on specific dates.</li> <li>This initiative has reduced <strong>cache API calls</strong> by ~40%.</li> <li>Integrated with airline websites to ensure <strong>accuracy and reliability</strong> of data, thereby <strong>saving</strong> in Innovata costs.</li> </ul>`,
        techStack: [`.NET Core`, `C#`, `Middleware`, `XUnit`, `Elasticsearch`],
    },
};

function fetchPortfolioData(portfolioName) {
    if (portfolioName) {
        if (data[portfolioName]) {
            return data[portfolioName];
        } else {
            return ``;
        }
    } else {
        return ``;
    }
}