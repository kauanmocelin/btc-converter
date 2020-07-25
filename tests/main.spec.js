const expect = require('chai').expect

const exec = require('child_process').exec
const btcConverter = './src/main.js'
const packageJson = require('../package.json')

describe('Main CLI', () => {
  it('should return version of btc-onverter', done => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.replace('\n', '')).to.be.equal(packageJson.version)
      done()
    })
  })

  it('should return the description when btc-onverter --help', done => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('Convert Bitcoin to any currency defined.')).to.be
        .true
      done()
    })
  })

  it('should return the currency option when btc-converter --help', done => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('--currency')).to.be.true
      done()
    })
  })

  it('should return the amount option when btc-converter --help', done => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('--amount')).to.be.true
      done()
    })
  })
})
