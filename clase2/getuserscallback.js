function getUsers(cb){
    let users = [
        {
            id: 1,
            name: 'Juan'
        },
        {
            id: 2,
            name: 'Jesus'
        }
    ];

    setTimeout(function () {
        cb(users)
    },1000)

    //$.ajax({...}, cb, function(){})
}


function getPosts(cb){};

console.log("1.");
getUsers(function(users){
    console.log("2.");
    console.log(users);
    getPosts(function(posts){
        console.log("2.");
        console.log(posts);
        console.log(users);
        getAlgoMas(function (algomas) {
            getAlgoMas2(function (algomas2) {
                // asdsadasd
                //adsdsasad
                getAlgoMas3(function (algomas3) {



                });
                // asdasdsa
            });


            //asdasdasdad


        });
    });
});



console.log("3.");