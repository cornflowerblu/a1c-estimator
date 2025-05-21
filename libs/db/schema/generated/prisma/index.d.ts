
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model UserMedicalProfile
 * 
 */
export type UserMedicalProfile = $Result.DefaultSelection<Prisma.$UserMedicalProfilePayload>
/**
 * Model GlucoseReading
 * 
 */
export type GlucoseReading = $Result.DefaultSelection<Prisma.$GlucoseReadingPayload>
/**
 * Model Run
 * 
 */
export type Run = $Result.DefaultSelection<Prisma.$RunPayload>
/**
 * Model Month
 * 
 */
export type Month = $Result.DefaultSelection<Prisma.$MonthPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MealContext: {
  BEFORE_BREAKFAST: 'BEFORE_BREAKFAST',
  AFTER_BREAKFAST: 'AFTER_BREAKFAST',
  BEFORE_LUNCH: 'BEFORE_LUNCH',
  AFTER_LUNCH: 'AFTER_LUNCH',
  BEFORE_DINNER: 'BEFORE_DINNER',
  AFTER_DINNER: 'AFTER_DINNER',
  BEDTIME: 'BEDTIME',
  WAKEUP: 'WAKEUP',
  FASTING: 'FASTING',
  OTHER: 'OTHER'
};

export type MealContext = (typeof MealContext)[keyof typeof MealContext]


export const DisplayUnit: {
  A1C: 'A1C',
  AG: 'AG'
};

export type DisplayUnit = (typeof DisplayUnit)[keyof typeof DisplayUnit]


export const ReminderFrequency: {
  DAILY: 'DAILY',
  TWICE_DAILY: 'TWICE_DAILY',
  WEEKLY: 'WEEKLY',
  CUSTOM: 'CUSTOM'
};

export type ReminderFrequency = (typeof ReminderFrequency)[keyof typeof ReminderFrequency]


export const Theme: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  SYSTEM: 'SYSTEM'
};

export type Theme = (typeof Theme)[keyof typeof Theme]


export const DiabetesType: {
  TYPE_1: 'TYPE_1',
  TYPE_2: 'TYPE_2',
  GESTATIONAL: 'GESTATIONAL',
  PREDIABETES: 'PREDIABETES',
  OTHER: 'OTHER'
};

export type DiabetesType = (typeof DiabetesType)[keyof typeof DiabetesType]


export const GlucoseUnit: {
  MGDL: 'MGDL',
  MMOLL: 'MMOLL'
};

export type GlucoseUnit = (typeof GlucoseUnit)[keyof typeof GlucoseUnit]

}

export type MealContext = $Enums.MealContext

export const MealContext: typeof $Enums.MealContext

export type DisplayUnit = $Enums.DisplayUnit

export const DisplayUnit: typeof $Enums.DisplayUnit

export type ReminderFrequency = $Enums.ReminderFrequency

export const ReminderFrequency: typeof $Enums.ReminderFrequency

export type Theme = $Enums.Theme

export const Theme: typeof $Enums.Theme

export type DiabetesType = $Enums.DiabetesType

export const DiabetesType: typeof $Enums.DiabetesType

export type GlucoseUnit = $Enums.GlucoseUnit

export const GlucoseUnit: typeof $Enums.GlucoseUnit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMedicalProfile`: Exposes CRUD operations for the **UserMedicalProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMedicalProfiles
    * const userMedicalProfiles = await prisma.userMedicalProfile.findMany()
    * ```
    */
  get userMedicalProfile(): Prisma.UserMedicalProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glucoseReading`: Exposes CRUD operations for the **GlucoseReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlucoseReadings
    * const glucoseReadings = await prisma.glucoseReading.findMany()
    * ```
    */
  get glucoseReading(): Prisma.GlucoseReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.run`: Exposes CRUD operations for the **Run** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Runs
    * const runs = await prisma.run.findMany()
    * ```
    */
  get run(): Prisma.RunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.month`: Exposes CRUD operations for the **Month** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Months
    * const months = await prisma.month.findMany()
    * ```
    */
  get month(): Prisma.MonthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    UserMedicalProfile: 'UserMedicalProfile',
    GlucoseReading: 'GlucoseReading',
    Run: 'Run',
    Month: 'Month',
    UserPreferences: 'UserPreferences',
    User: 'User',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "userMedicalProfile" | "glucoseReading" | "run" | "month" | "userPreferences" | "user" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      UserMedicalProfile: {
        payload: Prisma.$UserMedicalProfilePayload<ExtArgs>
        fields: Prisma.UserMedicalProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMedicalProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMedicalProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>
          }
          findFirst: {
            args: Prisma.UserMedicalProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMedicalProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>
          }
          findMany: {
            args: Prisma.UserMedicalProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>[]
          }
          create: {
            args: Prisma.UserMedicalProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>
          }
          createMany: {
            args: Prisma.UserMedicalProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMedicalProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>[]
          }
          delete: {
            args: Prisma.UserMedicalProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>
          }
          update: {
            args: Prisma.UserMedicalProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserMedicalProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMedicalProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMedicalProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserMedicalProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMedicalProfilePayload>
          }
          aggregate: {
            args: Prisma.UserMedicalProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMedicalProfile>
          }
          groupBy: {
            args: Prisma.UserMedicalProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMedicalProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMedicalProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserMedicalProfileCountAggregateOutputType> | number
          }
        }
      }
      GlucoseReading: {
        payload: Prisma.$GlucoseReadingPayload<ExtArgs>
        fields: Prisma.GlucoseReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlucoseReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlucoseReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          findFirst: {
            args: Prisma.GlucoseReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlucoseReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          findMany: {
            args: Prisma.GlucoseReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>[]
          }
          create: {
            args: Prisma.GlucoseReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          createMany: {
            args: Prisma.GlucoseReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlucoseReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>[]
          }
          delete: {
            args: Prisma.GlucoseReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          update: {
            args: Prisma.GlucoseReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          deleteMany: {
            args: Prisma.GlucoseReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlucoseReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlucoseReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>[]
          }
          upsert: {
            args: Prisma.GlucoseReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseReadingPayload>
          }
          aggregate: {
            args: Prisma.GlucoseReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlucoseReading>
          }
          groupBy: {
            args: Prisma.GlucoseReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlucoseReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlucoseReadingCountArgs<ExtArgs>
            result: $Utils.Optional<GlucoseReadingCountAggregateOutputType> | number
          }
        }
      }
      Run: {
        payload: Prisma.$RunPayload<ExtArgs>
        fields: Prisma.RunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findFirst: {
            args: Prisma.RunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findMany: {
            args: Prisma.RunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          create: {
            args: Prisma.RunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          createMany: {
            args: Prisma.RunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          delete: {
            args: Prisma.RunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          update: {
            args: Prisma.RunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          deleteMany: {
            args: Prisma.RunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          upsert: {
            args: Prisma.RunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          aggregate: {
            args: Prisma.RunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRun>
          }
          groupBy: {
            args: Prisma.RunGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunCountArgs<ExtArgs>
            result: $Utils.Optional<RunCountAggregateOutputType> | number
          }
        }
      }
      Month: {
        payload: Prisma.$MonthPayload<ExtArgs>
        fields: Prisma.MonthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          findFirst: {
            args: Prisma.MonthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          findMany: {
            args: Prisma.MonthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>[]
          }
          create: {
            args: Prisma.MonthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          createMany: {
            args: Prisma.MonthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>[]
          }
          delete: {
            args: Prisma.MonthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          update: {
            args: Prisma.MonthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          deleteMany: {
            args: Prisma.MonthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>[]
          }
          upsert: {
            args: Prisma.MonthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          aggregate: {
            args: Prisma.MonthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonth>
          }
          groupBy: {
            args: Prisma.MonthGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthCountArgs<ExtArgs>
            result: $Utils.Optional<MonthCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    userMedicalProfile?: UserMedicalProfileOmit
    glucoseReading?: GlucoseReadingOmit
    run?: RunOmit
    month?: MonthOmit
    userPreferences?: UserPreferencesOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RunCountOutputType
   */

  export type RunCountOutputType = {
    readings: number
  }

  export type RunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | RunCountOutputTypeCountReadingsArgs
  }

  // Custom InputTypes
  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunCountOutputType
     */
    select?: RunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RunCountOutputType without action
   */
  export type RunCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlucoseReadingWhereInput
  }


  /**
   * Count Type MonthCountOutputType
   */

  export type MonthCountOutputType = {
    runs: number
  }

  export type MonthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | MonthCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * MonthCountOutputType without action
   */
  export type MonthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthCountOutputType
     */
    select?: MonthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonthCountOutputType without action
   */
  export type MonthCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    glucoseReadings: number
    runs: number
    months: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    glucoseReadings?: boolean | UserCountOutputTypeCountGlucoseReadingsArgs
    runs?: boolean | UserCountOutputTypeCountRunsArgs
    months?: boolean | UserCountOutputTypeCountMonthsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGlucoseReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlucoseReadingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMonthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model UserMedicalProfile
   */

  export type AggregateUserMedicalProfile = {
    _count: UserMedicalProfileCountAggregateOutputType | null
    _avg: UserMedicalProfileAvgAggregateOutputType | null
    _sum: UserMedicalProfileSumAggregateOutputType | null
    _min: UserMedicalProfileMinAggregateOutputType | null
    _max: UserMedicalProfileMaxAggregateOutputType | null
  }

  export type UserMedicalProfileAvgAggregateOutputType = {
    birthYear: number | null
    targetA1C: number | null
  }

  export type UserMedicalProfileSumAggregateOutputType = {
    birthYear: number | null
    targetA1C: number | null
  }

  export type UserMedicalProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    diabetesType: $Enums.DiabetesType | null
    birthYear: number | null
    targetA1C: number | null
    preferredUnit: $Enums.GlucoseUnit | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMedicalProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    diabetesType: $Enums.DiabetesType | null
    birthYear: number | null
    targetA1C: number | null
    preferredUnit: $Enums.GlucoseUnit | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMedicalProfileCountAggregateOutputType = {
    id: number
    userId: number
    diabetesType: number
    birthYear: number
    targetA1C: number
    preferredUnit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMedicalProfileAvgAggregateInputType = {
    birthYear?: true
    targetA1C?: true
  }

  export type UserMedicalProfileSumAggregateInputType = {
    birthYear?: true
    targetA1C?: true
  }

  export type UserMedicalProfileMinAggregateInputType = {
    id?: true
    userId?: true
    diabetesType?: true
    birthYear?: true
    targetA1C?: true
    preferredUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMedicalProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    diabetesType?: true
    birthYear?: true
    targetA1C?: true
    preferredUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMedicalProfileCountAggregateInputType = {
    id?: true
    userId?: true
    diabetesType?: true
    birthYear?: true
    targetA1C?: true
    preferredUnit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserMedicalProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedicalProfile to aggregate.
     */
    where?: UserMedicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedicalProfiles to fetch.
     */
    orderBy?: UserMedicalProfileOrderByWithRelationInput | UserMedicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMedicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedicalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMedicalProfiles
    **/
    _count?: true | UserMedicalProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMedicalProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMedicalProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMedicalProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMedicalProfileMaxAggregateInputType
  }

  export type GetUserMedicalProfileAggregateType<T extends UserMedicalProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMedicalProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMedicalProfile[P]>
      : GetScalarType<T[P], AggregateUserMedicalProfile[P]>
  }




  export type UserMedicalProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMedicalProfileWhereInput
    orderBy?: UserMedicalProfileOrderByWithAggregationInput | UserMedicalProfileOrderByWithAggregationInput[]
    by: UserMedicalProfileScalarFieldEnum[] | UserMedicalProfileScalarFieldEnum
    having?: UserMedicalProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMedicalProfileCountAggregateInputType | true
    _avg?: UserMedicalProfileAvgAggregateInputType
    _sum?: UserMedicalProfileSumAggregateInputType
    _min?: UserMedicalProfileMinAggregateInputType
    _max?: UserMedicalProfileMaxAggregateInputType
  }

  export type UserMedicalProfileGroupByOutputType = {
    id: string
    userId: string
    diabetesType: $Enums.DiabetesType | null
    birthYear: number | null
    targetA1C: number | null
    preferredUnit: $Enums.GlucoseUnit
    createdAt: Date
    updatedAt: Date
    _count: UserMedicalProfileCountAggregateOutputType | null
    _avg: UserMedicalProfileAvgAggregateOutputType | null
    _sum: UserMedicalProfileSumAggregateOutputType | null
    _min: UserMedicalProfileMinAggregateOutputType | null
    _max: UserMedicalProfileMaxAggregateOutputType | null
  }

  type GetUserMedicalProfileGroupByPayload<T extends UserMedicalProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMedicalProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMedicalProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMedicalProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserMedicalProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserMedicalProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    diabetesType?: boolean
    birthYear?: boolean
    targetA1C?: boolean
    preferredUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedicalProfile"]>

  export type UserMedicalProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    diabetesType?: boolean
    birthYear?: boolean
    targetA1C?: boolean
    preferredUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedicalProfile"]>

  export type UserMedicalProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    diabetesType?: boolean
    birthYear?: boolean
    targetA1C?: boolean
    preferredUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedicalProfile"]>

  export type UserMedicalProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    diabetesType?: boolean
    birthYear?: boolean
    targetA1C?: boolean
    preferredUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserMedicalProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "diabetesType" | "birthYear" | "targetA1C" | "preferredUnit" | "createdAt" | "updatedAt", ExtArgs["result"]["userMedicalProfile"]>
  export type UserMedicalProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMedicalProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMedicalProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserMedicalProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMedicalProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      diabetesType: $Enums.DiabetesType | null
      birthYear: number | null
      targetA1C: number | null
      preferredUnit: $Enums.GlucoseUnit
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userMedicalProfile"]>
    composites: {}
  }

  type UserMedicalProfileGetPayload<S extends boolean | null | undefined | UserMedicalProfileDefaultArgs> = $Result.GetResult<Prisma.$UserMedicalProfilePayload, S>

  type UserMedicalProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMedicalProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMedicalProfileCountAggregateInputType | true
    }

  export interface UserMedicalProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMedicalProfile'], meta: { name: 'UserMedicalProfile' } }
    /**
     * Find zero or one UserMedicalProfile that matches the filter.
     * @param {UserMedicalProfileFindUniqueArgs} args - Arguments to find a UserMedicalProfile
     * @example
     * // Get one UserMedicalProfile
     * const userMedicalProfile = await prisma.userMedicalProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMedicalProfileFindUniqueArgs>(args: SelectSubset<T, UserMedicalProfileFindUniqueArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMedicalProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMedicalProfileFindUniqueOrThrowArgs} args - Arguments to find a UserMedicalProfile
     * @example
     * // Get one UserMedicalProfile
     * const userMedicalProfile = await prisma.userMedicalProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMedicalProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMedicalProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedicalProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMedicalProfileFindFirstArgs} args - Arguments to find a UserMedicalProfile
     * @example
     * // Get one UserMedicalProfile
     * const userMedicalProfile = await prisma.userMedicalProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMedicalProfileFindFirstArgs>(args?: SelectSubset<T, UserMedicalProfileFindFirstArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedicalProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMedicalProfileFindFirstOrThrowArgs} args - Arguments to find a UserMedicalProfile
     * @example
     * // Get one UserMedicalProfile
     * const userMedicalProfile = await prisma.userMedicalProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMedicalProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMedicalProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMedicalProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMedicalProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMedicalProfiles
     * const userMedicalProfiles = await prisma.userMedicalProfile.findMany()
     * 
     * // Get first 10 UserMedicalProfiles
     * const userMedicalProfiles = await prisma.userMedicalProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMedicalProfileWithIdOnly = await prisma.userMedicalProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMedicalProfileFindManyArgs>(args?: SelectSubset<T, UserMedicalProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMedicalProfile.
     * @param {UserMedicalProfileCreateArgs} args - Arguments to create a UserMedicalProfile.
     * @example
     * // Create one UserMedicalProfile
     * const UserMedicalProfile = await prisma.userMedicalProfile.create({
     *   data: {
     *     // ... data to create a UserMedicalProfile
     *   }
     * })
     * 
     */
    create<T extends UserMedicalProfileCreateArgs>(args: SelectSubset<T, UserMedicalProfileCreateArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMedicalProfiles.
     * @param {UserMedicalProfileCreateManyArgs} args - Arguments to create many UserMedicalProfiles.
     * @example
     * // Create many UserMedicalProfiles
     * const userMedicalProfile = await prisma.userMedicalProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMedicalProfileCreateManyArgs>(args?: SelectSubset<T, UserMedicalProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMedicalProfiles and returns the data saved in the database.
     * @param {UserMedicalProfileCreateManyAndReturnArgs} args - Arguments to create many UserMedicalProfiles.
     * @example
     * // Create many UserMedicalProfiles
     * const userMedicalProfile = await prisma.userMedicalProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMedicalProfiles and only return the `id`
     * const userMedicalProfileWithIdOnly = await prisma.userMedicalProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMedicalProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMedicalProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMedicalProfile.
     * @param {UserMedicalProfileDeleteArgs} args - Arguments to delete one UserMedicalProfile.
     * @example
     * // Delete one UserMedicalProfile
     * const UserMedicalProfile = await prisma.userMedicalProfile.delete({
     *   where: {
     *     // ... filter to delete one UserMedicalProfile
     *   }
     * })
     * 
     */
    delete<T extends UserMedicalProfileDeleteArgs>(args: SelectSubset<T, UserMedicalProfileDeleteArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMedicalProfile.
     * @param {UserMedicalProfileUpdateArgs} args - Arguments to update one UserMedicalProfile.
     * @example
     * // Update one UserMedicalProfile
     * const userMedicalProfile = await prisma.userMedicalProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMedicalProfileUpdateArgs>(args: SelectSubset<T, UserMedicalProfileUpdateArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMedicalProfiles.
     * @param {UserMedicalProfileDeleteManyArgs} args - Arguments to filter UserMedicalProfiles to delete.
     * @example
     * // Delete a few UserMedicalProfiles
     * const { count } = await prisma.userMedicalProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMedicalProfileDeleteManyArgs>(args?: SelectSubset<T, UserMedicalProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedicalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMedicalProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMedicalProfiles
     * const userMedicalProfile = await prisma.userMedicalProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMedicalProfileUpdateManyArgs>(args: SelectSubset<T, UserMedicalProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedicalProfiles and returns the data updated in the database.
     * @param {UserMedicalProfileUpdateManyAndReturnArgs} args - Arguments to update many UserMedicalProfiles.
     * @example
     * // Update many UserMedicalProfiles
     * const userMedicalProfile = await prisma.userMedicalProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMedicalProfiles and only return the `id`
     * const userMedicalProfileWithIdOnly = await prisma.userMedicalProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserMedicalProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMedicalProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMedicalProfile.
     * @param {UserMedicalProfileUpsertArgs} args - Arguments to update or create a UserMedicalProfile.
     * @example
     * // Update or create a UserMedicalProfile
     * const userMedicalProfile = await prisma.userMedicalProfile.upsert({
     *   create: {
     *     // ... data to create a UserMedicalProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMedicalProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserMedicalProfileUpsertArgs>(args: SelectSubset<T, UserMedicalProfileUpsertArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMedicalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMedicalProfileCountArgs} args - Arguments to filter UserMedicalProfiles to count.
     * @example
     * // Count the number of UserMedicalProfiles
     * const count = await prisma.userMedicalProfile.count({
     *   where: {
     *     // ... the filter for the UserMedicalProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserMedicalProfileCountArgs>(
      args?: Subset<T, UserMedicalProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMedicalProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMedicalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMedicalProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMedicalProfileAggregateArgs>(args: Subset<T, UserMedicalProfileAggregateArgs>): Prisma.PrismaPromise<GetUserMedicalProfileAggregateType<T>>

    /**
     * Group by UserMedicalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMedicalProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMedicalProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMedicalProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserMedicalProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMedicalProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMedicalProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMedicalProfile model
   */
  readonly fields: UserMedicalProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMedicalProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMedicalProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMedicalProfile model
   */
  interface UserMedicalProfileFieldRefs {
    readonly id: FieldRef<"UserMedicalProfile", 'String'>
    readonly userId: FieldRef<"UserMedicalProfile", 'String'>
    readonly diabetesType: FieldRef<"UserMedicalProfile", 'DiabetesType'>
    readonly birthYear: FieldRef<"UserMedicalProfile", 'Int'>
    readonly targetA1C: FieldRef<"UserMedicalProfile", 'Float'>
    readonly preferredUnit: FieldRef<"UserMedicalProfile", 'GlucoseUnit'>
    readonly createdAt: FieldRef<"UserMedicalProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserMedicalProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMedicalProfile findUnique
   */
  export type UserMedicalProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserMedicalProfile to fetch.
     */
    where: UserMedicalProfileWhereUniqueInput
  }

  /**
   * UserMedicalProfile findUniqueOrThrow
   */
  export type UserMedicalProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserMedicalProfile to fetch.
     */
    where: UserMedicalProfileWhereUniqueInput
  }

  /**
   * UserMedicalProfile findFirst
   */
  export type UserMedicalProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserMedicalProfile to fetch.
     */
    where?: UserMedicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedicalProfiles to fetch.
     */
    orderBy?: UserMedicalProfileOrderByWithRelationInput | UserMedicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedicalProfiles.
     */
    cursor?: UserMedicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedicalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedicalProfiles.
     */
    distinct?: UserMedicalProfileScalarFieldEnum | UserMedicalProfileScalarFieldEnum[]
  }

  /**
   * UserMedicalProfile findFirstOrThrow
   */
  export type UserMedicalProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserMedicalProfile to fetch.
     */
    where?: UserMedicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedicalProfiles to fetch.
     */
    orderBy?: UserMedicalProfileOrderByWithRelationInput | UserMedicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedicalProfiles.
     */
    cursor?: UserMedicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedicalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedicalProfiles.
     */
    distinct?: UserMedicalProfileScalarFieldEnum | UserMedicalProfileScalarFieldEnum[]
  }

  /**
   * UserMedicalProfile findMany
   */
  export type UserMedicalProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserMedicalProfiles to fetch.
     */
    where?: UserMedicalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedicalProfiles to fetch.
     */
    orderBy?: UserMedicalProfileOrderByWithRelationInput | UserMedicalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMedicalProfiles.
     */
    cursor?: UserMedicalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedicalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedicalProfiles.
     */
    skip?: number
    distinct?: UserMedicalProfileScalarFieldEnum | UserMedicalProfileScalarFieldEnum[]
  }

  /**
   * UserMedicalProfile create
   */
  export type UserMedicalProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMedicalProfile.
     */
    data: XOR<UserMedicalProfileCreateInput, UserMedicalProfileUncheckedCreateInput>
  }

  /**
   * UserMedicalProfile createMany
   */
  export type UserMedicalProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMedicalProfiles.
     */
    data: UserMedicalProfileCreateManyInput | UserMedicalProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMedicalProfile createManyAndReturn
   */
  export type UserMedicalProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserMedicalProfiles.
     */
    data: UserMedicalProfileCreateManyInput | UserMedicalProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedicalProfile update
   */
  export type UserMedicalProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMedicalProfile.
     */
    data: XOR<UserMedicalProfileUpdateInput, UserMedicalProfileUncheckedUpdateInput>
    /**
     * Choose, which UserMedicalProfile to update.
     */
    where: UserMedicalProfileWhereUniqueInput
  }

  /**
   * UserMedicalProfile updateMany
   */
  export type UserMedicalProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMedicalProfiles.
     */
    data: XOR<UserMedicalProfileUpdateManyMutationInput, UserMedicalProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserMedicalProfiles to update
     */
    where?: UserMedicalProfileWhereInput
    /**
     * Limit how many UserMedicalProfiles to update.
     */
    limit?: number
  }

  /**
   * UserMedicalProfile updateManyAndReturn
   */
  export type UserMedicalProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserMedicalProfiles.
     */
    data: XOR<UserMedicalProfileUpdateManyMutationInput, UserMedicalProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserMedicalProfiles to update
     */
    where?: UserMedicalProfileWhereInput
    /**
     * Limit how many UserMedicalProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedicalProfile upsert
   */
  export type UserMedicalProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMedicalProfile to update in case it exists.
     */
    where: UserMedicalProfileWhereUniqueInput
    /**
     * In case the UserMedicalProfile found by the `where` argument doesn't exist, create a new UserMedicalProfile with this data.
     */
    create: XOR<UserMedicalProfileCreateInput, UserMedicalProfileUncheckedCreateInput>
    /**
     * In case the UserMedicalProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMedicalProfileUpdateInput, UserMedicalProfileUncheckedUpdateInput>
  }

  /**
   * UserMedicalProfile delete
   */
  export type UserMedicalProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    /**
     * Filter which UserMedicalProfile to delete.
     */
    where: UserMedicalProfileWhereUniqueInput
  }

  /**
   * UserMedicalProfile deleteMany
   */
  export type UserMedicalProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedicalProfiles to delete
     */
    where?: UserMedicalProfileWhereInput
    /**
     * Limit how many UserMedicalProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserMedicalProfile without action
   */
  export type UserMedicalProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
  }


  /**
   * Model GlucoseReading
   */

  export type AggregateGlucoseReading = {
    _count: GlucoseReadingCountAggregateOutputType | null
    _avg: GlucoseReadingAvgAggregateOutputType | null
    _sum: GlucoseReadingSumAggregateOutputType | null
    _min: GlucoseReadingMinAggregateOutputType | null
    _max: GlucoseReadingMaxAggregateOutputType | null
  }

  export type GlucoseReadingAvgAggregateOutputType = {
    value: number | null
  }

  export type GlucoseReadingSumAggregateOutputType = {
    value: number | null
  }

  export type GlucoseReadingMinAggregateOutputType = {
    id: string | null
    value: number | null
    timestamp: Date | null
    mealContext: $Enums.MealContext | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    runId: string | null
  }

  export type GlucoseReadingMaxAggregateOutputType = {
    id: string | null
    value: number | null
    timestamp: Date | null
    mealContext: $Enums.MealContext | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    runId: string | null
  }

  export type GlucoseReadingCountAggregateOutputType = {
    id: number
    value: number
    timestamp: number
    mealContext: number
    notes: number
    createdAt: number
    updatedAt: number
    userId: number
    runId: number
    _all: number
  }


  export type GlucoseReadingAvgAggregateInputType = {
    value?: true
  }

  export type GlucoseReadingSumAggregateInputType = {
    value?: true
  }

  export type GlucoseReadingMinAggregateInputType = {
    id?: true
    value?: true
    timestamp?: true
    mealContext?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    runId?: true
  }

  export type GlucoseReadingMaxAggregateInputType = {
    id?: true
    value?: true
    timestamp?: true
    mealContext?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    runId?: true
  }

  export type GlucoseReadingCountAggregateInputType = {
    id?: true
    value?: true
    timestamp?: true
    mealContext?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    runId?: true
    _all?: true
  }

  export type GlucoseReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseReading to aggregate.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlucoseReadings
    **/
    _count?: true | GlucoseReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlucoseReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlucoseReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlucoseReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlucoseReadingMaxAggregateInputType
  }

  export type GetGlucoseReadingAggregateType<T extends GlucoseReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateGlucoseReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlucoseReading[P]>
      : GetScalarType<T[P], AggregateGlucoseReading[P]>
  }




  export type GlucoseReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlucoseReadingWhereInput
    orderBy?: GlucoseReadingOrderByWithAggregationInput | GlucoseReadingOrderByWithAggregationInput[]
    by: GlucoseReadingScalarFieldEnum[] | GlucoseReadingScalarFieldEnum
    having?: GlucoseReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlucoseReadingCountAggregateInputType | true
    _avg?: GlucoseReadingAvgAggregateInputType
    _sum?: GlucoseReadingSumAggregateInputType
    _min?: GlucoseReadingMinAggregateInputType
    _max?: GlucoseReadingMaxAggregateInputType
  }

  export type GlucoseReadingGroupByOutputType = {
    id: string
    value: number
    timestamp: Date
    mealContext: $Enums.MealContext
    notes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    runId: string | null
    _count: GlucoseReadingCountAggregateOutputType | null
    _avg: GlucoseReadingAvgAggregateOutputType | null
    _sum: GlucoseReadingSumAggregateOutputType | null
    _min: GlucoseReadingMinAggregateOutputType | null
    _max: GlucoseReadingMaxAggregateOutputType | null
  }

  type GetGlucoseReadingGroupByPayload<T extends GlucoseReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlucoseReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlucoseReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlucoseReadingGroupByOutputType[P]>
            : GetScalarType<T[P], GlucoseReadingGroupByOutputType[P]>
        }
      >
    >


  export type GlucoseReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    timestamp?: boolean
    mealContext?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    runId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    run?: boolean | GlucoseReading$runArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseReading"]>

  export type GlucoseReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    timestamp?: boolean
    mealContext?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    runId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    run?: boolean | GlucoseReading$runArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseReading"]>

  export type GlucoseReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    timestamp?: boolean
    mealContext?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    runId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    run?: boolean | GlucoseReading$runArgs<ExtArgs>
  }, ExtArgs["result"]["glucoseReading"]>

  export type GlucoseReadingSelectScalar = {
    id?: boolean
    value?: boolean
    timestamp?: boolean
    mealContext?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    runId?: boolean
  }

  export type GlucoseReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "timestamp" | "mealContext" | "notes" | "createdAt" | "updatedAt" | "userId" | "runId", ExtArgs["result"]["glucoseReading"]>
  export type GlucoseReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    run?: boolean | GlucoseReading$runArgs<ExtArgs>
  }
  export type GlucoseReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    run?: boolean | GlucoseReading$runArgs<ExtArgs>
  }
  export type GlucoseReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    run?: boolean | GlucoseReading$runArgs<ExtArgs>
  }

  export type $GlucoseReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlucoseReading"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      run: Prisma.$RunPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      timestamp: Date
      mealContext: $Enums.MealContext
      notes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      runId: string | null
    }, ExtArgs["result"]["glucoseReading"]>
    composites: {}
  }

  type GlucoseReadingGetPayload<S extends boolean | null | undefined | GlucoseReadingDefaultArgs> = $Result.GetResult<Prisma.$GlucoseReadingPayload, S>

  type GlucoseReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlucoseReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlucoseReadingCountAggregateInputType | true
    }

  export interface GlucoseReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlucoseReading'], meta: { name: 'GlucoseReading' } }
    /**
     * Find zero or one GlucoseReading that matches the filter.
     * @param {GlucoseReadingFindUniqueArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlucoseReadingFindUniqueArgs>(args: SelectSubset<T, GlucoseReadingFindUniqueArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlucoseReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlucoseReadingFindUniqueOrThrowArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlucoseReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, GlucoseReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlucoseReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingFindFirstArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlucoseReadingFindFirstArgs>(args?: SelectSubset<T, GlucoseReadingFindFirstArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlucoseReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingFindFirstOrThrowArgs} args - Arguments to find a GlucoseReading
     * @example
     * // Get one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlucoseReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, GlucoseReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlucoseReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlucoseReadings
     * const glucoseReadings = await prisma.glucoseReading.findMany()
     * 
     * // Get first 10 GlucoseReadings
     * const glucoseReadings = await prisma.glucoseReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glucoseReadingWithIdOnly = await prisma.glucoseReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlucoseReadingFindManyArgs>(args?: SelectSubset<T, GlucoseReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlucoseReading.
     * @param {GlucoseReadingCreateArgs} args - Arguments to create a GlucoseReading.
     * @example
     * // Create one GlucoseReading
     * const GlucoseReading = await prisma.glucoseReading.create({
     *   data: {
     *     // ... data to create a GlucoseReading
     *   }
     * })
     * 
     */
    create<T extends GlucoseReadingCreateArgs>(args: SelectSubset<T, GlucoseReadingCreateArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlucoseReadings.
     * @param {GlucoseReadingCreateManyArgs} args - Arguments to create many GlucoseReadings.
     * @example
     * // Create many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlucoseReadingCreateManyArgs>(args?: SelectSubset<T, GlucoseReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlucoseReadings and returns the data saved in the database.
     * @param {GlucoseReadingCreateManyAndReturnArgs} args - Arguments to create many GlucoseReadings.
     * @example
     * // Create many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlucoseReadings and only return the `id`
     * const glucoseReadingWithIdOnly = await prisma.glucoseReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlucoseReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, GlucoseReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlucoseReading.
     * @param {GlucoseReadingDeleteArgs} args - Arguments to delete one GlucoseReading.
     * @example
     * // Delete one GlucoseReading
     * const GlucoseReading = await prisma.glucoseReading.delete({
     *   where: {
     *     // ... filter to delete one GlucoseReading
     *   }
     * })
     * 
     */
    delete<T extends GlucoseReadingDeleteArgs>(args: SelectSubset<T, GlucoseReadingDeleteArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlucoseReading.
     * @param {GlucoseReadingUpdateArgs} args - Arguments to update one GlucoseReading.
     * @example
     * // Update one GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlucoseReadingUpdateArgs>(args: SelectSubset<T, GlucoseReadingUpdateArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlucoseReadings.
     * @param {GlucoseReadingDeleteManyArgs} args - Arguments to filter GlucoseReadings to delete.
     * @example
     * // Delete a few GlucoseReadings
     * const { count } = await prisma.glucoseReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlucoseReadingDeleteManyArgs>(args?: SelectSubset<T, GlucoseReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlucoseReadingUpdateManyArgs>(args: SelectSubset<T, GlucoseReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseReadings and returns the data updated in the database.
     * @param {GlucoseReadingUpdateManyAndReturnArgs} args - Arguments to update many GlucoseReadings.
     * @example
     * // Update many GlucoseReadings
     * const glucoseReading = await prisma.glucoseReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlucoseReadings and only return the `id`
     * const glucoseReadingWithIdOnly = await prisma.glucoseReading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlucoseReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, GlucoseReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlucoseReading.
     * @param {GlucoseReadingUpsertArgs} args - Arguments to update or create a GlucoseReading.
     * @example
     * // Update or create a GlucoseReading
     * const glucoseReading = await prisma.glucoseReading.upsert({
     *   create: {
     *     // ... data to create a GlucoseReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlucoseReading we want to update
     *   }
     * })
     */
    upsert<T extends GlucoseReadingUpsertArgs>(args: SelectSubset<T, GlucoseReadingUpsertArgs<ExtArgs>>): Prisma__GlucoseReadingClient<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlucoseReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingCountArgs} args - Arguments to filter GlucoseReadings to count.
     * @example
     * // Count the number of GlucoseReadings
     * const count = await prisma.glucoseReading.count({
     *   where: {
     *     // ... the filter for the GlucoseReadings we want to count
     *   }
     * })
    **/
    count<T extends GlucoseReadingCountArgs>(
      args?: Subset<T, GlucoseReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlucoseReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlucoseReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlucoseReadingAggregateArgs>(args: Subset<T, GlucoseReadingAggregateArgs>): Prisma.PrismaPromise<GetGlucoseReadingAggregateType<T>>

    /**
     * Group by GlucoseReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlucoseReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlucoseReadingGroupByArgs['orderBy'] }
        : { orderBy?: GlucoseReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlucoseReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlucoseReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlucoseReading model
   */
  readonly fields: GlucoseReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlucoseReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlucoseReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    run<T extends GlucoseReading$runArgs<ExtArgs> = {}>(args?: Subset<T, GlucoseReading$runArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlucoseReading model
   */
  interface GlucoseReadingFieldRefs {
    readonly id: FieldRef<"GlucoseReading", 'String'>
    readonly value: FieldRef<"GlucoseReading", 'Float'>
    readonly timestamp: FieldRef<"GlucoseReading", 'DateTime'>
    readonly mealContext: FieldRef<"GlucoseReading", 'MealContext'>
    readonly notes: FieldRef<"GlucoseReading", 'String'>
    readonly createdAt: FieldRef<"GlucoseReading", 'DateTime'>
    readonly updatedAt: FieldRef<"GlucoseReading", 'DateTime'>
    readonly userId: FieldRef<"GlucoseReading", 'String'>
    readonly runId: FieldRef<"GlucoseReading", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GlucoseReading findUnique
   */
  export type GlucoseReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading findUniqueOrThrow
   */
  export type GlucoseReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading findFirst
   */
  export type GlucoseReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseReadings.
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseReadings.
     */
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * GlucoseReading findFirstOrThrow
   */
  export type GlucoseReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReading to fetch.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseReadings.
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseReadings.
     */
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * GlucoseReading findMany
   */
  export type GlucoseReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter, which GlucoseReadings to fetch.
     */
    where?: GlucoseReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseReadings to fetch.
     */
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlucoseReadings.
     */
    cursor?: GlucoseReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseReadings.
     */
    skip?: number
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * GlucoseReading create
   */
  export type GlucoseReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a GlucoseReading.
     */
    data: XOR<GlucoseReadingCreateInput, GlucoseReadingUncheckedCreateInput>
  }

  /**
   * GlucoseReading createMany
   */
  export type GlucoseReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlucoseReadings.
     */
    data: GlucoseReadingCreateManyInput | GlucoseReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlucoseReading createManyAndReturn
   */
  export type GlucoseReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * The data used to create many GlucoseReadings.
     */
    data: GlucoseReadingCreateManyInput | GlucoseReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlucoseReading update
   */
  export type GlucoseReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a GlucoseReading.
     */
    data: XOR<GlucoseReadingUpdateInput, GlucoseReadingUncheckedUpdateInput>
    /**
     * Choose, which GlucoseReading to update.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading updateMany
   */
  export type GlucoseReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlucoseReadings.
     */
    data: XOR<GlucoseReadingUpdateManyMutationInput, GlucoseReadingUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseReadings to update
     */
    where?: GlucoseReadingWhereInput
    /**
     * Limit how many GlucoseReadings to update.
     */
    limit?: number
  }

  /**
   * GlucoseReading updateManyAndReturn
   */
  export type GlucoseReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * The data used to update GlucoseReadings.
     */
    data: XOR<GlucoseReadingUpdateManyMutationInput, GlucoseReadingUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseReadings to update
     */
    where?: GlucoseReadingWhereInput
    /**
     * Limit how many GlucoseReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GlucoseReading upsert
   */
  export type GlucoseReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the GlucoseReading to update in case it exists.
     */
    where: GlucoseReadingWhereUniqueInput
    /**
     * In case the GlucoseReading found by the `where` argument doesn't exist, create a new GlucoseReading with this data.
     */
    create: XOR<GlucoseReadingCreateInput, GlucoseReadingUncheckedCreateInput>
    /**
     * In case the GlucoseReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlucoseReadingUpdateInput, GlucoseReadingUncheckedUpdateInput>
  }

  /**
   * GlucoseReading delete
   */
  export type GlucoseReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    /**
     * Filter which GlucoseReading to delete.
     */
    where: GlucoseReadingWhereUniqueInput
  }

  /**
   * GlucoseReading deleteMany
   */
  export type GlucoseReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseReadings to delete
     */
    where?: GlucoseReadingWhereInput
    /**
     * Limit how many GlucoseReadings to delete.
     */
    limit?: number
  }

  /**
   * GlucoseReading.run
   */
  export type GlucoseReading$runArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
  }

  /**
   * GlucoseReading without action
   */
  export type GlucoseReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
  }


  /**
   * Model Run
   */

  export type AggregateRun = {
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  export type RunAvgAggregateOutputType = {
    calculatedA1C: number | null
    averageGlucose: number | null
  }

  export type RunSumAggregateOutputType = {
    calculatedA1C: number | null
    averageGlucose: number | null
  }

  export type RunMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    calculatedA1C: number | null
    averageGlucose: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    monthId: string | null
  }

  export type RunMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    calculatedA1C: number | null
    averageGlucose: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    monthId: string | null
  }

  export type RunCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    calculatedA1C: number
    averageGlucose: number
    createdAt: number
    updatedAt: number
    userId: number
    monthId: number
    _all: number
  }


  export type RunAvgAggregateInputType = {
    calculatedA1C?: true
    averageGlucose?: true
  }

  export type RunSumAggregateInputType = {
    calculatedA1C?: true
    averageGlucose?: true
  }

  export type RunMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    calculatedA1C?: true
    averageGlucose?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    monthId?: true
  }

  export type RunMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    calculatedA1C?: true
    averageGlucose?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    monthId?: true
  }

  export type RunCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    calculatedA1C?: true
    averageGlucose?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    monthId?: true
    _all?: true
  }

  export type RunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Run to aggregate.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Runs
    **/
    _count?: true | RunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunMaxAggregateInputType
  }

  export type GetRunAggregateType<T extends RunAggregateArgs> = {
        [P in keyof T & keyof AggregateRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRun[P]>
      : GetScalarType<T[P], AggregateRun[P]>
  }




  export type RunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
    orderBy?: RunOrderByWithAggregationInput | RunOrderByWithAggregationInput[]
    by: RunScalarFieldEnum[] | RunScalarFieldEnum
    having?: RunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunCountAggregateInputType | true
    _avg?: RunAvgAggregateInputType
    _sum?: RunSumAggregateInputType
    _min?: RunMinAggregateInputType
    _max?: RunMaxAggregateInputType
  }

  export type RunGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    calculatedA1C: number | null
    averageGlucose: number | null
    createdAt: Date
    updatedAt: Date
    userId: string
    monthId: string | null
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  type GetRunGroupByPayload<T extends RunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunGroupByOutputType[P]>
            : GetScalarType<T[P], RunGroupByOutputType[P]>
        }
      >
    >


  export type RunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    monthId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Run$readingsArgs<ExtArgs>
    month?: boolean | Run$monthArgs<ExtArgs>
    _count?: boolean | RunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    monthId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    month?: boolean | Run$monthArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    monthId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    month?: boolean | Run$monthArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    monthId?: boolean
  }

  export type RunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "calculatedA1C" | "averageGlucose" | "createdAt" | "updatedAt" | "userId" | "monthId", ExtArgs["result"]["run"]>
  export type RunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Run$readingsArgs<ExtArgs>
    month?: boolean | Run$monthArgs<ExtArgs>
    _count?: boolean | RunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    month?: boolean | Run$monthArgs<ExtArgs>
  }
  export type RunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    month?: boolean | Run$monthArgs<ExtArgs>
  }

  export type $RunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Run"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      readings: Prisma.$GlucoseReadingPayload<ExtArgs>[]
      month: Prisma.$MonthPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
      calculatedA1C: number | null
      averageGlucose: number | null
      createdAt: Date
      updatedAt: Date
      userId: string
      monthId: string | null
    }, ExtArgs["result"]["run"]>
    composites: {}
  }

  type RunGetPayload<S extends boolean | null | undefined | RunDefaultArgs> = $Result.GetResult<Prisma.$RunPayload, S>

  type RunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunCountAggregateInputType | true
    }

  export interface RunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Run'], meta: { name: 'Run' } }
    /**
     * Find zero or one Run that matches the filter.
     * @param {RunFindUniqueArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunFindUniqueArgs>(args: SelectSubset<T, RunFindUniqueArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Run that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunFindUniqueOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunFindUniqueOrThrowArgs>(args: SelectSubset<T, RunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunFindFirstArgs>(args?: SelectSubset<T, RunFindFirstArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunFindFirstOrThrowArgs>(args?: SelectSubset<T, RunFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Runs
     * const runs = await prisma.run.findMany()
     * 
     * // Get first 10 Runs
     * const runs = await prisma.run.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runWithIdOnly = await prisma.run.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunFindManyArgs>(args?: SelectSubset<T, RunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Run.
     * @param {RunCreateArgs} args - Arguments to create a Run.
     * @example
     * // Create one Run
     * const Run = await prisma.run.create({
     *   data: {
     *     // ... data to create a Run
     *   }
     * })
     * 
     */
    create<T extends RunCreateArgs>(args: SelectSubset<T, RunCreateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Runs.
     * @param {RunCreateManyArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunCreateManyArgs>(args?: SelectSubset<T, RunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Runs and returns the data saved in the database.
     * @param {RunCreateManyAndReturnArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunCreateManyAndReturnArgs>(args?: SelectSubset<T, RunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Run.
     * @param {RunDeleteArgs} args - Arguments to delete one Run.
     * @example
     * // Delete one Run
     * const Run = await prisma.run.delete({
     *   where: {
     *     // ... filter to delete one Run
     *   }
     * })
     * 
     */
    delete<T extends RunDeleteArgs>(args: SelectSubset<T, RunDeleteArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Run.
     * @param {RunUpdateArgs} args - Arguments to update one Run.
     * @example
     * // Update one Run
     * const run = await prisma.run.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunUpdateArgs>(args: SelectSubset<T, RunUpdateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Runs.
     * @param {RunDeleteManyArgs} args - Arguments to filter Runs to delete.
     * @example
     * // Delete a few Runs
     * const { count } = await prisma.run.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunDeleteManyArgs>(args?: SelectSubset<T, RunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunUpdateManyArgs>(args: SelectSubset<T, RunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs and returns the data updated in the database.
     * @param {RunUpdateManyAndReturnArgs} args - Arguments to update many Runs.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RunUpdateManyAndReturnArgs>(args: SelectSubset<T, RunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Run.
     * @param {RunUpsertArgs} args - Arguments to update or create a Run.
     * @example
     * // Update or create a Run
     * const run = await prisma.run.upsert({
     *   create: {
     *     // ... data to create a Run
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Run we want to update
     *   }
     * })
     */
    upsert<T extends RunUpsertArgs>(args: SelectSubset<T, RunUpsertArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCountArgs} args - Arguments to filter Runs to count.
     * @example
     * // Count the number of Runs
     * const count = await prisma.run.count({
     *   where: {
     *     // ... the filter for the Runs we want to count
     *   }
     * })
    **/
    count<T extends RunCountArgs>(
      args?: Subset<T, RunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RunAggregateArgs>(args: Subset<T, RunAggregateArgs>): Prisma.PrismaPromise<GetRunAggregateType<T>>

    /**
     * Group by Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunGroupByArgs['orderBy'] }
        : { orderBy?: RunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Run model
   */
  readonly fields: RunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Run.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    readings<T extends Run$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Run$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    month<T extends Run$monthArgs<ExtArgs> = {}>(args?: Subset<T, Run$monthArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Run model
   */
  interface RunFieldRefs {
    readonly id: FieldRef<"Run", 'String'>
    readonly name: FieldRef<"Run", 'String'>
    readonly startDate: FieldRef<"Run", 'DateTime'>
    readonly endDate: FieldRef<"Run", 'DateTime'>
    readonly calculatedA1C: FieldRef<"Run", 'Float'>
    readonly averageGlucose: FieldRef<"Run", 'Float'>
    readonly createdAt: FieldRef<"Run", 'DateTime'>
    readonly updatedAt: FieldRef<"Run", 'DateTime'>
    readonly userId: FieldRef<"Run", 'String'>
    readonly monthId: FieldRef<"Run", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Run findUnique
   */
  export type RunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findUniqueOrThrow
   */
  export type RunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findFirst
   */
  export type RunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findFirstOrThrow
   */
  export type RunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findMany
   */
  export type RunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Runs to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run create
   */
  export type RunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to create a Run.
     */
    data: XOR<RunCreateInput, RunUncheckedCreateInput>
  }

  /**
   * Run createMany
   */
  export type RunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Run createManyAndReturn
   */
  export type RunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run update
   */
  export type RunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to update a Run.
     */
    data: XOR<RunUpdateInput, RunUncheckedUpdateInput>
    /**
     * Choose, which Run to update.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run updateMany
   */
  export type RunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
  }

  /**
   * Run updateManyAndReturn
   */
  export type RunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run upsert
   */
  export type RunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The filter to search for the Run to update in case it exists.
     */
    where: RunWhereUniqueInput
    /**
     * In case the Run found by the `where` argument doesn't exist, create a new Run with this data.
     */
    create: XOR<RunCreateInput, RunUncheckedCreateInput>
    /**
     * In case the Run was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunUpdateInput, RunUncheckedUpdateInput>
  }

  /**
   * Run delete
   */
  export type RunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter which Run to delete.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run deleteMany
   */
  export type RunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Runs to delete
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to delete.
     */
    limit?: number
  }

  /**
   * Run.readings
   */
  export type Run$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    where?: GlucoseReadingWhereInput
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    cursor?: GlucoseReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * Run.month
   */
  export type Run$monthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    where?: MonthWhereInput
  }

  /**
   * Run without action
   */
  export type RunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
  }


  /**
   * Model Month
   */

  export type AggregateMonth = {
    _count: MonthCountAggregateOutputType | null
    _avg: MonthAvgAggregateOutputType | null
    _sum: MonthSumAggregateOutputType | null
    _min: MonthMinAggregateOutputType | null
    _max: MonthMaxAggregateOutputType | null
  }

  export type MonthAvgAggregateOutputType = {
    calculatedA1C: number | null
    averageGlucose: number | null
  }

  export type MonthSumAggregateOutputType = {
    calculatedA1C: number | null
    averageGlucose: number | null
  }

  export type MonthMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    calculatedA1C: number | null
    averageGlucose: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MonthMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    calculatedA1C: number | null
    averageGlucose: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MonthCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    calculatedA1C: number
    averageGlucose: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MonthAvgAggregateInputType = {
    calculatedA1C?: true
    averageGlucose?: true
  }

  export type MonthSumAggregateInputType = {
    calculatedA1C?: true
    averageGlucose?: true
  }

  export type MonthMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    calculatedA1C?: true
    averageGlucose?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MonthMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    calculatedA1C?: true
    averageGlucose?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MonthCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    calculatedA1C?: true
    averageGlucose?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MonthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Month to aggregate.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Months
    **/
    _count?: true | MonthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthMaxAggregateInputType
  }

  export type GetMonthAggregateType<T extends MonthAggregateArgs> = {
        [P in keyof T & keyof AggregateMonth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonth[P]>
      : GetScalarType<T[P], AggregateMonth[P]>
  }




  export type MonthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthWhereInput
    orderBy?: MonthOrderByWithAggregationInput | MonthOrderByWithAggregationInput[]
    by: MonthScalarFieldEnum[] | MonthScalarFieldEnum
    having?: MonthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthCountAggregateInputType | true
    _avg?: MonthAvgAggregateInputType
    _sum?: MonthSumAggregateInputType
    _min?: MonthMinAggregateInputType
    _max?: MonthMaxAggregateInputType
  }

  export type MonthGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    calculatedA1C: number | null
    averageGlucose: number | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: MonthCountAggregateOutputType | null
    _avg: MonthAvgAggregateOutputType | null
    _sum: MonthSumAggregateOutputType | null
    _min: MonthMinAggregateOutputType | null
    _max: MonthMaxAggregateOutputType | null
  }

  type GetMonthGroupByPayload<T extends MonthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthGroupByOutputType[P]>
            : GetScalarType<T[P], MonthGroupByOutputType[P]>
        }
      >
    >


  export type MonthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    runs?: boolean | Month$runsArgs<ExtArgs>
    _count?: boolean | MonthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["month"]>

  export type MonthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["month"]>

  export type MonthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["month"]>

  export type MonthSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    calculatedA1C?: boolean
    averageGlucose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MonthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "calculatedA1C" | "averageGlucose" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["month"]>
  export type MonthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    runs?: boolean | Month$runsArgs<ExtArgs>
    _count?: boolean | MonthCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MonthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MonthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Month"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      runs: Prisma.$RunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
      calculatedA1C: number | null
      averageGlucose: number | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["month"]>
    composites: {}
  }

  type MonthGetPayload<S extends boolean | null | undefined | MonthDefaultArgs> = $Result.GetResult<Prisma.$MonthPayload, S>

  type MonthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthCountAggregateInputType | true
    }

  export interface MonthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Month'], meta: { name: 'Month' } }
    /**
     * Find zero or one Month that matches the filter.
     * @param {MonthFindUniqueArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthFindUniqueArgs>(args: SelectSubset<T, MonthFindUniqueArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Month that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthFindUniqueOrThrowArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Month that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindFirstArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthFindFirstArgs>(args?: SelectSubset<T, MonthFindFirstArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Month that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindFirstOrThrowArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Months that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Months
     * const months = await prisma.month.findMany()
     * 
     * // Get first 10 Months
     * const months = await prisma.month.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthWithIdOnly = await prisma.month.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthFindManyArgs>(args?: SelectSubset<T, MonthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Month.
     * @param {MonthCreateArgs} args - Arguments to create a Month.
     * @example
     * // Create one Month
     * const Month = await prisma.month.create({
     *   data: {
     *     // ... data to create a Month
     *   }
     * })
     * 
     */
    create<T extends MonthCreateArgs>(args: SelectSubset<T, MonthCreateArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Months.
     * @param {MonthCreateManyArgs} args - Arguments to create many Months.
     * @example
     * // Create many Months
     * const month = await prisma.month.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthCreateManyArgs>(args?: SelectSubset<T, MonthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Months and returns the data saved in the database.
     * @param {MonthCreateManyAndReturnArgs} args - Arguments to create many Months.
     * @example
     * // Create many Months
     * const month = await prisma.month.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Months and only return the `id`
     * const monthWithIdOnly = await prisma.month.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Month.
     * @param {MonthDeleteArgs} args - Arguments to delete one Month.
     * @example
     * // Delete one Month
     * const Month = await prisma.month.delete({
     *   where: {
     *     // ... filter to delete one Month
     *   }
     * })
     * 
     */
    delete<T extends MonthDeleteArgs>(args: SelectSubset<T, MonthDeleteArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Month.
     * @param {MonthUpdateArgs} args - Arguments to update one Month.
     * @example
     * // Update one Month
     * const month = await prisma.month.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthUpdateArgs>(args: SelectSubset<T, MonthUpdateArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Months.
     * @param {MonthDeleteManyArgs} args - Arguments to filter Months to delete.
     * @example
     * // Delete a few Months
     * const { count } = await prisma.month.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthDeleteManyArgs>(args?: SelectSubset<T, MonthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Months
     * const month = await prisma.month.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthUpdateManyArgs>(args: SelectSubset<T, MonthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Months and returns the data updated in the database.
     * @param {MonthUpdateManyAndReturnArgs} args - Arguments to update many Months.
     * @example
     * // Update many Months
     * const month = await prisma.month.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Months and only return the `id`
     * const monthWithIdOnly = await prisma.month.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Month.
     * @param {MonthUpsertArgs} args - Arguments to update or create a Month.
     * @example
     * // Update or create a Month
     * const month = await prisma.month.upsert({
     *   create: {
     *     // ... data to create a Month
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Month we want to update
     *   }
     * })
     */
    upsert<T extends MonthUpsertArgs>(args: SelectSubset<T, MonthUpsertArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthCountArgs} args - Arguments to filter Months to count.
     * @example
     * // Count the number of Months
     * const count = await prisma.month.count({
     *   where: {
     *     // ... the filter for the Months we want to count
     *   }
     * })
    **/
    count<T extends MonthCountArgs>(
      args?: Subset<T, MonthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Month.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthAggregateArgs>(args: Subset<T, MonthAggregateArgs>): Prisma.PrismaPromise<GetMonthAggregateType<T>>

    /**
     * Group by Month.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthGroupByArgs['orderBy'] }
        : { orderBy?: MonthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Month model
   */
  readonly fields: MonthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Month.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    runs<T extends Month$runsArgs<ExtArgs> = {}>(args?: Subset<T, Month$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Month model
   */
  interface MonthFieldRefs {
    readonly id: FieldRef<"Month", 'String'>
    readonly name: FieldRef<"Month", 'String'>
    readonly startDate: FieldRef<"Month", 'DateTime'>
    readonly endDate: FieldRef<"Month", 'DateTime'>
    readonly calculatedA1C: FieldRef<"Month", 'Float'>
    readonly averageGlucose: FieldRef<"Month", 'Float'>
    readonly createdAt: FieldRef<"Month", 'DateTime'>
    readonly updatedAt: FieldRef<"Month", 'DateTime'>
    readonly userId: FieldRef<"Month", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Month findUnique
   */
  export type MonthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month findUniqueOrThrow
   */
  export type MonthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month findFirst
   */
  export type MonthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Months.
     */
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * Month findFirstOrThrow
   */
  export type MonthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Months.
     */
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * Month findMany
   */
  export type MonthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Months to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * Month create
   */
  export type MonthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The data needed to create a Month.
     */
    data: XOR<MonthCreateInput, MonthUncheckedCreateInput>
  }

  /**
   * Month createMany
   */
  export type MonthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Months.
     */
    data: MonthCreateManyInput | MonthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Month createManyAndReturn
   */
  export type MonthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * The data used to create many Months.
     */
    data: MonthCreateManyInput | MonthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Month update
   */
  export type MonthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The data needed to update a Month.
     */
    data: XOR<MonthUpdateInput, MonthUncheckedUpdateInput>
    /**
     * Choose, which Month to update.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month updateMany
   */
  export type MonthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Months.
     */
    data: XOR<MonthUpdateManyMutationInput, MonthUncheckedUpdateManyInput>
    /**
     * Filter which Months to update
     */
    where?: MonthWhereInput
    /**
     * Limit how many Months to update.
     */
    limit?: number
  }

  /**
   * Month updateManyAndReturn
   */
  export type MonthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * The data used to update Months.
     */
    data: XOR<MonthUpdateManyMutationInput, MonthUncheckedUpdateManyInput>
    /**
     * Filter which Months to update
     */
    where?: MonthWhereInput
    /**
     * Limit how many Months to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Month upsert
   */
  export type MonthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The filter to search for the Month to update in case it exists.
     */
    where: MonthWhereUniqueInput
    /**
     * In case the Month found by the `where` argument doesn't exist, create a new Month with this data.
     */
    create: XOR<MonthCreateInput, MonthUncheckedCreateInput>
    /**
     * In case the Month was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthUpdateInput, MonthUncheckedUpdateInput>
  }

  /**
   * Month delete
   */
  export type MonthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter which Month to delete.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month deleteMany
   */
  export type MonthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Months to delete
     */
    where?: MonthWhereInput
    /**
     * Limit how many Months to delete.
     */
    limit?: number
  }

  /**
   * Month.runs
   */
  export type Month$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    cursor?: RunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Month without action
   */
  export type MonthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    targetA1C: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    targetA1C: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    displayUnit: $Enums.DisplayUnit | null
    targetA1C: number | null
    reminderEnabled: boolean | null
    reminderFrequency: $Enums.ReminderFrequency | null
    theme: $Enums.Theme | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    displayUnit: $Enums.DisplayUnit | null
    targetA1C: number | null
    reminderEnabled: boolean | null
    reminderFrequency: $Enums.ReminderFrequency | null
    theme: $Enums.Theme | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    displayUnit: number
    targetA1C: number
    reminderEnabled: number
    reminderFrequency: number
    theme: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    targetA1C?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    targetA1C?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    displayUnit?: true
    targetA1C?: true
    reminderEnabled?: true
    reminderFrequency?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    displayUnit?: true
    targetA1C?: true
    reminderEnabled?: true
    reminderFrequency?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    displayUnit?: true
    targetA1C?: true
    reminderEnabled?: true
    reminderFrequency?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    displayUnit: $Enums.DisplayUnit
    targetA1C: number | null
    reminderEnabled: boolean
    reminderFrequency: $Enums.ReminderFrequency
    theme: $Enums.Theme
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayUnit?: boolean
    targetA1C?: boolean
    reminderEnabled?: boolean
    reminderFrequency?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayUnit?: boolean
    targetA1C?: boolean
    reminderEnabled?: boolean
    reminderFrequency?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayUnit?: boolean
    targetA1C?: boolean
    reminderEnabled?: boolean
    reminderFrequency?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    displayUnit?: boolean
    targetA1C?: boolean
    reminderEnabled?: boolean
    reminderFrequency?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayUnit" | "targetA1C" | "reminderEnabled" | "reminderFrequency" | "theme" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayUnit: $Enums.DisplayUnit
      targetA1C: number | null
      reminderEnabled: boolean
      reminderFrequency: $Enums.ReminderFrequency
      theme: $Enums.Theme
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly displayUnit: FieldRef<"UserPreferences", 'DisplayUnit'>
    readonly targetA1C: FieldRef<"UserPreferences", 'Float'>
    readonly reminderEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly reminderFrequency: FieldRef<"UserPreferences", 'ReminderFrequency'>
    readonly theme: FieldRef<"UserPreferences", 'Theme'>
    readonly createdAt: FieldRef<"UserPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    medicalProfile?: boolean | User$medicalProfileArgs<ExtArgs>
    glucoseReadings?: boolean | User$glucoseReadingsArgs<ExtArgs>
    runs?: boolean | User$runsArgs<ExtArgs>
    months?: boolean | User$monthsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    medicalProfile?: boolean | User$medicalProfileArgs<ExtArgs>
    glucoseReadings?: boolean | User$glucoseReadingsArgs<ExtArgs>
    runs?: boolean | User$runsArgs<ExtArgs>
    months?: boolean | User$monthsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      medicalProfile: Prisma.$UserMedicalProfilePayload<ExtArgs> | null
      glucoseReadings: Prisma.$GlucoseReadingPayload<ExtArgs>[]
      runs: Prisma.$RunPayload<ExtArgs>[]
      months: Prisma.$MonthPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    medicalProfile<T extends User$medicalProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$medicalProfileArgs<ExtArgs>>): Prisma__UserMedicalProfileClient<$Result.GetResult<Prisma.$UserMedicalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    glucoseReadings<T extends User$glucoseReadingsArgs<ExtArgs> = {}>(args?: Subset<T, User$glucoseReadingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    runs<T extends User$runsArgs<ExtArgs> = {}>(args?: Subset<T, User$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    months<T extends User$monthsArgs<ExtArgs> = {}>(args?: Subset<T, User$monthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.medicalProfile
   */
  export type User$medicalProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedicalProfile
     */
    select?: UserMedicalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedicalProfile
     */
    omit?: UserMedicalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMedicalProfileInclude<ExtArgs> | null
    where?: UserMedicalProfileWhereInput
  }

  /**
   * User.glucoseReadings
   */
  export type User$glucoseReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseReading
     */
    select?: GlucoseReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseReading
     */
    omit?: GlucoseReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlucoseReadingInclude<ExtArgs> | null
    where?: GlucoseReadingWhereInput
    orderBy?: GlucoseReadingOrderByWithRelationInput | GlucoseReadingOrderByWithRelationInput[]
    cursor?: GlucoseReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GlucoseReadingScalarFieldEnum | GlucoseReadingScalarFieldEnum[]
  }

  /**
   * User.runs
   */
  export type User$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    cursor?: RunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * User.months
   */
  export type User$monthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    where?: MonthWhereInput
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    cursor?: MonthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserMedicalProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    diabetesType: 'diabetesType',
    birthYear: 'birthYear',
    targetA1C: 'targetA1C',
    preferredUnit: 'preferredUnit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserMedicalProfileScalarFieldEnum = (typeof UserMedicalProfileScalarFieldEnum)[keyof typeof UserMedicalProfileScalarFieldEnum]


  export const GlucoseReadingScalarFieldEnum: {
    id: 'id',
    value: 'value',
    timestamp: 'timestamp',
    mealContext: 'mealContext',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    runId: 'runId'
  };

  export type GlucoseReadingScalarFieldEnum = (typeof GlucoseReadingScalarFieldEnum)[keyof typeof GlucoseReadingScalarFieldEnum]


  export const RunScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    calculatedA1C: 'calculatedA1C',
    averageGlucose: 'averageGlucose',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    monthId: 'monthId'
  };

  export type RunScalarFieldEnum = (typeof RunScalarFieldEnum)[keyof typeof RunScalarFieldEnum]


  export const MonthScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    calculatedA1C: 'calculatedA1C',
    averageGlucose: 'averageGlucose',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MonthScalarFieldEnum = (typeof MonthScalarFieldEnum)[keyof typeof MonthScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    displayUnit: 'displayUnit',
    targetA1C: 'targetA1C',
    reminderEnabled: 'reminderEnabled',
    reminderFrequency: 'reminderFrequency',
    theme: 'theme',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DiabetesType'
   */
  export type EnumDiabetesTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiabetesType'>
    


  /**
   * Reference to a field of type 'DiabetesType[]'
   */
  export type ListEnumDiabetesTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiabetesType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'GlucoseUnit'
   */
  export type EnumGlucoseUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlucoseUnit'>
    


  /**
   * Reference to a field of type 'GlucoseUnit[]'
   */
  export type ListEnumGlucoseUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlucoseUnit[]'>
    


  /**
   * Reference to a field of type 'MealContext'
   */
  export type EnumMealContextFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealContext'>
    


  /**
   * Reference to a field of type 'MealContext[]'
   */
  export type ListEnumMealContextFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealContext[]'>
    


  /**
   * Reference to a field of type 'DisplayUnit'
   */
  export type EnumDisplayUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisplayUnit'>
    


  /**
   * Reference to a field of type 'DisplayUnit[]'
   */
  export type ListEnumDisplayUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisplayUnit[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReminderFrequency'
   */
  export type EnumReminderFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReminderFrequency'>
    


  /**
   * Reference to a field of type 'ReminderFrequency[]'
   */
  export type ListEnumReminderFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReminderFrequency[]'>
    


  /**
   * Reference to a field of type 'Theme'
   */
  export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>
    


  /**
   * Reference to a field of type 'Theme[]'
   */
  export type ListEnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserMedicalProfileWhereInput = {
    AND?: UserMedicalProfileWhereInput | UserMedicalProfileWhereInput[]
    OR?: UserMedicalProfileWhereInput[]
    NOT?: UserMedicalProfileWhereInput | UserMedicalProfileWhereInput[]
    id?: StringFilter<"UserMedicalProfile"> | string
    userId?: StringFilter<"UserMedicalProfile"> | string
    diabetesType?: EnumDiabetesTypeNullableFilter<"UserMedicalProfile"> | $Enums.DiabetesType | null
    birthYear?: IntNullableFilter<"UserMedicalProfile"> | number | null
    targetA1C?: FloatNullableFilter<"UserMedicalProfile"> | number | null
    preferredUnit?: EnumGlucoseUnitFilter<"UserMedicalProfile"> | $Enums.GlucoseUnit
    createdAt?: DateTimeFilter<"UserMedicalProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserMedicalProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserMedicalProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    diabetesType?: SortOrderInput | SortOrder
    birthYear?: SortOrderInput | SortOrder
    targetA1C?: SortOrderInput | SortOrder
    preferredUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserMedicalProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserMedicalProfileWhereInput | UserMedicalProfileWhereInput[]
    OR?: UserMedicalProfileWhereInput[]
    NOT?: UserMedicalProfileWhereInput | UserMedicalProfileWhereInput[]
    diabetesType?: EnumDiabetesTypeNullableFilter<"UserMedicalProfile"> | $Enums.DiabetesType | null
    birthYear?: IntNullableFilter<"UserMedicalProfile"> | number | null
    targetA1C?: FloatNullableFilter<"UserMedicalProfile"> | number | null
    preferredUnit?: EnumGlucoseUnitFilter<"UserMedicalProfile"> | $Enums.GlucoseUnit
    createdAt?: DateTimeFilter<"UserMedicalProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserMedicalProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserMedicalProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    diabetesType?: SortOrderInput | SortOrder
    birthYear?: SortOrderInput | SortOrder
    targetA1C?: SortOrderInput | SortOrder
    preferredUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserMedicalProfileCountOrderByAggregateInput
    _avg?: UserMedicalProfileAvgOrderByAggregateInput
    _max?: UserMedicalProfileMaxOrderByAggregateInput
    _min?: UserMedicalProfileMinOrderByAggregateInput
    _sum?: UserMedicalProfileSumOrderByAggregateInput
  }

  export type UserMedicalProfileScalarWhereWithAggregatesInput = {
    AND?: UserMedicalProfileScalarWhereWithAggregatesInput | UserMedicalProfileScalarWhereWithAggregatesInput[]
    OR?: UserMedicalProfileScalarWhereWithAggregatesInput[]
    NOT?: UserMedicalProfileScalarWhereWithAggregatesInput | UserMedicalProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMedicalProfile"> | string
    userId?: StringWithAggregatesFilter<"UserMedicalProfile"> | string
    diabetesType?: EnumDiabetesTypeNullableWithAggregatesFilter<"UserMedicalProfile"> | $Enums.DiabetesType | null
    birthYear?: IntNullableWithAggregatesFilter<"UserMedicalProfile"> | number | null
    targetA1C?: FloatNullableWithAggregatesFilter<"UserMedicalProfile"> | number | null
    preferredUnit?: EnumGlucoseUnitWithAggregatesFilter<"UserMedicalProfile"> | $Enums.GlucoseUnit
    createdAt?: DateTimeWithAggregatesFilter<"UserMedicalProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserMedicalProfile"> | Date | string
  }

  export type GlucoseReadingWhereInput = {
    AND?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    OR?: GlucoseReadingWhereInput[]
    NOT?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    id?: StringFilter<"GlucoseReading"> | string
    value?: FloatFilter<"GlucoseReading"> | number
    timestamp?: DateTimeFilter<"GlucoseReading"> | Date | string
    mealContext?: EnumMealContextFilter<"GlucoseReading"> | $Enums.MealContext
    notes?: StringNullableFilter<"GlucoseReading"> | string | null
    createdAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    userId?: StringFilter<"GlucoseReading"> | string
    runId?: StringNullableFilter<"GlucoseReading"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    run?: XOR<RunNullableScalarRelationFilter, RunWhereInput> | null
  }

  export type GlucoseReadingOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    mealContext?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    runId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    run?: RunOrderByWithRelationInput
  }

  export type GlucoseReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    OR?: GlucoseReadingWhereInput[]
    NOT?: GlucoseReadingWhereInput | GlucoseReadingWhereInput[]
    value?: FloatFilter<"GlucoseReading"> | number
    timestamp?: DateTimeFilter<"GlucoseReading"> | Date | string
    mealContext?: EnumMealContextFilter<"GlucoseReading"> | $Enums.MealContext
    notes?: StringNullableFilter<"GlucoseReading"> | string | null
    createdAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    userId?: StringFilter<"GlucoseReading"> | string
    runId?: StringNullableFilter<"GlucoseReading"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    run?: XOR<RunNullableScalarRelationFilter, RunWhereInput> | null
  }, "id">

  export type GlucoseReadingOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    mealContext?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    runId?: SortOrderInput | SortOrder
    _count?: GlucoseReadingCountOrderByAggregateInput
    _avg?: GlucoseReadingAvgOrderByAggregateInput
    _max?: GlucoseReadingMaxOrderByAggregateInput
    _min?: GlucoseReadingMinOrderByAggregateInput
    _sum?: GlucoseReadingSumOrderByAggregateInput
  }

  export type GlucoseReadingScalarWhereWithAggregatesInput = {
    AND?: GlucoseReadingScalarWhereWithAggregatesInput | GlucoseReadingScalarWhereWithAggregatesInput[]
    OR?: GlucoseReadingScalarWhereWithAggregatesInput[]
    NOT?: GlucoseReadingScalarWhereWithAggregatesInput | GlucoseReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlucoseReading"> | string
    value?: FloatWithAggregatesFilter<"GlucoseReading"> | number
    timestamp?: DateTimeWithAggregatesFilter<"GlucoseReading"> | Date | string
    mealContext?: EnumMealContextWithAggregatesFilter<"GlucoseReading"> | $Enums.MealContext
    notes?: StringNullableWithAggregatesFilter<"GlucoseReading"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlucoseReading"> | Date | string
    userId?: StringWithAggregatesFilter<"GlucoseReading"> | string
    runId?: StringNullableWithAggregatesFilter<"GlucoseReading"> | string | null
  }

  export type RunWhereInput = {
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    id?: StringFilter<"Run"> | string
    name?: StringFilter<"Run"> | string
    startDate?: DateTimeFilter<"Run"> | Date | string
    endDate?: DateTimeFilter<"Run"> | Date | string
    calculatedA1C?: FloatNullableFilter<"Run"> | number | null
    averageGlucose?: FloatNullableFilter<"Run"> | number | null
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
    userId?: StringFilter<"Run"> | string
    monthId?: StringNullableFilter<"Run"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    readings?: GlucoseReadingListRelationFilter
    month?: XOR<MonthNullableScalarRelationFilter, MonthWhereInput> | null
  }

  export type RunOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrderInput | SortOrder
    averageGlucose?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    monthId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    readings?: GlucoseReadingOrderByRelationAggregateInput
    month?: MonthOrderByWithRelationInput
  }

  export type RunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    name?: StringFilter<"Run"> | string
    startDate?: DateTimeFilter<"Run"> | Date | string
    endDate?: DateTimeFilter<"Run"> | Date | string
    calculatedA1C?: FloatNullableFilter<"Run"> | number | null
    averageGlucose?: FloatNullableFilter<"Run"> | number | null
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
    userId?: StringFilter<"Run"> | string
    monthId?: StringNullableFilter<"Run"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    readings?: GlucoseReadingListRelationFilter
    month?: XOR<MonthNullableScalarRelationFilter, MonthWhereInput> | null
  }, "id">

  export type RunOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrderInput | SortOrder
    averageGlucose?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    monthId?: SortOrderInput | SortOrder
    _count?: RunCountOrderByAggregateInput
    _avg?: RunAvgOrderByAggregateInput
    _max?: RunMaxOrderByAggregateInput
    _min?: RunMinOrderByAggregateInput
    _sum?: RunSumOrderByAggregateInput
  }

  export type RunScalarWhereWithAggregatesInput = {
    AND?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    OR?: RunScalarWhereWithAggregatesInput[]
    NOT?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Run"> | string
    name?: StringWithAggregatesFilter<"Run"> | string
    startDate?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    calculatedA1C?: FloatNullableWithAggregatesFilter<"Run"> | number | null
    averageGlucose?: FloatNullableWithAggregatesFilter<"Run"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    userId?: StringWithAggregatesFilter<"Run"> | string
    monthId?: StringNullableWithAggregatesFilter<"Run"> | string | null
  }

  export type MonthWhereInput = {
    AND?: MonthWhereInput | MonthWhereInput[]
    OR?: MonthWhereInput[]
    NOT?: MonthWhereInput | MonthWhereInput[]
    id?: StringFilter<"Month"> | string
    name?: StringFilter<"Month"> | string
    startDate?: DateTimeFilter<"Month"> | Date | string
    endDate?: DateTimeFilter<"Month"> | Date | string
    calculatedA1C?: FloatNullableFilter<"Month"> | number | null
    averageGlucose?: FloatNullableFilter<"Month"> | number | null
    createdAt?: DateTimeFilter<"Month"> | Date | string
    updatedAt?: DateTimeFilter<"Month"> | Date | string
    userId?: StringFilter<"Month"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    runs?: RunListRelationFilter
  }

  export type MonthOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrderInput | SortOrder
    averageGlucose?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    runs?: RunOrderByRelationAggregateInput
  }

  export type MonthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthWhereInput | MonthWhereInput[]
    OR?: MonthWhereInput[]
    NOT?: MonthWhereInput | MonthWhereInput[]
    name?: StringFilter<"Month"> | string
    startDate?: DateTimeFilter<"Month"> | Date | string
    endDate?: DateTimeFilter<"Month"> | Date | string
    calculatedA1C?: FloatNullableFilter<"Month"> | number | null
    averageGlucose?: FloatNullableFilter<"Month"> | number | null
    createdAt?: DateTimeFilter<"Month"> | Date | string
    updatedAt?: DateTimeFilter<"Month"> | Date | string
    userId?: StringFilter<"Month"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    runs?: RunListRelationFilter
  }, "id">

  export type MonthOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrderInput | SortOrder
    averageGlucose?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: MonthCountOrderByAggregateInput
    _avg?: MonthAvgOrderByAggregateInput
    _max?: MonthMaxOrderByAggregateInput
    _min?: MonthMinOrderByAggregateInput
    _sum?: MonthSumOrderByAggregateInput
  }

  export type MonthScalarWhereWithAggregatesInput = {
    AND?: MonthScalarWhereWithAggregatesInput | MonthScalarWhereWithAggregatesInput[]
    OR?: MonthScalarWhereWithAggregatesInput[]
    NOT?: MonthScalarWhereWithAggregatesInput | MonthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Month"> | string
    name?: StringWithAggregatesFilter<"Month"> | string
    startDate?: DateTimeWithAggregatesFilter<"Month"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Month"> | Date | string
    calculatedA1C?: FloatNullableWithAggregatesFilter<"Month"> | number | null
    averageGlucose?: FloatNullableWithAggregatesFilter<"Month"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Month"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Month"> | Date | string
    userId?: StringWithAggregatesFilter<"Month"> | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    displayUnit?: EnumDisplayUnitFilter<"UserPreferences"> | $Enums.DisplayUnit
    targetA1C?: FloatNullableFilter<"UserPreferences"> | number | null
    reminderEnabled?: BoolFilter<"UserPreferences"> | boolean
    reminderFrequency?: EnumReminderFrequencyFilter<"UserPreferences"> | $Enums.ReminderFrequency
    theme?: EnumThemeFilter<"UserPreferences"> | $Enums.Theme
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    userId?: StringFilter<"UserPreferences"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    displayUnit?: SortOrder
    targetA1C?: SortOrderInput | SortOrder
    reminderEnabled?: SortOrder
    reminderFrequency?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    displayUnit?: EnumDisplayUnitFilter<"UserPreferences"> | $Enums.DisplayUnit
    targetA1C?: FloatNullableFilter<"UserPreferences"> | number | null
    reminderEnabled?: BoolFilter<"UserPreferences"> | boolean
    reminderFrequency?: EnumReminderFrequencyFilter<"UserPreferences"> | $Enums.ReminderFrequency
    theme?: EnumThemeFilter<"UserPreferences"> | $Enums.Theme
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    displayUnit?: SortOrder
    targetA1C?: SortOrderInput | SortOrder
    reminderEnabled?: SortOrder
    reminderFrequency?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    displayUnit?: EnumDisplayUnitWithAggregatesFilter<"UserPreferences"> | $Enums.DisplayUnit
    targetA1C?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    reminderEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    reminderFrequency?: EnumReminderFrequencyWithAggregatesFilter<"UserPreferences"> | $Enums.ReminderFrequency
    theme?: EnumThemeWithAggregatesFilter<"UserPreferences"> | $Enums.Theme
    createdAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    medicalProfile?: XOR<UserMedicalProfileNullableScalarRelationFilter, UserMedicalProfileWhereInput> | null
    glucoseReadings?: GlucoseReadingListRelationFilter
    runs?: RunListRelationFilter
    months?: MonthListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    preferences?: UserPreferencesOrderByWithRelationInput
    medicalProfile?: UserMedicalProfileOrderByWithRelationInput
    glucoseReadings?: GlucoseReadingOrderByRelationAggregateInput
    runs?: RunOrderByRelationAggregateInput
    months?: MonthOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    medicalProfile?: XOR<UserMedicalProfileNullableScalarRelationFilter, UserMedicalProfileWhereInput> | null
    glucoseReadings?: GlucoseReadingListRelationFilter
    runs?: RunListRelationFilter
    months?: MonthListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMedicalProfileCreateInput = {
    id?: string
    diabetesType?: $Enums.DiabetesType | null
    birthYear?: number | null
    targetA1C?: number | null
    preferredUnit?: $Enums.GlucoseUnit
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMedicalProfileInput
  }

  export type UserMedicalProfileUncheckedCreateInput = {
    id?: string
    userId: string
    diabetesType?: $Enums.DiabetesType | null
    birthYear?: number | null
    targetA1C?: number | null
    preferredUnit?: $Enums.GlucoseUnit
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMedicalProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diabetesType?: NullableEnumDiabetesTypeFieldUpdateOperationsInput | $Enums.DiabetesType | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    preferredUnit?: EnumGlucoseUnitFieldUpdateOperationsInput | $Enums.GlucoseUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMedicalProfileNestedInput
  }

  export type UserMedicalProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    diabetesType?: NullableEnumDiabetesTypeFieldUpdateOperationsInput | $Enums.DiabetesType | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    preferredUnit?: EnumGlucoseUnitFieldUpdateOperationsInput | $Enums.GlucoseUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMedicalProfileCreateManyInput = {
    id?: string
    userId: string
    diabetesType?: $Enums.DiabetesType | null
    birthYear?: number | null
    targetA1C?: number | null
    preferredUnit?: $Enums.GlucoseUnit
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMedicalProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diabetesType?: NullableEnumDiabetesTypeFieldUpdateOperationsInput | $Enums.DiabetesType | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    preferredUnit?: EnumGlucoseUnitFieldUpdateOperationsInput | $Enums.GlucoseUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMedicalProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    diabetesType?: NullableEnumDiabetesTypeFieldUpdateOperationsInput | $Enums.DiabetesType | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    preferredUnit?: EnumGlucoseUnitFieldUpdateOperationsInput | $Enums.GlucoseUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingCreateInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGlucoseReadingsInput
    run?: RunCreateNestedOneWithoutReadingsInput
  }

  export type GlucoseReadingUncheckedCreateInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    runId?: string | null
  }

  export type GlucoseReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGlucoseReadingsNestedInput
    run?: RunUpdateOneWithoutReadingsNestedInput
  }

  export type GlucoseReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    runId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GlucoseReadingCreateManyInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    runId?: string | null
  }

  export type GlucoseReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    runId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRunsInput
    readings?: GlucoseReadingCreateNestedManyWithoutRunInput
    month?: MonthCreateNestedOneWithoutRunsInput
  }

  export type RunUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    monthId?: string | null
    readings?: GlucoseReadingUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRunsNestedInput
    readings?: GlucoseReadingUpdateManyWithoutRunNestedInput
    month?: MonthUpdateOneWithoutRunsNestedInput
  }

  export type RunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    monthId?: NullableStringFieldUpdateOperationsInput | string | null
    readings?: GlucoseReadingUncheckedUpdateManyWithoutRunNestedInput
  }

  export type RunCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    monthId?: string | null
  }

  export type RunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    monthId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonthsInput
    runs?: RunCreateNestedManyWithoutMonthInput
  }

  export type MonthUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    runs?: RunUncheckedCreateNestedManyWithoutMonthInput
  }

  export type MonthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonthsNestedInput
    runs?: RunUpdateManyWithoutMonthNestedInput
  }

  export type MonthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    runs?: RunUncheckedUpdateManyWithoutMonthNestedInput
  }

  export type MonthCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MonthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    displayUnit?: $Enums.DisplayUnit
    targetA1C?: number | null
    reminderEnabled?: boolean
    reminderFrequency?: $Enums.ReminderFrequency
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    displayUnit?: $Enums.DisplayUnit
    targetA1C?: number | null
    reminderEnabled?: boolean
    reminderFrequency?: $Enums.ReminderFrequency
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayUnit?: EnumDisplayUnitFieldUpdateOperationsInput | $Enums.DisplayUnit
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderFrequency?: EnumReminderFrequencyFieldUpdateOperationsInput | $Enums.ReminderFrequency
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayUnit?: EnumDisplayUnitFieldUpdateOperationsInput | $Enums.DisplayUnit
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderFrequency?: EnumReminderFrequencyFieldUpdateOperationsInput | $Enums.ReminderFrequency
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    displayUnit?: $Enums.DisplayUnit
    targetA1C?: number | null
    reminderEnabled?: boolean
    reminderFrequency?: $Enums.ReminderFrequency
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayUnit?: EnumDisplayUnitFieldUpdateOperationsInput | $Enums.DisplayUnit
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderFrequency?: EnumReminderFrequencyFieldUpdateOperationsInput | $Enums.ReminderFrequency
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayUnit?: EnumDisplayUnitFieldUpdateOperationsInput | $Enums.DisplayUnit
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderFrequency?: EnumReminderFrequencyFieldUpdateOperationsInput | $Enums.ReminderFrequency
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    runs?: RunCreateNestedManyWithoutUserInput
    months?: MonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    months?: MonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    runs?: RunUpdateManyWithoutUserNestedInput
    months?: MonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    months?: MonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDiabetesTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DiabetesType | EnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiabetesTypeNullableFilter<$PrismaModel> | $Enums.DiabetesType | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGlucoseUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.GlucoseUnit | EnumGlucoseUnitFieldRefInput<$PrismaModel>
    in?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumGlucoseUnitFilter<$PrismaModel> | $Enums.GlucoseUnit
  }

  export type UserMedicalProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    diabetesType?: SortOrder
    birthYear?: SortOrder
    targetA1C?: SortOrder
    preferredUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMedicalProfileAvgOrderByAggregateInput = {
    birthYear?: SortOrder
    targetA1C?: SortOrder
  }

  export type UserMedicalProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    diabetesType?: SortOrder
    birthYear?: SortOrder
    targetA1C?: SortOrder
    preferredUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMedicalProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    diabetesType?: SortOrder
    birthYear?: SortOrder
    targetA1C?: SortOrder
    preferredUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMedicalProfileSumOrderByAggregateInput = {
    birthYear?: SortOrder
    targetA1C?: SortOrder
  }

  export type EnumDiabetesTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiabetesType | EnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiabetesTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DiabetesType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDiabetesTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDiabetesTypeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumGlucoseUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlucoseUnit | EnumGlucoseUnitFieldRefInput<$PrismaModel>
    in?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumGlucoseUnitWithAggregatesFilter<$PrismaModel> | $Enums.GlucoseUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlucoseUnitFilter<$PrismaModel>
    _max?: NestedEnumGlucoseUnitFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumMealContextFilter<$PrismaModel = never> = {
    equals?: $Enums.MealContext | EnumMealContextFieldRefInput<$PrismaModel>
    in?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    not?: NestedEnumMealContextFilter<$PrismaModel> | $Enums.MealContext
  }

  export type RunNullableScalarRelationFilter = {
    is?: RunWhereInput | null
    isNot?: RunWhereInput | null
  }

  export type GlucoseReadingCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    mealContext?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    runId?: SortOrder
  }

  export type GlucoseReadingAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type GlucoseReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    mealContext?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    runId?: SortOrder
  }

  export type GlucoseReadingMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    mealContext?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    runId?: SortOrder
  }

  export type GlucoseReadingSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMealContextWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealContext | EnumMealContextFieldRefInput<$PrismaModel>
    in?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    not?: NestedEnumMealContextWithAggregatesFilter<$PrismaModel> | $Enums.MealContext
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealContextFilter<$PrismaModel>
    _max?: NestedEnumMealContextFilter<$PrismaModel>
  }

  export type GlucoseReadingListRelationFilter = {
    every?: GlucoseReadingWhereInput
    some?: GlucoseReadingWhereInput
    none?: GlucoseReadingWhereInput
  }

  export type MonthNullableScalarRelationFilter = {
    is?: MonthWhereInput | null
    isNot?: MonthWhereInput | null
  }

  export type GlucoseReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    monthId?: SortOrder
  }

  export type RunAvgOrderByAggregateInput = {
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
  }

  export type RunMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    monthId?: SortOrder
  }

  export type RunMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    monthId?: SortOrder
  }

  export type RunSumOrderByAggregateInput = {
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
  }

  export type RunListRelationFilter = {
    every?: RunWhereInput
    some?: RunWhereInput
    none?: RunWhereInput
  }

  export type RunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MonthAvgOrderByAggregateInput = {
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
  }

  export type MonthMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MonthMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MonthSumOrderByAggregateInput = {
    calculatedA1C?: SortOrder
    averageGlucose?: SortOrder
  }

  export type EnumDisplayUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayUnit | EnumDisplayUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayUnitFilter<$PrismaModel> | $Enums.DisplayUnit
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumReminderFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderFrequency | EnumReminderFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderFrequencyFilter<$PrismaModel> | $Enums.ReminderFrequency
  }

  export type EnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    displayUnit?: SortOrder
    targetA1C?: SortOrder
    reminderEnabled?: SortOrder
    reminderFrequency?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    targetA1C?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    displayUnit?: SortOrder
    targetA1C?: SortOrder
    reminderEnabled?: SortOrder
    reminderFrequency?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    displayUnit?: SortOrder
    targetA1C?: SortOrder
    reminderEnabled?: SortOrder
    reminderFrequency?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    targetA1C?: SortOrder
  }

  export type EnumDisplayUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayUnit | EnumDisplayUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayUnitWithAggregatesFilter<$PrismaModel> | $Enums.DisplayUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisplayUnitFilter<$PrismaModel>
    _max?: NestedEnumDisplayUnitFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumReminderFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderFrequency | EnumReminderFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.ReminderFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderFrequencyFilter<$PrismaModel>
    _max?: NestedEnumReminderFrequencyFilter<$PrismaModel>
  }

  export type EnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserPreferencesNullableScalarRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type UserMedicalProfileNullableScalarRelationFilter = {
    is?: UserMedicalProfileWhereInput | null
    isNot?: UserMedicalProfileWhereInput | null
  }

  export type MonthListRelationFilter = {
    every?: MonthWhereInput
    some?: MonthWhereInput
    none?: MonthWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutMedicalProfileInput = {
    create?: XOR<UserCreateWithoutMedicalProfileInput, UserUncheckedCreateWithoutMedicalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumDiabetesTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiabetesType | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGlucoseUnitFieldUpdateOperationsInput = {
    set?: $Enums.GlucoseUnit
  }

  export type UserUpdateOneRequiredWithoutMedicalProfileNestedInput = {
    create?: XOR<UserCreateWithoutMedicalProfileInput, UserUncheckedCreateWithoutMedicalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedicalProfileInput
    upsert?: UserUpsertWithoutMedicalProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedicalProfileInput, UserUpdateWithoutMedicalProfileInput>, UserUncheckedUpdateWithoutMedicalProfileInput>
  }

  export type UserCreateNestedOneWithoutGlucoseReadingsInput = {
    create?: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlucoseReadingsInput
    connect?: UserWhereUniqueInput
  }

  export type RunCreateNestedOneWithoutReadingsInput = {
    create?: XOR<RunCreateWithoutReadingsInput, RunUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: RunCreateOrConnectWithoutReadingsInput
    connect?: RunWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMealContextFieldUpdateOperationsInput = {
    set?: $Enums.MealContext
  }

  export type UserUpdateOneRequiredWithoutGlucoseReadingsNestedInput = {
    create?: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGlucoseReadingsInput
    upsert?: UserUpsertWithoutGlucoseReadingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGlucoseReadingsInput, UserUpdateWithoutGlucoseReadingsInput>, UserUncheckedUpdateWithoutGlucoseReadingsInput>
  }

  export type RunUpdateOneWithoutReadingsNestedInput = {
    create?: XOR<RunCreateWithoutReadingsInput, RunUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: RunCreateOrConnectWithoutReadingsInput
    upsert?: RunUpsertWithoutReadingsInput
    disconnect?: RunWhereInput | boolean
    delete?: RunWhereInput | boolean
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutReadingsInput, RunUpdateWithoutReadingsInput>, RunUncheckedUpdateWithoutReadingsInput>
  }

  export type UserCreateNestedOneWithoutRunsInput = {
    create?: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunsInput
    connect?: UserWhereUniqueInput
  }

  export type GlucoseReadingCreateNestedManyWithoutRunInput = {
    create?: XOR<GlucoseReadingCreateWithoutRunInput, GlucoseReadingUncheckedCreateWithoutRunInput> | GlucoseReadingCreateWithoutRunInput[] | GlucoseReadingUncheckedCreateWithoutRunInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutRunInput | GlucoseReadingCreateOrConnectWithoutRunInput[]
    createMany?: GlucoseReadingCreateManyRunInputEnvelope
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
  }

  export type MonthCreateNestedOneWithoutRunsInput = {
    create?: XOR<MonthCreateWithoutRunsInput, MonthUncheckedCreateWithoutRunsInput>
    connectOrCreate?: MonthCreateOrConnectWithoutRunsInput
    connect?: MonthWhereUniqueInput
  }

  export type GlucoseReadingUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<GlucoseReadingCreateWithoutRunInput, GlucoseReadingUncheckedCreateWithoutRunInput> | GlucoseReadingCreateWithoutRunInput[] | GlucoseReadingUncheckedCreateWithoutRunInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutRunInput | GlucoseReadingCreateOrConnectWithoutRunInput[]
    createMany?: GlucoseReadingCreateManyRunInputEnvelope
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunsInput
    upsert?: UserUpsertWithoutRunsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRunsInput, UserUpdateWithoutRunsInput>, UserUncheckedUpdateWithoutRunsInput>
  }

  export type GlucoseReadingUpdateManyWithoutRunNestedInput = {
    create?: XOR<GlucoseReadingCreateWithoutRunInput, GlucoseReadingUncheckedCreateWithoutRunInput> | GlucoseReadingCreateWithoutRunInput[] | GlucoseReadingUncheckedCreateWithoutRunInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutRunInput | GlucoseReadingCreateOrConnectWithoutRunInput[]
    upsert?: GlucoseReadingUpsertWithWhereUniqueWithoutRunInput | GlucoseReadingUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: GlucoseReadingCreateManyRunInputEnvelope
    set?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    disconnect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    delete?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    update?: GlucoseReadingUpdateWithWhereUniqueWithoutRunInput | GlucoseReadingUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: GlucoseReadingUpdateManyWithWhereWithoutRunInput | GlucoseReadingUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
  }

  export type MonthUpdateOneWithoutRunsNestedInput = {
    create?: XOR<MonthCreateWithoutRunsInput, MonthUncheckedCreateWithoutRunsInput>
    connectOrCreate?: MonthCreateOrConnectWithoutRunsInput
    upsert?: MonthUpsertWithoutRunsInput
    disconnect?: MonthWhereInput | boolean
    delete?: MonthWhereInput | boolean
    connect?: MonthWhereUniqueInput
    update?: XOR<XOR<MonthUpdateToOneWithWhereWithoutRunsInput, MonthUpdateWithoutRunsInput>, MonthUncheckedUpdateWithoutRunsInput>
  }

  export type GlucoseReadingUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<GlucoseReadingCreateWithoutRunInput, GlucoseReadingUncheckedCreateWithoutRunInput> | GlucoseReadingCreateWithoutRunInput[] | GlucoseReadingUncheckedCreateWithoutRunInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutRunInput | GlucoseReadingCreateOrConnectWithoutRunInput[]
    upsert?: GlucoseReadingUpsertWithWhereUniqueWithoutRunInput | GlucoseReadingUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: GlucoseReadingCreateManyRunInputEnvelope
    set?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    disconnect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    delete?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    update?: GlucoseReadingUpdateWithWhereUniqueWithoutRunInput | GlucoseReadingUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: GlucoseReadingUpdateManyWithWhereWithoutRunInput | GlucoseReadingUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMonthsInput = {
    create?: XOR<UserCreateWithoutMonthsInput, UserUncheckedCreateWithoutMonthsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthsInput
    connect?: UserWhereUniqueInput
  }

  export type RunCreateNestedManyWithoutMonthInput = {
    create?: XOR<RunCreateWithoutMonthInput, RunUncheckedCreateWithoutMonthInput> | RunCreateWithoutMonthInput[] | RunUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: RunCreateOrConnectWithoutMonthInput | RunCreateOrConnectWithoutMonthInput[]
    createMany?: RunCreateManyMonthInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type RunUncheckedCreateNestedManyWithoutMonthInput = {
    create?: XOR<RunCreateWithoutMonthInput, RunUncheckedCreateWithoutMonthInput> | RunCreateWithoutMonthInput[] | RunUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: RunCreateOrConnectWithoutMonthInput | RunCreateOrConnectWithoutMonthInput[]
    createMany?: RunCreateManyMonthInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMonthsNestedInput = {
    create?: XOR<UserCreateWithoutMonthsInput, UserUncheckedCreateWithoutMonthsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthsInput
    upsert?: UserUpsertWithoutMonthsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMonthsInput, UserUpdateWithoutMonthsInput>, UserUncheckedUpdateWithoutMonthsInput>
  }

  export type RunUpdateManyWithoutMonthNestedInput = {
    create?: XOR<RunCreateWithoutMonthInput, RunUncheckedCreateWithoutMonthInput> | RunCreateWithoutMonthInput[] | RunUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: RunCreateOrConnectWithoutMonthInput | RunCreateOrConnectWithoutMonthInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutMonthInput | RunUpsertWithWhereUniqueWithoutMonthInput[]
    createMany?: RunCreateManyMonthInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutMonthInput | RunUpdateWithWhereUniqueWithoutMonthInput[]
    updateMany?: RunUpdateManyWithWhereWithoutMonthInput | RunUpdateManyWithWhereWithoutMonthInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type RunUncheckedUpdateManyWithoutMonthNestedInput = {
    create?: XOR<RunCreateWithoutMonthInput, RunUncheckedCreateWithoutMonthInput> | RunCreateWithoutMonthInput[] | RunUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: RunCreateOrConnectWithoutMonthInput | RunCreateOrConnectWithoutMonthInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutMonthInput | RunUpsertWithWhereUniqueWithoutMonthInput[]
    createMany?: RunCreateManyMonthInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutMonthInput | RunUpdateWithWhereUniqueWithoutMonthInput[]
    updateMany?: RunUpdateManyWithWhereWithoutMonthInput | RunUpdateManyWithWhereWithoutMonthInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDisplayUnitFieldUpdateOperationsInput = {
    set?: $Enums.DisplayUnit
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumReminderFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.ReminderFrequency
  }

  export type EnumThemeFieldUpdateOperationsInput = {
    set?: $Enums.Theme
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserMedicalProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserMedicalProfileCreateWithoutUserInput, UserMedicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMedicalProfileCreateOrConnectWithoutUserInput
    connect?: UserMedicalProfileWhereUniqueInput
  }

  export type GlucoseReadingCreateNestedManyWithoutUserInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
  }

  export type RunCreateNestedManyWithoutUserInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type MonthCreateNestedManyWithoutUserInput = {
    create?: XOR<MonthCreateWithoutUserInput, MonthUncheckedCreateWithoutUserInput> | MonthCreateWithoutUserInput[] | MonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutUserInput | MonthCreateOrConnectWithoutUserInput[]
    createMany?: MonthCreateManyUserInputEnvelope
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserMedicalProfileCreateWithoutUserInput, UserMedicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMedicalProfileCreateOrConnectWithoutUserInput
    connect?: UserMedicalProfileWhereUniqueInput
  }

  export type GlucoseReadingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
  }

  export type RunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type MonthUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MonthCreateWithoutUserInput, MonthUncheckedCreateWithoutUserInput> | MonthCreateWithoutUserInput[] | MonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutUserInput | MonthCreateOrConnectWithoutUserInput[]
    createMany?: MonthCreateManyUserInputEnvelope
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserMedicalProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserMedicalProfileCreateWithoutUserInput, UserMedicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMedicalProfileCreateOrConnectWithoutUserInput
    upsert?: UserMedicalProfileUpsertWithoutUserInput
    disconnect?: UserMedicalProfileWhereInput | boolean
    delete?: UserMedicalProfileWhereInput | boolean
    connect?: UserMedicalProfileWhereUniqueInput
    update?: XOR<XOR<UserMedicalProfileUpdateToOneWithWhereWithoutUserInput, UserMedicalProfileUpdateWithoutUserInput>, UserMedicalProfileUncheckedUpdateWithoutUserInput>
  }

  export type GlucoseReadingUpdateManyWithoutUserNestedInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    upsert?: GlucoseReadingUpsertWithWhereUniqueWithoutUserInput | GlucoseReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    set?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    disconnect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    delete?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    update?: GlucoseReadingUpdateWithWhereUniqueWithoutUserInput | GlucoseReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GlucoseReadingUpdateManyWithWhereWithoutUserInput | GlucoseReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
  }

  export type RunUpdateManyWithoutUserNestedInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutUserInput | RunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutUserInput | RunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RunUpdateManyWithWhereWithoutUserInput | RunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type MonthUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonthCreateWithoutUserInput, MonthUncheckedCreateWithoutUserInput> | MonthCreateWithoutUserInput[] | MonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutUserInput | MonthCreateOrConnectWithoutUserInput[]
    upsert?: MonthUpsertWithWhereUniqueWithoutUserInput | MonthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonthCreateManyUserInputEnvelope
    set?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    disconnect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    delete?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    update?: MonthUpdateWithWhereUniqueWithoutUserInput | MonthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonthUpdateManyWithWhereWithoutUserInput | MonthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonthScalarWhereInput | MonthScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserMedicalProfileCreateWithoutUserInput, UserMedicalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMedicalProfileCreateOrConnectWithoutUserInput
    upsert?: UserMedicalProfileUpsertWithoutUserInput
    disconnect?: UserMedicalProfileWhereInput | boolean
    delete?: UserMedicalProfileWhereInput | boolean
    connect?: UserMedicalProfileWhereUniqueInput
    update?: XOR<XOR<UserMedicalProfileUpdateToOneWithWhereWithoutUserInput, UserMedicalProfileUpdateWithoutUserInput>, UserMedicalProfileUncheckedUpdateWithoutUserInput>
  }

  export type GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput> | GlucoseReadingCreateWithoutUserInput[] | GlucoseReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GlucoseReadingCreateOrConnectWithoutUserInput | GlucoseReadingCreateOrConnectWithoutUserInput[]
    upsert?: GlucoseReadingUpsertWithWhereUniqueWithoutUserInput | GlucoseReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GlucoseReadingCreateManyUserInputEnvelope
    set?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    disconnect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    delete?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    connect?: GlucoseReadingWhereUniqueInput | GlucoseReadingWhereUniqueInput[]
    update?: GlucoseReadingUpdateWithWhereUniqueWithoutUserInput | GlucoseReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GlucoseReadingUpdateManyWithWhereWithoutUserInput | GlucoseReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
  }

  export type RunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutUserInput | RunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutUserInput | RunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RunUpdateManyWithWhereWithoutUserInput | RunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type MonthUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonthCreateWithoutUserInput, MonthUncheckedCreateWithoutUserInput> | MonthCreateWithoutUserInput[] | MonthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutUserInput | MonthCreateOrConnectWithoutUserInput[]
    upsert?: MonthUpsertWithWhereUniqueWithoutUserInput | MonthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonthCreateManyUserInputEnvelope
    set?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    disconnect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    delete?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    update?: MonthUpdateWithWhereUniqueWithoutUserInput | MonthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonthUpdateManyWithWhereWithoutUserInput | MonthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonthScalarWhereInput | MonthScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDiabetesTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DiabetesType | EnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiabetesTypeNullableFilter<$PrismaModel> | $Enums.DiabetesType | null
  }

  export type NestedEnumGlucoseUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.GlucoseUnit | EnumGlucoseUnitFieldRefInput<$PrismaModel>
    in?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumGlucoseUnitFilter<$PrismaModel> | $Enums.GlucoseUnit
  }

  export type NestedEnumDiabetesTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiabetesType | EnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiabetesType[] | ListEnumDiabetesTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiabetesTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DiabetesType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDiabetesTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDiabetesTypeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumGlucoseUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlucoseUnit | EnumGlucoseUnitFieldRefInput<$PrismaModel>
    in?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.GlucoseUnit[] | ListEnumGlucoseUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumGlucoseUnitWithAggregatesFilter<$PrismaModel> | $Enums.GlucoseUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlucoseUnitFilter<$PrismaModel>
    _max?: NestedEnumGlucoseUnitFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMealContextFilter<$PrismaModel = never> = {
    equals?: $Enums.MealContext | EnumMealContextFieldRefInput<$PrismaModel>
    in?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    not?: NestedEnumMealContextFilter<$PrismaModel> | $Enums.MealContext
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMealContextWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealContext | EnumMealContextFieldRefInput<$PrismaModel>
    in?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealContext[] | ListEnumMealContextFieldRefInput<$PrismaModel>
    not?: NestedEnumMealContextWithAggregatesFilter<$PrismaModel> | $Enums.MealContext
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealContextFilter<$PrismaModel>
    _max?: NestedEnumMealContextFilter<$PrismaModel>
  }

  export type NestedEnumDisplayUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayUnit | EnumDisplayUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayUnitFilter<$PrismaModel> | $Enums.DisplayUnit
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumReminderFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderFrequency | EnumReminderFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderFrequencyFilter<$PrismaModel> | $Enums.ReminderFrequency
  }

  export type NestedEnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type NestedEnumDisplayUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayUnit | EnumDisplayUnitFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayUnit[] | ListEnumDisplayUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayUnitWithAggregatesFilter<$PrismaModel> | $Enums.DisplayUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisplayUnitFilter<$PrismaModel>
    _max?: NestedEnumDisplayUnitFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReminderFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderFrequency | EnumReminderFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderFrequency[] | ListEnumReminderFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.ReminderFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderFrequencyFilter<$PrismaModel>
    _max?: NestedEnumReminderFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    runs?: RunCreateNestedManyWithoutUserInput
    months?: MonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    months?: MonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    runs?: RunUpdateManyWithoutUserNestedInput
    months?: MonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    months?: MonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    runs?: RunCreateNestedManyWithoutUserInput
    months?: MonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    months?: MonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    runs?: RunUpdateManyWithoutUserNestedInput
    months?: MonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    months?: MonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMedicalProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    runs?: RunCreateNestedManyWithoutUserInput
    months?: MonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedicalProfileInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    months?: MonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedicalProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedicalProfileInput, UserUncheckedCreateWithoutMedicalProfileInput>
  }

  export type UserUpsertWithoutMedicalProfileInput = {
    update: XOR<UserUpdateWithoutMedicalProfileInput, UserUncheckedUpdateWithoutMedicalProfileInput>
    create: XOR<UserCreateWithoutMedicalProfileInput, UserUncheckedCreateWithoutMedicalProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedicalProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedicalProfileInput, UserUncheckedUpdateWithoutMedicalProfileInput>
  }

  export type UserUpdateWithoutMedicalProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    runs?: RunUpdateManyWithoutUserNestedInput
    months?: MonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedicalProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    months?: MonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGlucoseReadingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileCreateNestedOneWithoutUserInput
    runs?: RunCreateNestedManyWithoutUserInput
    months?: MonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGlucoseReadingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    months?: MonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGlucoseReadingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
  }

  export type RunCreateWithoutReadingsInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRunsInput
    month?: MonthCreateNestedOneWithoutRunsInput
  }

  export type RunUncheckedCreateWithoutReadingsInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    monthId?: string | null
  }

  export type RunCreateOrConnectWithoutReadingsInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutReadingsInput, RunUncheckedCreateWithoutReadingsInput>
  }

  export type UserUpsertWithoutGlucoseReadingsInput = {
    update: XOR<UserUpdateWithoutGlucoseReadingsInput, UserUncheckedUpdateWithoutGlucoseReadingsInput>
    create: XOR<UserCreateWithoutGlucoseReadingsInput, UserUncheckedCreateWithoutGlucoseReadingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGlucoseReadingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGlucoseReadingsInput, UserUncheckedUpdateWithoutGlucoseReadingsInput>
  }

  export type UserUpdateWithoutGlucoseReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUpdateOneWithoutUserNestedInput
    runs?: RunUpdateManyWithoutUserNestedInput
    months?: MonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGlucoseReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    months?: MonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RunUpsertWithoutReadingsInput = {
    update: XOR<RunUpdateWithoutReadingsInput, RunUncheckedUpdateWithoutReadingsInput>
    create: XOR<RunCreateWithoutReadingsInput, RunUncheckedCreateWithoutReadingsInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutReadingsInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutReadingsInput, RunUncheckedUpdateWithoutReadingsInput>
  }

  export type RunUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRunsNestedInput
    month?: MonthUpdateOneWithoutRunsNestedInput
  }

  export type RunUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    monthId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutRunsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    months?: MonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRunsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    months?: MonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
  }

  export type GlucoseReadingCreateWithoutRunInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGlucoseReadingsInput
  }

  export type GlucoseReadingUncheckedCreateWithoutRunInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GlucoseReadingCreateOrConnectWithoutRunInput = {
    where: GlucoseReadingWhereUniqueInput
    create: XOR<GlucoseReadingCreateWithoutRunInput, GlucoseReadingUncheckedCreateWithoutRunInput>
  }

  export type GlucoseReadingCreateManyRunInputEnvelope = {
    data: GlucoseReadingCreateManyRunInput | GlucoseReadingCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type MonthCreateWithoutRunsInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonthsInput
  }

  export type MonthUncheckedCreateWithoutRunsInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MonthCreateOrConnectWithoutRunsInput = {
    where: MonthWhereUniqueInput
    create: XOR<MonthCreateWithoutRunsInput, MonthUncheckedCreateWithoutRunsInput>
  }

  export type UserUpsertWithoutRunsInput = {
    update: XOR<UserUpdateWithoutRunsInput, UserUncheckedUpdateWithoutRunsInput>
    create: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRunsInput, UserUncheckedUpdateWithoutRunsInput>
  }

  export type UserUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    months?: MonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    months?: MonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GlucoseReadingUpsertWithWhereUniqueWithoutRunInput = {
    where: GlucoseReadingWhereUniqueInput
    update: XOR<GlucoseReadingUpdateWithoutRunInput, GlucoseReadingUncheckedUpdateWithoutRunInput>
    create: XOR<GlucoseReadingCreateWithoutRunInput, GlucoseReadingUncheckedCreateWithoutRunInput>
  }

  export type GlucoseReadingUpdateWithWhereUniqueWithoutRunInput = {
    where: GlucoseReadingWhereUniqueInput
    data: XOR<GlucoseReadingUpdateWithoutRunInput, GlucoseReadingUncheckedUpdateWithoutRunInput>
  }

  export type GlucoseReadingUpdateManyWithWhereWithoutRunInput = {
    where: GlucoseReadingScalarWhereInput
    data: XOR<GlucoseReadingUpdateManyMutationInput, GlucoseReadingUncheckedUpdateManyWithoutRunInput>
  }

  export type GlucoseReadingScalarWhereInput = {
    AND?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
    OR?: GlucoseReadingScalarWhereInput[]
    NOT?: GlucoseReadingScalarWhereInput | GlucoseReadingScalarWhereInput[]
    id?: StringFilter<"GlucoseReading"> | string
    value?: FloatFilter<"GlucoseReading"> | number
    timestamp?: DateTimeFilter<"GlucoseReading"> | Date | string
    mealContext?: EnumMealContextFilter<"GlucoseReading"> | $Enums.MealContext
    notes?: StringNullableFilter<"GlucoseReading"> | string | null
    createdAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    updatedAt?: DateTimeFilter<"GlucoseReading"> | Date | string
    userId?: StringFilter<"GlucoseReading"> | string
    runId?: StringNullableFilter<"GlucoseReading"> | string | null
  }

  export type MonthUpsertWithoutRunsInput = {
    update: XOR<MonthUpdateWithoutRunsInput, MonthUncheckedUpdateWithoutRunsInput>
    create: XOR<MonthCreateWithoutRunsInput, MonthUncheckedCreateWithoutRunsInput>
    where?: MonthWhereInput
  }

  export type MonthUpdateToOneWithWhereWithoutRunsInput = {
    where?: MonthWhereInput
    data: XOR<MonthUpdateWithoutRunsInput, MonthUncheckedUpdateWithoutRunsInput>
  }

  export type MonthUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonthsNestedInput
  }

  export type MonthUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutMonthsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    runs?: RunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMonthsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    medicalProfile?: UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMonthsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonthsInput, UserUncheckedCreateWithoutMonthsInput>
  }

  export type RunCreateWithoutMonthInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRunsInput
    readings?: GlucoseReadingCreateNestedManyWithoutRunInput
  }

  export type RunUncheckedCreateWithoutMonthInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    readings?: GlucoseReadingUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutMonthInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutMonthInput, RunUncheckedCreateWithoutMonthInput>
  }

  export type RunCreateManyMonthInputEnvelope = {
    data: RunCreateManyMonthInput | RunCreateManyMonthInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMonthsInput = {
    update: XOR<UserUpdateWithoutMonthsInput, UserUncheckedUpdateWithoutMonthsInput>
    create: XOR<UserCreateWithoutMonthsInput, UserUncheckedCreateWithoutMonthsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMonthsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMonthsInput, UserUncheckedUpdateWithoutMonthsInput>
  }

  export type UserUpdateWithoutMonthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    runs?: RunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMonthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RunUpsertWithWhereUniqueWithoutMonthInput = {
    where: RunWhereUniqueInput
    update: XOR<RunUpdateWithoutMonthInput, RunUncheckedUpdateWithoutMonthInput>
    create: XOR<RunCreateWithoutMonthInput, RunUncheckedCreateWithoutMonthInput>
  }

  export type RunUpdateWithWhereUniqueWithoutMonthInput = {
    where: RunWhereUniqueInput
    data: XOR<RunUpdateWithoutMonthInput, RunUncheckedUpdateWithoutMonthInput>
  }

  export type RunUpdateManyWithWhereWithoutMonthInput = {
    where: RunScalarWhereInput
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyWithoutMonthInput>
  }

  export type RunScalarWhereInput = {
    AND?: RunScalarWhereInput | RunScalarWhereInput[]
    OR?: RunScalarWhereInput[]
    NOT?: RunScalarWhereInput | RunScalarWhereInput[]
    id?: StringFilter<"Run"> | string
    name?: StringFilter<"Run"> | string
    startDate?: DateTimeFilter<"Run"> | Date | string
    endDate?: DateTimeFilter<"Run"> | Date | string
    calculatedA1C?: FloatNullableFilter<"Run"> | number | null
    averageGlucose?: FloatNullableFilter<"Run"> | number | null
    createdAt?: DateTimeFilter<"Run"> | Date | string
    updatedAt?: DateTimeFilter<"Run"> | Date | string
    userId?: StringFilter<"Run"> | string
    monthId?: StringNullableFilter<"Run"> | string | null
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    medicalProfile?: UserMedicalProfileCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingCreateNestedManyWithoutUserInput
    runs?: RunCreateNestedManyWithoutUserInput
    months?: MonthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    medicalProfile?: UserMedicalProfileUncheckedCreateNestedOneWithoutUserInput
    glucoseReadings?: GlucoseReadingUncheckedCreateNestedManyWithoutUserInput
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    months?: MonthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUpdateManyWithoutUserNestedInput
    runs?: RunUpdateManyWithoutUserNestedInput
    months?: MonthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    medicalProfile?: UserMedicalProfileUncheckedUpdateOneWithoutUserNestedInput
    glucoseReadings?: GlucoseReadingUncheckedUpdateManyWithoutUserNestedInput
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    months?: MonthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    displayUnit?: $Enums.DisplayUnit
    targetA1C?: number | null
    reminderEnabled?: boolean
    reminderFrequency?: $Enums.ReminderFrequency
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    displayUnit?: $Enums.DisplayUnit
    targetA1C?: number | null
    reminderEnabled?: boolean
    reminderFrequency?: $Enums.ReminderFrequency
    theme?: $Enums.Theme
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type UserMedicalProfileCreateWithoutUserInput = {
    id?: string
    diabetesType?: $Enums.DiabetesType | null
    birthYear?: number | null
    targetA1C?: number | null
    preferredUnit?: $Enums.GlucoseUnit
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMedicalProfileUncheckedCreateWithoutUserInput = {
    id?: string
    diabetesType?: $Enums.DiabetesType | null
    birthYear?: number | null
    targetA1C?: number | null
    preferredUnit?: $Enums.GlucoseUnit
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMedicalProfileCreateOrConnectWithoutUserInput = {
    where: UserMedicalProfileWhereUniqueInput
    create: XOR<UserMedicalProfileCreateWithoutUserInput, UserMedicalProfileUncheckedCreateWithoutUserInput>
  }

  export type GlucoseReadingCreateWithoutUserInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    run?: RunCreateNestedOneWithoutReadingsInput
  }

  export type GlucoseReadingUncheckedCreateWithoutUserInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runId?: string | null
  }

  export type GlucoseReadingCreateOrConnectWithoutUserInput = {
    where: GlucoseReadingWhereUniqueInput
    create: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput>
  }

  export type GlucoseReadingCreateManyUserInputEnvelope = {
    data: GlucoseReadingCreateManyUserInput | GlucoseReadingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RunCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: GlucoseReadingCreateNestedManyWithoutRunInput
    month?: MonthCreateNestedOneWithoutRunsInput
  }

  export type RunUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthId?: string | null
    readings?: GlucoseReadingUncheckedCreateNestedManyWithoutRunInput
  }

  export type RunCreateOrConnectWithoutUserInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput>
  }

  export type RunCreateManyUserInputEnvelope = {
    data: RunCreateManyUserInput | RunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MonthCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunCreateNestedManyWithoutMonthInput
  }

  export type MonthUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: RunUncheckedCreateNestedManyWithoutMonthInput
  }

  export type MonthCreateOrConnectWithoutUserInput = {
    where: MonthWhereUniqueInput
    create: XOR<MonthCreateWithoutUserInput, MonthUncheckedCreateWithoutUserInput>
  }

  export type MonthCreateManyUserInputEnvelope = {
    data: MonthCreateManyUserInput | MonthCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayUnit?: EnumDisplayUnitFieldUpdateOperationsInput | $Enums.DisplayUnit
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderFrequency?: EnumReminderFrequencyFieldUpdateOperationsInput | $Enums.ReminderFrequency
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayUnit?: EnumDisplayUnitFieldUpdateOperationsInput | $Enums.DisplayUnit
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderFrequency?: EnumReminderFrequencyFieldUpdateOperationsInput | $Enums.ReminderFrequency
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMedicalProfileUpsertWithoutUserInput = {
    update: XOR<UserMedicalProfileUpdateWithoutUserInput, UserMedicalProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserMedicalProfileCreateWithoutUserInput, UserMedicalProfileUncheckedCreateWithoutUserInput>
    where?: UserMedicalProfileWhereInput
  }

  export type UserMedicalProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserMedicalProfileWhereInput
    data: XOR<UserMedicalProfileUpdateWithoutUserInput, UserMedicalProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserMedicalProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    diabetesType?: NullableEnumDiabetesTypeFieldUpdateOperationsInput | $Enums.DiabetesType | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    preferredUnit?: EnumGlucoseUnitFieldUpdateOperationsInput | $Enums.GlucoseUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMedicalProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    diabetesType?: NullableEnumDiabetesTypeFieldUpdateOperationsInput | $Enums.DiabetesType | null
    birthYear?: NullableIntFieldUpdateOperationsInput | number | null
    targetA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    preferredUnit?: EnumGlucoseUnitFieldUpdateOperationsInput | $Enums.GlucoseUnit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingUpsertWithWhereUniqueWithoutUserInput = {
    where: GlucoseReadingWhereUniqueInput
    update: XOR<GlucoseReadingUpdateWithoutUserInput, GlucoseReadingUncheckedUpdateWithoutUserInput>
    create: XOR<GlucoseReadingCreateWithoutUserInput, GlucoseReadingUncheckedCreateWithoutUserInput>
  }

  export type GlucoseReadingUpdateWithWhereUniqueWithoutUserInput = {
    where: GlucoseReadingWhereUniqueInput
    data: XOR<GlucoseReadingUpdateWithoutUserInput, GlucoseReadingUncheckedUpdateWithoutUserInput>
  }

  export type GlucoseReadingUpdateManyWithWhereWithoutUserInput = {
    where: GlucoseReadingScalarWhereInput
    data: XOR<GlucoseReadingUpdateManyMutationInput, GlucoseReadingUncheckedUpdateManyWithoutUserInput>
  }

  export type RunUpsertWithWhereUniqueWithoutUserInput = {
    where: RunWhereUniqueInput
    update: XOR<RunUpdateWithoutUserInput, RunUncheckedUpdateWithoutUserInput>
    create: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput>
  }

  export type RunUpdateWithWhereUniqueWithoutUserInput = {
    where: RunWhereUniqueInput
    data: XOR<RunUpdateWithoutUserInput, RunUncheckedUpdateWithoutUserInput>
  }

  export type RunUpdateManyWithWhereWithoutUserInput = {
    where: RunScalarWhereInput
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyWithoutUserInput>
  }

  export type MonthUpsertWithWhereUniqueWithoutUserInput = {
    where: MonthWhereUniqueInput
    update: XOR<MonthUpdateWithoutUserInput, MonthUncheckedUpdateWithoutUserInput>
    create: XOR<MonthCreateWithoutUserInput, MonthUncheckedCreateWithoutUserInput>
  }

  export type MonthUpdateWithWhereUniqueWithoutUserInput = {
    where: MonthWhereUniqueInput
    data: XOR<MonthUpdateWithoutUserInput, MonthUncheckedUpdateWithoutUserInput>
  }

  export type MonthUpdateManyWithWhereWithoutUserInput = {
    where: MonthScalarWhereInput
    data: XOR<MonthUpdateManyMutationInput, MonthUncheckedUpdateManyWithoutUserInput>
  }

  export type MonthScalarWhereInput = {
    AND?: MonthScalarWhereInput | MonthScalarWhereInput[]
    OR?: MonthScalarWhereInput[]
    NOT?: MonthScalarWhereInput | MonthScalarWhereInput[]
    id?: StringFilter<"Month"> | string
    name?: StringFilter<"Month"> | string
    startDate?: DateTimeFilter<"Month"> | Date | string
    endDate?: DateTimeFilter<"Month"> | Date | string
    calculatedA1C?: FloatNullableFilter<"Month"> | number | null
    averageGlucose?: FloatNullableFilter<"Month"> | number | null
    createdAt?: DateTimeFilter<"Month"> | Date | string
    updatedAt?: DateTimeFilter<"Month"> | Date | string
    userId?: StringFilter<"Month"> | string
  }

  export type GlucoseReadingCreateManyRunInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GlucoseReadingUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGlucoseReadingsNestedInput
  }

  export type GlucoseReadingUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GlucoseReadingUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RunCreateManyMonthInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RunUpdateWithoutMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRunsNestedInput
    readings?: GlucoseReadingUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateWithoutMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    readings?: GlucoseReadingUncheckedUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateManyWithoutMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type GlucoseReadingCreateManyUserInput = {
    id?: string
    value: number
    timestamp: Date | string
    mealContext: $Enums.MealContext
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runId?: string | null
  }

  export type RunCreateManyUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthId?: string | null
  }

  export type MonthCreateManyUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    calculatedA1C?: number | null
    averageGlucose?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseReadingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: RunUpdateOneWithoutReadingsNestedInput
  }

  export type GlucoseReadingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GlucoseReadingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    mealContext?: EnumMealContextFieldUpdateOperationsInput | $Enums.MealContext
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: GlucoseReadingUpdateManyWithoutRunNestedInput
    month?: MonthUpdateOneWithoutRunsNestedInput
  }

  export type RunUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthId?: NullableStringFieldUpdateOperationsInput | string | null
    readings?: GlucoseReadingUncheckedUpdateManyWithoutRunNestedInput
  }

  export type RunUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUpdateManyWithoutMonthNestedInput
  }

  export type MonthUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: RunUncheckedUpdateManyWithoutMonthNestedInput
  }

  export type MonthUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    calculatedA1C?: NullableFloatFieldUpdateOperationsInput | number | null
    averageGlucose?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}