function Count() {
    let FileField = document.getElementById("fileName");
    let file = FileField.files[0];  // Ensure you access the file after a click

    if (file) {
        console.log(file); // Log file details
       let reader= new FileReader();
       reader.readAsText(file);
       reader.onload = function (e) {
     
        let fileContent = e.target.result;

        //lines counter
        const lines = fileContent.split('\n').length;
        document.getElementById("Lines").innerHTML=`Lines: ${lines}`;

        //Words Cunter
        const words = fileContent.match(/\S+/g) ? fileContent.match(/\S+/g).length : 0;
        document.getElementById("Words").innerHTML=`Words: ${words}`;


        //Character counter
        document.getElementById("Characters").innerHTML=`Characters: ${fileContent.length}`; 
     };
        // Proceed with reading the file contents and performing the word count
    } else {
        console.error("No file selected."); // Log error if no file is selected
    }
}

export default Count;
