let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]
let a = JSON.stringify(arr);
let obj = JSON.parse(a);

let isveg = false;
let isnonveg = false;

function recipe(){
    for (let i = 0; i < arr.length; i++) {
        const container = document.getElementById("cont");

        const cr  = document.createElement("div");
        cr.className = "asd";

        const cr1  = document.createElement("div");
        cr1.className = "discc";
        const img = document.createElement("img");
        img.src=`${obj[i].imageSrc}`;
        cr1.appendChild(img);
        cr.appendChild(cr1);
    
        const cr2 = document.createElement("p");
        cr2.className = "discc";
        let a2 = `${obj[i].name}`;
        cr2.innerText = a2;
        cr.appendChild(cr2);
        
        const cr3 = document.createElement("p");
        cr3.className = "discc";
        let a3 = `${obj[i].type}`;
        cr3.innerText = a3;
        cr.appendChild(cr3);
        
        const cr4 = document.createElement("p");
        cr4.className = "discc";
        let a4 = `${obj[i].time}`;
        cr4.innerText = a4;
        cr.appendChild(cr4);
        
        const cr5 = document.createElement("p");
        cr5.className = "discc";
        let a5 = `${obj[i].isLiked}`;
        cr5.innerText = a5;
        cr.appendChild(cr5);
       
        const cr6 = document.createElement("p");
        cr6.className = "discc";
        let a6 = `${obj[i].rating}`;
        cr6.innerText = a6;
        cr.appendChild(cr6);   
        
        container.appendChild(cr);
    }
}
recipe();

function  clearall(){
    const asd = document.getElementsByClassName("asd")
    while(asd.length>0){
        asd[0].remove();
    }
}


function allrecipe(){
    clearall();
    recipe();
}

function vegrecipe(){
    clearall();
    isveg = true;
    isnonveg = false;
    for (let i = 0; i < arr.length; i++) {
        let a = `${obj[i].type}`;
        if(a==="veg"){
            const container = document.getElementById("cont");

            const cr  = document.createElement("div");
            cr.className = "asd";

            const cr1  = document.createElement("div");
            cr1.className = "discc";
            const img = document.createElement("img");
            img.src=`${obj[i].imageSrc}`;
            cr1.appendChild(img);
            cr.appendChild(cr1);
        
            const cr2 = document.createElement("p");
            cr2.className = "discc";
            let a2 = `${obj[i].name}`;
            cr2.innerText = a2;
            cr.appendChild(cr2);
            
            const cr3 = document.createElement("p");
            cr3.className = "discc";
            let a3 = `${obj[i].type}`;
            cr3.innerText = a3;
            cr.appendChild(cr3);
            
            const cr4 = document.createElement("p");
            cr4.className = "discc";
            let a4 = `${obj[i].time}`;
            cr4.innerText = a4;
            cr.appendChild(cr4);
            
            const cr5 = document.createElement("p");
            cr5.className = "discc";
            let a5 = `${obj[i].isLiked}`;
            cr5.innerText = a5;
            cr.appendChild(cr5);
        
            const cr6 = document.createElement("p");
            cr6.className = "discc";
            let a6 = `${obj[i].rating}`;
            cr6.innerText = a6;
            cr.appendChild(cr6);   
            
            container.appendChild(cr);

        }
    }
}

function nonvegrecipe(){
    clearall();
    isveg = false;
    isnonveg = true;
    for (let i = 0; i < arr.length; i++) {
        let a = `${obj[i].type}`;
        if(a==="non-veg"){
            const container = document.getElementById("cont");

            const cr  = document.createElement("div");
            cr.className = "asd";

            const cr1  = document.createElement("div");
            cr1.className = "discc";
            const img = document.createElement("img");
            img.src=`${obj[i].imageSrc}`;
            cr1.appendChild(img);
            cr.appendChild(cr1);
        
            const cr2 = document.createElement("p");
            cr2.className = "discc";
            let a2 = `${obj[i].name}`;
            cr2.innerText = a2;
            cr.appendChild(cr2);
            
            const cr3 = document.createElement("p");
            cr3.className = "discc";
            let a3 = `${obj[i].type}`;
            cr3.innerText = a3;
            cr.appendChild(cr3);
            
            const cr4 = document.createElement("p");
            cr4.className = "discc";
            let a4 = `${obj[i].time}`;
            cr4.innerText = a4;
            cr.appendChild(cr4);
            
            const cr5 = document.createElement("p");
            cr5.className = "discc";
            let a5 = `${obj[i].isLiked}`;
            cr5.innerText = a5;
            cr.appendChild(cr5);
        
            const cr6 = document.createElement("p");
            cr6.className = "discc";
            let a6 = `${obj[i].rating}`;
            cr6.innerText = a6;
            cr.appendChild(cr6);   
            
            container.appendChild(cr);

        }
    }
}

function fourstar(){
    clearall();
    if(isveg==true && isnonveg==false){
        for (let i = 0; i < arr.length; i++) {
            let a = `${obj[i].rating}`;
            let b = `${obj[i].type}`
            if(a>=4 && b=="veg"){
                const container = document.getElementById("cont");
    
                const cr  = document.createElement("div");
                cr.className = "asd";
    
                const cr1  = document.createElement("div");
                cr1.className = "discc";
                const img = document.createElement("img");
                img.src=`${obj[i].imageSrc}`;
                cr1.appendChild(img);
                cr.appendChild(cr1);
            
                const cr2 = document.createElement("p");
                cr2.className = "discc";
                let a2 = `${obj[i].name}`;
                cr2.innerText = a2;
                cr.appendChild(cr2);
                
                const cr3 = document.createElement("p");
                cr3.className = "discc";
                let a3 = `${obj[i].type}`;
                cr3.innerText = a3;
                cr.appendChild(cr3);
                
                const cr4 = document.createElement("p");
                cr4.className = "discc";
                let a4 = `${obj[i].time}`;
                cr4.innerText = a4;
                cr.appendChild(cr4);
                
                const cr5 = document.createElement("p");
                cr5.className = "discc";
                let a5 = `${obj[i].isLiked}`;
                cr5.innerText = a5;
                cr.appendChild(cr5);
            
                const cr6 = document.createElement("p");
                cr6.className = "discc";
                let a6 = `${obj[i].rating}`;
                cr6.innerText = a6;
                cr.appendChild(cr6);   
                
                container.appendChild(cr);
    
            }
        }
    }else if(isnonveg==true && isveg==false){
        for (let i = 0; i < arr.length; i++) {
            let a = `${obj[i].rating}`;
            let b = `${obj[i].type}`
            if(a>=4 && b=="non-veg"){
                const container = document.getElementById("cont");
    
                const cr  = document.createElement("div");
                cr.className = "asd";
    
                const cr1  = document.createElement("div");
                cr1.className = "discc";
                const img = document.createElement("img");
                img.src=`${obj[i].imageSrc}`;
                cr1.appendChild(img);
                cr.appendChild(cr1);
            
                const cr2 = document.createElement("p");
                cr2.className = "discc";
                let a2 = `${obj[i].name}`;
                cr2.innerText = a2;
                cr.appendChild(cr2);
                
                const cr3 = document.createElement("p");
                cr3.className = "discc";
                let a3 = `${obj[i].type}`;
                cr3.innerText = a3;
                cr.appendChild(cr3);
                
                const cr4 = document.createElement("p");
                cr4.className = "discc";
                let a4 = `${obj[i].time}`;
                cr4.innerText = a4;
                cr.appendChild(cr4);
                
                const cr5 = document.createElement("p");
                cr5.className = "discc";
                let a5 = `${obj[i].isLiked}`;
                cr5.innerText = a5;
                cr.appendChild(cr5);
            
                const cr6 = document.createElement("p");
                cr6.className = "discc";
                let a6 = `${obj[i].rating}`;
                cr6.innerText = a6;
                cr.appendChild(cr6);   
                
                container.appendChild(cr);
    
            }
        }
    }else{
        for (let i = 0; i < arr.length; i++) {
            let a = `${obj[i].rating}`;
            if(a>=4){
                const container = document.getElementById("cont");
    
                const cr  = document.createElement("div");
                cr.className = "asd";
    
                const cr1  = document.createElement("div");
                cr1.className = "discc";
                const img = document.createElement("img");
                img.src=`${obj[i].imageSrc}`;
                cr1.appendChild(img);
                cr.appendChild(cr1);
            
                const cr2 = document.createElement("p");
                cr2.className = "discc";
                let a2 = `${obj[i].name}`;
                cr2.innerText = a2;
                cr.appendChild(cr2);
                
                const cr3 = document.createElement("p");
                cr3.className = "discc";
                let a3 = `${obj[i].type}`;
                cr3.innerText = a3;
                cr.appendChild(cr3);
                
                const cr4 = document.createElement("p");
                cr4.className = "discc";
                let a4 = `${obj[i].time}`;
                cr4.innerText = a4;
                cr.appendChild(cr4);
                
                const cr5 = document.createElement("p");
                cr5.className = "discc";
                let a5 = `${obj[i].isLiked}`;
                cr5.innerText = a5;
                cr.appendChild(cr5);
            
                const cr6 = document.createElement("p");
                cr6.className = "discc";
                let a6 = `${obj[i].rating}`;
                cr6.innerText = a6;
                cr.appendChild(cr6);   
                
                container.appendChild(cr);
    
            }
        }
    }
    
}
function fourstarbelow(){
    clearall();
    if(isveg==true && isnonveg==false){
        for (let i = 0; i < arr.length; i++) {
            let a = `${obj[i].rating}`;
            let b = `${obj[i].type}`
            if(a<4 && b=="veg"){
                const container = document.getElementById("cont");
    
                const cr  = document.createElement("div");
                cr.className = "asd";
    
                const cr1  = document.createElement("div");
                cr1.className = "discc";
                const img = document.createElement("img");
                img.src=`${obj[i].imageSrc}`;
                cr1.appendChild(img);
                cr.appendChild(cr1);
            
                const cr2 = document.createElement("p");
                cr2.className = "discc";
                let a2 = `${obj[i].name}`;
                cr2.innerText = a2;
                cr.appendChild(cr2);
                
                const cr3 = document.createElement("p");
                cr3.className = "discc";
                let a3 = `${obj[i].type}`;
                cr3.innerText = a3;
                cr.appendChild(cr3);
                
                const cr4 = document.createElement("p");
                cr4.className = "discc";
                let a4 = `${obj[i].time}`;
                cr4.innerText = a4;
                cr.appendChild(cr4);
                
                const cr5 = document.createElement("p");
                cr5.className = "discc";
                let a5 = `${obj[i].isLiked}`;
                cr5.innerText = a5;
                cr.appendChild(cr5);
            
                const cr6 = document.createElement("p");
                cr6.className = "discc";
                let a6 = `${obj[i].rating}`;
                cr6.innerText = a6;
                cr.appendChild(cr6);   
                
                container.appendChild(cr);
    
            }
        }
    }else if(isnonveg==true && isveg==false){
        for (let i = 0; i < arr.length; i++) {
            let a = `${obj[i].rating}`;
            let b = `${obj[i].type}`
            if(a<4 && b=="non-veg"){
                const container = document.getElementById("cont");
    
                const cr  = document.createElement("div");
                cr.className = "asd";
    
                const cr1  = document.createElement("div");
                cr1.className = "discc";
                const img = document.createElement("img");
                img.src=`${obj[i].imageSrc}`;
                cr1.appendChild(img);
                cr.appendChild(cr1);
            
                const cr2 = document.createElement("p");
                cr2.className = "discc";
                let a2 = `${obj[i].name}`;
                cr2.innerText = a2;
                cr.appendChild(cr2);
                
                const cr3 = document.createElement("p");
                cr3.className = "discc";
                let a3 = `${obj[i].type}`;
                cr3.innerText = a3;
                cr.appendChild(cr3);
                
                const cr4 = document.createElement("p");
                cr4.className = "discc";
                let a4 = `${obj[i].time}`;
                cr4.innerText = a4;
                cr.appendChild(cr4);
                
                const cr5 = document.createElement("p");
                cr5.className = "discc";
                let a5 = `${obj[i].isLiked}`;
                cr5.innerText = a5;
                cr.appendChild(cr5);
            
                const cr6 = document.createElement("p");
                cr6.className = "discc";
                let a6 = `${obj[i].rating}`;
                cr6.innerText = a6;
                cr.appendChild(cr6);   
                
                container.appendChild(cr);
    
            }
        }
    }else{
        for (let i = 0; i < arr.length; i++) {
            let a = `${obj[i].rating}`;
            if(a<4){
                const container = document.getElementById("cont");
    
                const cr  = document.createElement("div");
                cr.className = "asd";
    
                const cr1  = document.createElement("div");
                cr1.className = "discc";
                const img = document.createElement("img");
                img.src=`${obj[i].imageSrc}`;
                cr1.appendChild(img);
                cr.appendChild(cr1);
            
                const cr2 = document.createElement("p");
                cr2.className = "discc";
                let a2 = `${obj[i].name}`;
                cr2.innerText = a2;
                cr.appendChild(cr2);
                
                const cr3 = document.createElement("p");
                cr3.className = "discc";
                let a3 = `${obj[i].type}`;
                cr3.innerText = a3;
                cr.appendChild(cr3);
                
                const cr4 = document.createElement("p");
                cr4.className = "discc";
                let a4 = `${obj[i].time}`;
                cr4.innerText = a4;
                cr.appendChild(cr4);
                
                const cr5 = document.createElement("p");
                cr5.className = "discc";
                let a5 = `${obj[i].isLiked}`;
                cr5.innerText = a5;
                cr.appendChild(cr5);
            
                const cr6 = document.createElement("p");
                cr6.className = "discc";
                let a6 = `${obj[i].rating}`;
                cr6.innerText = a6;
                cr.appendChild(cr6);   
                
                container.appendChild(cr);
    
            }
        }
    }
}


const form = document.getElementById("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let giveniput = form.name.value;
    searching(giveniput);
})
function searching(giveniput){
    clearall();
    for (let i = 0; i < arr.length; i++) {
        let a = `${obj[i].name}`;
        if(a===giveniput){
            const container = document.getElementById("cont");

            const cr  = document.createElement("div");
            cr.className = "asd";

            const cr1  = document.createElement("div");
            cr1.className = "discc";
            const img = document.createElement("img");
            img.src=`${obj[i].imageSrc}`;
            cr1.appendChild(img);
            cr.appendChild(cr1);
        
            const cr2 = document.createElement("p");
            cr2.className = "discc";
            let a2 = `${obj[i].name}`;
            cr2.innerText = a2;
            cr.appendChild(cr2);
            
            const cr3 = document.createElement("p");
            cr3.className = "discc";
            let a3 = `${obj[i].type}`;
            cr3.innerText = a3;
            cr.appendChild(cr3);
            
            const cr4 = document.createElement("p");
            cr4.className = "discc";
            let a4 = `${obj[i].time}`;
            cr4.innerText = a4;
            cr.appendChild(cr4);
            
            const cr5 = document.createElement("p");
            cr5.className = "discc";
            let a5 = `${obj[i].isLiked}`;
            cr5.innerText = a5;
            cr.appendChild(cr5);
        
            const cr6 = document.createElement("p");
            cr6.className = "discc";
            let a6 = `${obj[i].rating}`;
            cr6.innerText = a6;
            cr.appendChild(cr6);   
            
            container.appendChild(cr);

        }
    }
}

function typing(){
    console.log("typing")
}

const ele = document.getElementById("in");
ele.addEventListener("keyup",handleinput);


function handleinput(event){
    let str = event.key+"qwerty";
    console.log(str)
}