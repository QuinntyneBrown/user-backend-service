using UserBackendService.Dtos;
using System.Collections.Generic;

namespace UserBackendService.Services
{
    public interface IAppService
    {
        AppAddOrUpdateResponseDto AddOrUpdate(AppAddOrUpdateRequestDto request);
        ICollection<AppDto> Get();
        AppDto GetById(int id);
        dynamic Remove(int id);
    }
}
