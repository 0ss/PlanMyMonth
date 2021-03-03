import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/side-var/SideBar.vue'

describe('Sidebar.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Sidebar)
    expect(wrapper.text()).toMatch()
  })
})
