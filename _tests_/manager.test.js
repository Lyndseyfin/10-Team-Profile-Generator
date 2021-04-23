// Require Manager module
const Manager = require('../lib/Manager');

// Describe Manager
describe('Manager', () => {
  describe('Initialization', () => {
    // Check that it is an instance of Manager
    it('returns an object that is an instance of the Manager class when called with the new keyword', () => {
      const manager = new Manager();
      expect(manager instanceof Manager).toBe(true);
    })

    // Check that the resulting name property is equal to the test name
    it('it sets the name property based on constructor argument', () => {
      const name = "Levi";
      const manager = new Manager(name);

      expect(manager.name).toBe(name);
    });

    // Check that the resulting id property is equal to the test id
    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const manager = new Manager("", id);

      expect(manager.id).toBe(id);
    });

    // Check that the resulting email property is equal to the test email
    it('it sets the email property based on constructor argument', () => {
      const email = 'levi@fakemail.com';
      const manager = new Manager("", 0, email);

      expect(manager.email).toBe(email);
    });

    // Check that the resulting office number property is equal to the test office number
    it('it sets the office number property based on constructor argument', () => {
        const officeNumber = '1';
        const manager = new Manager("", 0, "", officeNumber);
  
        expect(manager.officeNumber).toBe(officeNumber);
      });
  })

  // Describe getName
  describe('getName', () => {
    // Test that it returns the name property when the getName() method is called
    it('returns the name property when the getName() method is called', () => {
      const name = "Levi";
      const manager = new Manager(name);

      expect(manager.getName()).toBe(name);
    });
  })

  // Describe getId
  describe( 'getId', () => {
    // Test that it returns the id property when the getId() method is called
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const manager = new Manager("", id);

      expect(manager.getId()).toBe(id);
    });
  });

  // Desribe getEmail
  describe('getEmail', () => {
    // Test that it returns the email property when the getEmail() method is called
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'levi@fakemail.com';
      const manager = new Manager("", 0, email);

      expect(manager.getEmail()).toBe(email);
    });
  });

  // Decsribe getRole
  describe('getRole', () => {
    // Test that it returns 'Manager' when the getRole() method is called
    it("returns 'Manager' when the getRole() method is called", () => {
      const manager = new Manager();

      expect(manager.getRole()).toBe('Manager');
    });
  });
});