FrontFooter = data => {
	let className = 'col-md-12'
	if(data.module){
		className = 'col-md-'+Math.ceil(12 / data.module.length)
	}
	return(
		<div className="footer">
			<div className="container">
				<footer className={_.isEmpty(data.module)?"":"blog-footer row"}>
					{
						data.module?
							data.module.map(m => {
								return <div className={className} key={m.key}>{m}</div>
							})
						:''
					}
				</footer>
			</div>
		</div>
	)
}