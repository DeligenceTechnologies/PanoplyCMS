Template.editArticles.rendered= function(){
  //CKEDITOR.replace( 'editor1' );
  setTimeout(show_editor,1000); 
    
}

Template.editArticles.helpers({
  selected_article: function () {
        var id= Router.current().params._id;
        return articles.find(id).fetch();
    },
    list_of_category: function () {
      return category.find({status: 1, trash: 0});
    },
    tags_list:function(){

    }

     
});

Template.editArticles.events({
    'click #token':function(event){
        var length=tags.find().count();
        var data=tags.find().fetch();
        var local1 = new Array();
        console.log(data,length);
        for(i=0;i<length; i++){
            
            local1.push({'value':data[i].tag});
        }
        
       //var local1=[{value: 'red'}, {value: 'blue'}, {value: 'green'} , {value: 'yellow'}, {value: 'violet'}, {value: 'brown'}, {value: 'purple'}, {value: 'black'}, {value: 'white'}];
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
     'click #e':function(event){
        CKEDITOR.replace( 'editor1' );
     },
     'submit form': function(event){
       /* event.preventDefault();
        var form_data=($("form").serialize()).split('&');
        console.log('data of form',form_data);*/
        event.preventDefault();
        var form_data=($("form").serialize()).split('&');
        var flag=1;
        var index=0;
        var old_tags_obj=new Array();
        var new_tags=new Array();
        var editor_value = $('textarea').val();
        var title=$("#title").val();
        var alias = ($('#alias').val())?$('#alias').val():createAlias(title);
        var meta_keyword=$("#keyword").val();
        var desc=$("#desc").val();
        var category=$("#myselect option:selected" ).text();
        if(editor_value && alias && title && meta_keyword && desc && desc ){
            var length=tags.find().count();
            var data=tags.find().fetch();
            var tag=$('#tokenfield-typeahead').val();
            var tag=tag.split(',');
            var length=tags.find().count();
            var data=tags.find().fetch();
            for(var i=0;i<tag.length;i++){
                for(var j=0;j<length;j++){
                    if(data[j].tag==tag[i]){
                        old_tags_obj[j]=data[j]._id;
                        flag=0;
                    }
                }
                if(flag){
                  new_tags[index]=tag[i];
                  index++;  
                }
                flag=1;
            }
            
            if(new_tags[0]){ console.log(new_tags,'new tags');
                var count=0;
                for(var i=0;i<new_tags.length;i++){
                    Meteor.call('add_tags',new_tags[i],function(err,data){
                        if(err){
                            console.log(err);
                        }else{
            
                            old_tags_obj.push(data);
                            count++;
                           
                            if(count==new_tags.length){ 
                               Meteor.call('update_article',Router.current().params._id,title,alias,category,meta_keyword,desc,editor_value,old_tags_obj,function(err){
                                    if(!err){console.log(3);
                                        $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Success!</strong> Article Updated Succesfully.</div>');
                                            
                                    }else{console.log(4);
                                        $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                                    }
                               });
                            }
                        }
                    });
                    
                }
               
                

            }else{ 
               Meteor.call('update_article',Router.current().params._id,title,alias,category,meta_keyword,desc,editor_value,old_tags_obj,function(err){
                    if(!err){ console.log(1,$("#notification"));
                        $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Success!</strong> Article Updated Succesfully.</div>');
                        //Router.go('articles');
                    }else{
                                        $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                                    }

                    }
               );  
            }
               
        }else{
        }
    }
});

UI.registerHelper('create', function(tag){
    var count=0;
    var value_of_tags=new Array();
    var data=tags.find().fetch();
    var length=tags.find().count();
    for(var i=0;i<tag.length;i++){
        for(var j=0;j<length;j++){ 
            if(data[j]._id==tag[i]){
                value_of_tags.push(data[j].tag); 
                count++; 
                 break; 
            }
        }

    }
    if(count==tag.length){
        
        $('#tokenfield-typeahead').val(value_of_tags);
        return value_of_tags;
    }
});
function show_editor(){
  CKEDITOR.replace( 'editor1' );  
}