DefaultTemplate = React.createClass({
	componentDidMount: function() {
		document.title = 'PanoplyCMS';
	},

	render() {
		return (
			<div>
				<FrontHeader />
				<div className="blog-header">
					<div className="container">
						<Logo />
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-8 blog-main">
							{this.props.content}
						</div>
						{/*<!-- /.blog-main -->*/}
						<div className="col-sm-3 col-sm-offset-1 blog-sidebar">
							<SidePanel />
						</div>
						{/*<!-- /.blog-sidebar -->*/}
					</div>
						{/*<!-- /.row -->*/}
				</div>
				{/*<!-- /.container -->*/}
				<FrontFooter />
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
		console.log(this.props, "<---- Its My Props")
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
		console.log(this.props.id, "<---- Its My Props")
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
	console.log(article)
	return <div className="blog-post">
          <h2 className="blog-post-title">{article.title.toUpperCase()}</h2>
          <p className="blog-post-meta">{new Date(article.createdAt).toDateString()} by <a href="#">{article.owner}</a></p>
          <div dangerouslySetInnerHTML={{__html:article.article.substr(0, 300)}} />
        	<ShowTags tags={article.tags} />
          <div className="pull-right"><a href={FlowRouter.current().route.path+'/'+article.alias} className="btn btn-default">Read More</a></div>
          <div className="clear-both"></div>
        </div>
}

ShowTags = t => {
	console.log(t.tags,"All tags")
	return <div className="tag">
		{t.tags.map(tag => {
			return <span key={tag} > <a className="label label-info"> {tag} </a> </span>
		})}
	</div>
}