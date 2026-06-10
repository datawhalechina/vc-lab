import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted, watch, ref } from 'vue'
import './style.css'

export default {
  extends: DefaultTheme,
  setup() {
    const theme = ref('light')

    const updateTheme = (isDark) => {
      if (isDark) {
        theme.value = 'dark'
        document.documentElement.classList.add('dark')
      } else {
        theme.value = 'light'
        document.documentElement.classList.remove('dark')
      }
      try {
        localStorage.setItem('vp-theme', theme.value)
      } catch (e) {
        // ignore
      }

      const toggles = document.querySelectorAll('.bb8-toggle__checkbox')
      toggles.forEach(toggle => {
        toggle.checked = isDark
      })
    }

    const handleToggleChange = (e) => {
      updateTheme(e.target.checked)
    }

    const bindToggles = () => {
      const toggles = document.querySelectorAll('.bb8-toggle__checkbox')
      toggles.forEach(toggle => {
        toggle.checked = theme.value === 'dark'
        toggle.removeEventListener('change', handleToggleChange)
        toggle.addEventListener('change', handleToggleChange)
      })
    }

    const bindDocAsideToggle = () => {
      const aside = document.querySelector('.VPDocAside')
      if (aside && !aside.querySelector('.aside-toggle')) {
        const toggle = document.createElement('div')
        toggle.className = 'aside-toggle'
        aside.appendChild(toggle)

        toggle.addEventListener('click', (e) => {
          e.stopPropagation()
          aside.classList.toggle('collapsed')
        })
      }
    }

    const bindBackToTop = () => {
      const btn = document.getElementById('backToTop')
      if (btn && !btn.dataset.bound) {
        btn.dataset.bound = 'true'
        btn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
        const onScroll = () => {
          if (window.scrollY > 300) {
            btn.classList.add('show')
          } else {
            btn.classList.remove('show')
          }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
      }
    }

    onMounted(() => {
      try {
        const saved = localStorage.getItem('vp-theme')
        if (saved === 'dark' || saved === 'light') {
          theme.value = saved
        }
      } catch (e) {
        // ignore
      }

      if (theme.value === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      bindToggles()
      bindDocAsideToggle()
      bindBackToTop()

      const observer = new MutationObserver(() => {
        bindToggles()
        bindDocAsideToggle()
        bindBackToTop()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      // 标记观察器，供卸载时清理（简单实现：不清理，依靠页面生命周期）
    })

    onUnmounted(() => {
      const toggles = document.querySelectorAll('.bb8-toggle__checkbox')
      toggles.forEach(toggle => {
        toggle.removeEventListener('change', handleToggleChange)
      })
    })

    watch(theme, (newTheme) => {
      try {
        localStorage.setItem('vp-theme', newTheme)
      } catch (e) {
        // ignore
      }
    })
  }
}
