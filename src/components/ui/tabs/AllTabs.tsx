import { CustomTabs } from '@/components/ui/tabs/tabs'

export const AllTab = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CustomTabs label={'Switcher'} orientation={'vertical'} variant={'leftBorder'} />
      <CustomTabs label={'Switcher'} orientation={'vertical'} variant={'primary'} />
      <CustomTabs label={'Switcher'} orientation={'vertical'} variant={'primary'} />
      <CustomTabs label={'Switcher'} orientation={'vertical'} variant={'primary'} />
      <CustomTabs label={'Switcher'} orientation={'vertical'} variant={'rightBorder'} />
    </div>
  )
}
