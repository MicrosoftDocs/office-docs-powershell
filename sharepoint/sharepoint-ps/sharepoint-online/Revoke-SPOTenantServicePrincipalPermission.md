---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Revoke-SPOTenantServicePrincipalPermission

## SYNOPSIS
Revokes a permission that was previously granted to the "SharePoint Online Client" service principal

> [!WARNING]
> This is a preview feature and should not be used in production.

## SYNTAX

### Default
```powershell
Revoke-SPOTenantServicePrincipalPermission -ObjectId <String>
```

## DESCRIPTION
Revokes a permission that was previously granted to the "SharePoint Online Client" service principal.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$grants = Get-SPOTenantServicePrincipalPermissionGrants
$grantToRemove = $grants | ? { $_.Resource -eq 'Office 365 SharePoint Online' -and $_.Scope -eq 'MyFiles.Read' } | Select-Object -First 1

if ($grantToRemove -ne $null)
{
    Revoke-SPOTenantServicePrincipalPermission -ObjectId $grantToRemove.ObjectId
}
```

Revokes the permission associated with the 'Office 365 SharePoint Online' resource and with scope claim 'MyFiles.Read'. 
If there is no permission with those properties, then no revoke action will be taken.

## PARAMETERS

### -ObjectId
The Object ID of the permission grant to revoke

```yaml
Type: string

Required: True
Position: Named
Accept pipeline input: False
```
