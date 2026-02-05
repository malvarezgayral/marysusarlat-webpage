'use server'

export async function submitContactForm(formData: FormData) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const surname = formData.get('surname');
  const email = formData.get('email');
  const message = formData.get('message');

  // In a real app, you would send an email or save to DB here
  console.log('Form submitted:', { name, surname, email, message });

  return { success: true };
}
