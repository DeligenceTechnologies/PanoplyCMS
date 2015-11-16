Template.addArticles.rendered= function(){
  //CKEDITOR.replace( 'editor1' );
  setTimeout(show_editor,1000); 
    
}
Template.addArticles.events({
    'submit form': function(event){
        event.preventDefault();
        var form_data=($("form").serialize()).split('&');
        var flag=1;
        var index=0;
        var old_tags_obj=new Array();
        var new_tags=new Array();
        var editor_value = $('textarea').val();
        var title=$('#title').val();
        var alias = ($('#alias').val())?$('#alias').val():createAlias(title);
        var meta_keyword=$('#keyword').val();
        console.log(meta_keyword,'meta_keyword');
        var desc=$('#desc').val();
        var category=$("#myselect option:selected" ).val();
        /*console.log(editor_value,title,meta_keyword,desc);*/
        if(editor_value && alias && title && meta_keyword && desc){/*console.log('under if');*/
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
            
            if(new_tags.length){ /*console.log('under new tags',new_tags.length,'new_tags.length');*/
                var count=0;
                for(var i=0;i<new_tags.length;i++){
                    Meteor.call('add_tags',new_tags[i],function(err,data){
                        if(err){
                            console.log(err);
                        }else{
                            old_tags_obj.push(data);
                            count++;
                            if(count==new_tags.length){console.log(99,title,alias,category,meta_keyword,desc,editor_value,old_tags_obj);
                                Meteor.call('add_article',title,alias,category,meta_keyword,desc,editor_value,old_tags_obj,function(err,data){
                                    if(err){
                                         $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                                    }else{
                                        $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> Saved Article.</div>');
                                            $("form")[0].reset();
                                    }
                                });
                            }
                        }
                    });
                }
            }else{/* console.log('new_tags.length==0');*/
               
                Meteor.call('add_article',title,alias,category,meta_keyword,desc,editor_value,old_tags_obj,function(err,data){
                    if(err){
                         $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                    }else{
                        $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong>  Saved Article.</div>');
                        $("form")[0].reset();
                    }
                });   
            }
        }
    },
     'click #token':function(event){
        var length=tags.find({status:1,trash:0}).count();
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

     }
   

}); 


Template.addArticles.helpers({
  list_of_category: function () {
    
      return category.find({status: 1, trash: 0}).fetch();
    },
    list_of_articles: function () {
      return article.find({status: 1, trash: 0});
    },
    list_of_tags: function () {
      return tags.find();
    }
});
function show_editor(){
    CKEDITOR.replace( 'editor1' );  
}