type Words = {
	[key: string]: string
}

class Dict {
	private words: Words
    constructor(){
    	this.words = {}
    }
    add(word: Word){ 				
    	if(this.words[word.term] === undefined){
   			this.words[word.term] = word.def;
   		 }
   }
   	get(term: string){
    	return this.words[term];
    }

    delete(term: string){
        delete this.words[term];
    }

    update(term: string, def: string){
        if(this.words[term] !== undefined){
            this.words[term] = def;
        }
    }

    showAll(){
        for(let [key, value] of Object.entries(this.words)){
            console.log(`${key}: ${value}`)
        }
    }

    count(){
        return Object.keys(this.words).length;
    }
}

class Word{
	constructor(
    	public term:string,
        public def :string
        ) {}
}

let kimchi = new Word("김치", "한국의 음식");
let tang = new Word("마라탕", "중국의 음식");
let sushi = new Word("스시", "일본의 음식" );
let dic = new Dict();
dic.add(kimchi);
dic.add(tang);
dic.add(sushi);
console.log(dic.showAll());
console.log("------------------")
console.log(dic.get("김치"));
console.log("------------------")
dic.update("김치", "발효 음식");
console.log(dic.showAll());
console.log("------------------")
dic.delete("마라탕");
console.log(dic.showAll());
console.log("------------------")
console.log(dic.count());

