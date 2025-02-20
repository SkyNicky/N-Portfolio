import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_w2e2ghg', 
      'template_s4jmwzs', 
      formData,
      '_kuV3SXrQUVwLJIyw'
    ).then(() => {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Mensagem enviada com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      Swal.fire({
        title: 'Erro!',
        text: 'Houve um problema ao enviar sua mensagem.',
        icon: 'error',
        confirmButtonText: 'Tentar novamente'
      });
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="section-subtitle">
        Tem alguma dúvida ou quer trabalhar junto? Fique à vontade para me contatar!
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-blue-600 dark:text-purple-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-mail</h3>
              <p className="text-gray-600 dark:text-gray-300">nycholasrocha@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-blue-600 dark:text-purple-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Telefone</h3>
              <p className="text-gray-600 dark:text-gray-300">+55 (32) 98510-4736</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-blue-600 dark:text-purple-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Localização</h3>
              <p className="text-gray-600 dark:text-gray-300">Cataguases - MG, Brasil</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-purple-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
