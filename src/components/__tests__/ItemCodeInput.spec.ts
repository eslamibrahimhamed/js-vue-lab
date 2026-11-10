import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ItemCodeInput from '@/components/ItemCodeInput.vue'

describe('ItemCodeInput', () => {
  it('shows the formatted code while typing', async () => {
    const wrapper = mount(ItemCodeInput)
    await wrapper.find('input').setValue('  ab-123 ')
    expect(wrapper.text()).toContain('Saved as: "AB-123"')
  })
})
