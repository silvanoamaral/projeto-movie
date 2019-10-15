'use strict'

import { mount } from 'enzyme'
import { expect } from 'chai'

import NoMatch from './index'

describe('NoMatch component', () => {
  it('NoMatch is a function', () => {
    expect(NoMatch).to.be.a('function')
  })
  
  it('NoMatch is Component', () => {
    const objeto = {
      pathname: '/testando'
    }
    const wrapper = mount(NoMatch(objeto))
    expect(wrapper.find('h3')).length(1)
  })
})
