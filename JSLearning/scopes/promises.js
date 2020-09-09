var promise = new Promise(function(resolve,reject){
    if(condition=='positive'){
        resolve("I ak good");

    }
    else
    {

        reject("OOPs!!!!")
    }

});

promise.then(function(response){}

})

.catch(function(errorResponse) {
    
});
