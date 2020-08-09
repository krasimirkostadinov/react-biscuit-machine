export function createReducer(initialState, map) {
	return (state = initialState, action) => map[action.type]?.(state, action) ?? state;
}
