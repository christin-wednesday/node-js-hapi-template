export const ONE_USER_DATA = {
    id: 1,
    first_name: 'mac',
    last_name: 'mac',
    email: 'mac@wednesday.is'
};

export const GRANT_TYPE = {
    CLIENT_CREDENTIALS: 'CLIENT_CREDENTIALS'
};
export const TIMESTAMP = 'YYYY-MM-DD HH:mm:ss';

export const ACCESS_DENIED = 'ACCESS_DENIED';

export const SCOPE_TYPE = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN',
    INTERNAL_SERVICE: 'INTERNAL_SERVICE'
};
export const ADMINS = [SCOPE_TYPE.SUPER_ADMIN, SCOPE_TYPE.ADMIN];
export const SLIDING_WINDOW = 1 * 24 * 60 * 60; // days * hours * minutes * seconds *
export const INVALID_CLIENT_CREDENTIALS = 'Invalid client credentials';
export const OAUTH_CLIENT_ID = 'OAUTH_CLIENT_ID';
