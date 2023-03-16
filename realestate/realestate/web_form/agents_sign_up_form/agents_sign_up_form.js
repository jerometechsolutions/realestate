frappe.ready(function() {
	// bind events here
	frappe.web_form.after_save = () => {

AgentData=frappe.web_form.get_values();


frappe.call({
    method: "frappe.core.doctype.user.user.createUserFromWebform",
	                                                     
    args: {
        
        dict: {"first_name": AgentData.first_name, "email": AgentData.email}
        
    },
    callback: function(r, rt) {
    if(r.message) {
       frappe.msgprint(r.message)
    }
}

	})
}
})
