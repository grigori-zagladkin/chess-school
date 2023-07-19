export const getManageUrl = (url: string) => `/manage${url}`
export const getManageUsersUrl = (url: string) => getManageUrl(`/users${url}`)
export const getManageForumUrl = (url: string) => getManageUrl(`/forum${url}`)
export const getManageClassesUrl = (url: string) =>
	getManageUrl(`/classes${url}`)
export const getManagePromosUrl = (url: string) => getManageUrl(`/promo${url}`)
