/**
 * dynamic schema validator
 *
 * i should move this to a new crate soon
 */

// Flat types
interface FlatPrimitive<T> {
    readonly kind: T
}

type RawPrimitives = string | number | boolean | null
type OrdinalPrimitive<T extends RawPrimitives> = FlatPrimitive<T>

// Recursive types
type UniformArrayPrimitive<T> = FlatPrimitive<FlatPrimitive<T>[]>
type UniformObjectPrimitive<T> = FlatPrimitive<Record<string, T>>

export type AnyField =
    | OrdinalPrimitive<any>
    | UniformArrayPrimitive<any>
    | UniformObjectPrimitive<any>

class OrdinalPrimitiveCtor<T extends RawPrimitives>
    implements OrdinalPrimitive<T>
{
    kind: T
}

export class TNumber extends OrdinalPrimitiveCtor<number> {}

export class TString extends OrdinalPrimitiveCtor<string> {}

export class TObject<T extends AnyField> implements UniformObjectPrimitive<T> {
    kind: Record<string, T>
    readonly required: (keyof TObject<T>["kind"])[]
    // protected isMap = false
    constructor(
        ctor: TObject<T>["kind"],
        required = [],
        // isMap = false
    ) {
        this.kind = ctor
        this.required = required
        // this.isMap = isMap
    }
}

export type DefaultTObject = TObject<AnyField>

export class TArray<P extends AnyField>
    implements UniformArrayPrimitive<P["kind"]>
{
    kind: P[]
    readonly pure: P["kind"][]
}

/**
 * @deprecated anything is optional. validation is post
 */
type IfOptional<
    T extends Record<string, V>,
    R extends (keyof T)[],
    K extends keyof T,
    V extends AnyField,
> = K extends R[number] ? V : undefined

type TUnwrapLower<T extends Record<string, AnyField>, R extends (keyof T)[]> = {
    [K in keyof T]?: //
    T[K] extends OrdinalPrimitive<RawPrimitives>
        ? T[K]["kind"]
        : //
          T[K] extends TArray<AnyField>
          ? T[K]["pure"]
          : //
            T[K] extends TObject<T[K]["kind"]>
            ? TUnwrapper<T[K]>
            : never //
}
/**
 * Unwrap a(n) TObject
 */
export type TUnwrapper<T extends TObject<AnyField>> = TUnwrapLower<
    T["kind"],
    T["required"]
>
