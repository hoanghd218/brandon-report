using Be.Domain.BaseEntities;
using System.ComponentModel.DataAnnotations;
using System.Security.AccessControl;

namespace Be.Domain.AuthEntities
{
    public class User : AuditedEntity, ISoftDelete
    {
        public bool IsSystemUser { get; set; }

        [MaxLength(100, ErrorMessage = "The {0} can not exceed {1} character")]
        public string FullName { get; set; }
        [MaxLength(200, ErrorMessage = "The {0} can not exceed {1} character")]

        public string FaceBook { get; set; }
        public string UserName { get; set; }
        [MaxLength(200, ErrorMessage = "The {0} can not exceed {1} character")]
        public string Email { get; set; }

        [MaxLength(25, ErrorMessage = "The {0} can not exceed {1} character")]
        public string Phone { get; set; }
        [MaxLength(200, ErrorMessage = "The {0} can not exceed {1} character")]
        public string Company { get; set; }
        public string State { get; set; }
        [MaxLength(200, ErrorMessage = "The {0} can not exceed {1} character")]
        public string City { get; set; }
        [MaxLength(50, ErrorMessage = "The {0} can not exceed {1} character")]
        public string ZipCode { get; set; }
        [MaxLength(200)]
        public string Address { get; set; }
        public CompanyType CompanyType { get; set; }
        public IndustryType IndustryType { get; set; }
        public bool IsDeleted { get; set; }
        public List<UserRole> UserRoles { get; set; }

    }

    public enum CompanyType
    {
        None = 0,
        GeneralContractor = 1,
        SubContractor = 2,
        Architect = 3,
        DesignFirm = 4,
        Other = 5
    }

    public enum IndustryType
    {
        None = 0,
        Residential = 1,
        Commercial = 2,
        Industrial = 3,
        Municipal = 4,
        Other = 5
    }
}
