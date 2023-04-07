import { mount } from '@vue/test-utils'

import Icon from '@/components/Icon'

describe('Icon.vue', () => {
  const wrapper = mount(Icon, {
    propsData: {
      icon: 'setting'
    }
  })

  it('可以正确渲染传递的icon', () => {
    expect(wrapper.html()).toContain('#i-setting')
  })

  it('icon可以变化为loading icon', async () => {
    await wrapper.setProps({ isLoading: true })

    expect(wrapper.html()).toContain('#i-loading')
  })
})
