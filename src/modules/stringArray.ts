import { filter, map, pipe, toLower } from 'ramda'
import { arrayContainsValue } from '../utilities/array'
import { filterStringIncludedInArray } from '../utilities/strings'
import { filterValidStrings } from './strings'

type validValueFunc = (stringArr: string) => boolean

export const filterValidStringsWithFunc: (
  validValueFunc: validValueFunc
) => (arr: string[]) => string[] = func =>
  pipe(filter(filterValidStrings), filter(func))

export const filterValidStringsWithArr: (
  validStringArr: string[]
) => (arr: string[]) => string[] = validArr =>
  pipe(
    filter(filterValidStrings),
    filter(filterStringIncludedInArray(validArr))
  )

export const arrayValueContainsString = (arr: string[]) => (val: string) =>
  pipe(toLower, pipe(map(toLower), arrayContainsValue)(arr))(val)
