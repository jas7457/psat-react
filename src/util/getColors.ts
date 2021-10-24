import assertNever from './assertNever';

export type Colors =
	| 'primary'
	| 'primary-light'
	| 'primary-dark'
	| 'secondary'
	| 'secondary-light'
	| 'secondary-dark'
	| 'warning'
	| 'warning-light'
	| 'warning-dark'
	| 'danger'
	| 'danger-light'
	| 'danger-dark';

export function getColor(color: Colors): string {
	switch (color) {
		case 'primary':
			return 'text-primary';
		case 'primary-light':
			return 'text-primary-light';
		case 'primary-dark':
			return 'text-primary-dark';
		case 'secondary':
			return 'text-secondary';
		case 'secondary-light':
			return 'text-secondary-light';
		case 'secondary-dark':
			return 'text-secondary-dark';
		case 'warning':
			return 'text-warning';
		case 'warning-light':
			return 'text-warning-light';
		case 'warning-dark':
			return 'text-warning-dark';
		case 'danger':
			return 'text-danger';
		case 'danger-light':
			return 'text-danger-light';
		case 'danger-dark':
			return 'text-danger-dark';
		default:
			return assertNever(color);
	}
}

export function getBgColor(color: Colors): string {
	switch (color) {
		case 'primary':
			return 'bg-primary';
		case 'primary-light':
			return 'bg-primary-light';
		case 'primary-dark':
			return 'bg-primary-dark';
		case 'secondary':
			return 'bg-secondary';
		case 'secondary-light':
			return 'bg-secondary-light';
		case 'secondary-dark':
			return 'bg-secondary-dark';
		case 'warning':
			return 'bg-warning';
		case 'warning-light':
			return 'bg-warning-light';
		case 'warning-dark':
			return 'bg-warning-dark';
		case 'danger':
			return 'bg-danger';
		case 'danger-light':
			return 'bg-danger-light';
		case 'danger-dark':
			return 'bg-danger-dark';
		default:
			return assertNever(color);
	}
}

export function getBorderColor(color: Colors): string {
	switch (color) {
		case 'primary':
			return 'border-primary';
		case 'primary-light':
			return 'border-primary-light';
		case 'primary-dark':
			return 'border-primary-dark';
		case 'secondary':
			return 'border-secondary';
		case 'secondary-light':
			return 'border-secondary-light';
		case 'secondary-dark':
			return 'border-secondary-dark';
		case 'warning':
			return 'border-warning';
		case 'warning-light':
			return 'border-warning-light';
		case 'warning-dark':
			return 'border-warning-dark';
		case 'danger':
			return 'border-danger';
		case 'danger-light':
			return 'border-danger-light';
		case 'danger-dark':
			return 'border-danger-dark';
		default:
			return assertNever(color);
	}
}
