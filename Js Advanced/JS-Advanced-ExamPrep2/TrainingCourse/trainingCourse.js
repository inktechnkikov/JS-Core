class Trainingcourse{
    constructor(title,trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }
    addTopic(title,date){
        this.topics.push({title:title,date:date});
        this.topics.sort((a,b) => a.date-b.date);
     //   return this;
    }
    get firstTopic(){
        return this.topics[0];
    }
    get lastTopic(){
        return this.topics[this.topics.length-1];
    }
    toString(){
        let res = `Course \"${this.title}\" by ${this.trainer}`;
        for(let topic of this.topics){
            res += `\n * ${topic.title} - ${topic.date}`;

    }
    if(this.topics.length === 0){
        res += "\n";
    }
    return res;
    }
}
let js = new Trainingcourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
