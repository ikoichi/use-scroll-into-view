import { renderHook } from "@testing-library/react-hooks/dom"
import useScrollIntoView, {
  ScrollIntoViewBehavior,
  ScrollIntoViewBlock,
  ScrollIntoViewInline,
} from "./useScrollIntoView"

describe("useScrollIntoView", () => {
  it("invokes scrollIntoView on condition change", () => {
    const ref = {
      current: {
        scrollIntoView: jest.fn(),
      },
    }

    let isSomething = false

    const { rerender } = renderHook(() =>
      useScrollIntoView(ref, isSomething, {})
    )
    expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(0)

    isSomething = true
    rerender()
    expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(1)
    expect(ref.current.scrollIntoView).toHaveBeenCalledWith({})
  })

  it("invokes scrollIntoView with custom options", () => {
    const ref = {
      current: {
        scrollIntoView: jest.fn(),
      },
    }

    let isSomething = false

    const options: ScrollIntoViewOptions = {
      behavior: ScrollIntoViewBehavior.auto,
      block: ScrollIntoViewBlock.start,
      inline: ScrollIntoViewInline.end,
    }
    const { rerender } = renderHook(() =>
      useScrollIntoView(ref, isSomething, options)
    )
    expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(0)

    isSomething = true
    rerender()
    expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(1)
    expect(ref.current.scrollIntoView).toHaveBeenCalledWith(options)
  })

  it("immediately invokes scrollIntoView", () => {
    const ref = {
      current: {
        scrollIntoView: jest.fn(),
      },
    }

    let isSomething = true

    const options: ScrollIntoViewOptions = {
      behavior: ScrollIntoViewBehavior.auto,
      block: ScrollIntoViewBlock.start,
      inline: ScrollIntoViewInline.end,
    }
    const { rerender } = renderHook(() =>
      useScrollIntoView(ref, isSomething, options)
    )
    expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(1)
    expect(ref.current.scrollIntoView).toHaveBeenCalledWith(options)

    isSomething = false
    rerender()
    expect(ref.current.scrollIntoView).toHaveBeenCalledTimes(1)
  })
})
