Template.listArticles.rendered= function(){
     setTimeout(activeli,1000);
}
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
                                Meteor.call('update_article',$("#editable").attr("class"),name,alias,category,meta_keyword,desc,editor_value,old_tags_obj);   

                            }
                        }
                    });                    
                }                

            }else{
                Meteor.call('update_article',$("#editable").attr("class"),name,alias,category,meta_keyword,desc,editor_value,old_tags_obj);   
            }

            if(name==''|| alias=='' ){
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
    'click .panel-footer>ul.pagination li':function(event){
        event.preventDefault();
        $('.panel-footer>ul.pagination li').removeClass('active');
        $('#'+event.currentTarget.id).addClass('active');
        Router.go('articlesPage', { page:parseInt(event.currentTarget.id)});
    }          
});

Template.listArticles.helpers({
    list_of_category: function () {
      return category.find({status:1,trash:0});
    },
    list_of_articles: function () {
        length= Router.current().url.split('/').length;
        if(Router.current().url.split('/')[length-1]!=undefined){
            var x=Router.current().url.split('/')[length-1];
            var x=(x-1)*10;
            return articles.find({status:1,trash:0},{skip:x,limit:10}).fetch();
        }else{
             return articles.find({status:1,trash:0},{skip:0,limit:10}).fetch();
        }
        
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

function activeli(){ 
  length= Router.current().url.split('/').length;
  page = Router.current().url.split('/')[length-1];
  $('#'+Router.current().url.split('/')[length-1]).addClass('active');
  $('[data-toggle="tooltip"]').tooltip();
}

UI.registerHelper('paginationStyleArticles', function(){  
  var total=articles.find({status:1,trash:0}).count()/10;
  var html='';
  if(total<10 && total>1){ 
    for(var i=1;i<=Math.ceil(total);i++){
        html=html+"<li id="+i+"><a href='#' >"+i+"</a></li>";
    }
   return Spacebars.SafeString(html);
  }else{
     return Spacebars.SafeString(html);
  }
});
