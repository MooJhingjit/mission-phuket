

const getTableConfig = async (currentPage, perPage) => {
  currentPage = Math.max(0, currentPage)
  let from = (parseInt(perPage) * (currentPage - 1))
  return {
    currentPage: parseInt(currentPage),
    perPage: parseInt(perPage),
    from: parseInt(from),
    to: parseInt(from) + parseInt(perPage)
  }
}

const hostName = (req) => {
  // console.log(req)
  if (!req.headers) return
  return `${req.protocol}://${req.headers.host}`
  // return `${req.headers.host}`
}

const getPageUrl = (req, currentPage) => {
  return `${req.protocol}//${req.headers.host}/api/reports?/&sort=&page=${currentPage}`
}
module.exports.getTableConfig = getTableConfig
module.exports.hostName = hostName
module.exports.getPageUrl = getPageUrl