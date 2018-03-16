const expect = require('chai').expect
var mock = require('mock-fs')
const config = require('../src/config')

describe('config', () => {
  before(() => {
    mock({
      '/1/2/.yellow.json': '{"property":"yellow"}',
      '/1/2/3/4': {},
      '/A/B/.yellow.yaml': 'property: yellow',
      '/A/B/C/D': {}
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
  it('Should load config (json)', function () {
    expect(config('/1/2/',{
      default: 'default'
    })).to.have.property('property', 'yellow')
  })
  it('Should load config (json) from ancestor dir', function () {
    expect(config('/1/2/3/4',{
      default: 'default'
    })).to.have.property('property', 'yellow')
  })
  it('Should load config (yaml)', function () {
    expect(config('/A/B/',{
      default: 'default'
    })).to.have.property('property', 'yellow')
  })
  it('Should load config (yaml) from ancestor dir', function () {
    expect(config('/A/B/C/D',{
      default: 'default'
    })).to.have.property('property', 'yellow')
  })
})
