// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmy0_sBDcp2Z-NKIloc-5L39X--4C8f_c",
  authDomain: "my-website-3202e.firebaseapp.com",
  databaseURL: "https://my-website-3202e-default-rtdb.firebaseio.com",
  projectId: "my-website-3202e",
  storageBucket: "my-website-3202e.appspot.com",
  messagingSenderId: "333672861373",
  appId: "1:333672861373:web:0d3f01eaf4a4b405a371d4",
  measurementId: "G-KH56CQ1Q5V"
};
firebase.initializeApp(firebaseConfig),
userref=firebase.database().ref("userinput");
document.getElementById("testForm").addEventListener("submit",submitform);
function submitform(e){
     e.preventDefault(),
     f=document.getElementById("uname").value;
     pw=document.getElementById("pw").value;
em=document.getElementById("email").value;

m=document.getElementById("mobile").value;
url=document.getElementById("url").value;
dob=document.getElementById("dob").value;
jop=document.getElementById("job").value;
ti=document.getElementById("time").value;
add=document.getElementById("adrs").value;
ge=document.querySelector("input[type=radio]:checked").value;
sy=getsym();
send(f,pw,em,m,url,dob,jop,ti,ge,sy,add);
alert("submitted succesfully");

}
function getsym(){
     a=document.querySelectorAll("input[type=checkbox]:checked");
     values=[];
     a.forEach((data)=>{values.push(data.value)});
     return values;
}
function send(f,pw,em,m,url,dob,jop,ti,ge,sy, add)
{
     iref=userref.push();
     iref.set({name:f,email:em,password:pw,mobile:m,url:url,dob:dob,profession:jop,time:ti,hobbies:sy,gender:ge,address:add});
}
