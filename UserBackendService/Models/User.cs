using System;
using System.Collections.Generic;

namespace UserBackendService.Models
{
    public class User
    {
        public int Id { get; set; }
        public Guid Guid { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Fullname { get { return $"{Firstname} {Lastname}"; } }
        public bool IsDeleted { get; set; }        
    }
}
