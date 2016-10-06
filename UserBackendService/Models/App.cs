using System.Collections.Generic;

namespace UserBackendService.Models
{
    public class App
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<User> Users { get; set; } = new HashSet<User>();
        public bool IsDeleted { get; set; }
    }
}
