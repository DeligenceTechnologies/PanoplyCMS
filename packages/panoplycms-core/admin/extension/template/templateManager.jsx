TemplateManger = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    const categoriesSubscription = Meteor.subscribe('Categories')
    return{
      registeredPackages: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
    }
  },
  getInitialState(){
    return{
      trashListShow:false
    }
  },
  setDefaultTemp(name,active){
    let modifedArray=this.data.registeredPackages.templates;
    let i=0;
    _.each(modifedArray, (t) => {
      if(t.name == name){ 
        modifedArray[i].active=true;
      }else{ 
        modifedArray[i].active=false;
      }
      i++;
    })
    Meteor.call('setDefaultTempalteStatus',modifedArray,function(err,data){
    })
  },
  render() {
    that=this;
    nodata='';
    return (<div>
             <div className="panel panel-black col-md-10">
             <Heading  data={'Template Manger'} />
              <div className="panel-heading">
              </div>
              <div className="panel-body"> 
                <div className="table-responsive" >
                  <table className="table  table-bordered">
                    <thead>
                      <tr>
                        <th>Template Name</th>
                        <th>Default</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.data.registeredPackages.templates.map(function(tem){
                      return  <TemplateName key={tem.name} {...tem} func={that.setDefaultTemp}/> 
                      })
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>     
          </div>
    );
  }
});

TemplateName = tem => {
  if(tem.active){
    style={color:'#2574ab',cursor:'pointer'}
    classname="fa fa-star fa-lg"
  }else{
    classname='fa fa-star-o fa-lg'
    style={cursor:'pointer'}
  }
  return <tr>
      <td>{tem.name}</td>
      <td id={tem.name} onClick={() => {tem.func(tem.name,tem.active)}} >
      <span   style={style} className={classname} ></span></td>
    </tr>
}

/*db.registeredPackages.update({name:'template'},{$push:{templates:{
      "name" : "Default Template",
      "active" : true,
      "layout" : "DefaultTemplate",
      "categoryView" : "DefaultCategory",
      "articleView" : "DefaultArticle",
      position:['top','left']
    }
  }
})*/