  // predefined file types for validation
  var mime_types = [ 'image/jpeg', 'image/png' ];
    
  var submit_button = document.querySelector('#submit_button');
      
  submit_button.addEventListener('click', function() {
      
      // check if user has selected file OR not
      var selected_file = document.querySelector('#upload_file');
      if(selected_file.files.length == 0) {
          alert('Please select file to upload.');
          return;
      }
  
      // Get the file uploaded
      var file = selected_file.files[0];
      
      // validate MIME type
      if(mime_types.indexOf(file.type) == -1) {
          alert('Please select jpeg or png files only.');
          return;
      }
  
      // max 5 MB size allowed
      if(file.size > 5*1024*1024) {
          alert('Please select file having less than 5MB size.');
          return;
      }
      alert("I am logged in1")
      let theUrl="https://jerometechsolutions.com/api/method/frappe.auth.get_logged_user"
      if(httpGet(theUrl))
      {
      
  alert("I am logged in3")
     /*
      var form_data = new FormData();
  
      form_data.append('file', document.querySelector('#upload_file').files[0]);
      
      form_data.append('is_private', +file.private);
      if (file.file_url) {
        form_data.append('file_url', file.file_url);
    }
    form_data.append('doctype', 'File');

      var request = new XMLHttpRequest();
      request.open('post', 'https://jerometechsolutions.com/api/method/upload_file'); 
      request.setRequestHeader('Accept', 'application/json');
	  request.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);
      
      request.setRequestHeader('Authorization', 'token 0e2ff3810d2fe87:95897a841d40f40');
      // send POST request to server
      request.send(form_data);
      
      */

      form_data=new FormData()
    form_data.append('file_url', 'https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg')
    form_data.append('doctype','Employee')
    form_data.append('docname', 'HR-EMP-00001')
    fetch('https://jerometechsolutions.com/api/method/upload_file',{
      
      headers: {
        'X-Frappe-CSRF-Token' :frappe.csrf_token,
        'Authorization': 'token 0e2ff3810d2fe87:95897a841d40f40'
        

      },
 
      method:'POST',
      body: form_data
      }).then(res=>res.json())

}    });

  function httpGet(theUrl)
{
 var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", theUrl, false ); // false for synchronous request

xmlHttp.setRequestHeader('Authorization', 'token 0e2ff3810d2fe87:95897a841d40f40');
xmlHttp.send( null );
alert(xmlHttp.responseText)
return xmlHttp.responseText;
  
}
