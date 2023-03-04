import El from '../../utils/EL';
import '@splidejs/splide/css/sea-green';

const Carousel = () => {
    const swipperEl = El ({
        element: 'div',
        className: 'splide ',
        ariaLabel:"Splide Basic HTML Example",
        children:El({ 
            element: 'div',
            className :"splide__track",
            style:'color:gray;',
            children:[
                El({ 
                element:'div',
                className:'splide__list',
                style:'width:300px',
                children:[
                    El({
                       element:'span',
                       className:"splide__slide h-screen music",
                       style:'', 
                    children:[
                    El({ 
                        element:'img',
                        src:'../../public/img/img1.jfif',
                        style:'width:425px;height:400px; padding:15px; margin-left:10px',

                    }),El({
                        element:'div',
                         style:'text-align:center;font-weight:bold',
                        innerText:"Rote Regen ",
                }),El({
                    element:'div',
                    style:"text-align:center;",
                    innerText:"Christin Stark ",
            }),
            El({
                element:'img',
                id:'Play',
                src:'../../public/img/play.png',
                style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
                className:"overlay",
               
        }),
            
            ] }),
                El({
                    element:'span',
                    style:'flex', 
                    style:'width:150px;',
                    className:"splide__slide h-screen music",
                 children:[
                
                El({ 
                    element:'img',
                    src:'../../public/img/img2.jfif', 
                    style:'width:425px;height:400px; padding:15px;margin-left:10px',
               }),El({
                        element:'div',
                        style:" text-align:center;font-weight:bold",
                        innerText:"Ohne Dich ",
                    }),El({
                        element:'div',
                        style:"text-align:center;",
                        innerText:"Rammstein ",
                    }),
                    El({
                        element:'img',
                        id:'Play',
                        src:'../../public/img/play.png',
                        style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
                        className:"overlay",
                       
                }),
                ]}),
                    El({
                        element:'span',
                        className:"splide__slide h-screen music ",
                        style:'width:150px;',
                     children:[
            El({ 
                element:'img',
                src:'../../public/img/img3.jfif',
                style:'width:425px;height:400px; padding:15px;margin-left:10px', 
           }),El({ 
                    element:'div',
                    style:"text-align:center;font-weight:bold ",
                    innerText:"alles was ich wünsche ",
                }),El({
                    element:'div',
                    style:"text-align:center;",
                    innerText:"Bettina wegner ",
                }),
                El({
                    element:'img',
                    id:'Play',
                    src:'../../public/img/play.png',
                    style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
                    className:"overlay",
                   
            }),
            ] }),
                El({
                    element:'span',
                    className:"splide__slide h-screen music",
                    style:'width:150px;',
                 children:[
            El({ 
                element:'img',
                src:'../../public/img/img4.jfif',
                style:'width:425px;height:400px; padding:15px;margin-left:10px', 
           }),El({ 
                    element:'div',
                    style:" text-align:center;font-weight:bold",
                    innerText:"Steh auf ",
                }),El({
                    element:'div',
                    style:"text-align:center;",
                    innerText:"Die toten hosen ",
                }),
                El({
                    element:'img',
                    id:'Play',
                    src:'../../public/img/play.png',
                    style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
                    className:"overlay",
                   
            }),
            ]}),
                El({
                    element:'span',
                    className:"splide__slide h-screen music ",
                    style:'width:150px;',
                 children:[
            El({ 
                element:'img',
                src:'../../public/img/img5.jfif',
                style:'width:425px;height:400px; padding:15px;margin-left:10px', 
           }),El({ 
                    element:'div',
                    style:" text-align:center;font-weight:bold",
                    innerText:"Wenn du gehst",
            }),El({
                element:'div',
                style:"text-align:center;",
                innerText:"Johannes oerding",
            }),
            El({
                element:'img',
                id:'Play',
                src:'../../public/img/play.png',
                style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
                className:"overlay",
               
        }),
        ]}),
        
            El({
                element:'span',
                className:"splide__slide h-screen music",
                style:'width:150px;',
             children:[
        El({ 
            element:'img',
            src:'../../public/img/img6.jfif',
            style:'width:425px;height:400px; padding:15px;margin-left:10px', 
       }),El({ 
                element:'div',
                style:"text-align:center;font-weight:bold ",
                innerText:"World was ending",
        }),El({
            element:'div',
            style:"text-align:center;",
            innerText:" Julia Michaels ",
        }),
        El({
            element:'img',
            id:'Play',
            src:'../../public/img/play.png',
            style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
            className:"overlay",
           
    }),
    ]}),
        El({
            element:'span',
            className:"splide__slide h-screen music", 
            
         children:[
    El({ 
        element:'img',
        src:'../../public/img/img7.jfif',
        style:'width:425px;height:400px; padding:15px;margin-left:10px', 
   }),El({ 
            element:'div',
           style:"text-align:center;font-weight:bold",
            innerText:"Koja boodi",
    }),El({
        element:'div',
        style:"text-align:center;",
        innerText:"Mohsen Chavoshi ",
    }),
    El({
        element:'img',
        id:'Play',
        src:'../../public/img/play.png',
        style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
        className:"overlay",
       
}),
]}),
    El({
        element:'span',
        className:"splide__slide h-screen music ",
     children:[
El({ 
    element:'img',
    src:'../../public/img/img8.jfif',
    style:'width:425px;height:400px; padding:15px;margin-left:10px', 
}),El({ 
        element:'div',
       style:" text-align:center;font-weight:bold",
        innerText:"Dard ",
}),El({
    element:'div',
    style:"text-align:center;",
    innerText:"Saaren ",
}),
El({
    element:'img',
    id:'Play',
    src:'../../public/img/play.png',
    style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
    className:"overlay",
   
}),
]}),

El({
    element:'span',
    className:"splide__slide h-screen music",
   children:[
El({ 
element:'img',
src:'../../public/img/img9.jfif',
style:'width:425px;height:400px; padding:15px;margin-left:10px', 
}),El({ 
    element:'div',
    innerText:"Talkhi ",
    style:'text-align:center;font-weight:bold',
}),El({
    element:'div',
    style:"text-align:center;",
    innerText:"Ehsan Daryadel ",
}),
El({
    element:'img',
    id:'Play',
    src:'../../public/img/play.png',
    style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
    className:"overlay",
   
}),
]}),

El({
    element:'span',
    className:'splide__slide h-screen music',
    style:"splide__slide h-screen ",
 children:[
El({ 
element:'img',
src:'../../public/img/img5.jfif',
style:'width:425px;height:400px; padding:15px;margin-left:10px', 
}),El({ 
    element:'div',
    style:"text-align:center;font-weight:bold",
    innerText:"Wenn du gehst ",
}),El({
    element:'div',
    style:"text-align:center;",
    innerText:"Johannes oerding ",
}),
El({
    element:'img',
    id:'Play',
    src:'../../public/img/play.png',
    style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
    className:"overlay",
   
}),
]}),


El({
    element:'span',
    className:'splide__slide h-screen music',
    style:"splide__slide h-screen ",
 children:[
El({ 
element:'img',
src:'../../public/img/img10.jpg',
style:'width:425px;height:400px; padding:15px;margin-left:10px', 
}),El({ 
    element:'div',
    style:"text-align:center;font-weight:bold",
    innerText:"ikimizde bilemedik ",
}),El({
    element:'div',
    style:"text-align:center;",
    innerText:"Bülent serttaş",
}),
El({
    element:'img',
    id:'Play',
    src:'../../public/img/play.png',
    style:"left:150px;top:200px;width:50px;height:50px; position:flex; ",
    className:"overlay",
   
}),
]}),



        
        ]


                 
       })]
    }),

 })


    return swipperEl;
}



export default Carousel;