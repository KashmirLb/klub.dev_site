import React from 'react'

const English = {

    navHome: "Home",
    navAtelier: "Project: Atelier Gerbrand",
    navOrder: "Project: Order Model",
    navGames: "Project: Tic Tac Toe",
    navContact: "Contact",

    homeReactHover: "All my applications are React-based. I have used different tools as Vite or frameworks as NextJS.",
    homeMongoHover:"MongoDB databases have been used in my Atelier and Order projects.",
    homeNodeHover:"My first full-stack app 'Order Model' has it's backend connected with Node and Express.",
    homeNextJsHover:"Atelier Gerbrand has been created with Next.js and all its features.",
    homeTailwindHover:"Tailwind is a wonderfull styling tool, my Order Model project uses Tailwindcss.",
    homeCssHover: "I am comfortable styling with plain CSS, as you can see on this website! Also my Atelier project is created with CSS modules.",
    homeHeader: (
        <>
            <h1>Hi, I'm Kashmir</h1>
            <h2>Web development is my thing, this is what I can do:</h2>
        </>),
    updateNotice: "This website is currently being developed. More updates soon!",
    atelierTopIntro: "Full public website:",
    atelierProjectIntroLeft: (
        <>
            <p>This website was created for an <span>art studio</span>.</p>
            <p>It is a simplistic site to get to know the artists and their work.</p>
            <p>The website is <span>fully responsive </span>for large screens, medium screens, tablets, mobile devices and (if for some reason necessary) mobile devices placed horizontally.</p>
            <p>The content can be managed and is easily added with <span>Strapi</span>, this allows the owners to add new content by themselves.</p>
            <p>Styles are added with <span>CSS Modules</span> to easily remove unused code in case pages are removed.</p>
            <p style={{marginTop: '50px'}}>This website is live and being used by the studio.</p>
            
        </>
    ),
    atelierWarning: (
        <>
            <span>WARNING!</span> This is an art site, paintings might contain some nudity.
        </>
    ),
    orderTopIntro: "Full stack project:",
    orderProjectIntroLeft: (
        <>
            Hi! So this is my first <span>full-stack MERN </span>project. <br/><br/>
            <p>It consists of a simple admin console to manage orders for customers.</p>
            <p style={{marginBottom: "30px"}}>Orders can be deliveries, reparations or really any task the company offers.</p>
            <div className="order-example">
                <p>Let's see an example of a computer repair shop:</p>
                <ul>
                <li>An employee needs to log a reparation</li>
                <li>He logs into the console and <span>creates an order</span>. In this order he creates the <span>customer</span>, the <span>item</span> involved and describes the problem.</li>
                <li>The order can be <span>edited</span>, it's <span>status</span> changed and <span>comments</span> can be left by both the employee and the customer.</li>
                <li><span>Customers</span> and <span>items</span> are saved for use in future orders.</li>
                </ul>
            </div>
            <p style={{marginTop: "30px", marginBottom: "30px" }}><span>Admins </span>(or <span>E</span>mployees) can create/edit/delete almost anything.<br/>
            They have a custom ID that starts with <span>'E'</span> plus three numbers <span>(</span>E001, E002, E003...<span>)</span></p>
            <p style={{marginBottom: "30px"}}><span>Customers</span> can view their profile, items and orders and leave comments for the admins.<br/>
            Their custom ID starts with a <span>'C'</span> plus three numbers <span>(</span>C001, C002, C003...<span>)</span></p>
            <p style={{marginBottom: "30px"}}><span>Orders</span> (or <span>R</span>equests) that belong to the client start with an <span>'R'</span>, then the three numbers from the customer ID, plus two numbers <span>(</span>for C001: R00101, R00102...<span>)</span></p>
            <p style={{marginBottom: "30px"}}><span>Items</span> (or <span>A</span>ssets) from the customer work the same way, but start with an <span>'A' (</span>for C001: A00101, A00102...<span>)</span></p>
            <p style={{marginBottom: "30px"}}>This custom ID method is used to make it easier to find orders and items belonging to a customer <span>(</span>All orders for C001 would be R001XX<span>)</span></p>
        </>
    ),
    orderTry:(
        <div className="order-try">
            <p>Have a look around yourself! (don't worry, you shouldn't be able to break anything)</p>
            <p><span>Login:</span> E003</p>
            <p style={{marginBottom: "0px"}}><span>P:</span> Vi3w@dmin</p>
        </div>
    ),
    gamesTopIntro: "First project:",
    gamesHeader: "Tic-Tac-Toe Game",
    gamesLink: "Go to: Tic-Tac-Toe Game",
    gamesIntroLeft: (
        <>
            <p>This was <span>my very first project</span>. I created it just for fun and to challenge myself to use some more advanced logics in my code.</p>
            <p>Who didn't start creating a simple game like Tic-Tac-Toe?</p>
            <p>The real challenge in this project was to <span>create it 100% from my (then) knowledge, without searching solutions online</span>. Yes, you will find code that can be improved,
                but I decided to leave it like this to reapeat the challenge in the future and see how much I have improved.</p>
            <p>As an extra challenge (and to differentiate myself from online videos) <span>this game allows you to play vs a logic computer</span>.</p>
            <p>Access the link and try it for yourself!</p>
        </>
    ),
    contactHeader: "Want to know more?",
    contactLinks: "Some links:",
    contactContact: "Contact me:",
    sorryMessage: "Sorry! No animation yet :("
}


export default English