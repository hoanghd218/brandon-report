using System;

namespace Be.Common.Models
{
    public abstract class EntityDtoBase
    {
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
