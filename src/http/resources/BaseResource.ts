import moment from 'moment';
import {EHttpStatusCode} from '../../enums/EHttpStatusCode';

class BaseResource {
  data?: any;
  error?: any;
  message?: string;
  status?: EHttpStatusCode;
  timestamp!: string;

  constructor(data: {
    status: EHttpStatusCode;
    message: string;
    data?: any;
    error?: Error;
  }) {
    this.data = data.data;
    this.error = data.error;
    this.message = data.message;
    this.status = data.status;
    this.timestamp = moment().utc().format('YYYY-MM-DDTHH:mm:ssZZ');
  }
}

export {BaseResource};
