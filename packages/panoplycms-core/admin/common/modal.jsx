
/*=======================================================
	these function will call when site is offline or page
	not found respectively
========================================================*/



CoreOfflineComponent = () => {
	return <div>{i18n('ADMIN_SITE_OFFLINE')}</div>
}

CoreComponentNotFound = () => {
	return <div>
		<h3 className="sub-header">{i18n('ADMIN_PAGE_NOT_FOUND')}</h3>
		<p>{i18n('ADMIN_URL_NOT_CONFIGURED')}</p>
	</div>
}