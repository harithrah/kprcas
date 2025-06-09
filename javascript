console.log("hello world");
<html lang="en">
<head>
<meta character="utf-8"
<meta name ="viewpoint"content="width-device-width,initial-scale-1.0">
<tittle>document</tittle
</head>

<body>
  <hi id="message">hello world</h1>
  <button onclick="changetext()">click me</button>
  <input type="text" id="name"placeholder="enter the name">
  <button onclick="add name"()>add/button>
  <ol id="display">
  <ol id="display">
   <li>raja</li>
   </ol>
 <script>
  function addname(){
    const name = document.getelementbyId('name').value;
    const li =document.createelement('li')
    li.textcontent=name
    document.getelementbyId('display').append(li)
  }
   function changetext(){
    const elem= document.getelementbyId('message');
   }
   

