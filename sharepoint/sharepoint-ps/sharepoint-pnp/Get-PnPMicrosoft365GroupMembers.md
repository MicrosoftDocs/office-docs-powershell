---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpmicrosoft365groupmembers
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPMicrosoft365GroupMembers
---

# Get-PnPMicrosoft365GroupMembers

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API : One of Directory.Read.All, Directory.ReadWrite.All, Group.Read.All, Group.ReadWrite.All, GroupMember.Read.All, GroupMember.ReadWrite.All, User.Read.All, User.ReadWrite.All

Gets members of a particular Microsoft 365 Group (aka Unified Group). Requires the Azure Active Directory application permissions 'Group.Read.All' and 'User.Read.All'.

## SYNTAX 

```powershell
Get-PnPMicrosoft365GroupMembers -Identity <Microsoft365GroupPipeBind>
                                [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPMicrosoft365GroupMembers -Identity $groupId
```

Retrieves all the members of a specific Microsoft 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPMicrosoft365GroupMembers -Identity $group
```

Retrieves all the members of a specific Microsoft 365 Group based on the group's object instance

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
The Identity of the Microsoft 365 Group

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)