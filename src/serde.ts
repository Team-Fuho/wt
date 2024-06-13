/**
 * If it works, don't touch
 */

/**
 * This one produce constructor-able class and string-able
 */
type CtorNStr<T> = {
    new (d: string): T
    toString(): string
}

export interface SerdeTrait<S, T> {
    kind: string
    to(i: S): T
    from(i: T): S
}

/**
 * Why 2 params? well it verify the args pass in. The first is the constructor class,
 * the seconth is the dataclass of the structor. It is like struct and impl, yk
 */
export abstract class MetaSerde<S extends CtorNStr<A>, A>
    implements SerdeTrait<A, string>
{
    abstract readonly kind: string
    abstract readonly ctor: S
    to(i: A): string {
        return i.toString()
    }
    from(i: string) {
        return new this.ctor(i)
    }
}

export class URLSerde extends MetaSerde<typeof URL, URL> {
    kind = "url"
    ctor = URL
}

export class DateSerde extends MetaSerde<typeof Date, Date> {
    kind = "date"
    ctor = Date
    // injection constructor
    private cust: (i: Date) => string
    constructor(cust = (d: Date) => d.toLocaleString("vi-VN")) {
        super()
        this.cust = cust
    }
    to(i: Date): string {
        return this.cust(i)
    }
    from(i: string): Date {
        return new Date(Date.parse(i))
    }
}

export type AnySerde = [URLSerde, DateSerde][number]
