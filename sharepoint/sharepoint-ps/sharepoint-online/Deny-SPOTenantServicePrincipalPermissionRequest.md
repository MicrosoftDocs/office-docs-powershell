---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---

# Deny-SPOTenantServicePrincipalPermissionRequest

## SYNOPSIS
Denies a permission request for the current tenant's "SharePoint Online Client" service principal

> **Note** - This is a preview feature and should not be used in production.


## SYNTAX

### Default
```powershell
Deny-SPOTenantServicePrincipalPermissionRequest -RequestId <Guid>
```

## DESCRIPTION
Denies a permission request for the current tenant's "SharePoint Online Client" service principal

Denying a permission request removes that request from the list of permission requests.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$requests = Get-SPOTenantServicePrincipalPermissionRequests
$requestToDeny = $requests | ? { $_.Resource -eq 'Office 365 SharePoint Online' -and $_.Scope -eq 'MyFiles.Read' } | Select-Object -First 1

if ($requestToDeny -ne $null)
{
    Deny-SPOTenantServicePrincipalPermissionRequest -RequestId $requestToDeny.Id
}
```

Denies the permission request for the 'Office 365 SharePoint Online' resource with scope claim 'MyFiles.Read'.
If there is no request with those properties, then no deny action will be taken.

## PARAMETERS

### -RequestId
The ID of the permission request to deny

```yaml
Type: Guid

Required: True
Position: Named
Accept pipeline input: False
```
