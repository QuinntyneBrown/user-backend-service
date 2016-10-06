namespace UserBackendService.Dtos
{
    public class AppDto
    {
        public AppDto()
        {

        }

        public AppDto(Models.App entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
