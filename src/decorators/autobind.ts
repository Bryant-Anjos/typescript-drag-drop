namespace App {
  // Autobind decorator
  export function Autobind(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this)
        return boundFn
      },
    }
    return adjDescriptor
  }
}