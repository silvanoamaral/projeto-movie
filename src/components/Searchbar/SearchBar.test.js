'use strict'

import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import SearchBar from '.'

const mockStore = configureMockStore()
const store = mockStore({})
  
describe('SearchBar component', () => {
  it('Mount renders SearchBar component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    expect(wrapper.find('form')
    .hasClass('search__form'))
    .equal(true)
  })

  it('Input SearchBar value', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    wrapper
    .find('input')
    .simulate('change', {
      target: {
        value: 'Value'
      }
    })
  })

  it('Form SearchBar Submit', () => {
    const onSubmitFn = jest.fn()
    const wrapper = mount(
      <Provider store={store}>
        <SearchBar onSubmit={onSubmitFn} />
      </Provider>
    )

    wrapper
    .find('input')
    .simulate('change', {
      target: {
        value: 'Value'
      }
    })

    wrapper
    .find('form')
    .simulate('submit')
  })
})