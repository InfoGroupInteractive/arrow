import { StatusGood, StatusWarning, StatusCritical, StatusInfo } from 'grommet-icons';
import * as constants from './status.constants';

export const getStatusColor = (status, statuses = constants) => {
    switch (status) {
        case statuses.SUCCESS:
            return 'status-ok';
        case statuses.WARNING:
            return 'status-warning';
        case statuses.ERROR:
            return 'status-critical';
        default:
            return 'status-unknown';
    }
}

export const getStatusText = (status, statuses = constants) => {
    switch (status) {
        case statuses.SUCCESS:
            return 'Complete';
        case statuses.WARNING:
            return 'Needs Attention';
        case statuses.ERROR:
            return 'Needs Attention';
        default:
            return 'FYI';
    }
}

export const getStatusIcon = (status, statuses = constants) => {
    switch (status) {
      case statuses.SUCCESS:
        return StatusGood;
      case statuses.WARNING:
        return StatusWarning;
      case statuses.ERROR:
        return StatusCritical;
      default:
        return StatusInfo;
    }
}