// immedeaitly invoke function expression


(function chai(){
    console.log(`DB is cnnected`);
})();

( () => {
   console.log(`DB two is connected`)
   
} )()