 function ShowData(data: {title:string, text:string, Name: String, city:String}){
    console.log(data.title+ ' ' +data.text)

}

let myData = {title:'Angular', text:'Javascript framework'}
ShowData(myData)