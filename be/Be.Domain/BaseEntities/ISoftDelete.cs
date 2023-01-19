namespace Be.Domain.BaseEntities
{
    public interface ISoftDelete
    {
        bool IsDeleted { get; set; }
    }
}
