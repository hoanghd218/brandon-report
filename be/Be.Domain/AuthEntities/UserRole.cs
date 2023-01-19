using Be.Domain.BaseEntities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Be.Domain.AuthEntities
{
    public class UserRole : AuditedEntity
    {
        [ForeignKey(nameof(User))]
        public Guid UserId { get; set; }
        [ForeignKey(nameof(Role))]
        public Guid RoleId { get; set; }
        public User User { get; set; }
        public Role Role { get; set; }
    }
}
