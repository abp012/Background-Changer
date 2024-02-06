function changeBG(color){
            document.body.style.backgroundColor=color;
            // document.body.style.color='black';
            // if(color == 'black') {
            //     document.body.style.color='white';
            // }
            let txt=document.getElementsByClassName("txt");
            //console.log(txt);
            if(color == 'black') {
                for(let elm of txt) {
                    elm.style.color='white';
                }
            }
            else{
                for(let elm of txt) {
                    elm.style.color='black';
                }
            }
            

        }
