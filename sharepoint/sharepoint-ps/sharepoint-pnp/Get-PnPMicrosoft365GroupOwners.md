---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpmicrosoft365groupowners
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPMicrosoft365GroupOwners
---

# Get-PnPMicrosoft365GroupOwners

## SYNOPSIS
Gets owners of a particular Microsoft 365 Group

## SYNTAX 

```powershell
Get-PnPMicrosoft365GroupOwners -Identity <Microsoft365GroupPipeBind>
                               [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Group.Read.All, Group.ReadWrite.All, User.Read.All, User.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPMicrosoft365GroupOwners -Identity $groupId
```

Retrieves all the owners of a specific Microsoft 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPMicrosoft365GroupOwners -Identity $group
```

Retrieves all the owners of a specific Microsoft 365 Group based on the group's object instance

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The Identity of the Microsoft 365 Group.

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)