import  {Heading, AlertMessageOfError, AlertMessage} from 'meteor/deligencetechnologies:panoplycms-core';

EditMenuModule = React.createClass({
	componentWillUnmount(){
	},
	getInitialState(){
		return {
			valid:'',
			 successMsg:false,
      errorMsg:false,
		}	
	},
	mixins: [ReactMeteorData],
	getMeteorData() {
		
		return {
			menuResults:PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
			templateRegister:PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'}),
      menuModuleModuleData:PanoplyCMSCollections.Modules.findOne({_id:this.props._id})
		};
	},
	submitData(event){
		event.preventDefault()
		var menuItems = [];
		$.each($("input[name='menucheck']:checked"), function(){            
    	menuItems.push($(this).val());
		});

		if(this.state.valid.form()){

			let title=ReactDOM.findDOMNode(this.refs.title).value.trim();
			let position=$('#position').val()
			let menu=ReactDOM.findDOMNode(this.refs.selectMenu).value.trim()
			let showTitle=$('input[name="options"]:checked').val()
			let allPage=$('input.allPage').prop("checked")
			showTitle = showTitle=='yes'?true:typeof showTitle=='undefined'?true:false

			obj = { 
			  name: title,
			  type:'menumodule',
			  position:position,
			  showTitle:showTitle,
			  menuItems:menuItems,
			  allPages:allPage,
			  moduleData:{
			  	menuItem:menu
			  }
			}
      select={
        _id:this.props._id
      }

			Meteor.call('editModule',select,obj,(error,data)=>{
				console.log(error,data,'error,data')
				if(error){
					this.setState({errorMsg:error})
					console.log(error,'error')
				}else{
					this.setState({successMsg:true});
					
				}
			})
		}
				
	},
  componentDidMount(){

   	let validObj=$("#menuModule").validate({
         rules: {
             title: {
                 required: true
             },
             position: {
              required: true
            },
            selectMenu: { 
              required: true
            }
          
        },
        submitHandler: function (form) { // for demo
              return false;
          },
         errorElement : 'div',
         errorPlacement: function(error, element) {
           var placement = $(element).data('error');
           if (placement) {
             $(placement).append(error)
           } else {
             error.insertAfter(element);
           }
         }
      });
    this.setState({valid:validObj})  
    $('.options').toggleClass('active');
    $('.option').button();
  },
  resetSuccessMsg(){
    this.setState({'successMsg':false})
    this.setState({'errorMsg':false})
  },
	render(){
		c=0; console.log(this.data.menuModuleModuleData, " Module Data")
		if(this.state.successMsg){
       msg=<AlertMessage data={'menu module updated.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg='';
    }
		return (
			 <div className="col-md-10 content" onClick={this.resetSuccessMsg} >
       <Heading  data={'Edit Menu Module'} />
       {msg}
        <div className="panel-body">
        <div id="notification"></div>
          <form id="menuModule" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
            <div className = "form-group">
              <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
              <div className = "col-sm-10">
                <input type = "text" name="title" ref="title"  className = "form-control"  placeholder = "Enter title" defaultValue={this.data.menuModuleModuleData?this.data.menuModuleModuleData.name:''} required/>
              </div>
            </div>
             <Position key={this.data.templateRegister._id} data={this.data.templateRegister} value={this.data.menuModuleModuleData?this.data.menuModuleModuleData.position:''}/>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">Select Menu</label>
              <div className = "col-sm-10">
                <select defaultValue='select' defaultValue={this.data.menuModuleModuleData?this.data.menuModuleModuleData.moduleData.menuItem:''} name="selectMenu" ref="selectMenu" className="selectpicker form-control " data-style="btn-primary" >
                  <option value="">--select--</option>
                   {this.data.menuResults.map(function(result){
                      return  <option key={result._id} value={result._id}>{result.title}</option>
                      })
                    }   
                </select>
              </div>
            </div>
            {/*<div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
              <div className = "col-sm-10">
                <div className="summernote">

                  <textarea ref="editor1" name="editor" id="article" />
                </div>
              </div>
            </div>*/}
            <div className="form-group">
               <label className="col-sm-2 control-label">Show Title</label>
               <div className="col-sm-10">
                <div className="btn-group" data-toggle="buttons">
                 <label className={this.data.menuModuleModuleData.showTitle?'active option btn btn-primary':'option btn btn-primary'} ref="option" >
                    <input type="radio" className="rad" name="options" ref="options" id="option2"  value="yes"/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
                  </label>
                  <label className={this.data.menuModuleModuleData.showTitle?'option btn btn-primary':'active option btn btn-primary'} ref="option" >
                    <input type="radio" className="rad" ref="options" name="options" id="option3" value="no" /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
                  </label>
                </div>
               </div>
            </div>  
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">All Page</label>
              <div className = "col-sm-10">
                <input type="checkbox" defaultChecked={this.data.menuModuleModuleData.allPages} className="allPage" ref="desc" name="allPage" />
              </div>
            </div>
            <MenuItemType value={this.data.menuModuleModuleData.menuItems?this.data.menuModuleModuleData.menuItems:[]}/>
            <div className="form-group">
              <div className = "col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary " >UPDATE</button>
                &nbsp;&nbsp;
                <a className="btn btn-danger" href={FlowRouter.path('modulesManager')}>CANCEL</a>
              </div>
            </div> 
          </form>
        </div>

      </div>
		)
	}
});

MenuList = React.createClass({
	propTypes:{
		menu: React.PropTypes.object.isRequired,
	},
	render(){
		// console.log(this.props.menu._id,'Skadoooosh!!')
		return (
			<option value={this.props.menu._id}>{this.props.menu.title}</option>
		);
	}
});

export default EditMenuModule;