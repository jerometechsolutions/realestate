import frappe

@frappe.whitelist()
def get_total_no_properties():
     totalRec=frappe.db.sql("""select count(name) as count from `tabAgents`""", as_dict=True);
     return totalRec[0].count;

 
    
    