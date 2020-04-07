let alzuhudLink = 'alzuhud.com';
export default alzuhudLink;
export function toBase64 (file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result as string || '');
    fileReader.onerror = err => reject(err);
  });
}

export function makeArabic(str: string): string {
  switch (str.toLowerCase()) {
    case 'dashboard':
      return 'لوحة التحكم';
    case 'bookings':
      return 'حجوزات';
    case 'support':
      return 'الدعم';
    case 'transactions':
      return 'العملیات';
    case 'logout':
      return 'تسجیل خروج';
    case 'settings':
      return 'Settings';
    default:
        return '';
  }
}
