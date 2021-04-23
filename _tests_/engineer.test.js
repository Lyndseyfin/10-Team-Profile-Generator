  
// Require Engineer module
const Engineer = require('../lib/Engineer');

// Describe Engineer
describe('Engineer', () => {
  describe('Initialization', () => {
    // Check that it is an instance of Engineer
    it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
      const engineer = new Engineer();
      expect(engineer instanceof Engineer).toBe(true);
    })

    // Check that the resulting name property is equal to the test name
    it('it sets the name property based on constructor argument', () => {
      const name = "Levi";
      const engineer = new Engineer(name);

      expect(engineer.name).toBe(name);
    });

    // Check that the resulting id property is equal to the test id
    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const engineer = new Engineer("", id);

      expect(engineer.id).toBe(id);
    });

    // Check that the resulting email property is equal to the test email
    it('it sets the email property based on constructor argument', () => {
      const email = 'levi@fakemail.com';
      const engineer = new Engineer("", 0, email);

      expect(engineer.email).toBe(email);
    });

    // Check that the resulting github username property is equal to the test github username
    it('it sets the github property based on constructor argument', () => {
        const github = 'lyndseyfin';
        const engineer = new Engineer("", 0, "", github);
  
        expect(engineer.github).toBe(github);
      });
  })

  // Describe getName
  describe('getName', () => {
    // Test that it returns the name property when the getName() method is called
    it('returns the name property when the getName() method is called', () => {
      const name = "Levi";
      const engineer = new Engineer(name);

      expect(engineer.getName()).toBe(name);
    });
  })

  // Describe getId
  describe( 'getId', () => {
    // Test that it returns the id property when the getId() method is called
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const engineer = new Engineer("", id);

      expect(engineer.getId()).toBe(id);
    });
  });

  // Desribe getEmail
  describe('getEmail', () => {
    // Test that it returns the email property when the getEmail() method is called
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'levi@fakemail.com';
      const engineer = new Engineer("", 0, email);

      expect(engineer.getEmail()).toBe(email);
    });
  });

  // Decsribe getRole
  describe('getRole', () => {
    // Test that it returns 'Engineer' when the getRole() method is called
    it("returns 'Engineer' when the getRole() method is called", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toBe('Engineer');
    });
  });

  // Decsribe getGithub
  describe('getGithub', () => {
    // Test that it returns github property when the getGithub() method is called
    it("returns github property when the getGithub() method is called", () => {
      const github = 'lyndseyfin';
      const engineer = new Engineer("", 0, "", github);

      expect(engineer.getGithub()).toBe('lyndseyfin');
    });
  });
});