const expect = require('chai').expect
const request = require('request')

describe('Status and content', () => {
  describe('Main page', () => {
    // body...
    it('status', (done) => {
      request('http://localhost:3000', (err, res, body) => {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
  })
})
