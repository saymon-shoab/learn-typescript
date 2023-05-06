// one type is depend on another type

type a1 = string;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null

// nested conditional type...

type d = a1 extends null ? null : a3 extends number ? number: a4 extends null? null: never;

type Habibi = {
    wife1 : string;
    wife2 : string;
}

type A = keyof Habibi ; // 'wife1' || 'wife2'

type CheckProperty<T , K> = K extends keyof Habibi ? true: false;

type CheckWife1 = CheckProperty<Habibi, 'wife1'>;

// chbeck korbo ai sheikh type a wife3 ase kina ? true : false

// matha kharap kora example...

type Bandhobi = 'surovi' | 'sadia' | 'sushmita';

type RemoveBandhobi<T , K> = T extends K ? never : T;

type CurrentBandhobi = RemoveBandhobi<Bandhobi,'surovi'>