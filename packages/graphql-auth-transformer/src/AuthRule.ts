export type ModelQuery = 'get' | 'list'
export type ModelMutation = 'create' | 'update' | 'delete'
export interface AuthRule {
    
    allow: 'owner' | 'groups' | 'authenticated';
    ownerField: string;
    identityField: string;
    groupsField: string;
    groups: string[];
    queries: ModelQuery[]
    mutations: ModelMutation[]
}