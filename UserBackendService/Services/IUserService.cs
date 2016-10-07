using UserBackendService.Dtos;
using System.Collections.Generic;

namespace UserBackendService.Services
{
    public interface IUserService
    {
        UserAddOrUpdateResponseDto AddOrUpdate(UserAddOrUpdateRequestDto request);
        ICollection<UserDto> Get();
        UserDto GetById(int id);
        dynamic Remove(int id);
    }
}
