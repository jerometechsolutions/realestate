

class MyFormData extends FormData {


    getDataAsJSONbyFromID(myform) {


        let data = $(myform).serializeArray().reduce(function (obj, item) {


            obj[item.name] = item.value
            return obj;


        }, {});


        return data


    }


}




$('#myform').submit(e => {
    e.preventDefault();


    MyFormDataObj = new MyFormData();
    let Formdata = MyFormDataObj.getDataAsJSONbyFromID('#myform');
     





    //push
    if (Formdata) {
        let res = pushFormData(Formdata)
    }




});


function pushFormData(Formdata) {
    fetch('http://realestate.jerometechsolutions.com:8001/api/resource/Property', {


        headers: {
            'Accept': 'application/json',
            'X-Frappe-CSRF-Token': frappe.csrf_token,
            'Authorization': 'token fdb091ef847fa4c:6649d1596819a50'




        },


        method: 'POST',
        body: JSON.stringify(Formdata)
    }).then((response) => response.json())
        .then((data) => {
            propertyName = data.data.name


        })




    let filedata = $(file)[0].files[0]




    let myFormDataforFile = new MyFormData()
    if (filedata) {
        myFormDataforFile.append('file', filedata)


    }


    fetch('http://realestate.jerometechsolutions.com:8001/api/method/upload_file', {




        headers: {
            'Accept': 'application/json',
            'X-Frappe-CSRF-Token': frappe.csrf_token,
            'Authorization': 'token fdb091ef847fa4c:6649d1596819a50'






        },


        method: 'POST',
        body: myFormDataforFile
    }).then((response) => {
        console.log("This is respose for proeprty upload")
        console.log(response)
        response.json()
        .then(message => {
             console.log(message)
            if (message) {




                fileNameofParent = message.message.name
                console.log(fileNameofParent)


                FileUpdate = {
                    'attached_to_doctype': 'Property',
                    'attached_to_name': propertyName,
                    'folder': 'Home/Attachments'
                }




                console.log(JSON.stringify(FileUpdate))
                fetch(`http://realestate.jerometechsolutions.com:8001/api/resource/File/${fileNameofParent}`, {




                    headers: {
                        'Accept': 'application/json',
                        'X-Frappe-CSRF-Token': frappe.csrf_token,
                        'Authorization': 'token fdb091ef847fa4c:6649d1596819a50'






                    },


                    method: 'PUT',
                    body: JSON.stringify(FileUpdate)
                })


            }


        })


    })

}



