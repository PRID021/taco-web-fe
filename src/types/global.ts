



// eslint-disable-next-line no-shadow
export enum IngredientType {
    WRAP = 'WRAP',
    PROTEIN = 'PROTEIN',
    VEGGIES = 'VEGGIES',
    CHEESE = 'CHEESE',
    SAUCE = 'SAUCE',
}

export interface Ingredient {
    id: string;
    name: string;
    type: IngredientType;
}

export interface Taco {
    id: string;
    name: string;
    ingredients: Ingredient[];
}


export interface TacoOrder {
    id: string;
    deliveryName: string;
    deliveryStreet: string;
    deliveryCity: string;
    deliveryState: string;
    deliveryZip: string;
    ccNumber: string;
    ccExpiration: string;
    ccCVV: string;
    tacos: any[];
}
