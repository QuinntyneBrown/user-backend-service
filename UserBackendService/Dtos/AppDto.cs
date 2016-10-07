using System.Collections.Generic;
using System.Linq;

namespace UserBackendService.Dtos
{
    public class AppDto
    {
        public AppDto() { }

        public AppDto(Models.App entity)
        {
            Id = entity.Id;
            Name = entity.Name;
            Users = entity.Users.Select(x => new UserDto(x)).ToList();
        }

        public int? Id { get; set; }
        public string Name { get; set; }
        public ICollection<UserDto> Users { get; set; } = new HashSet<UserDto>();
    }
}
