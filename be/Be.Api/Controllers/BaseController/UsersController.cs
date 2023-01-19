using System;
using System.Threading.Tasks;
using Be.Application.ACommonService.Users;
using Be.Application.ACommonService.Users.Dtos;
using Be.Application.BaseApp.Models.Users;
using Be.Infrustructure.Common.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Be.Api.Controllers.BaseController
{
    [ApiController]
    [Route("main/users")]
    [AllowAnonymous]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService) => _userService = userService;

        [HttpPost("register-user")]
        public virtual async Task<ServiceResponse> RegisterUser(RegisterUserModel model) =>
            await _userService.RegisterUser(model);


            [HttpPost]
        public virtual async Task<ServiceResponse> AddUser(CreateUserModel model) => await _userService.AddAsync(new CreateUserRequest
        {
            Email = model.Email,
            Password = model.Password,
            PermissionIds = model.PermissionIds,
            PhoneNumber = model.PhoneNumber,
            RoleIds = model.RoleIds,
        });

        [HttpDelete]
        public async Task<ServiceResponse> DeleteUser(Guid id) => await _userService.DeleteAsync(id);

        [HttpGet("{id}/permissions")]
        public async Task<ServiceResponse> GetPermissions(Guid id) => await _userService.GetPermissionsAsync(id);

        [HttpGet("{id}/full-permissions")]
        public async Task<ServiceResponse> GetFullPermissions(Guid id) => await _userService.GetFullPermissionsAsync(id);

        [HttpGet("{id}/permissions-not-in")]
        public async Task<ServiceResponse> GetPermissionsNotInUser(Guid id) => await _userService.GetPermissionsNotInUserAsync(id);

        [HttpGet("{id}/roles")]
        public async Task<ServiceResponse> GetRoles(Guid id) => await _userService.GetRolesAsync(id);

        [HttpGet("{id}/roles-not-in")]
        public async Task<ServiceResponse> GetRolesNotInUser(Guid id) => await _userService.GetRolesNotInUserAsync(id);

        [HttpGet("{id}")]
        public async Task<ServiceResponse> GetUser(Guid id) => await _userService.GetAsync(id);

        [HttpGet("search")]
        public async Task<ServiceResponse> GetUsers([FromQuery] SearchUserRequest? request) => await _userService.FindAsync(request ?? new SearchUserRequest());

        [HttpPut("edit-user")]
        public async Task<ServiceResponse> EditUser(EditUserRequest request) => await _userService.EditUser(request);

        [HttpPut("{id}/email")]
        public virtual async Task<ServiceResponse> UpdateUserEmail(Guid id, UpdateUserEmailModel model) => await _userService.UpdateEmailAsync(new UpdateEmailRequest
        {
            Id = id,
            Email = model.Email
        });

        [HttpPut("{id}/password")]
        public virtual async Task<ServiceResponse> UpdateUserPassword(Guid id, UpdateUserPasswordModel model) => await _userService.UpdatePasswordAsync(new UpdatePasswordRequest
        {
            Id = id,
            Password = model.Password
        });

        [HttpPut("{id}/permissions")]
        public virtual async Task<ServiceResponse> UpdateUserPermissions(Guid id, UpdateUserPermisisonsModel model) => await _userService.UpdatePermissionsAsync(new UpdatePermissionsForUserRequest
        {
            Id = id,
            PermissionIds = model.PermissionIds,
            DeletePermissionIds = model.DeletePermissionIds
        });

        [HttpPut("{id}/roles")]
        public virtual async Task<ServiceResponse> UpdateUserRoles(Guid id, UpdateUserRolesModel model) => await _userService.UpdateRolesAsync(new UpdateRolesForUserRequest
        {
            Id = id,
            RoleIds = model.RoleIds,
            DeleteRoleIds = model.DeleteRoleIds
        });
    }
}
