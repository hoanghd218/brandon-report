using Be.Domain.BaseEntities;

namespace Be.Domain.AuthEntities
{
   public class Role : AuditedEntity
   {
      public bool IsSystemRole { get; set; }
      public string DisplayName { get; set; }
      public string Name { get; set; }
      public List<UserRole> UserRoles { get; set; }
   }
}
