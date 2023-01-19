using Be.Domain.BaseEntities;

namespace Be.Domain.AuthEntities
{
    public class Permission : Entity
    {
        public string Name { get; set; }

        public string DisplayName { get; set; }
    }
}
