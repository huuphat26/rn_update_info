import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
export const pickImageBase64 = async () => {
  return new Promise<string>((resolve, reject) => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
      includeExtra: true,
    } as ImageLibraryOptions;
    launchImageLibrary(options).then(result => {
      if (result.errorMessage) {
        reject(result.errorMessage);
      }
      if (result.assets && result.assets.length > 0) {
        resolve('data:image/png;base64,' + result.assets[0].base64);
      }
    });
  });
};
