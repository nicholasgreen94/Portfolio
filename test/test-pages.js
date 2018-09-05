const expect = require('chai').expect
const request = require('request')

describe('Status and content', () => {
  describe('Home Page', () => {
    // body...
    it('status', (done) => {
      request('https://www.nicholasgreendesigns.com/', (err, res, body) => {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
  })
  describe('Projects Page', () => {
    // body...
    it('status', (done) => {
      request('https://www.nicholasgreendesigns.com/projects', (err, res, body) => {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
  })
})
