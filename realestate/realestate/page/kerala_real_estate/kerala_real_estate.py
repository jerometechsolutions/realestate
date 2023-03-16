import frappe

@frappe.whitelist()
def getNumberofAgents():
   TotalAgents= frappe.db.sql(""" select count(name) as agent_count from `tabAgents`""", as_dict=True)
   return TotalAgents[0].agent_count