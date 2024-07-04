function noop() {}

class MyPromise {

  constructor(executor) {
    this.queue = []
    this.errorHandler = noop
    this.finallyHandler = noop

    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
    } catch (e) {
      this.errorHandler(e)
    } finally {
      this.finallyHandler()
    }
  }

  onResolve(data) {
    this.queue.forEach(callback => {
      data = callback(data)
    })

    this.finallyHandler()
  }

  onReject(error) {
    this.errorHandler(error)

    this.finallyHandler()
  }


  then(fn) {
    this.queue.push(fn)
    return this
  }

  catch(fn) {
    this.errorHandler = fn
    return this
  }

  finally(fn) {
    this.finallyHandler = fn
    return this
  }
}

module.exports = MyPromise;


const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('SUCCESS')
  }, 100)
})

promise
  .then(result => result.slice(5))
  .then(result => console.log(result[0].toLowerCase()))
  .catch(err => console.log('ERROR:', err))
  .finally(() => console.log('finally'))