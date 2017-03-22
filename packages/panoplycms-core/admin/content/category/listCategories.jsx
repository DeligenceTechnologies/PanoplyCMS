ListCategories = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    const categoriesSubscription = Meteor.subscribe('Categories')
    return{
      pageLoading:! categoriesSubscription.ready(),
      Categories: PanoplyCMSCollections.Categories.find({trash:false}).fetch(),
      resultOfTrash: PanoplyCMSCollections.Categories.find({trash:true}).fetch(),
      resultOfArticles: PanoplyCMSCollections.Articles.find({trash:false},{category:1}).fetch()
    }
  },
  submitForm(event){
  	event.preventDefault();
    var name = React.findDOMNode(this.refs.sitename).value.trim();
  },
  showCategories(){
    if($('#display').val()=='trash'){
      this.setState({trashListShow:true})
    }else{
      this.setState({trashListShow:false})
    }
  },
  getInitialState(){
    return{
      trashListShow:false
    }
  },
  render() {
    that=this;
    nodata='';
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
    if((this.data.Categories).length==0  && this.state.trashListShow==false){
      nodata=<NotFoundComp/>
    }else if((this.data.resultOfTrash).length==0 && this.state.trashListShow==true){
      nodata=<NotFoundComp/>
    }else{
      nodata='';
    }
    return (
      <div>
        <div className="panel panel-black">
          <Heading data={i18n('ADMIN_COTNENTS_CATEGORY_CATEGORY')} />
          <div className="panel-heading">
            <a href={FlowRouter.path('addCategory')} className="btn btn-success btn-ico">
              <i className="fa fa-plus-circle fa-lg"></i>&nbsp;
              {i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY')}
            </a>
            <div className="pull-right">
              Display: 
              <select id="display" onChange={this.showCategories}>
                <option value="active">Active</option>
                <option value="trash">Trash</option>
              </select>
            </div>
          </div>
          <div className="panel-body"> 
            <div className="table-responsive" >
              <table className="table  table-bordered">
                <thead>
                  <tr>
                    <th>{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.trashListShow?
                      this.data.resultOfTrash.map(function(cat){
                        return <CategoriesItem key={cat._id} data={cat} stateVal={that.state.trashListShow} />
                      })
                    :this.data.Categories.map(function(cat){
                        return <CategoriesItem key={cat._id} data={cat} stateVal={that.state.trashListShow} />
                      })
                  }   
                </tbody>
              </table>
              {nodata}
            </div>
          </div>
          {
            this.data.Categories.map(function(cat){
              return  <ModalOfCat key={cat._id} resultOfArticles={that.data.resultOfArticles} data={cat} stateVal={that.state.trashListShow} /> 
            })
          }

          {
            this.data.resultOfTrash.map(function(cat){
              return  <ModalOfRestoreCat key={cat._id} data={cat}/> 
            })
          }

          {
            this.data.resultOfTrash.map(function(cat){
              return  <ModalOfCat key={cat._id} data={cat} resultOfArticles={that.data.resultOfArticles} stateVal={that.state.trashListShow} /> 
            })
          }
        </div>   
        <ArticlesExistPopup />
      </div>
    );
  }
});

var CategoriesItem = React.createClass({
  deleteCategory(){
    Meteor.call('delete_category',this.props.data._id,function(err,data){
      // console.log(err,data)
    });
  },
  editCategory(){
    Meteor.call('editCategory',this.props.data._id,function(err,data){
      // console.log(err,data)
    });
  },
  render(){
    return(
      <tr>
        <td>
          <a href={FlowRouter.path('editCategory',{_id:this.props.data._id})} >
            <large> 
              {this.props.data.title}
            </large>
            <small> 
              (<em>Alias:{this.props.data.alias}</em> )
            </small> 
          </a>
        </td>
        <td>
          <div className="delete_btn" data-toggle="modal" data-target={"#"+this.props.data._id} style={{display:'inline-block'}} >
            {
              this.props.stateVal ? <i style={{color:'red'}} title="Delete" className="fa fa-times" aria-hidden="true"></i> : <i style={{color:"red"}} className="fa fa-trash-o"  title="Trash" ></i> 
            }
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {
            this.props.stateVal? <i data-toggle="modal" data-target={'#'+this.props.data._id+'restoreCategory'} className="fa fa-undo" aria-hidden="true" onClick={this.restoreArticle} title="Restore" ></i> : <a href={FlowRouter.path('editCategory',{_id:this.props.data._id})}> <i style={{color:"#142849"}} className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit" ></i> </a> 
          }
        </td>
      </tr>    
    )
  }
})

ModalOfCat=React.createClass({
  deleteCategory(){
    if(this.props.stateVal){
      Meteor.call('delete_category_parma',this.props.data._id,function(err,data){
        // console.log(err,'data')
      });
    }else{
      let isExistArticle = _.findWhere(this.props.resultOfArticles, {category: this.props.data._id}) || []
      isExistArticle=_.isEmpty(isExistArticle);
      if(isExistArticle){
        Meteor.call('delete_category',this.props.data._id,function(err,data){
          // console.log(err,data)
        });
      }else{
       $('#articlExist.modal').modal()
      }
    }
  },
  render:function(){
    return(
      <div id={this.props.data._id} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Do you really want to remove ?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.deleteCategory} data-dismiss="modal">YES</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
            </div>
          </div>
        </div>
      </div>
    )     
  }
})

ModalOfRestoreCat=React.createClass({
  restoreCategory(){
    Meteor.call('restore_category',this.props.data._id,function(err,data){
      if(err){
        console.log(err)
      }else{
        // console.log(data)
      }
    });
  },
  render:function(){
    return(
      <div id={this.props.data._id+'restoreCategory'} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Do you really want to restore ?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.restoreCategory} data-dismiss="modal">YES</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
            </div>
          </div>
        </div>
      </div>
    )     
  }
})

ArticlesExistPopup = (m) => {
  return(
    <div id="articlExist" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">You can not remove this category because articles exist of that category.Please remove the article first after you can delete category.</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  )
}