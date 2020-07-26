
var mainDiv=document.getElementById("toDooapp");

var header=document.createElement('div');
var h1=document.createElement('h1');

header.setAttribute('id','mid');
header.setAttribute('class','col-lg-12 col-md-12 col-lg-12 mt-5');
var h1Txt=document.createTextNode('Shutter Stock Todo App ');
h1.appendChild(h1Txt);
header.appendChild(h1);
mainDiv.appendChild(header);

// INPUT FIELD
var textInput=document.createElement('input');
textInput.setAttribute('type','text');
textInput.setAttribute('id','input');
textInput.setAttribute("placeholder","Enter Your Data Here...");
textInput.setAttribute('class','form-control');
header.appendChild(textInput);
mainDiv.appendChild(header);

var center=document.createElement('div');
center.setAttribute('class','row text-center');


//SUBMIT BUTTON
var submitBtn=document.createElement('button');

submitBtn.setAttribute('onClick','mySubmitBtn()');
submitBtn.setAttribute('class','btn  btn-success ');


var submitBtnTxt=document.createTextNode('Submit');
submitBtn.appendChild(submitBtnTxt);
header.appendChild(submitBtn);
mainDiv.appendChild(header);


//Remove BUTTON
var removeBtn=document.createElement('button');
removeBtn.setAttribute('class','btn btn-dark');
removeBtn.setAttribute('onClick','myAllRemoveBtn()');
var removeBtnTxt=document.createTextNode("REMOVE ALL");
removeBtn.appendChild(removeBtnTxt);
header.appendChild(removeBtn);
mainDiv.appendChild(header);


//list create
var list=document.createElement('ol');
list.setAttribute('id','list');


function mySubmitBtn() {
    var val= document.getElementById('input').value;
    console.log(val);
    document.getElementById('input').value='';
    var li=document.createElement('li');
    li.setAttribute('id','value');
    var listval=document.createTextNode(val);

   //var liTxt=document.createTextNode(val);

    var deleteLiBtn=document.createElement('button');
    deleteLiBtn.setAttribute("id","dltbtn");
    deleteLiBtn.setAttribute('class','btn  btn-danger');
    var deleteliBtnTxt=document.createTextNode('delete');
    deleteLiBtn.appendChild(deleteliBtnTxt);

    var editBtn=document.createElement('button');
    editBtn.setAttribute("id","edtbtn");
    editBtn.setAttribute('class','btn btn-info');
    var editbtnTxt=document.createTextNode("Edit");
    editBtn.appendChild(editbtnTxt);
    li.appendChild(listval);
    li.appendChild(deleteLiBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
   // header.appendChild(li)
    mainDiv.appendChild(list);

    deleteLiBtn.addEventListener('click',function(){

        this.parentNode.remove();
    })

editBtn.addEventListener('click',function(){
    var editinput=prompt('enter edit value ',val);
    if(editinput != val){
        listval.data='';
        listval=document.createTextNode(editinput);
        val=editinput;
        li.appendChild(listval);
        li.appendChild(deleteLiBtn);
        li.appendChild(editBtn);
    }})

 
}
function myAllRemoveBtn() {
    document.getElementById('list').innerHTML= ' ';
    
}