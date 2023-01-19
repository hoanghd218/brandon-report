using Be.Domain.BaseEntities;

namespace Be.Domain.AuthEntities
{
    public class RolePermission : Entity
    {
        public Guid RoleId { get; set; }

        public Guid PermissionId { get; set; }
    }
}
