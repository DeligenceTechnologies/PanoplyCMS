DefaultTemplate = React.createClass({
	mixins:[ReactMeteorData],
		getMeteorData(){
		return {
			result: PanoplyCMSCollections.Sites.findOne()
		};
	},
	componentDidMount: function() {
		document.title = this.data.result.name;
	},
	componentDidUpdate: function() {
		document.title = this.data.result.name;
	},
	render() {
		return (
			<div>
				<FrontHeader module={this.props.top} />
				<div className="blog-header">
					<div className="container">
						<Logo data={this.data.result} />
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-8 blog-main">
							{this.props.content}
						</div>
						{/*<!-- /.blog-main -->*/}
						<div className="col-sm-3 col-sm-offset-1 blog-sidebar">
							<SidePanel module={this.props.sidebar} />
						</div>
						{/*<!-- /.blog-sidebar -->*/}
					</div>
						{/*<!-- /.row -->*/}
				</div>
				{/*<!-- /.container -->*/}
				<FrontFooter module={this.props.footer} />
			</div>
		)
	}
});


DefaultArticle = React.createClass({
	mixins:[ReactMeteorData],
  getMeteorData(){
  	Meteor.subscribe('articlesFind')
    return {
      article: PanoplyCMSCollections.Articles.findOne({_id: this.props.id, trash:false})
    } 
  },
	render(){
		if(!_.has(this.data.article, "_id"))
			return <div>Loading...</div>

		return <ArticleFullView {...this.data.article} />
	}
})

ArticleFullView = article => {
	return <div className="blog-post">
          <h2 className="blog-post-title">{article.title.toUpperCase()}</h2>
          <p className="blog-post-meta">{new Date(article.createdAt).toDateString()} by <a href="#">{article.owner}</a></p>
          <div dangerouslySetInnerHTML={{__html:article.article}} />
        	<ShowTags tags={article.tags} />
        </div>
}

DefaultCategory = React.createClass({
	mixins:[ReactMeteorData],
  getMeteorData(){
	  Meteor.subscribe('articlesFind');
    return {
      articles: PanoplyCMSCollections.Articles.find({category: this.props.id, trash:false}).fetch()
    } 
  },
	render(){
		if(!this.data.articles.length)
			return <div>Loading...</div>

		return (<div>
			{this.data.articles.map(a => {
				return <ArticleListView key={a._id} {...a} />
			})}
		</div>)
	}
})

ArticleListView = article => {
	return <div className="blog-post">
          <h2 className="blog-post-title">{article.title.toUpperCase()}</h2>
          <p className="blog-post-meta">{new Date(article.createdAt).toDateString()} by <a href="#">{article.owner}</a></p>
          <div dangerouslySetInnerHTML={{__html:article.article.substr(0, 300)}} />
        	<ShowTags tags={article.tags} />
          <div className="pull-right"><a href={FlowRouter.current().route.path+'/'+article.alias} className="btn btn-default">Read More</a></div>
          <div className="clear-both"></div>
        </div>
}

ShowTags = React.createClass({
	mixins:[ReactMeteorData],
  getMeteorData(){
    return {
      tags: PanoplyCMSCollections.Tags.find({}).fetch()
    } 
  },
	render: function(){
		return (
			<div className="tag">
				{this.props.tags.map(tag => {
					let t = _.find(this.data.tags, t => { return t._id == tag })
					return <span key={tag} > <a className="label label-info"> {t.title} </a> </span>
				})}
			</div>
		)
	}
})