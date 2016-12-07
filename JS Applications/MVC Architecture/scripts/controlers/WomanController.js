class WomanController {
    constructor(model,view){
        this.model = model;
        this.view = view;
    }
    getWoman(id){
        this.model.getWoman(id).then(function (successData) {
            
        }).catch(function (errorData) {
            console.log(errorData);
        });

    }
    getWomen(){
        this.model.getWomen().then(function (successData) {
            
        }).catch(function (errorData) {
            console.log(errorData);
        });
    }
}
