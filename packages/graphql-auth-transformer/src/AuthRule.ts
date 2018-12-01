export type ModelQuery = 'get' | 'list'
export type ModelMutation = 'create' | 'update' | 'delete'
export interface AuthRule {
    
    allow: 'owner' | 'groups' | 'authenticated' | 'unauthenticated';
    authType: 'AMAZON_COGNITO_USER_POOL' | 'AWS_IAM';
    ownerField: string;
    identityField: string;
    groupsField: string;
    groups: string[];
    queries: ModelQuery[]
    mutations: ModelMutation[]
}