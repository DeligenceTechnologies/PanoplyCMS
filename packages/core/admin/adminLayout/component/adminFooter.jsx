AdminFooter=React.createClass({
	render(){
		return (
		<footer className="pull-left ">
			<div className="col-md-12">
				<hr className="divider"/>
				{i18n('ADMIN_FOOTER_COPYRIGHT')} &copy; 2015 <a href="#">{i18n('ADMIN_FOOTER_DELIGENCE')}</a>
			</div>
		</footer>
		)
	}
})