using Be.Domain.BaseEntities;

namespace Be.Domain.AuthEntities
{
   public class UserPermission : Entity
   {
      public Guid UserId { get; set; }

      public Guid PermissionId { get; set; }
   }
}
