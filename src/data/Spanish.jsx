import React from 'react'

const Spanish = {

    navHome: "Inicio",
    navAtelier: "Proyecto: Atelier Gerbrand",
    navOrder: "Proyecto: Order Model",
    navGames: "Proyecto: Cruz y Raya",
    navContact: "Contacto",

    homeReactHover: "Todas mis aplicaciones están basadas en React. He usado herramientas como Vite o frameworks como NextJs.",
    homeMongoHover:"He usado bases de datos de MongoDB para mis proyectos de 'Atelier' y 'Orders'.",
    homeNodeHover:"Mi primer proyecto full-stack: 'Order Model' conecta por el backend a la base de datos con Node y Express",
    homeNextJsHover:"El proyecto 'Atelier Gerbrand' ha sido creado con NextJs y todas sus ventajas.",
    homeTailwindHover:"Tailwind es una herramienta de estilos maravillosa, mi proyecto 'Order Model' usa TailwindCSS.",
    homeCssHover: "Estilizar con pleno CSS sigue siendo un gusto, como puedes ver en esta misma página! Además el proyecto 'Atelier' usa módulos de CSS.",

    homeHeader: (
        <>
            <h1>Hola, soy Kashmir</h1>
            <h2>Desarrollador de páginas web, esto es lo que puedo hacer:</h2>
        </>),
    updateNotice: "Esta página esta en desarrollo en este mismo momento. Habrán más actualizaciones pronto!",
    atelierTopIntro: "Página completa y pública: ",
    atelierProjectIntroLeft: (
        <>
            <p>Página elaborada para un <span>estudio de arte</span>.</p>
            <p>Es una página sencilla para conocer a los artistas y su arte.</p>
            <p>La página es <span>completamente responsive </span>para pantallas grandes y medianas, tablets, dispositivos móviles y (si por alguna razón fuera necesario) móviles colocados horizontalmente.</p>
            <p>El contenido de la página se puede manejar fácilmente con <span>Strapi</span>, esto permite a los dueños agregar contenido por ellos mismos.</p>
            <p>Los estilos se han creado con  <span>Módulos de CSS </span> para poder eliminar código sobrante en caso de eliminarse alguna página.</p>
            <p style={{marginTop: '50px'}}>Esta página esta siendo usada actualmente por el estudio.</p>
            
        </>
    ),
    atelierWarning: (
        <>
            <span>AVISO!</span> Esto es una página de arte. Pueden haber desnudos en los cuadros.
        </>
    ),
    orderTopIntro: "Proyecto Full-Stack: ",
    orderProjectIntroLeft: (
        <>
             Hola! Bienvenid@ a mi primer proyecto <span>full-stack MERN</span>.<br/><br/>
            <p>Consiste en una consola administrativa para controlar órdenes.</p>
            <p style={{marginBottom: "30px"}}>Las órdenes pueden ser envios, reparaciones o cualquier servicio que la empresa ofrezca.</p>
            <div className="order-example">
                <p>Veamos un ejemplo de una tienda de reparación de ordenadores:</p>
                <ul>
                <li>Un empleado tiene que guardar una reparación.</li>
                <li>Se logea en la consola y <span>crea una orden</span>. En ésta orden crea el <span>cliente</span>, el <span>objeto</span> involucrado y describe el problema.</li>
                <li>La orden puede ser <span>modificada</span>, su <span>estado</span> cambiado y  <span>comentarios</span> pueden ser creados tanto por el empleado como el cliente.</li>
                </ul>
            </div>
            <p style={{marginTop: "30px", marginBottom: "30px" }}><span>Admins</span> (o <span>E</span>mpleados) pueden crear/modificar/eliminar casi cualquier cosa.<br/>
            Tienen un ID personalizado que comienza por <span>'E'</span> más tres números <span>(</span>E001, E002, E003...<span>)</span></p>
            <p style={{marginBottom: "30px"}}><span>Customers</span> pueden ver su perfil, sus órdenes y objetos y dejar comentarios para los empleados.<br/>
            Su ID personalizado comienza por <span>'C'</span> y termina en tres números <span>(</span>C001, C002, C003...<span>)</span></p>
            <p style={{marginBottom: "30px"}}><span>Orders</span> (o <span>R</span>equests) que pertenecen a un cliente comienzan por <span>'R'</span>, después los tres números del ID del cliente, más dos números <span>(</span>para C001: R00101, R00102...<span>)</span></p>
            <p style={{marginBottom: "30px"}}><span>Items</span> (o <span>A</span>ssets) del cliente funcionan de la misma manera, pero comienzan por <span>'A' (</span>para C001: A00101, A00102...<span>)</span></p>
            <p style={{marginBottom: "30px"}}>Se usa este sistema para facilitar la búsqueda de órdenes y objetos mediante el buscador <span>(</span>si es el cliente C001, todas sus órdenes serán por R001XX<span>)</span></p>
        </>
    ),
    orderTry:(
        <div className="order-try">
            <p>Echa un vistazo por ti mism@! (No te preocupes, no deberías poder romper nada)</p>
            <p><span>Login:</span> E003</p>
            <p style={{marginBottom: "0px"}}><span>P:</span> Vi3w@dmin</p>
        </div>
    ),
    gamesTopIntro: "Primer Proyecto:",
    gamesHeader: "Juego Cruz y Raya",
    gamesLink: "Ir a: Juego Cruz Y Raya",
    gamesIntroLeft: (
        <>
            <p>Este fue <span>mi primer proyecto de todos</span>. Fue creado por diversión y para retarme a aplicar alguna lógica extra al código</p>
            <p>¿Quién no empezó creando algún juego sencillo como el cruz y raya?</p>
            <p><span>Mi reto en ésta página fue crearlo al 100% con mis conocimientos, sin realizar ninguna consulta</span>. Sí, encontrarás líneas que se pueden mejorar,
                pero decidí dejarlo así para más adelante volver a hacer el proyecto de 0 para ver cuánto he mejorado.</p>
            <p>Como reto extra (y para diferenciarme de los típicos tutoriales de internet) <span>éste juego te permite jugar contra un ordenador lógico</span>.</p>
            <p>¡Accede al enlace para comprobarlo por ti mism@!</p>
        </>
    ),
    contactHeader: "¿Quieres saber más?",
    contactLinks: "Algunos enlaces:",
    contactContact: "Contáctame:",
    sorryMessage: "Lo siento! Aún no hay animación :("
}


export default Spanish