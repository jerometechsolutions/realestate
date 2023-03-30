import frappe
@frappe.whitelist()
def getTotalPropertyCountByAgent():
   
    #Get logged in agent name
    AgentUserName=frappe.session.user
    print(AgentUserName)
    
    #count the propery with agent name
    AgentPropertyCount=frappe.db.count('Property', {'owner': AgentUserName})
    return AgentPropertyCount; 


