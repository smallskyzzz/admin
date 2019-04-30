import axios from 'axios'

export function login(data) {
  let promise = new Promise((resolve, reject) => {
    axios.post('/api' + '/login', data).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })

  return promise
}
