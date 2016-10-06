namespace UserBackendService.Dtos
{
    public class UserAddOrUpdateResponseDto: UserDto
    {
        public UserAddOrUpdateResponseDto(UserBackendService.Models.User entity)
            :base(entity)
        {

        }
    }
}
