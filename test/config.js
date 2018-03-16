const expect = require('chai').expect
var mock = require('mock-fs')
const config = require('../src/config')

describe('config', () => {
  before(() => {
    mock({
      '/1/2/.yellow.json': '{"property":"yellow"}',
      '/1/2/3/4': {}
    })
  })
  after(() => mock.restore())
  it('Should return defaults', function () {
    expect(config('/1/',{
      default: 'default'
    })).to.have.property('default', 'default')
  })
  it('Should keep defaults', function () {
    expect(config('/1/2/',{
      default: 'default'
    })).to.have.property('default', 'default')
  })
  it('Should load config', function () {
    expect(config('/1/2/',{
      default: 'default'
    })).to.have.property('property', 'yellow')
  })
  it('Should load config from ancestor dir', function () {
    expect(config('/1/2/3/4',{
      default: 'default'
    })).to.have.property('property', 'yellow')
  })  
})
