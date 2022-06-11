export function getFormData(e: React.FormEvent<HTMLFormElement>) {
  const formData: {[key: string]: any} = {};
  (Array.from((e.target as HTMLFormElement).elements) as HTMLFormElement[]).forEach(e => {
    if (!e.name) {
      return;
    }

    // normal html input
    if (e.getAttribute('type') !== 'checkbox') {
      formData[e.name] = e.value;
      return;
    }

    // save checkbox checked values
    if (e.checked) {
      e.name in formData ? formData[e.name].push(e.value) : (formData[e.name] = [e.value]);
    }
  });

  return formData;
}
