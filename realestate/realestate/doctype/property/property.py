# Copyright (c) 2023, Romeo Antony and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator
class Property(WebsiteGenerator):
    def on_update(self):      
        #self.UpdateOwnerofProperty()
        pass
       
        
    def UpdateOwnerofProperty(self):
        AgentName= self.agent
        
        #pull agent record of current agent of propery
        AgentDoc = frappe.get_doc('Agents', AgentName)
        OwnerName=AgentDoc.email  
        
        # check agent email and current logged in user same or not
        if(OwnerName!=(frappe.session.user)): 
            
            print(frappe.session.user)
            print(OwnerName)
           
            # if not same both agent and current logged in user, set agent email as owner for property
            self.db_set('owner', OwnerName)
            
            self.updateOwnershipAgentFiles(OwnerName)            
    
    def updateOwnershipAgentFiles(self, OwnerName):
        PropertyName=self.name
        
        AgentFileList=frappe.db.get_list('File',
                           filters={
                               'attached_to_doctype': 'property',
                               'attached_to_name': PropertyName
                               },
                                        
                           as_list=False)
        #print(AgentFileList)
       
        #update  each owner for each file record with new agent email
        if AgentFileList:
            
            for AgentFile in AgentFileList:
                 AgentFileDoc = frappe.get_doc('File',  AgentFile['name'])
                 AgentFileDoc.db_set('owner', OwnerName)
                 
                
            
        
            
                
    
    

        
    	
     
