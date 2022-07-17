
export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
    try {
      const res = await asyncFunc(arg)
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }