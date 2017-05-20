// class Pagination extends Component {
// 	constructor(props) {
// 		super(props);
// 		Session.setDefault('currentPage', 1)
// 	}
// 	click(page){
// 		let elem = $('#link-'+page).parents('#pagination-'+page);
// 		Session.set('currentPage', elem[0].innerText)
// 	}
// 	render(){
// 		let length = Math.ceil ( this.props.totalRecord/this.props.pageLimit );
// 		let currentPage = Session.get('currentPage');
// 		let showPages = [];

// 		_.range(length).forEach((page)=>{

// 			if((page+1) == currentPage){

// 				if(currentPage<=length && length<4){
// 				  let initial = 1;
// 				  while(initial<=length){
// 				    showPages.push(initial++);
// 				  }
// 				}
// 				else if(currentPage>=length && length>4){
// 				  showPages.push(1,2,3,"...",length); 
// 				}
// 				else if(currentPage==length){
// 				  showPages.push(1,2,"...",length-1,length); 
// 				}
// 				else if((currentPage+1)==length){
// 				  showPages.push(1,2,"...",length-2,length-1,length); 
// 				}
// 				else if((currentPage+2)==length){
// 				  showPages.push(1,2,"...",length-3,length-2,length-1,length); 
// 				}
// 				else{
// 				  showPages.push(1,"...",currentPage-1,currentPage,currentPage+1,"...",length);
// 				}
// 			}
// 		});

// 		console.log("showPages ----->>>***", showPages)
// 		return (
// 			<div className="container">
// 				<ul className="pagination">
					
// 					<li className="waves-effect"><a className="decrease-page"><i className="glyphicon glyphicon-chevron-left"></i></a></li>

// 					{
// 						_.map(showPages, (page, index)=>{
// 							return(
// 								<li key={index} id={"pagination-"+page} onClick={this.click.bind(this, page)}><a href="" id={"link-"+page}>{page}</a></li>
// 							);
// 						})
// 					}

// 				  <li className="waves-effect"><a className="increase-page"><i className="glyphicon glyphicon-chevron-right"></i></a></li>
// 				</ul>
// 			</div>
// 		);
// 	}
// }