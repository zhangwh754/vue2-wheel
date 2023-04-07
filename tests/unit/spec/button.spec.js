import { mount } from '@vue/test-utils'

import Button from '@/components/Button'

describe('Button.vue', () => {
  const wrapper = mount(Button)

  it('使用按钮默认文本', async () => {
    const defaultLabel = '提交'

    expect(wrapper.find('span').text()).toEqual(defaultLabel)
  })

  it('给按钮传递文本', async () => {
    const label = '啦啦啦'
    await wrapper.setProps({ label })

    expect(wrapper.find('span').text()).toEqual(label)
  })

  it('给按钮传递图标', async () => {
    const icon = 'setting'

    expect(wrapper.html()).not.toContain('svg')

    await wrapper.setProps({ icon })

    expect(wrapper.html()).toContain('svg')
  })

  it('根据iconPosition给button添加了正确的类名', async () => {
    expect(wrapper.html()).not.toContain('reverse')

    const config = {
      icon: 'setting',
      iconPosition: 'right'
    }

    await wrapper.setProps(config)

    expect(wrapper.html()).toContain('reverse')
  })
})
