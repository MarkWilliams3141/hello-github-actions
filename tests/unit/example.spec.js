import { shallowMount } from '@vue/test-utils'
import HelloGitHubActions from '@/components/HelloGitHubActions.vue'

describe('HelloGitHubActions.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloGitHubActions, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
