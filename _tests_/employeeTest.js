// Require the Employee module
const Employee = require('../lib/Employee');

// Describe Employee
describe('Employee', () => {
  describe('Initialization', () => {
    // Check that it is an instance of Employee
    it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
      const employee = new Employee();
      expect(employee instanceof Employee).toBe(true);
    })

    // Check that the resulting name property is equal to the test name
    it('it sets the name property based on constructor argument', () => {
      const name = "Steven";
      const employee = new Employee(name);

      expect(employee.name).toBe(name);
    });

    // Check that the resulting id property is equal to the test id
    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const employee = new Employee("", id);

      expect(employee.id).toBe(id);
    });

    // Check that the resulting email property is equal to the test email
    it('it sets the email property based on constructor argument', () => {
      const email = 'test@email.com';
      const employee = new Employee("", 0, email);

      expect(employee.email).toBe(email);
    });
  })

  // Describe getName
  describe('getName', () => {
    // Test that it returns the name property when the getName() method is called
    it('returns the name property when the getName() method is called', () => {
      const name = "Obi";
      const employee = new Employee(name);

      expect(employee.getName()).toBe(name);
    });
  })

  // Describe getId
  describe( 'getId', () => {
    // Test that it returns the id property when the getId() method is called
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const employee = new Employee("", id);

      expect(employee.getId()).toBe(id);
    });
  });

  // Desribe getEmail
  describe('getEmail', () => {
    // Test that it returns the email property when the getEmail() method is called
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'test@email.com';
      const employee = new Employee("", 0, email);

      expect(employee.getEmail()).toBe(email);
    });
  });

  // Decsribe getRole
  describe('getRole', () => {
    // Test that it returns 'Employee' when the getRole() method is called
    it("returns 'Employee' when the getRole() method is called", () => {
      const employee = new Employee();

      expect(employee.getRole()).toBe('Employee');
    });
  });
});