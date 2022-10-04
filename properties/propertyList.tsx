import { PropertyInfo } from "./propertyInfo";



// semantics:
export const tag            = new PropertyInfo('tag')
export const role           = new PropertyInfo('role')
export const aria           = new PropertyInfo('aria-*')

export const semanticTag    = new PropertyInfo('semanticTag')
export const semanticRole   = new PropertyInfo('semanticRole')



// global:
export const elmRef         = new PropertyInfo('elmRef')
export const outerRef       = new PropertyInfo('outerRef')

export const id             = new PropertyInfo('id')

export const style          = new PropertyInfo('style')



// classes:
export const mainClass      = new PropertyInfo('mainClass')
export const variantClasses = new PropertyInfo('variantClasses')
export const stateClasses   = new PropertyInfo('stateClasses')
export const classes        = new PropertyInfo('classes')
export const className      = new PropertyInfo('className')
