FrontHeader = (data) => {
	return(
		<div className="blog-masthead">
			<div className="container">
				<nav className="nav blog-nav">
					{data.module?data.module.map(m => {
						return m
					}):''}
				</nav>
			</div>
		</div>
	);
}