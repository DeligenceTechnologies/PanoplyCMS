Template.listArticles.events({
    'click #delete_article':function(event,template){
        event.preventDefault();
        if (confirm("Do You Want To Delete!") == true) {
            Meteor.call('delete_article',this._id);
        } else {
            
        }    
    },

    'click #edit_article':function(event){
        event.preventDefault();
        Router.go('edit_articles', {_id:this._id });
        /*
        var value_of_tags=new Array();
        var count=0;
        $("#editable").attr("class",this._id );
        $('#non-editable').hide();
        $('#t').val(this.title);
        $('#a').val(this.alias);
        $('#key').val(this.metaKeyword);
        $('#des').val(this.metaDesc);
        $("#editable").attr("class",this._id );
        $( "#myselect_type option:selected" ).text(this.category);
        $('#editor').html(this.articleData);
        $('#cke_1_contents').html(this.articleData);
        var data=tags.find().fetch();
        var length=tags.find().count();
        
        for(var i=0;i<(this.tags).length;i++){
            for(var j=0;j<length;j++){
                if(this.tags[i]==data[j]._id){
                    count++;
                    value_of_tags.push(data[j].tag);
                    $('#tokenfield-typeahead').val(value_of_tags);
                }

            }            
        }
        */
        
     },
     'click #token':function(event){
        var length=tags.find().count();
        var data=tags.find().fetch();
        var local1 = new Array();
        for(i=0;i<length; i++){
            local1.push({'value':data[i].tag});
        }
        
        var engine = new Bloodhound({
        local: local1,
        datumTokenizer: function(d) {
          return Bloodhound.tokenizers.whitespace(d.value);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace
      });

      engine.initialize();

      $('#tokenfield-typeahead').tokenfield({
        typeahead: [null, { source: engine.ttAdapter() }]
      });

     },
     'click #update':function(event){
        event.preventDefault();
        var flag=1;
        var index=0;
        var index1=0;
        var old_tags_obj=new Array();
        var new_tags=new Array();
        var name=$('#t').val();
        var alias=$('#a').val();
        var meta_keyword=$('#key').val();
        var desc=$('#des').val();
        var category=$( "#myselect_type option:selected" ).text();
        var editor_value= $('#editor').val();
        var length=tags.find().count();
        var data=tags.find().fetch();
        var tag=$('#tokenfield-typeahead').val();

        if(name && alias && meta_keyword && desc && category && editor_value ){
            var tag=tag.split(',');
            var length=tags.find().count();
            var data=tags.find().fetch();
            for(var i=0;i<tag.length;i++){
                for(var j=0;j<length;j++){
                    if(data[j].tag==tag[i]){
                        old_tags_obj[index1]=data[j]._id;
                        flag=0;
                        index1++;
                    }
        
                }
                if(flag){
                  new_tags[index]=tag[i];
                  index++;  
                }
                flag=1;                
            }
            
            if(new_tags){
                var count=0;
                for(var i=0;i<new_tags.length;i++){
                    Meteor.call('add_tags',new_tags[i],function(err,data){
                        if(err){
                            console.log(err);
                        }else{
                            old_tags_obj.push(data);
                            count++;
                            if(count==new_tags.length){
                                //Meteor.call('add_article',menu,alias,category,meta_keyword,desc,editor_value,old_tags_obj);
                                Meteor.call('update_article',$("#editable").attr("class"),name,alias,category,meta_keyword,desc,editor_value,old_tags_obj);   

                            }
                        }
                    });                    
                }                

            }else{
                Meteor.call('update_article',$("#editable").attr("class"),name,alias,category,meta_keyword,desc,editor_value,old_tags_obj);   
            }

            if(name==''|| alias=='' ){
              alert('please fill the value');
            }else{
                Meteor.call('update_article',$("#editable").attr("class"),name,alias,category,meta_keyword,desc,editor_value,old_tags_obj);
                alert('Succesfully updated');
                Router.go('/admin/articles');
                $('#editable').hide();
                $('#non-editable').show();
            }
        }else{

        }
        
    },
    'click #cancel':function(event){
        if (confirm("Do You Want To Cancel!") == true) {
            $('#editable').hide();
        $('#non-editable').show();
        } else {
             
        }
    }          
});

Template.listArticles.helpers({
  list_of_category: function () {
      return category.find({status:1,trash:0});
    },
    list_of_articles: function () {
        
      return articles.find({status:1,trash:0}).fetch();
    }
});

UI.registerHelper('categoryName', function(id){
    var data=category.find().fetch();
    var length=category.find().count();
    for(var i=0;i<length;i++){
            if(data[i]._id==id){
                return data[i].name; 
                 break;     
        }

    }
});