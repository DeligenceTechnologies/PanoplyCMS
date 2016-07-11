SidePanel = data => {
	return(
		<div className="side-panel">
			{data.module?data.module.map(m => {
				return m
			}):''}
		</div>
	);
}