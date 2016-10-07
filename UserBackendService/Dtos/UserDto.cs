using UserBackendService.Models;

namespace UserBackendService.Dtos
{
    public class UserDto
    {
        public UserDto(User entity)
        {
            Id = entity.Id;
            AppId = entity.AppId;
            Name = entity.Name;
            Guid = entity.Guid.ToString();
            Email = entity.Email;
            Username = entity.Username;
            Firstname = entity.Firstname;
            Lastname = entity.Lastname;
        }

        public UserDto() { }

        public int Id { get; set; }
        public int? AppId { get; set; }
        public string Name { get; set; }
        public string Guid { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }
}
