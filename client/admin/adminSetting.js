Template.adminSetting.events({
    'submit form': function(event){
        event.preventDefault();
        var project = $('[name=project_name]').val();
        if(project){
        	 Meteor.call('update_project_name',project,$('.form-control').attr('id'));
        	 $('[name=project_name]').val('');
        }else{
        	bootbox.alert("Please fill all the field.", function() {
                console.log("Alert Callback");
            });
        }
    }
   
});

Template.adminSetting.helpers({
     project_name:function(){
        return settings.find().fetch();
    }  
});    
