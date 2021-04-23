// Require Intern module
const Intern = require('../lib/Intern');

// Describe Intern
describe('Intern', () => {
  describe('Initialization', () => {
    // Check that it is an instance of Intern
    it('returns an object that is an instance of the Intern class when called with the new keyword', () => {
      const intern = new Intern();
      expect(intern instanceof Intern).toBe(true);
    })

    // Check that the resulting name property is equal to the test name
    it('it sets the name property based on constructor argument', () => {
      const name = "Levi";
      const intern = new Intern(name);

      expect(intern.name).toBe(name);
    });

    // Check that the resulting id property is equal to the test id
    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const intern = new Intern("", id);

      expect(intern.id).toBe(id);
    });

    // Check that the resulting email property is equal to the test email
    it('it sets the email property based on constructor argument', () => {
      const email = 'Levi@fakemail.com';
      const intern = new Intern("", 0, email);

      expect(intern.email).toBe(email);
    });

    // Check that the resulting school property is equal to the test school
    it('it sets the school property based on constructor argument', () => {
        const school = 'CUDenver';
        const intern = new Intern("", 0, "", school);
  
        expect(intern.getSchool()).toBe(school);
      });
  })

  // Describe getName
  describe('getName', () => {
    // Test that it returns the name property when the getName() method is called
    it('returns the name property when the getName() method is called', () => {
      const name = "Levi";
      const intern = new Intern(name);

      expect(intern.getName()).toBe(name);
    });
  })

  // Describe getId
  describe( 'getId', () => {
    // Test that it returns the id property when the getId() method is called
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const intern = new Intern("", id);

      expect(intern.getId()).toBe(id);
    });
  });

  // Desribe getEmail
  describe('getEmail', () => {
    // Test that it returns the email property when the getEmail() method is called
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'levi@fakemail.com';
      const intern = new Intern("", 0, email);

      expect(intern.getEmail()).toBe(email);
    });
  });

  // Decsribe getRole
  describe('getRole', () => {
    // Test that it returns 'Intern' when the getRole() method is called
    it("returns 'Intern' when the getRole() method is called", () => {
      const intern = new Intern();

      expect(intern.getRole()).toBe('Intern');
    });
  });

  // Decsribe getSchool
  describe('getSchool', () => {
    // Test that it returns github property when the getSchool() method is called
    it("returns school property when the getSchool() method is called", () => {
      const school = 'CUDenver';
      const intern = new Intern("", 0, "", school);

      expect(intern.getSchool()).toBe('CUDenver');
    });
  });
});
