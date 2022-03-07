export default (): Record<string, unknown> => ({
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    signOptions: { expiresIn: `1000s` },
  },
});
