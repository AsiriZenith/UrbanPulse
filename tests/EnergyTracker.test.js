import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EnergyTracker from '../src/components/EnergyTracker.vue'

describe('EnergyTracker.vue', () => {
  it('renders correctly with default usage', () => {
    const wrapper = mount(EnergyTracker)

    expect(wrapper.text()).toContain('Energy Usage Tracker')
    expect(wrapper.text()).toContain('300 kWh')
    expect(wrapper.text()).toContain('LKR 15000.00')
  })

  it('updates the estimated cost when slider value changes', async () => {
    const wrapper = mount(EnergyTracker)
    const slider = wrapper.get('input[type="range"]')

    await slider.setValue(500)

    expect(wrapper.text()).toContain('500 kWh')
    expect(wrapper.text()).toContain('LKR 25000.00')
  })
})
