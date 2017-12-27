---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---

# Approve-SPOTenantServicePrincipalPermissionRequest

## SYNOPSIS
Approves a permission request for the current tenant's "SharePoint Online Client" service principal

> [!WARNING]
> This is a preview feature and should not be used in production.

## SYNTAX

### Default
```powershell
Approve-SPOTenantServicePrincipalPermissionRequest -RequestId <Guid>
```

## DESCRIPTION
Approves a permission request for the current tenant's "SharePoint Online Client" service principal

The return value of a successful call is a permission grant object.  See [the "Permission grant object" section of the 
Get-SPOTenantServicePrincipalPermissionGrants help documentation](Get-SPOTenantServicePrincipalPermissionGrants.md) 
for more information about a permission grant object.

To get the collection of permission grants for the "SharePoint Online Client" service principal, use the 
[Get-SPOTenantServicePrincipalPermissionGrants](Get-SPOTenantServicePrincipalPermissionGrants.md) command.

Approving a permission request also removes that request from the list of permission requests.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$requests = Get-SPOTenantServicePrincipalPermissionRequests
$requestToApprove = $requests | ? { $_.Resource -eq 'Office 365 SharePoint Online' -and $_.Scope -eq 'MyFiles.Read' } | Select-Object -First 1

if ($requestToApprove -ne $null)
{
    Approve-SPOTenantServicePrincipalPermissionRequest -RequestId $requestToApprove.Id
}
```

Approves the permission request for the 'Office 365 SharePoint Online' resource with scope claim 'MyFiles.Read'.  
If there is no request with those properties, then no approve action will be taken.

## PARAMETERS

### -RequestId
The ID of the permission request to approve

```yaml
Type: Guid

Required: True
Position: Named
Accept pipeline input: False
```
