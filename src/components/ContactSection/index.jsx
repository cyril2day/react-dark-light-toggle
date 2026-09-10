const labelClass = [
  'block',
  'mb-2',
  'text-sm',
  'font-medium',
  'text-gray-800',
  'dark:text-gray-200'
].join(' ')

const inputClass = [
  'w-full',
  'px-4', 'py-2',
  'border',
  'rounded-lg',
  'bg-white',
  'dark:bg-gray-800',
  'border-gray-300',
  'dark:border-gray-700',
  'text-gray-800',
  'dark:text-white',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-blue-500',
  'focus:border-blue-500'
].join(' ')

const ContactSection = () => {
  return (
    <section className='min-h-screen py-20 px-4 text-center bg-white dark:bg-gray-900'>
      <h3 className='text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12'>
        Contact Me
      </h3>

      {/* Contact Info */}
      <div className='mb-10 text-gray-700 dark:text-gray-300'>
        <p className='text-lg'>📞 +1 (555) 123-4567</p>
        <p className='text-lg'>📧 simba.dev@example.com</p>
      </div>

      <form className='max-w-3xl mx-auto text-left grid grid-cols-1 gap-6'>
        <div>
          <label 
            htmlFor='name'
            className={labelClass}
          >
            Name
          </label>
          <input 
            type='text' 
            id='name'
            autoComplete='off'
            placeholder='Your name'
            className={inputClass}
          />
        </div> 
        <div>
          <label 
            htmlFor='email'
            className={labelClass}
          >
            Email
          </label>
          <input 
            type='email' 
            id='email'
            autoComplete='off'
            placeholder='Your email'
            className={inputClass}
          />
        </div> 
        <div>
          <label 
            htmlFor='message'
            className={labelClass}
          >
            Message
          </label>
          <textarea 
            row={5}
            id='message'
            placeholder='Your message ...'
            className={inputClass}
          ></textarea>
        </div> 
        <button 
          type='submit'
          className='w-full sm:w-fit px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition'
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactSection
