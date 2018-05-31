import {onSuccess} from 'actionware';

import analytics from './index';
import * as identity from '../../store/identity';

onSuccess(identity.login, ({payload: user}) => {
  analytics.identify(user.id, {
    name: `${user.firstName} ${user.lastName}`,
  });
});
