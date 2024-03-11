export const projectData = () => {

    const data = [{
        img: '/Memorizer.png',
        title: 'Memorizer App',
        description: 'An flashcard like web app that aids users in memorizing different texts. Once the user "flips" the card their answer is compared against the legend and scores the accuracy of their answer.',
        skills: ['React', 'Javascript', 'CSS', 'HTML', 'Express', 'Heorku', 'Psotgres SQL'],
        link: 'https://memorizer-94a158ea50d7.herokuapp.com/'
    },
    {
        img: '/fiit.png',
        title: 'F I I T app',
        description: 'An app that leverages the OpenAI API to create custom workouts based on user input inluding experience, equipment, and workout type',
        skills: ['React', 'Javascript', 'CSS', 'HTML', 'Express', 'Heorku', 'OpenAI API', 'Figma', 'WebSockets'],
        link: 'https://app.tryfiit.com/'
    },
    {
        img: '/allinbets.png',
        title: 'Super Bowl Prop Bets',
        description: 'A web app for a prop bets game for Superbowl LVII. Users answered questions and paid through PayPal integration and were able to view their standing and scores against other players as the game progressed.',
        skills: ['React', 'Javascript', 'CSS', 'HTML', 'Express', 'Postgres SQL', 'PayPal API', 'Heroku'],
        link:'https://github.com/nshryock10/allinbets'
    },
    {
        img: '/reddlite.png',
        title: 'Redd Lite',
        description: 'Portfolio project for the Codecademy Front End Developer ceterificate that leveraged the Reddit API to create a lite version of the app that allows users to view different sub-reddits and comments from the website.',
        skills: ['React', 'Javascript', 'CSS', 'HTML', 'Reddit API', 'Netlify',],
        link: 'https://nervous-ramanujan-45948d.netlify.app/'
    }]

    return data;

}

export const experienceData = () => {

    const data = [
    {
        logo: '/edwards.png',
        company: 'Edwards Lifesciences',
        title: 'Manager, Supplier Development Engineering',
        dates: 'March 2020 - Present',
        experience: ['Led the successful launch of the first-generation heart valve implant catheter device, ensuring a seamless transition with three months of product safety stock and critical suppliers ramping up capacity by 300% over 12 months prior to launch to meet increased product demands.',
    'Managed NPD teams focused on component development for the heart valve implant catheter providing comprehensive support across multiple programs, including functional unit testing, test plan creation, and manufacturing qualification',
    'Evaluated program risks by assessing their impact on project timelines, product quality, cost, supplier business continuity, and long-term scalability, culminating in proposals to executive leadership teams. Developed project charters detailing budgets totaling $3.3MM and multi-year project deliverables.',
    'Implemented strategies to mitigate risks and optimize project timelines, ensuring successful project execution and alignment with organizational objectives.',
'Developed and maintained relationships with key stakeholders, fostering collaboration and ensuring project success through effective communication and negotiation.'],
        skills: ['mentoring', 'project management', 'resource management', 'executive presentation', 'recruiting and hiring',
    'supplier management', 'price negotiations', 'stakeholder management']
    }, 
    {
        logo: '/edwards.png',
        company: 'Edwards Lifesciences',
        title: 'Senior Engineer, Supplier Development Engineering',
        dates: 'Sept 2020 - March 2022',
        experience: ['Successfully led the development activities for the transcatheter tricuspid heart valve replacement system, overcoming challenges such as shortened project timelines to prioritize time-to-market, while still executing robust process validations.',
        'Managed the planning and execution of process validations for complex assemblies, facing challenges such as the absence of proper process characterization prior to validation initiation due to accelerated project schedules, demonstrating adaptability and problem-solving skills.',
        'Determined the scope and deliverables for the Phase 1 program of the 2nd generation transcatheter tricuspid heart valve replacement system, incorporating optional deliverables based on lessons learned from the launch of the first generation program, showcasing strategic foresight and proactive planning.',
    'Evaluated supplier capabilities and performance to ensure alignment with project requirements, optimizing supplier relationships and driving continuous improvement in supplier development processes.'],
        skills: ['Six Sigma Black Belt','process validations', 'project management', 'executive presentation', 'root cause analysis',
         'stakeholder management']
    },
    {
        logo: '/applied.png',
        company: 'Applied Medical',
        title: 'Product Development Engineer',
        dates: 'June 2017 - Sept 2020',
        experience: ['Designed components for an electromechanical device utilizing various manufacturing processes including injection molding, machining, and stamping, demonstrating proficiency in diverse design methodologies.',
        'Developed comprehensive test methods and Test Method Validations (TMVs) for end-to-end product testing, ensuring thorough evaluation of product performance and reliability.',
        'Led the creation of essential documentation including design input, design output, and risk management documentation as part of a remediation pilot program, showcasing meticulous attention to detail and adherence to regulatory standards.'],
        skills: ['product desgin', 'risk mitigation', 'project development', 'root cause analysis', 'test method development']
    },]

    return data;

}