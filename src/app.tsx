import DefaultLayout from "./layouts/default"

import AnimationWrapper from "./hocs/animation-wrapper"

function App() {
  return (
    <>
      <AnimationWrapper>
        <DefaultLayout />
      </AnimationWrapper>
    </>
  )
}

export default App
