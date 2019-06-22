import axios from 'axios'
import helper from '@Libraries/common.helpers'
import config from '@Config/app.config'

const createHeader = () => {
  let token = helper.GET_STORAGEITEM(config.variable.tokenStorage)
  let headers = {'Content-Type': 'application/json'}
  if (token) {
    headers.Authorization = token.replace(/['"]+/g, '')
  }
  let instance = axios.create({
    headers
  })
  return instance
}

const getResource = (obj, callback) => {
  const instance = createHeader()
  return new Promise((resolve, reject) => {
    instance.get(helper.GET_FULLAPI(obj.resourceName, obj.queryString))
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const postResource = (obj, callback) => {
  // console.log(obj);
  const instance = createHeader()
  // console.log(obj.data);
  return new Promise((resolve, reject) => {
    instance.post(helper.GET_FULLAPI(obj.resourceName), {
      ...obj.data
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const putResource = (obj, callback) => {
  const instance = createHeader()
  return new Promise((resolve, reject) => {
    instance.put(helper.GET_FULLAPI(obj.resourceName), {
      ...obj.data
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const deleteResource = (obj, callback) => {
  const instance = createHeader()
  return new Promise((resolve, reject) => {
    instance.delete(helper.GET_FULLAPI(obj.resourceName, obj.queryString))
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default {
  getResource,
  postResource,
  putResource,
  deleteResource
}
