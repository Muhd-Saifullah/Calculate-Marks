const calculateformEl=document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks=(event)=>{
  
    const maxMarks=400;
    event.preventDefault();
    const formData=new FormData(calculateformEl);
    const data={};
    formData.forEach((value,key)=>{
data[key]= +value;
    });
   

const TotalMarks=data.maths+data.science+data.urdu+data.english;
const percentage=Math.round(TotalMarks/maxMarks)*100;



resultEl.innerText=`You have got ${TotalMarks} marks out of ${maxMarks} and your percentage ${percentage}%`;


};