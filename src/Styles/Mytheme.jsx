import { grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
   palette: {
    // @ts-ignore
    mode,
            ...(mode === 'light'
                 ? {
                      // palette values for light mode
                      eslam: {
                           main: '#64748B',
                      },
                      favColor: {
                           main:grey[300]
                      }


                 }
                 : {
                      // palette values for dark mode
                      eslam: {
                           main: 'teal',
                      },
                      favColor: {
                           main:grey[800]
                      }

                      }),
  },
});
export default getDesignTokens
