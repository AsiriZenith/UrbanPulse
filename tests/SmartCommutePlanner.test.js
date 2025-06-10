import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SmartCommutePlanner from '../src/components/SmartCommutePlanner.vue'

describe('SmartCommutePlanner.vue', () => {
  it('renders dropdowns and heading', () => {
    const wrapper = mount(SmartCommutePlanner)

    expect(wrapper.text()).toContain('Smart Commute Planner')
    expect(wrapper.find('select#start').exists()).toBe(true)
    expect(wrapper.find('select#end').exists()).toBe(true)
  })

  it('shows a suggestion when start and end are selected', async () => {
    const wrapper = mount(SmartCommutePlanner)

    const startSelect = wrapper.find('select#start')
    const endSelect = wrapper.find('select#end')

    await startSelect.setValue('Town Center')
    await endSelect.setValue('Tech Park')

    expect(wrapper.text()).toContain('Best Green Commute Option')
    expect(wrapper.text()).toMatch(/Walking|Cycling|Electric Bus|Metro/)
  })

  it('warns when start and end locations are the same', async () => {
    const wrapper = mount(SmartCommutePlanner)

    await wrapper.find('select#start').setValue('University')
    await wrapper.find('select#end').setValue('University')

    expect(wrapper.text()).toContain('Start and end cannot be the same.')
  })
})
