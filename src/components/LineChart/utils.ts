export const applyOpacity = (color: string, opacity: number) => {
  return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
};
