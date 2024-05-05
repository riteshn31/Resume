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
        achievements: `R1 is a leading provider of technology-driven solutions that transform the patient experience and financial performance of healthcare providers.`,
        techStack: [`Microsoft SQL Server`, `C#`, `ASP.NET`, `ASP.NET`, `Microsoft SQL Server Agent Jobs`, `SpecFlow`, `SQL Server Integration Services (SSIS)`, `HTML/CSS/Bootstrap`, `JavaScript`, `Selenium`],
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
        achievements: `R1 is a leading provider of technology-driven solutions that transform the patient experience and financial performance of healthcare providers.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
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
        achievements: `R1 is a leading provider of technology-driven solutions that transform the patient experience and financial performance of healthcare providers.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
    },
    archival: {
        portfolioImage: `${portfolioImagePath}archival.png`,
        companyName: `R1 RCM`,
        portfolioName: `Data Archival for Work Flow Management Acute and Physician Business`,
        portfolioCategory: `Web Product`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `1`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} Our Data Archival solution efficiently manages and stores large volumes of data while ensuring regulatory compliance and optimizing system performance. With traditional storage solutions becoming inadequate as data volumes grow, our comprehensive archival strategy addresses this challenge by systematically identifying and transferring inactive or less frequently accessed data to secondary storage tiers. <br><br> Through automated archival processes and robust data lifecycle management policies, our solution streamlines data identification, categorization, and migration across the organization. Leveraging industry-leading archival technologies and best practices, we maintain data integrity, accessibility, and security throughout the archival lifecycle. <br><br> Developed to align with organizational objectives, our Data Archival project delivers significant benefits, including cost reduction, risk mitigation, and operational agility. By optimizing storage resources and enhancing data accessibility, our solution empowers organizations to effectively manage data growth and maximize the value of their data assets.`,
        achievements: `R1 is a leading provider of technology-driven solutions that transform the patient experience and financial performance of healthcare providers.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
    },
    scrubbing: {
        portfolioImage: `${portfolioImagePath}scrubbing.png`,
        companyName: `R1 RCM`,
        portfolioName: `PHI & PII Data Scrubbing from Lower Environments`,
        portfolioCategory: `Web Product`,
        portfolioClient: `R1 RCM`,
        portfolioURL: `-- NA --`,
        teamSize: `1`,
        role: `Software Engineer`,
        productOverview: `${r1CompanyOverview} The Scrubbing PHI and PII data from Lower Environments project addresses critical compliance and security challenges related to the handling of sensitive healthcare information (PHI) and personally identifiable information (PII) within lower environments. With data privacy regulations becoming increasingly stringent, it is imperative for our organization to implement robust measures to safeguard sensitive data and ensure compliance with regulatory requirements. By systematically identifying and removing PHI and PII data from lower environments, we mitigate the risk of unauthorized access, data breaches, and regulatory non-compliance, thereby safeguarding the confidentiality and integrity of sensitive information. <br><br> Our solution focuses on the automated data scrubbing processes and data masking techniques to anonymize or de-identify sensitive information within lower environments. Leveraging advanced data scrubbing algorithms and encryption technologies, we ensure that PHI and PII data are rendered unreadable and unusable to unauthorized users, while preserving data integrity and usability for testing and development purposes. <br><br> Aligned with the organization's commitment to data privacy and security, the Scrubbing PHI and PII data from Lower Environments project delivers tangible benefits in terms of regulatory compliance, risk mitigation, and stakeholder trust. By implementing proactive measures to identify, protect, and manage sensitive data, the organization demonstrates its dedication to upholding the highest standards of data privacy and security. With robust data scrubbing processes in place, lower environments become safer and more secure environments for testing and development activities, fostering innovation and collaboration while safeguarding sensitive information from unauthorized access or disclosure.`,
        achievements: `R1 is a leading provider of technology-driven solutions that transform the patient experience and financial performance of healthcare providers.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
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
        achievements: `R1 is a leading provider of technology-driven solutions that transform the patient experience and financial performance of healthcare providers.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
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
        achievements: `TripStack is a leading B2B travel technology company that provides unique flight content through Virtual Interlining, enabling customers to travel with multiple carriers in a single itinerary.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
    },
    fbv: {
        portfolioImage: `${portfolioImagePath}booking-verification.jpeg`,
        companyName: `TripStack`,
        portfolioName: `Process Automation For Updating Flight Booking Status Verification`,
        portfolioCategory: `Web Product`,
        portfolioClient: `TripStack, GO TO GATE, Flight Network, Alternative Airlines, eSky, Smart Fares, LBF Travel`,
        portfolioURL: `<a href='https://efoe.tripstack.com/swagger/index.html' target='_blank'>Flight Api</a>`,
        teamSize: `3`,
        role: `Software Engineer II`,
        productOverview: `${tsCompanyOverview} Tripstack Flight Booking Status Verification is a trailblazing tool that brings clarity and trust to the flight reservation process. Its standout feature is the real-time verification and updating of flight booking statuses, ensuring users always have the latest information. <br><br> This product offers considerable advantages. It instills confidence in users by keeping them updated about their reservation statuses and simplifies flight management, thereby saving time and reducing effort. <br><br> The unique selling point of Tripstack Flight Booking Status Verification lies in its capability to enhance the post-flight reservation experience. By providing real-time updates, it ensures users are never out of the loop regarding their bookings.`,
        achievements: `TripStack is a leading B2B travel technology company that provides unique flight content through Virtual Interlining, enabling customers to travel with multiple carriers in a single itinerary.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
    },
    routes: {
        portfolioImage: `${portfolioImagePath}routes.jpeg`,
        companyName: `TripStack`,
        portfolioName: `Force-list generation for airline routes validation`,
        portfolioCategory: `Web Product`,
        portfolioClient: `TripStack`,
        portfolioURL: `-- NA --`,
        teamSize: `3`,
        role: `Software Engineer II`,
        productOverview: `${tsCompanyOverview} Airlines Routes List Generation and Validation is a state-of-the-art tool that revolutionizes route planning and optimization in the airline industry. It generates exhaustive lists of airline routes and validates their operational status, providing users with up-to-date and accurate information. <br><br> The advantages of this tool are significant. It offers valuable insights for route planning and optimization, thereby enhancing operational efficiency and reducing costs. By validating the operational status of routes, it ensures that users have the most current and reliable information at their disposal.`,
        achievements: `TripStack is a leading B2B travel technology company that provides unique flight content through Virtual Interlining, enabling customers to travel with multiple carriers in a single itinerary.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
    },
    ffa: {
        portfolioImage: `${portfolioImagePath}fare-availability.jpeg`,
        companyName: `TripStack`,
        portfolioName: `Calendar Project for checking flight fares availability`,
        portfolioCategory: `Web Product`,
        portfolioClient: `TripStack`,
        portfolioURL: `-- NA --`,
        teamSize: `3`,
        role: `Software Engineer II`,
        productOverview: `${tsCompanyOverview}`,
        achievements: `TripStack is a leading B2B travel technology company that provides unique flight content through Virtual Interlining, enabling customers to travel with multiple carriers in a single itinerary.`,
        techStack: [`.NET Core`, `Microsoft Azure Cloud`, `Web API`, `HTML5/CSS3`, `React`, `Typescript`, `C#`, `MediatR & CQRS Design Pattern`, `Microsoft SQL Server`, `XUnit`, `SpecFlow`, `Selenium`],
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