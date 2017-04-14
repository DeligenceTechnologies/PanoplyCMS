AdminFooter=React.createClass({
	render(){
		return (
			<div className="col-md-12">
				<hr className="divider"/>
				{i18n('ADMIN_FOOTER_COPYRIGHT')} &copy; 2016 <a href="javascript:void(0)">{i18n('ADMIN_FOOTER_DELIGENCE')}</a>
			</div>
		)
	}
})