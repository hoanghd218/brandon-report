using System.Threading.Tasks;
using Be.Application.ACommonService.Permissions;
using Be.Infrustructure.Common.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Be.Api.Controllers.BaseController
{
   [ApiController]
   [Route("main/permissions")]
   [AllowAnonymous]
   public class PermissionsController : ControllerBase
   {
      private readonly IPermissionService _permissionService;

      public PermissionsController(IPermissionService permissionService) => _permissionService = permissionService;

      [HttpGet("search")]
      public async Task<ServiceResponse> GetPermissions([FromQuery] SearchRequest request)
      {
         return await _permissionService.FindAsync(request ?? new SearchRequest());
      }

      [HttpGet("all")]
      public async Task<ServiceResponse> GetAll()
      {
         return await _permissionService.FindAsync(new SearchRequest() { PageSize = 1000 });
      }
   }
}

