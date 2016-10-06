namespace UserBackendService.Data
{
    public interface IUow
    {
        IRepository<Models.App> Apps { get; }
        IRepository<Models.User> Users { get; }

        void SaveChanges();
    }
}
