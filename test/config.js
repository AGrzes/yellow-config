const expect = require('chai').expect;
const config = require('../src/config')

describe('config', () => {
  it('Should return defaults', function () {
    expect(config({
      default: 'default'
    })).to.have.property('default', 'default')
  })
})
